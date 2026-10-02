/* ---------- the pet on the stage: drawing, where its parts are on screen, and how it moves ---------- */
const VB = { x: -10, y: -40, w: 260, h: 280 };
const stageEl = $('stage');
const Pet = {
  sp: null, el: null, stage: 2, flashTimers: {}, talkTimer: 0, talking: false, exprTimer: 0,
  mount(sp){
    this.sp = sp;
    const d = petData(sp);
    this.stage = stageOf(sp);
    if (World.on){
      // in 3D the friend is drawn by the engine; this element only carries the state classes it reads
      stageEl.textContent = '';
      World.E.setPet(sp, { stage: this.stage, outfit: d.outfit });
      this.el = World.stateEl;
      this.el.className = sleeping ? 'sleep' : '';
      this.pupils = []; this.eyeEls = [];
      return;
    }
    stageEl.innerHTML = petSvg(sp, { stage: this.stage, outfit: d.outfit });
    this.el = stageEl.firstElementChild;
    this.pupils = Array.from(this.el.querySelectorAll('.pupil'));
    this.eyeEls = Array.from(this.el.querySelectorAll('.eye'));
    if (sleeping) this.el.classList.add('sleep');
  },
  refresh(){ if (this.sp) this.mount(this.sp); },
  // stage units -> screen pixels (head points follow the head's own scale, as the baby's head is bigger)
  toScreen(x, y, head){
    const s = SPECIES[this.sp];
    if (head){
      const k = this.stage === 0 ? 1.14 : this.stage === 1 ? 1.06 : 1;
      const [px, py] = s.headPivot;
      x = px + (x - px) * k; y = py + (y - py) * k;
    }
    const sc = STAGE_SCALE[this.stage];
    x = 120 + (x - 120) * sc; y = 226 + (y - 226) * sc;
    const r = stageEl.getBoundingClientRect();
    const k = r.width / VB.w;
    return { x: r.left + (x - VB.x) * k, y: r.top + (y - VB.y) * k, k };
  },
  toStage(px, py){
    const r = stageEl.getBoundingClientRect();
    const k = r.width / VB.w;
    const sc = STAGE_SCALE[this.stage];
    const x = (px - r.left) / k + VB.x, y = (py - r.top) / k + VB.y;
    return { x: 120 + (x - 120) / sc, y: 226 + (y - 226) / sc };
  },
  headTop(){
    if (!this.sp) return { x: innerWidth / 2, y: innerHeight * 0.35 };
    if (World.on) return World.E.project('headTop');
    const h = SPECIES[this.sp].hat;
    return this.toScreen(h[0], h[1] - 6, true);
  },
  mouth(){ if (World.on) return World.E.project('mouth'); const m = SPECIES[this.sp].mouth; return this.toScreen(m[0], m[1], true); },
  center(){ if (World.on) return World.E.project('center'); return this.toScreen(120, 150); },
  // the friend's box on screen (for sizes and generous touch areas)
  box(){
    if (World.on){ const b = World.E.bounds(); return { left: b.left, top: b.top, width: b.right - b.left, height: b.bottom - b.top }; }
    const r = stageEl.getBoundingClientRect(); return { left: r.left, top: r.top, width: r.width, height: r.height };
  },
  // is a screen point on the pet? (a generous oval around its body)
  hit(px, py, pad = 0){
    if (!this.el || stageEl.classList.contains('gone')) return false;
    if (World.on){
      if (World.E.hit(px, py)) return true;
      if (!pad) return false;
      const b = World.E.bounds();
      return px > b.left - pad && px < b.right + pad && py > b.top - pad && py < b.bottom + pad;
    }
    const r = stageEl.getBoundingClientRect();
    const sc = STAGE_SCALE[this.stage];
    const cx = r.left + r.width / 2, cy = r.top + r.height * (1 - 0.5 * sc * 0.82);
    const rx = r.width * 0.46 * sc + pad, ry = r.height * 0.44 * sc + pad;
    const dx = (px - cx) / rx, dy = (py - cy) / ry;
    return dx * dx + dy * dy <= 1;
  },
  nearMouth(px, py, radius){
    const m = this.mouth();
    return Math.hypot(px - m.x, py - m.y) < (radius || Math.max(60, this.box().width * 0.2));
  },
  partAt(px, py){
    if (World.on){ const h = World.E.hit(px, py); return h && PART_NAMES[h.part] ? h.part : null; }
    const p = this.toStage(px, py);
    let best = null, bd = 1e9;
    for (const [x, y, name] of PARTS[this.sp]){ const d = Math.hypot(p.x - x, p.y - y); if (d < bd){ bd = d; best = name; } }
    return best;
  },
  isHead(px, py){
    if (World.on){ const h = World.E.hit(px, py); return !!(h && h.head); }
    const p = this.toStage(px, py);
    const h = SPECIES[this.sp].hat, m = SPECIES[this.sp].mouth;
    return p.y < (h[1] + m[1]) / 2 + 26 && Math.abs(p.x - h[0]) < 70;
  },
  flash(cls, ms){
    if (!this.el) return;
    const el = this.el;
    clearTimeout(this.flashTimers[cls]);
    el.classList.remove(cls);
    if (World.on){
      // the engine starts a motion when it sees the class appear, so it must see one frame without it first
      requestAnimationFrame(() => requestAnimationFrame(() => {
        el.classList.add(cls);
        this.flashTimers[cls] = setTimeout(() => el.classList.remove(cls), ms);
      }));
      return;
    }
    void el.getBoundingClientRect(); el.classList.add(cls);
    this.flashTimers[cls] = setTimeout(() => el.classList.remove(cls), ms);
  },
  expr(name, ms){
    if (!this.el) return;
    this.el.classList.remove('happy', 'wide');
    clearTimeout(this.exprTimer);
    if (name){ this.el.classList.add(name); if (ms) this.exprTimer = setTimeout(() => this.el && this.el.classList.remove(name), ms); }
  },
  setSleep(on){ if (this.el) this.el.classList.toggle('sleep', on); },
  talk(on){
    if (!this.el) return;
    if (on === this.talking) return;
    this.talking = on;
    clearInterval(this.talkTimer);
    if (on){
      let open = false;
      this.talkTimer = setInterval(() => { open = !open || Math.random() < 0.25; if (this.el) this.el.classList.toggle('talk', open); }, 130);
    } else this.el.classList.remove('talk');
  },
  mouthOpen(on){ if (this.el) this.el.classList.toggle('talk', on); },
  chew(ms = 900){
    if (!this.el) return;
    this.talk(false);
    let n = 0;
    const t = setInterval(() => { if (!this.el) return; this.el.classList.toggle('talk', n % 2 === 0); if (++n > ms / 150){ clearInterval(t); this.el && this.el.classList.remove('talk'); } }, 150);
    this.flash('nod', 700);
  },
  look(px, py){
    if (!this.el || this.el.classList.contains('sleep')) return;
    if (World.on){ World.E.lookAt(px, py); return; }
    const r = SPECIES[this.sp].eyes[2];
    for (let i = 0; i < this.pupils.length; i++){
      const e = SPECIES[this.sp].eyes[i];
      if (!e) continue;
      const s = this.toScreen(e[0], e[1], true);
      let dx = px - s.x, dy = py - s.y;
      const d = Math.hypot(dx, dy) || 1;
      const m = Math.min(1, d / 160) * r * 0.32;
      this.pupils[i].setAttribute('transform', `translate(${(dx / d * m).toFixed(1)} ${(dy / d * m).toFixed(1)})`);
    }
  },
  lookHome(){ if (World.on){ World.E.lookAt(null); return; } for (const p of this.pupils || []) p.setAttribute('transform', 'translate(0 0)'); },
  blink(){ if (this.el && !this.el.classList.contains('sleep') && !this.el.classList.contains('happy')) this.flash('blink', 130); },
  // a whole action (purr, giggle, sneeze, lookback, stomp, shakehead, dizzy, yawn, stretch, dance, lookaround,
  // surprise, love, wave, header, shakedry). In 3D the engine plays it; flat, the closest simple motion stands in.
  act(name, o){
    if (!this.el) return;
    if (World.on){ World.E.act(name, o); return; }
    const FLAT = { purr: ['squish', 'happy'], giggle: ['wiggle', 'happy'], sneeze: ['shake', 'wide'], lookback: ['wiggle', 'tilt'], stomp: ['hop', 'happy'], shakehead: ['shake'],
      dizzy: ['wiggle', 'tilt'], yawn: ['nod', 'tilt'], stretch: ['hop'], dance: ['hop', 'happy'], lookaround: ['nod', 'tilt'], surprise: ['hop', 'wide'], love: ['squish', 'happy'],
      wave: ['hop', 'happy'], header: ['hop', 'happy'], shakedry: ['wiggle', 'happy'] };
    const f = FLAT[name]; if (!f) return;
    this.flash(f[0], { hop: 600, squish: 360, wiggle: 700, shake: 520, nod: 700 }[f[0]] || 600);
    if (f[1] === 'tilt'){ this.el.classList.add('tilt'); setTimeout(() => this.el && this.el.classList.remove('tilt'), 1300); }
    else if (f[1]) this.expr(f[1], 1200);
    if (name === 'dance'){ setTimeout(() => this.flash('hop', 600), 700); setTimeout(() => this.flash('hop', 600), 1400); }
  },
  wear(outfit){
    petData(this.sp).outfit = outfit; savePets();
    if (World.on) World.E.setOutfit(outfit); else this.refresh();
    this.expr('happy', 1200); this.flash('hop', 600);
  }
};

/* ---------- particles: hearts, bubbles, sparkles, crumbs, drops, z's, music notes, confetti ---------- */
const fx = $('fx');
const fctx = fx.getContext('2d');
let FW = 0, FH = 0, DPR = 1;
const parts = [];
function sizeFx(){
  DPR = Math.min(3, window.devicePixelRatio || 1);
  FW = innerWidth; FH = innerHeight;
  fx.width = Math.round(FW * DPR); fx.height = Math.round(FH * DPR);
  fctx.setTransform(DPR, 0, 0, DPR, 0, 0);
}
const COLORS = ['#ff5d8f', '#ffc83d', '#5cc3ff', '#7cc85a', '#ff8a5c', '#9a8cf0'];
const FX = {
  emit(type, x, y, n = 6, o = {}){
    for (let i = 0; i < n; i++){
      const a = o.angle != null ? o.angle + rand(-0.6, 0.6) : rand(0, Math.PI * 2);
      const sp = o.speed != null ? o.speed * rand(0.6, 1.2) : rand(60, 180);
      const p = { type, x: x + rand(-(o.spread || 0), o.spread || 0), y: y + rand(-(o.spread || 0), o.spread || 0),
        vx: Math.cos(a) * sp, vy: Math.sin(a) * sp, life: 0, max: o.life || rand(0.8, 1.4), size: (o.size || 14) * rand(0.7, 1.3),
        rot: rand(0, 6.28), vr: rand(-4, 4), color: o.color || pick(COLORS), g: o.g != null ? o.g : 0 };
      if (type === 'bubble' || type === 'foam'){ p.vy = -Math.abs(p.vy) * 0.4 - 20; p.vx *= 0.4; }
      if (type === 'z'){ p.vx = rand(10, 30); p.vy = -rand(26, 40); p.max = 2.6; }
      if (type === 'note'){ p.vx = rand(-20, 20); p.vy = -rand(30, 50); p.max = 2.4; p.ch = pick(['♪', '♫']); }
      if (type === 'foam'){ p.vx = rand(-8, 8); p.vy = rand(-10, 4); p.max = o.life || rand(5, 9); }
      parts.push(p);
    }
    if (parts.length > 500) parts.splice(0, parts.length - 500);
  },
  clear(type){ for (let i = parts.length - 1; i >= 0; i--) if (!type || parts[i].type === type) parts.splice(i, 1); },
  popFoam(n){ let k = 0; for (let i = parts.length - 1; i >= 0 && k < n; i--) if (parts[i].type === 'foam'){ parts[i].max = parts[i].life + 0.15; k++; } },
  count(type){ return parts.filter(p => p.type === type).length; }
};
function heartPath(c, s){
  c.beginPath();
  c.moveTo(0, s * 0.35);
  c.bezierCurveTo(-s * 1.1, -s * 0.3, -s * 0.5, -s * 1.05, 0, -s * 0.45);
  c.bezierCurveTo(s * 0.5, -s * 1.05, s * 1.1, -s * 0.3, 0, s * 0.35);
  c.closePath();
}
function starPath(c, r1, r2){
  c.beginPath();
  for (let i = 0; i < 10; i++){ const a = -Math.PI / 2 + i * Math.PI / 5, r = i % 2 ? r2 : r1; c[i ? 'lineTo' : 'moveTo'](Math.cos(a) * r, Math.sin(a) * r); }
  c.closePath();
}
function drawFx(dt){
  fctx.clearRect(0, 0, FW, FH);
  for (let i = parts.length - 1; i >= 0; i--){
    const p = parts[i];
    p.life += dt;
    if (p.life >= p.max){ parts.splice(i, 1); continue; }
    p.vy += p.g * dt;
    if (p.type !== 'foam'){ p.vx *= 0.985; }
    else { p.vx *= 0.9; p.vy *= 0.9; }
    p.x += p.vx * dt; p.y += p.vy * dt; p.rot += p.vr * dt;
    const t = p.life / p.max;
    const alpha = t < 0.15 ? t / 0.15 : t > 0.7 ? (1 - t) / 0.3 : 1;
    fctx.save();
    fctx.globalAlpha = Math.max(0, alpha);
    fctx.translate(p.x, p.y);
    const s = p.size;
    fctx.lineWidth = 2.5; fctx.strokeStyle = '#1b2430';
    switch (p.type){
      case 'heart': fctx.rotate(Math.sin(p.rot) * 0.3); heartPath(fctx, s); fctx.fillStyle = p.color === '#ffc83d' ? '#ff5d8f' : p.color; fctx.fill(); fctx.stroke(); break;
      case 'bubble': case 'foam':
        fctx.beginPath(); fctx.arc(0, 0, s, 0, Math.PI * 2); fctx.fillStyle = 'rgba(255,255,255,.75)'; fctx.fill();
        fctx.strokeStyle = 'rgba(80,140,200,.7)'; fctx.lineWidth = 2; fctx.stroke();
        fctx.beginPath(); fctx.arc(-s * 0.35, -s * 0.35, s * 0.25, 0, Math.PI * 2); fctx.fillStyle = '#fff'; fctx.fill(); break;
      case 'sparkle': fctx.rotate(p.rot); starPath(fctx, s, s * 0.42); fctx.fillStyle = p.color === '#9a8cf0' ? '#ffc83d' : p.color; fctx.fill(); fctx.lineWidth = 2; fctx.stroke(); break;
      case 'crumb': fctx.rotate(p.rot); fctx.fillStyle = p.color; fctx.fillRect(-s / 2, -s / 2, s, s * 0.8); break;
      case 'drop': fctx.fillStyle = '#5cc3ff'; fctx.beginPath(); fctx.moveTo(0, -s); fctx.quadraticCurveTo(s * 0.8, s * 0.3, 0, s * 0.7); fctx.quadraticCurveTo(-s * 0.8, s * 0.3, 0, -s); fctx.fill(); break;
      case 'confetti': fctx.rotate(p.rot); fctx.fillStyle = p.color; fctx.fillRect(-s / 2, -s / 4, s, s / 2); break;
      case 'dust': fctx.fillStyle = 'rgba(170,130,80,.55)'; fctx.beginPath(); fctx.arc(0, 0, s * (0.6 + t), 0, Math.PI * 2); fctx.fill(); break;
      case 'z': fctx.font = `700 ${Math.round(s * (1 + t))}px Fredoka, sans-serif`; fctx.fillStyle = '#fff5e2'; fctx.strokeStyle = '#1b2430'; fctx.lineWidth = 4; fctx.strokeText('z', 0, 0); fctx.fillText('z', 0, 0); break;
      case 'note': fctx.font = `700 ${Math.round(s * 1.6)}px sans-serif`; fctx.fillStyle = '#7d74e8'; fctx.fillText(p.ch, 0, 0); break;
    }
    fctx.restore();
  }
}

/* ---------- dragging things from the tray onto the pet ---------- */
const ghostEl = document.createElement('div');
ghostEl.className = 'ghost'; ghostEl.hidden = true;
document.body.append(ghostEl);
let drag = null;
function startDrag(e, item, handlers){
  e.preventDefault();
  initAudio();
  drag = { id: e.pointerId, item, h: handlers, x0: e.clientX, y0: e.clientY, x: e.clientX, y: e.clientY, t0: performance.now(), moved: 0, btn: e.currentTarget };
  ghostEl.innerHTML = item.art;
  ghostEl.classList.remove('fly');
  ghostEl.style.opacity = '1';
  ghostEl.style.transform = 'scale(1.1)';
  ghostEl.style.left = e.clientX + 'px'; ghostEl.style.top = (e.clientY - 30) + 'px';
  ghostEl.hidden = false;
  try { e.currentTarget.setPointerCapture(e.pointerId); } catch (err) {}
  if (handlers.start) handlers.start(drag);
}
function moveDrag(e){
  if (!drag || e.pointerId !== drag.id) return;
  const dx = e.clientX - drag.x, dy = e.clientY - drag.y;
  drag.moved += Math.hypot(dx, dy);
  drag.x = e.clientX; drag.y = e.clientY;
  ghostEl.style.left = drag.x + 'px'; ghostEl.style.top = (drag.y - 30) + 'px';
  ghostEl.style.transform = `scale(1.1) rotate(${clamp(dx * 2, -20, 20)}deg)`;
  Pet.look(drag.x, drag.y);
  if (drag.h.move) drag.h.move(drag, drag.x, drag.y - 30, Math.hypot(dx, dy));
}
function endDrag(e, cancel){
  if (!drag || (e && e.pointerId !== drag.id)) return;
  const d = drag; drag = null;
  const tap = d.moved < 12 && performance.now() - d.t0 < 450;
  let keep = false;
  if (!cancel && d.h.end) keep = d.h.end(d, d.x, d.y - 30, tap) === true;
  if (!keep) returnGhost(d);
  Pet.lookHome();
}
function returnGhost(d){
  const r = d.btn.getBoundingClientRect();
  ghostEl.classList.add('fly');
  ghostEl.style.left = (r.left + r.width / 2) + 'px'; ghostEl.style.top = (r.top + r.height / 2) + 'px';
  ghostEl.style.transform = 'scale(.6)'; ghostEl.style.opacity = '0';
  setTimeout(() => { if (!drag) ghostEl.hidden = true; }, 460);
}
// Sends the held item flying to a point (for a tap instead of a drag), then runs done().
function flyGhostTo(d, x, y, done){
  ghostEl.innerHTML = d.item.art;
  ghostEl.hidden = false; ghostEl.style.opacity = '1';
  const r = d.btn.getBoundingClientRect();
  ghostEl.classList.remove('fly');
  ghostEl.style.left = (r.left + r.width / 2) + 'px'; ghostEl.style.top = (r.top + r.height / 2) + 'px';
  void ghostEl.offsetWidth;
  ghostEl.classList.add('fly');
  ghostEl.style.left = x + 'px'; ghostEl.style.top = y + 'px'; ghostEl.style.transform = 'scale(.9)';
  setTimeout(() => { done && done(); }, 470);
}
function hideGhost(){ ghostEl.classList.add('fly'); ghostEl.style.opacity = '0'; ghostEl.style.transform = 'scale(.3)'; setTimeout(() => { if (!drag) ghostEl.hidden = true; }, 320); }
addEventListener('pointermove', moveDrag, { passive: false });
addEventListener('pointerup', e => endDrag(e, false));
addEventListener('pointercancel', e => endDrag(e, true));
