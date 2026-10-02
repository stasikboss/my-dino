/* ---------- the 3D world ----------
   When the device can draw 3D (and a parent hasn't switched it off), the rooms and the friend are drawn by the 3D
   engine on a canvas under the game's buttons. Everything else in the game stays the same: it keeps setting the
   friend's state (happy, talking, asleep...) and asks the friend where its mouth or head is, and the Pet object
   passes those questions on to the engine. Pictures of friends and items for cards and buttons are rendered by the
   engine too. If the device has no 3D, loses it, or draws too slowly, the game switches to the flat drawings. */
const World = {
  on: false, E: null, canvas: $('world'), stateEl: $('pet-state'), why: '', slowChecks: 0, started: 0,
  // the engine needs WebGL 2; if making the context fails anyway, start() falls back to flat
  supported(){ return typeof WebGL2RenderingContext !== 'undefined'; },
  start(){
    if (this.on) return true;
    if (!window.DinoEngine){ this.why = 'no-engine'; return false; }
    if (!opts.three){ this.why = 'off'; return false; }
    if (!this.supported()){ this.why = 'no-webgl'; return false; }
    try {
      this.E = window.DinoEngine;
      if (!this.E.ready){
        const phone = (isAndroid || isIOS) && Math.min(screen.width, screen.height) < 600;
        this.E.init(this.canvas, { maxDpr: 2, startDpr: phone ? 1.5 : 2, shadowSize: phone ? 1024 : 2048 });
        // the device took the 3D away (it can, when memory runs low): carry on flat, and come back when it returns
        this.canvas.addEventListener('webglcontextlost', e => { e.preventDefault(); this.stop('lost'); }, false);
        this.canvas.addEventListener('webglcontextrestored', () => { if (this.why === 'lost' && opts.three) this.restart(); }, false);
        // build the rooms and their shaders in the background while the start screen is up
        setTimeout(() => { try { this.E.warm(['home', 'kitchen', 'bath', 'bed', 'play', 'studio']); } catch (e) {} }, 1200);
      }
      this.E.setStateEl(this.stateEl);
      this.E.setStageEl(stageEl);
      this.on = true; this.why = ''; this.slowChecks = 0; this.started = performance.now();
      this.E.paused = false;
      this.canvas.hidden = false;
      document.body.classList.add('three');
      this.layout();
      return true;
    } catch (e) {
      this.stop('error');
      return false;
    }
  },
  // back to the flat drawings, keeping the game where it is
  stop(why){
    const was = this.on;
    this.on = false; this.why = why || 'off';
    picQueue.length = 0;
    if (this.E){ this.E.paused = true; try { this.E.clearEgg(); this.E.setFit(null); } catch (e) {} }
    this.canvas.hidden = true;
    document.body.classList.remove('three');
    if (!was) return;
    // redraw everything that was drawn in 3D with the flat drawings
    try {
      if (Pet.sp) Pet.mount(Pet.sp);
      if (inPlay) setRoom(room, true);
      renderNavIcons();
      if (this.onStop) this.onStop();
      if (!startEl.hidden) renderStart();
      if (!chooseEl.hidden) openChoose(chooseFromStart);
    } catch (e) {}
  },
  onStop: null,
  // back to 3D, redrawing the friend, the room and the pictures
  restart(){
    if (!this.start()) return false;
    try {
      if (Pet.sp) Pet.mount(Pet.sp);
      if (inPlay) setRoom(room, true);
      renderNavIcons();
      if (!startEl.hidden) renderStart();
    } catch (e) {}
    return true;
  },
  layout(smooth){
    if (!this.on) return;
    const hud = $('hud').getBoundingClientRect(), tray = trayEl.getBoundingClientRect(), nav = navEl.getBoundingClientRect();
    const top = (hud.height ? hud.bottom : 70) + 10;
    let bottomEdge = tray.height ? tray.top : nav.height ? nav.top : innerHeight - 160;
    // with the wardrobe open, the friend steps up above it, so the hats can be seen
    if (!wardrobeEl.hidden && wardrobeEl.offsetHeight) bottomEdge = Math.min(bottomEdge, innerHeight - wardrobeEl.offsetHeight);
    this.E.setSafe(top, Math.max(80, innerHeight - bottomEdge + 4), smooth);
  },
  // draw only while the 3D scene can be seen
  sync(){
    if (!this.on) return;
    const seen = !introEl.hidden || (inPlay && !gameOn && chooseEl.hidden && nightEl.hidden && !modalOpen);
    this.E.paused = !seen;
  },
  // hatching: the egg (or the basket) in a soft studio, drawn where the tap area is
  introStart(sp, born){
    if (!this.on) return false;
    this.E.setRoom('studio');
    this.E.showEgg(sp, born);
    this.introFit();
    this.E.paused = false;
    return true;
  },
  introFit(){ if (this.on && this.E.egg) this.E.setFit(eggWrap.getBoundingClientRect(), 1.25); },
  introEnd(){ if (!this.on) return; this.E.clearEgg(); this.E.setFit(null); },
  room(name){
    if (!this.on) return;
    this.E.setRoom(name);
    this.E.setLayout(name === 'play' ? 'small' : 'normal');
    this.layout();
    if (!reduceMotion){ this.canvas.classList.remove('swap'); void this.canvas.offsetWidth; this.canvas.classList.add('swap'); }
  },
  // too slow to be fun: after it has settled, a few checks in a row below about 20 frames a second switch to flat
  watch(){
    if (!this.on || this.E.paused || document.hidden) return;
    if (performance.now() - this.started < 6000) return;
    if (this.E.frameAvg > 50 && this.E.dpr <= 1){
      // remembered, so the next time starts flat; a parent can switch it back on
      if (++this.slowChecks >= 3){ opts.three = false; store.set('ymd-opts', opts); this.stop('slow'); }
    }
    else this.slowChecks = 0;
  }
};
setInterval(() => World.watch(), 2000);

/* Pictures of friends and items. In 3D they are rendered by the engine (cached), one per frame so nothing stalls;
   until a picture is ready, the flat drawing stands in. */
const picQueue = [];
let picBusy = false;
function pumpPics(){
  if (picBusy) return;
  picBusy = true;
  requestAnimationFrame(function step(){
    const t0 = performance.now();
    while (picQueue.length && performance.now() - t0 < 12){
      const job = picQueue.shift();
      if (!job.el.isConnected || !World.on) continue;
      let url = '';
      try { url = job.make(); } catch (e) { url = ''; }
      if (World.E) World.E.busyUntil = performance.now() + 400;
      if (url) job.el.innerHTML = `<img class="${job.cls}" src="${url}" alt="" draggable="false">`;
    }
    if (picQueue.length) requestAnimationFrame(step); else picBusy = false;
  });
}
function picHolder(fallback, cls, make){
  const holder = document.createElement('span');
  holder.className = 'pic';
  holder.innerHTML = fallback;
  if (World.on){ picQueue.push({ el: holder, cls, make }); pumpPics(); }
  return holder;
}
const pxFor = cssPx => Math.round(cssPx * Math.min(2, window.devicePixelRatio || 1));
// a friend; o: { stage, outfit, pose: 'happy' | 'sleep' | 'talk', size (CSS px) }
function friendPic(sp, o = {}){
  const svg = petSvg(sp, { stage: o.stage == null ? 2 : o.stage, outfit: o.outfit });
  const h = picHolder(svg, 'pet', () => World.E.snapshot(sp, { stage: o.stage == null ? 2 : o.stage, outfit: o.outfit || '', pose: o.pose || '', w: pxFor(o.size || 200) }));
  if (o.pose === 'sleep' || o.pose === 'happy'){ const el = h.querySelector('.pet'); if (el) el.classList.add(o.pose); }
  return h;
}
// an item: food, tool, room or hat; fallback is the flat drawing
function itemPic(name, fallback, size = 64){
  return picHolder(fallback, 'item', () => World.E.icon(name, pxFor(size)));
}
// the drag picture follows the tray button's own picture
function artOf(btn, fallback){ const img = btn && btn.querySelector('img.item'); return img ? img.outerHTML : fallback; }
