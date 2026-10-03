/* ---------- rooms, needs, and everything the child can do with the pet ---------- */
const roomEl = $('room'), trayEl = $('tray'), navEl = $('nav'), hudEl = $('hud'), needsEl = $('needs');
const tubEl = $('tub'), blanketEl = $('blanket'), bedBackEl = $('bed-back'), stallEl = $('stall');
const gamesEl = $('games'), albumEl = $('album'), toastEl = $('toast');
const ROOMS = ['home', 'kitchen', 'bath', 'bed', 'play', 'album'];
const ROOM_LABEL = { home: 'הבית', kitchen: 'מטבח', bath: 'אמבטיה', bed: 'חדר שינה', play: 'משחקים', album: 'אלבום' };
let room = 'home';
let inPlay = false;          // the room screens are up (not the start screen or a game)
let bedtime = false;         // the sitting is over: on the way to bed
let teethToday = false;      // brushed in this sitting (asked for before bed)
let lastTouch = performance.now();
const needs = { food: 58, clean: 62, energy: 82, fun: 60 };
const NEED_ROOM = { food: 'kitchen', clean: 'bath', energy: 'bed', fun: 'play' };
const NEED_LINE = { food: 'hungry', clean: 'dirty', energy: 'tired', fun: 'bored' };
const NEED_LABEL = { food: 'רעב', clean: 'ניקיון', energy: 'אנרגיה', fun: 'כיף' };
let todayFacts = [];

/* ---------- needs ---------- */
const needBtns = {};
for (const k of ['food', 'clean', 'energy', 'fun']){
  const b = document.createElement('button');
  b.type = 'button'; b.className = 'need'; b.setAttribute('aria-label', NEED_LABEL[k]);
  b.innerHTML = `<svg class="ring" viewBox="0 0 54 54"><circle class="ring-bg" cx="27" cy="27" r="23"/><circle class="ring-fg" cx="27" cy="27" r="23" stroke-dasharray="144.5" stroke-dashoffset="0"/></svg>` +
    NEED_ICON[k].replace('<svg', '<svg class="icon"');
  b.addEventListener('click', () => { if (!bedtime) setRoom(NEED_ROOM[k]); });
  needsEl.append(b);
  needBtns[k] = b;
}
function renderNeeds(){
  for (const k of Object.keys(needBtns)){
    const v = clamp(needs[k], 0, 100);
    const fg = needBtns[k].querySelector('.ring-fg');
    fg.setAttribute('stroke-dashoffset', String(144.5 * (1 - v / 100)));
    needBtns[k].classList.toggle('low', v < 30 && !bedtime);
    needBtns[k].setAttribute('aria-label', NEED_LABEL[k] + ' ' + Math.round(v) + '%');
  }
}
function addNeed(k, dv){ needs[k] = clamp(needs[k] + dv, 0, 100); renderNeeds(); }
let nextNeedTalk = performance.now() + 70000;
function tickNeeds(dt, now){
  if (!opts.needs || sleeping) return;
  needs.food = Math.max(12, needs.food - dt / 14);
  needs.clean = Math.max(12, needs.clean - dt / 19);
  needs.fun = Math.max(12, needs.fun - dt / 12);
  needs.energy = Math.max(12, needs.energy - dt / 22);
  if (now > nextNeedTalk && !bedtime && !speechBusy()){
    nextNeedTalk = now + 80000;
    const low = Object.keys(needs).filter(k => needs[k] < 30 && NEED_ROOM[k] !== room).sort((a, b) => needs[a] - needs[b])[0];
    if (low){ say(NEED_LINE[low], null, 3); glowNav(NEED_ROOM[low], 7000); }
  }
}

/* ---------- the album: unlocking a card says the fact out loud ---------- */
function hasFact(sp, kind){ return !!(facts[sp] && facts[sp][kind]); }
function unlockFact(sp, kind, speak = true){
  if (hasFact(sp, kind)){ return speak ? sayFactP(sp, kind) : Promise.resolve(); }
  facts[sp] = facts[sp] || {};
  facts[sp][kind] = Date.now();
  saveFacts();
  todayFacts.push([sp, kind]);
  if (!speak) practice('facts');
  showToast(kind);
  sfx.sparkle();
  const c = Pet.center(); FX.emit('sparkle', c.x, c.y - 40, 10, { speed: 220, size: 12 });
  return speak ? sayFactP(sp, kind) : Promise.resolve();
}
let toastTimer = 0;
function showToast(kind){
  toastEl.innerHTML = `<span class="k">${FACT_ICON[kind]}</span><span dir="rtl">כרטיס חדש באלבום!</span>`;
  toastEl.hidden = false;
  toastEl.style.animation = 'none'; void toastEl.offsetWidth; toastEl.style.animation = '';
  clearTimeout(toastTimer); toastTimer = setTimeout(() => { toastEl.hidden = true; }, 3300);
  glowNav('album', 5000);
}

/* ---------- the room bar ---------- */
const navBtns = {};
for (const r of ROOMS){
  const b = document.createElement('button');
  b.type = 'button'; b.className = 'nav-btn'; b.setAttribute('aria-label', ROOM_LABEL[r]);
  b.addEventListener('click', () => { initAudio(); sfx.tap(); setRoom(r); });
  navEl.append(b);
  navBtns[r] = b;
}
function renderNavIcons(){ for (const r of ROOMS){ navBtns[r].textContent = ''; navBtns[r].append(itemPic(r, ROOM_ICON[r], 46)); } }
const navGlowTimers = {};
function glowNav(r, ms){
  const b = navBtns[r]; if (!b) return;
  b.classList.add('glow');
  clearTimeout(navGlowTimers[r]);
  navGlowTimers[r] = setTimeout(() => b.classList.remove('glow'), ms);
}
function renderNav(){
  for (const r of ROOMS){
    navBtns[r].setAttribute('aria-current', String(r === room));
    navBtns[r].disabled = bedtime && r !== 'bed';
  }
}

/* ---------- the tray ---------- */
function trayButton(id, art, label, handlers){
  const b = document.createElement('button');
  b.type = 'button'; b.className = 'tray-btn'; b.dataset.id = id; b.setAttribute('aria-label', label);
  b.append(itemPic(id === 'friends' ? 'egg' : id, art, 88));
  const item = { id, get art(){ return artOf(b, art); } };
  if (handlers.tap && !handlers.drag){
    b.addEventListener('click', () => { initAudio(); handlers.tap(b); });
  } else {
    b.addEventListener('pointerdown', e => { if (e.button > 0) return; startDrag(e, item, handlers.drag); });
    b.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' '){ e.preventDefault(); handlers.drag.end({ item, btn: b, x: 0, y: 0 }, 0, 0, true); } });
  }
  return b;
}
function setTray(buttons){
  trayEl.textContent = '';
  for (const b of buttons) if (b) trayEl.append(b);
  trayEl.style.setProperty('--n', String(Math.max(4, trayEl.children.length)));
}
const trayBtn = id => trayEl.querySelector(`[data-id="${id}"]`);
function glowTray(id, on = true){ const b = trayBtn(id); if (b) b.classList.toggle('glow', on); }

/* ---------- moving between rooms ---------- */
function setRoom(r, quiet){
  if (bedtime && r !== 'bed') return;
  if (room === 'bed' && r !== 'bed' && sleeping) wakeUp(true);
  if (r !== 'bath'){ bath.stage = 0; FX.clear('foam'); stopWashCount(); stallEl.hidden = true; }
  const prev = room;
  if (prev !== r){ stopSpeech(); stopMic(); }
  room = r;
  if (prev !== r && !reduceMotion){ roomEl.classList.remove('swap'); void roomEl.offsetWidth; roomEl.classList.add('swap'); if (Pet.el && !(World.on && (r === 'home' || r === 'kitchen'))) Pet.flash('hop', 600); }
  bubbleAnchor = r === 'album' ? () => ({ x: innerWidth / 2, y: 0 }) : null;
  roomEl.dataset.room = r;
  Music.play({ home: 'home', kitchen: 'kitchen', bath: 'bath', bed: 'bed', play: 'game', album: 'theme' }[r]);
  World.room(r);
  stageEl.classList.toggle('in-tub', r === 'bath');
  stageEl.classList.toggle('small', r === 'play');
  stageEl.classList.toggle('gone', r === 'album');
  tubEl.hidden = r !== 'bath';
  bedBackEl.hidden = r !== 'bed';
  blanketEl.hidden = r !== 'bed';
  gamesEl.hidden = r !== 'play';
  albumEl.hidden = r !== 'album';
  if (r !== 'bed'){ roomEl.classList.remove('dark'); document.body.classList.remove('lights-off'); }
  closeWardrobe();
  renderNav();
  ROOM_SETUP[r]();
  placeGift();
  setTimeout(placeBubble, 520);
  if (!quiet && prev !== r) roomHello(r);
}
function roomHello(r){
  if (r === 'kitchen'){
    if (needs.food >= 96) return;
    if (opts.count && !countGame && Math.random() < 0.6) startCount();
    else say('kitchen', null, 4);
  } else if (r === 'bath') say('bath', null, 4);
  else if (r === 'bed' && !bedtime) say('bed', null, 4);
}

const ROOM_SETUP = {
  home(){
    const hasMic = !!(navigator.mediaDevices && navigator.mediaDevices.getUserMedia) && opts.mic && !mic.denied && !isAndroidInApp;
    setTray([
      hasMic ? trayButton('mic', TOOL_ART.mic, 'חזור אחריי', { tap: b => talkBack(b) }) : null,
      trayButton('hanger', TOOL_ART.hanger, 'ארון בגדים', { tap: () => openWardrobe() }),
      trayButton('paint', PAINT_SVG, 'צבע לחדר', { tap: () => openPaint() }),
      trayButton('ball', TOOL_ART.ball, 'כדור', { drag: { end: (d, x, y, tap) => { kickBall(d, x, y, tap); return true; } } }),
      trayButton('friends', `<svg viewBox="0 0 64 64"><ellipse cx="32" cy="36" rx="20" ry="24" fill="#fff5e2" stroke="${INK}" stroke-width="3.5"/><g fill="#7cc85a"><circle cx="24" cy="30" r="5"/><circle cx="40" cy="38" r="6"/><circle cx="28" cy="48" r="4"/></g><path d="M22 14 l4 6 l6 -8 l6 8 l4 -6" fill="none" stroke="${INK}" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg>`, 'חבר אחר', { tap: () => openChoose(false) })
    ]);
  },
  kitchen(){
    setTray(FOOD_ORDER.map(f => trayButton(f, FOOD_ART[f], FOODS[f].he, { drag: {
      end: (d, x, y, tap) => {
        if (World.on && isEating()) return false;
        if (tap){ if (World.on){ hideGhost(); feed(f); return true; } const m = Pet.mouth(); flyGhostTo(d, m.x, m.y, () => { hideGhost(); feed(f); }); return true; }
        if (Pet.nearMouth(x, y) || Pet.hit(x, y)){ hideGhost(); feed(f, { x, y }); return true; }
        return false;
      }
    } })));
    if (countGame) markCountBadge();
  },
  bath(){
    const parts = [
      trayButton('sponge', TOOL_ART.sponge, 'ספוג', { drag: rubber('sponge') }),
      trayButton('shower', TOOL_ART.shower, 'מקלחת', { drag: rubber('shower') }),
      trayButton('towel', TOOL_ART.towel, 'מגבת', { drag: rubber('towel') }),
      trayButton('brush', TOOL_ART.brush, 'מברשת שיניים', { drag: rubber('brush') }),
      bath.soap ? trayButton('soap', TOOL_ART.soap, 'סבון', { drag: rubber('soap') }) : trayButton('potty', TOOL_ART.potty, 'סיר', { tap: () => potty() })
    ];
    setTray(parts);
    glowTray(bath.soap ? 'soap' : ['sponge', 'shower', 'towel'][Math.min(2, bath.stage)]);
  },
  bed(){
    blanketEl.classList.toggle('off', !sleeping);
    setTray([
      trayButton('lamp', TOOL_ART.lamp, 'מנורה', { tap: () => toggleLamp() }),
      bedtime && !teethToday ? trayButton('brush', TOOL_ART.brush, 'מברשת שיניים', { drag: rubber('brush') }) : null,
      !bedtime ? trayButton('book', TOOL_ART.book, 'סיפור', { tap: () => story() }) : null,
      // a few slow breaths together: calm before sleep
      trayButton('calm', CALM_ART.flower, 'נושמים יחד', { tap: () => { if (!sleeping) breatheTogether(3); } })
    ]);
    if (bedtime) glowTray(teethToday ? 'lamp' : 'brush');
  },
  play(){ renderGames(); setTray([]); },
  album(){ renderAlbum(); setTray([]); }
};

/* ---------- touching the pet ---------- */
let lastPatTalk = 0, rubDist = 0;
function petDown(e, onCanvas){
  if (drag || !inPlay || !Pet.el) return;
  if (onCanvas !== World.on) return;
  if (onCanvas && !Pet.hit(e.clientX, e.clientY, 18)) return;
  initAudio();
  lastTouch = performance.now();
  const x = e.clientX, y = e.clientY;
  if (sleeping){ FX.emit('z', x, y - 20, 1, { size: 18 }); return; }
  rubDist = 0;
  stageEl._down = { x, y, t: performance.now() };
  try { e.currentTarget.setPointerCapture(e.pointerId); } catch (err) {}
}
function petMove(e){
  if (!stageEl._down || drag) return;
  const d = stageEl._down;
  const dist = Math.hypot(e.clientX - d.x, e.clientY - d.y);
  rubDist += dist; d.x = e.clientX; d.y = e.clientY;
  if (rubDist > 70){ rubDist = 0; FX.emit('heart', e.clientX, e.clientY, 1, { speed: 60, size: 12 }); addNeed('fun', 1); if (Math.random() < 0.3) sfx.giggle(); Pet.expr('happy', 900); }
}
function petUp(e){
  const d = stageEl._down; stageEl._down = null;
  if (!d || drag || sleeping) return;
  if (performance.now() - d.t > 500) return;
  reactTo(e.clientX, e.clientY);
}
/* A tap on the friend: each part of the body gets its own reaction. A pat on the head is a purr, the belly
   giggles, the nose sneezes, the tail makes it turn around, a foot gets a hop. Many quick taps make it dizzy. */
const REACT_BY_PART = { head: 'purr', neck: 'purr', mane: 'purr', ears: 'shakehead', frill: 'shakehead', horns: 'shakehead', plates: 'shakehead',
  face: 'sneeze', trunk: 'sneeze', beak: 'sneeze', belly: 'giggle', back: 'giggle', arms: 'giggle', flippers: 'giggle',
  tail: 'lookback', spikes: 'lookback', club: 'lookback', armor: 'shakehead', legs: 'stomp', paws: 'stomp', feet: 'stomp' };
const REACT_LINE = { giggle: 'tickle', sneeze: 'sneeze', lookback: 'tail', stomp: 'foot', dizzy: 'dizzy', purr: 'pat' };
let pokes = [], lastSneeze = 0, lastReactTalk = 0;
function reactTo(x, y){
  const now = performance.now();
  pokes = pokes.filter(t => now - t < 1800); pokes.push(now);
  let part = Pet.partAt(x, y);
  if (!part) part = Pet.isHead(x, y) ? 'head' : 'belly';
  let act = REACT_BY_PART[part] || 'giggle';
  if (pokes.length >= 5){ act = 'dizzy'; pokes = []; }
  if (act === 'sneeze'){ if (now - lastSneeze < 6000) act = 'purr'; else lastSneeze = now; }
  const c = Pet.center();
  Pet.act(act, act === 'stomp' ? { side: x < c.x ? -1 : 1 } : undefined);
  const heart = n => { if (World.on) World.E.burstScreen('heart', x, y, n); else FX.emit('heart', x, y - 10, n, { angle: -Math.PI / 2, speed: 140, size: 12 }); };
  if (act === 'purr'){ sfx.purr(Pet.sp); heart(3); }
  else if (act === 'giggle'){ sfx.laugh(); heart(2); }
  else if (act === 'sneeze'){ sfx.ahh(); if (!World.on) setTimeout(() => { sfx.achoo(); const m = Pet.mouth(); FX.emit('drop', m.x, m.y, 8, { speed: 160, g: 500, size: 5 }); }, 820); }
  else if (act === 'lookback'){ sfx.voice(Pet.sp); }
  else if (act === 'stomp'){ sfx.boing(); }
  else if (act === 'shakehead'){ sfx.whoosh(); }
  else if (act === 'dizzy' && !World.on) sfx.dizzy();
  addNeed('fun', 3);
  const line = REACT_LINE[act];
  if (line && (act === 'dizzy' || now - lastReactTalk > 6500)){ lastReactTalk = now; setTimeout(() => say(line, null, act === 'dizzy' ? 4 : 2), act === 'sneeze' ? 1300 : act === 'dizzy' ? 1100 : 250); }
}
stageEl.addEventListener('pointerdown', e => petDown(e, false));
stageEl.addEventListener('pointermove', petMove);
stageEl.addEventListener('pointerup', petUp);
World.canvas.addEventListener('pointerdown', e => petDown(e, true));
World.canvas.addEventListener('pointermove', petMove);
World.canvas.addEventListener('pointerup', petUp);

/* ---------- kitchen ---------- */
let countGame = null;
function startCount(){
  const [a, b] = ageCfg().count;
  const n = a + ((Math.random() * (b - a + 1)) | 0);
  countGame = { n, got: 0, lang: null };
  const per = arr => ({ he: arr.he[n - 1], ru: arr.ru[n - 1], en: arr.en[n - 1] });
  countGame.lang = say('countAsk', { times: per(TIMES) }, 9) || LANGS.find(l => langsOn[l]) || 'he';
  countGame.per = per;
  markCountBadge();
}
function markCountBadge(){
  if (!countGame) return;
  for (const f of DIET[Pet.sp]){
    const b = trayBtn(f); if (!b) continue;
    let badge = b.querySelector('.badge');
    if (!badge){ badge = document.createElement('span'); badge.className = 'badge'; b.append(badge); }
    badge.textContent = String(countGame.n - countGame.got);
    b.classList.add('glow');
  }
}
function clearCountBadge(){ for (const b of trayEl.querySelectorAll('.badge')) b.remove(); for (const b of trayEl.querySelectorAll('.glow')) b.classList.remove('glow'); }
// while the friend eats in 3D, the next food waits; the time limit is a safety net, so feeding can never get stuck
let eatingUntil = 0;
const isEating = () => performance.now() < eatingUntil;
function startEating(p){ const until = eatingUntil = performance.now() + 4000; p.then(() => { if (eatingUntil === until) eatingUntil = 0; }); }
function feed(f, from){
  const sp = Pet.sp;
  const m = Pet.mouth();
  lastTouch = performance.now();
  if (World.on && isEating()) return;
  if (!DIET[sp].includes(f)){
    sfx.nope();
    if (World.on) startEating(World.E.feed(f, false, from)); else Pet.flash('shake', 520);
    say('wrongFood', { food: FOODS[f], foodAcc: { he: FOODS[f].he, ru: FOODS[f].ruAcc, en: FOODS[f].en }, diet: DIET_TEXT[sp] }, 7);
    for (const g of DIET[sp]) glowTray(g, true);
    setTimeout(() => { if (!countGame) for (const g of DIET[sp]) glowTray(g, false); }, 3500);
    return;
  }
  if (needs.food >= 98 && !countGame){
    Pet.flash('shake', 520); say('full', null, 6);
    return;
  }
  if (World.on){
    // the food goes into the mouth and is eaten bite by bite; sometimes it's a favorite and the eyes turn to hearts
    startEating(World.E.feed(f, Math.random() < 0.3 ? 'love' : true, from));
  } else {
    Pet.chew(900); sfx.chomp(); sfx.yum();
    FX.emit('crumb', m.x, m.y, 8, { color: f === 'meat' ? '#d9573f' : f === 'fish' ? '#9fdcff' : f === 'fruit' ? '#ff4b5c' : '#5cbf55', speed: 120, g: 500, size: 7 });
    FX.emit('heart', m.x, m.y - 30, 2, { angle: -Math.PI / 2, speed: 90, size: 12 });
  }
  addNeed('food', 22); addNeed('fun', 2);
  stats.feeds++; saveStats(); practice('habits');
  if (countGame){
    countGame.got++;
    const i = countGame.got;
    const lang = countGame.lang;
    sayFrom({ he: [COUNT.he[i - 1]], ru: [COUNT.ru[i - 1]], en: [COUNT.en[i - 1]] }, null, 9, lang);
    FX.emit('sparkle', m.x, m.y - 50, 4, { size: 12 });
    markCountBadge();
    if (i >= countGame.n){
      const n = countGame.n;
      countGame = null;
      clearCountBadge();
      say('countDone', { n: { he: NUM_WORD.he[n - 1], ru: NUM_WORD.ru[n - 1], en: NUM_WORD.en[n - 1] } }, 9, lang); practice('count');
      setTimeout(() => { sfx.win(); Pet.flash('hop', 600); Pet.expr('happy', 1500); FX.emit('confetti', m.x, m.y - 80, 24, { speed: 260, g: 380, size: 10 }); }, 400);
      if (!hasFact(sp, 'eats')) setTimeout(() => unlockFact(sp, 'eats'), 600);
    }
    return;
  }
  if (!hasFact(sp, 'eats')) unlockFact(sp, 'eats');
  else if (needs.food >= 98) say('full', null, 6);
  else say('yum', { food: { he: FOODS[f].he, ru: FOODS[f].ru, en: FOODS[f].en } }, 3);
}

/* ---------- bathroom ---------- */
const bath = { stage: 0, foam: 0, rinse: 0, dry: 0, brush: 0, soap: false, wash: 0, washCount: 0, lastPart: null, lastPartAt: 0, rinseWarned: false, lastSqueak: 0, brushTalked: false };
function rubber(tool){
  return {
    start(d){ d.acc = 0; d.washTimer = 0; },
    move(d, x, y, step){
      if (tool === 'brush'){
        if (!Pet.nearMouth(x, y, 90)){ Pet.mouthOpen(false); return; }
        Pet.mouthOpen(true);
        brushStep(step / 420, x, y);
        return;
      }
      if (!Pet.hit(x, y, 10)) return;
      rubStep(tool, step, x, y);
    },
    end(d, x, y, tap){
      if (tool === 'brush') Pet.mouthOpen(false);
      if (tool === 'soap') stopWashCount();
      if (tap){
        const target = tool === 'brush' ? Pet.mouth() : Pet.center();
        flyGhostTo(d, target.x, target.y, () => autoRub(tool, target));
        return true;
      }
      return false;
    }
  };
}
// a tap instead of a drag: the tool rubs by itself for a moment
function autoRub(tool, t){
  let n = 0;
  const id = setInterval(() => {
    const x = t.x + Math.sin(n * 0.9) * 50, y = t.y + Math.cos(n * 0.6) * 30;
    ghostEl.style.left = x + 'px'; ghostEl.style.top = y + 'px';
    if (tool === 'brush'){ Pet.mouthOpen(n % 2 === 0); brushStep(0.09, x, y); }
    else rubStep(tool, 26, x, y);
    if (++n > 12){ clearInterval(id); hideGhost(); Pet.mouthOpen(false); if (tool === 'soap') stopWashCount(); }
  }, 110);
}
function rubStep(tool, step, x, y){
  lastTouch = performance.now();
  if (tool === 'sponge'){
    bath.foam += step / 900;
    if (World.on){ if (Math.random() < 0.6) World.E.foamAt(x + rand(-10, 10), y + rand(-10, 10)); }
    else if (Math.random() < 0.55) FX.emit('foam', x + rand(-14, 14), y + rand(-14, 14), 1, { size: rand(9, 17), life: 30 });
    if (performance.now() - bath.lastSqueak > 140){ bath.lastSqueak = performance.now(); sfx.squeak(); }
    const part = Pet.partAt(x, y);
    if (part && part !== bath.lastPart && performance.now() - bath.lastPartAt > 2600){
      bath.lastPart = part; bath.lastPartAt = performance.now();
      say('scrub', { part: PART_NAMES[part] }, 4);
    }
    if (bath.foam >= 1 && bath.stage < 1){ bath.stage = 1; glowTray('sponge', false); glowTray('shower'); Pet.expr('happy', 1200); sfx.sparkle(); }
  } else if (tool === 'shower'){
    FX.emit('drop', x + rand(-20, 20), y + 10, 2, { angle: Math.PI / 2, speed: 260, g: 600, size: 6, life: 0.7 });
    if (Math.random() < 0.15) sfx.water();
    if (bath.stage < 1){
      if (!bath.rinseWarned){ bath.rinseWarned = true; say('rinseFirst', null, 5); }
      return;
    }
    if (World.on) World.E.popFoam(2); else FX.popFoam(2);
    if (Math.random() < 0.3) sfx.bubble();
    bath.rinse += step / 800;
    if (bath.rinse > 0.25 && bath.stage === 1 && !bath.rinseTalked){ bath.rinseTalked = true; say('rinse', null, 4); }
    if (bath.rinse >= 1 && bath.stage < 2){ bath.stage = 2; FX.clear('foam'); if (World.on) World.E.clearFoam(); glowTray('shower', false); glowTray('towel'); }
  } else if (tool === 'towel'){
    if (Math.random() < 0.4) FX.emit('sparkle', x, y, 1, { speed: 60, size: 10 });
    if (bath.stage < 2) return;
    bath.dry += step / 700;
    if (bath.dry >= 1) finishBath();
  } else if (tool === 'soap'){
    if (Math.random() < 0.5) FX.emit('bubble', x, y, 1, { size: rand(8, 14), life: 1.6 });
    startWashCount();
  }
}
function finishBath(){
  const sp = Pet.sp;
  bath.stage = 0; bath.foam = 0; bath.rinse = 0; bath.dry = 0; bath.rinseTalked = false; bath.rinseWarned = false;
  glowTray('towel', false); glowTray('sponge', false);
  needs.clean = 100; renderNeeds(); addNeed('fun', 6);
  stats.baths++; saveStats(); practice('habits');
  const c = Pet.center();
  FX.emit('sparkle', c.x, c.y, 16, { speed: 240, size: 13 });
  sfx.sparkle(); Pet.expr('happy', 1800);
  if (World.on){ World.E.clearFoam(); Pet.act('shakedry'); sfx.whoosh(); } else Pet.flash('hop', 600);
  say('dry', null, 8, null, () => { if (!hasFact(sp, 'body')) unlockFact(sp, 'body'); else if (Math.random() < 0.4) sayFact(sp, 'body', 5); });
}
function brushStep(amount, x, y){
  lastTouch = performance.now();
  if (!bath.brushTalked){ bath.brushTalked = true; say('brush', null, 5); }
  bath.brush += amount;
  if (Math.random() < 0.5){ if (World.on) World.E.burstAt('bubble', 'mouth', 1); else { const m = Pet.mouth(); FX.emit('bubble', m.x + rand(-20, 20), m.y + rand(-6, 10), 1, { size: rand(5, 9), life: 1 }); } }
  if (Math.random() < 0.2) sfx.squeak();
  if (bath.brush >= 1){
    bath.brush = 0; bath.brushTalked = false;
    teethToday = true;
    const sp = Pet.sp;
    Pet.mouthOpen(false); Pet.expr('happy', 1600);
    const m = Pet.mouth(); FX.emit('sparkle', m.x, m.y, 10, { speed: 160, size: 11 });
    sfx.sparkle();
    practice('habits');
    say(sp === 'penguin' ? 'beakDone' : 'brushDone', null, 8, null, () => {
      if (!hasFact(sp, 'fun')) unlockFact(sp, 'fun');
      if (bedtime){ ROOM_SETUP.bed(); say('bedLamp', null, 9); }
    });
    glowTray('brush', false);
  }
}
let washTimer = 0;
function startWashCount(){
  if (washTimer || bath.washCount >= 10) return;
  if (bath.washCount === 0) say('wash', null, 8);
  const tick = () => {
    bath.washCount++;
    const i = bath.washCount;
    sayFrom({ he: [COUNT.he[i - 1]], ru: [COUNT.ru[i - 1]], en: [COUNT.en[i - 1]] }, null, 9, LANGS.find(l => langsOn[l]) || 'he');
    const c = Pet.center(); FX.emit('bubble', c.x + rand(-60, 60), c.y + rand(-40, 40), 3, { size: 10, life: 1.4 });
    if (i >= 10){
      washTimer = 0;
      bath.soap = false;
      setTimeout(() => {
        say('washDone', null, 9); practice('count'); practice('habits'); sfx.sparkle(); Pet.expr('happy', 1500); Pet.flash('hop', 600);
        addNeed('clean', 10); if (room === 'bath' && !bedtime) ROOM_SETUP.bath();
      }, 500);
      bath.washCount = 0;
      return;
    }
    washTimer = setTimeout(tick, 1200);
  };
  washTimer = setTimeout(tick, bath.washCount === 0 ? 1600 : 900);
}
function stopWashCount(){ clearTimeout(washTimer); washTimer = 0; }
async function potty(){
  if (bath.busy) return;
  bath.busy = true;
  lastTouch = performance.now();
  await sayP('potty', null, 9);
  if (room !== 'bath'){ bath.busy = false; return; }
  // a door closes in front of the friend (in 3D, the shower curtain), then opens again
  const three = World.on;
  const close = on => { if (three && World.on) World.E.setCurtain(on); else if (!three){ stallEl.classList.toggle('open', !on); } };
  if (!three){ stallEl.hidden = false; stallEl.classList.add('open'); void stallEl.offsetWidth; }
  close(true); sfx.whoosh();
  await wait(1300); sfx.plop();
  await wait(900); sfx.flush();
  await wait(1700);
  close(false); sfx.whoosh();
  Pet.expr('happy', 1500); Pet.flash('hop', 600);
  await wait(500); stallEl.hidden = true;
  bath.busy = false;
  if (room !== 'bath' || bedtime || !inPlay) return;
  bath.soap = true; bath.washCount = 0;
  ROOM_SETUP.bath();
  say('pottyDone', null, 9); practice('habits');
}

/* ---------- bedroom ---------- */
let sleepAt = 0, nextZ = 0;
function toggleLamp(){
  sfx.click();
  if (sleeping) wakeUp(false); else goSleep();
}
function goSleep(){
  if (bedtime && !teethToday){ say('bedBrush', null, 9); glowTray('brush'); return; }
  sleeping = true; sleepAt = performance.now();
  roomEl.classList.add('dark'); document.body.classList.add('lights-off');
  if (World.on){ World.E.setDark(true); World.E.setBlanket(true); }
  Pet.setSleep(true); Pet.talk(false); Pet.lookHome();
  blanketEl.classList.remove('off');
  glowTray('lamp', false);
  stats.sleeps++; saveStats(); practice('habits');
  const sp = Pet.sp;
  if (bedtime){
    stopSpeech();
    // goodnight, and what the child does now (a parent can set it): the game says it, not the parent
    say('goodnight', null, 9, null, () => sayNext(() => { playLullaby(); setTimeout(() => showNight(), 5200); }));
    return;
  }
  say('lightsOff', null, 9, null, () => {
    if (!sleeping) return;
    const p = hasFact(sp, 'home') ? (Math.random() < 0.5 ? sayFactP(sp, 'home') : Promise.resolve()) : unlockFact(sp, 'home');
    p.then(() => { if (sleeping) playLullaby(); });
  });
}
function wakeUp(quiet){
  sleeping = false;
  stopLullaby();
  roomEl.classList.remove('dark'); document.body.classList.remove('lights-off');
  if (World.on){ World.E.setDark(false); World.E.setBlanket(false); }
  Pet.setSleep(false);
  blanketEl.classList.add('off');
  if (!quiet){ sfx.stretch(); Pet.flash('hop', 600); Pet.expr('happy', 1400); stopSpeech(); say('wake', null, 6); }
}
function tickSleep(dt, now){
  if (!sleeping) return;
  addNeed('energy', dt * 6);
  if (now > nextZ){
    nextZ = now + 1400;
    const h = Pet.headTop();
    FX.emit('z', h.x + 30, h.y + 40, 1, { size: 22 });
    if (Math.random() < 0.5) sfx.snore();
  }
}
async function story(){
  if (speechBusy()) return;
  const sp = Pet.sp;
  const known = FACT_KINDS.filter(k => hasFact(sp, k));
  const list = known.length ? shuffle(known).slice(0, 2) : ['baby'];
  FX.emit('note', innerWidth / 2, innerHeight * 0.4, 3, { size: 16 });
  for (const k of list) await sayFactP(sp, k);
  addNeed('fun', 6);
}

/* ---------- home: the ball, the wardrobe, and "say it back to me" ---------- */
function kickBall(d, x, y, tap){
  const h = Pet.headTop();
  if (World.on){
    hideGhost();
    World.E.ball(tap || !Pet.hit(x, y, 40) ? null : { x, y });
    addNeed('fun', 8); addNeed('energy', -1);
    lastTouch = performance.now();
    if (Math.random() < 0.3) setTimeout(() => say('pat', null, 2), 900);
    return;
  }
  const go = () => {
    hideGhost();
    Pet.flash('hop', 600); sfx.boing(); Pet.expr('happy', 1200);
    FX.emit('confetti', h.x, h.y, 10, { speed: 200, g: 300, size: 8 });
    addNeed('fun', 8); addNeed('energy', -1);
    lastTouch = performance.now();
    if (Math.random() < 0.3) say('pat', null, 2);
  };
  if (tap || !Pet.hit(x, y, 40)) flyGhostTo(d, h.x, h.y + 20, go);
  else { ghostEl.classList.add('fly'); ghostEl.style.left = h.x + 'px'; ghostEl.style.top = (h.y + 20) + 'px'; setTimeout(go, 300); }
}
const wardrobeEl = $('wardrobe'), outfitsEl = $('outfits');
function outfitPreview(id){
  if (id === 'none') return `<svg viewBox="0 0 64 64"><circle cx="32" cy="32" r="22" fill="none" stroke="${INK}" stroke-width="4" stroke-dasharray="6 6"/></svg>`;
  if (id === 'glasses') return `<svg viewBox="0 0 120 60"><circle cx="34" cy="30" r="20" fill="rgba(140,210,255,.35)" stroke="${INK}" stroke-width="5"/><circle cx="86" cy="30" r="20" fill="rgba(140,210,255,.35)" stroke="${INK}" stroke-width="5"/><path d="M54 26 Q60 20 66 26" fill="none" stroke="${INK}" stroke-width="5" stroke-linecap="round"/></svg>`;
  return `<svg viewBox="-60 -66 120 80">${OUTFITS[id]}</svg>`;
}
function openWardrobe(){
  sheetTitle.textContent = 'הארון';
  outfitsEl.textContent = '';
  const cur = petData(Pet.sp).outfit || 'none';
  for (const id of ['none', ...OUTFIT_ORDER]){
    const b = document.createElement('button');
    b.type = 'button'; b.className = 'outfit-btn';
    const have = id === 'none' || owned.includes(id);
    if (!have) b.classList.add('locked');
    b.setAttribute('aria-pressed', String(cur === id));
    if (id === 'none') b.innerHTML = outfitPreview(id); else b.append(itemPic('hat:' + id, outfitPreview(id), 80));
    b.addEventListener('click', () => {
      initAudio();
      if (!have){ sfx.nope(); say('lockedHat', null, 6); glowNav('play', 5000); return; }
      sfx.pop();
      Pet.wear(id === 'none' ? null : id);
      if (id !== 'none') say('look', null, 4);
      openWardrobe();
    });
    outfitsEl.append(b);
  }
  const was = wardrobeEl.hidden;
  wardrobeEl.hidden = false;
  if (was) World.layout(true);
}
function closeWardrobe(){ if (wardrobeEl.hidden) return; wardrobeEl.hidden = true; World.layout(true); }
$('wardrobe-close').addEventListener('click', closeWardrobe);

/* Say it back: the child talks, the pet repeats it in a funny high voice. Recording is held in memory only for the
   few seconds it takes to play it back; nothing is saved or sent anywhere. */
Object.assign(mic, { denied: false, abort: null });
// Stops listening (or the playback) right away: when the room changes, the app is hidden, or bedtime starts.
function stopMic(){ if (mic.abort){ const f = mic.abort; mic.abort = null; try { f(); } catch (e) {} } }
async function talkBack(btn){
  if (mic.busy || speechBusy()) return;
  mic.busy = true;
  lastTouch = performance.now();
  Pet.el.classList.add('listen');
  await sayP('listen', null, 9);
  let stream = null, src = null, proc = null, sink = null;
  const cleanup = () => {
    try { if (proc) proc.disconnect(); if (src) src.disconnect(); if (sink) sink.disconnect(); } catch (e) {}
    if (stream) stream.getTracks().forEach(t => t.stop());
    try { if (navigator.audioSession) navigator.audioSession.type = 'playback'; } catch (e) {}
    btn.classList.remove('listening'); btn.style.removeProperty('--lvl');
    if (Pet.el) Pet.el.classList.remove('listen');
  };
  try {
    initAudio();
    try { if (navigator.audioSession) navigator.audioSession.type = 'play-and-record'; } catch (e) {}
    stream = await navigator.mediaDevices.getUserMedia({ audio: { echoCancellation: true, noiseSuppression: true, autoGainControl: true } });
    if (!AC) throw new Error('no-audio');
    if (AC.state !== 'running') await AC.resume();
    src = AC.createMediaStreamSource(stream);
    proc = AC.createScriptProcessor(2048, 1, 1);
    sink = AC.createGain(); sink.gain.value = 0;
    src.connect(proc); proc.connect(sink); sink.connect(AC.destination);
    btn.classList.add('listening');
    const chunks = [];
    let floor = 0.01, frames = 0, startIdx = -1, lastLoud = 0, t0 = performance.now();
    const result = await new Promise(resolve => {
      mic.abort = () => resolve('abort');
      setTimeout(() => resolve(startIdx >= 0 ? 'ok' : 'quiet'), 9000);
      proc.onaudioprocess = ev => {
        const data = new Float32Array(ev.inputBuffer.getChannelData(0));
        chunks.push(data);
        let sum = 0; for (let i = 0; i < data.length; i++) sum += data[i] * data[i];
        const rms = Math.sqrt(sum / data.length);
        frames++;
        if (frames < 6) floor = Math.max(floor, rms);
        const thr = Math.max(0.025, floor * 2.6);
        btn.style.setProperty('--lvl', Math.min(1, rms * 8).toFixed(2));
        const now = performance.now();
        if (rms > thr){ if (startIdx < 0) startIdx = Math.max(0, chunks.length - 3); lastLoud = now; }
        if (startIdx >= 0 && (now - lastLoud > 750 || chunks.length - startIdx > (AC.sampleRate * 4.5) / 2048)) resolve('ok');
        else if (startIdx < 0 && now - t0 > 5500) resolve('quiet');
      };
    });
    proc.onaudioprocess = null;
    cleanup();
    mic.abort = null;
    if (result === 'abort'){ chunks.length = 0; mic.busy = false; return; }
    if (result !== 'ok'){ chunks.length = 0; await sayP('noHear', null, 9); mic.busy = false; return; }
    // the part with the voice, played back higher and faster
    const take = chunks.slice(startIdx);
    const len = take.reduce((n, c) => n + c.length, 0);
    const buf = AC.createBuffer(1, len, AC.sampleRate);
    const ch = buf.getChannelData(0); let o = 0;
    for (const c of take){ ch.set(c, o); o += c.length; }
    chunks.length = 0;
    await wait(250);
    const s = AC.createBufferSource(); s.buffer = buf; s.playbackRate.value = 1.55;
    const g = AC.createGain(); g.gain.value = muted ? 0 : 2.2;
    const an = AC.createAnalyser(); an.fftSize = 512;
    s.connect(g); g.connect(an); an.connect(AC.destination);
    const lv = new Uint8Array(an.fftSize);
    let playing = true;
    mic.abort = () => { try { s.stop(); } catch (e) {} };
    const mouthLoop = () => {
      if (!playing) return;
      an.getByteTimeDomainData(lv);
      let m = 0; for (let i = 0; i < lv.length; i++) m = Math.max(m, Math.abs(lv[i] - 128));
      Pet.mouthOpen(m > 14);
      requestAnimationFrame(mouthLoop);
    };
    s.onended = () => {
      playing = false; mic.abort = null; Pet.mouthOpen(false); Pet.expr('happy', 1400); Pet.flash('hop', 600); sfx.giggle();
      const h = Pet.headTop(); FX.emit('note', h.x, h.y + 30, 4, { size: 16 });
      addNeed('fun', 8);
      mic.busy = false;
    };
    s.start(); mouthLoop();
  } catch (err){
    cleanup();
    mic.busy = false; mic.abort = null;
    if (err && (err.name === 'NotAllowedError' || err.name === 'SecurityError' || err.name === 'NotFoundError')){ mic.denied = true; ROOM_SETUP.home(); }
  }
}
