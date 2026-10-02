/* ---------- learning games: dig a fossil, who eats what, whose shadow, egg or born, who is bigger ---------- */
const gameEl = $('game'), gameBody = $('game-body'), gameDots = $('game-dots');
const GAME_ICON = {
  dig: `<svg viewBox="0 0 100 80"><ellipse cx="50" cy="62" rx="46" ry="16" fill="#e8c27a" stroke="${INK}" stroke-width="4"/>
    <path d="M28 54 Q34 44 40 52 L60 46 Q64 36 72 44 Q78 52 68 56 L48 62 Q44 70 36 64 Q26 62 28 54 Z" fill="#fff5e2" stroke="${INK}" stroke-width="3.5" stroke-linejoin="round"/>
    <path d="M70 8 L56 34" stroke="${INK}" stroke-width="10" stroke-linecap="round"/><path d="M70 8 L56 34" stroke="#c98a4b" stroke-width="5" stroke-linecap="round"/>
    <path d="M50 30 L62 38 L54 46 L44 38 Z" fill="#ff8a5c" stroke="${INK}" stroke-width="3" stroke-linejoin="round"/></svg>`,
  eats: `<svg viewBox="0 0 100 80"><ellipse cx="50" cy="56" rx="44" ry="16" fill="#fff" stroke="${INK}" stroke-width="4"/>
    <g transform="translate(14 14) scale(.55)">${FOOD_ART.meat.replace(/<\/?svg[^>]*>/g, '')}</g><g transform="translate(50 12) scale(.55)">${FOOD_ART.fern.replace(/<\/?svg[^>]*>/g, '')}</g>
    <text x="50" y="30" text-anchor="middle" font-family="Fredoka, sans-serif" font-weight="700" font-size="30" fill="#ff5d8f" stroke="${INK}" stroke-width="2">?</text></svg>`,
  shadow: `<svg viewBox="0 0 100 80"><g fill="#2a2f45"><path d="M18 70 L22 48 C14 40 16 22 34 18 C50 14 62 20 64 32 C76 34 88 44 94 62 C80 56 70 56 62 58 L64 70 L54 70 L52 60 L36 60 L34 70 Z"/></g>
    <circle cx="36" cy="30" r="3" fill="#fff"/></svg>`,
  egg: `<svg viewBox="0 0 100 80"><path d="M30 12 C44 12 50 34 50 50 C50 64 42 72 30 72 C18 72 10 64 10 50 C10 34 16 12 30 12 Z" fill="#fff5e2" stroke="${INK}" stroke-width="4"/>
    <g fill="#9edc8a"><circle cx="24" cy="38" r="5"/><circle cx="36" cy="54" r="6"/><circle cx="26" cy="62" r="3.5"/></g>
    <path d="M58 46 H94 Q92 72 76 72 Q60 72 58 46 Z" fill="#e8c27a" stroke="${INK}" stroke-width="4" stroke-linejoin="round"/><path d="M60 52 H92" stroke="#c98a4b" stroke-width="3"/>
    <circle cx="76" cy="40" r="11" fill="#a6b5d0" stroke="${INK}" stroke-width="3.5"/><circle cx="72" cy="38" r="2" fill="${INK}"/><circle cx="80" cy="38" r="2" fill="${INK}"/></svg>`,
  size: `<svg viewBox="0 0 120 80"><rect x="10" y="10" width="44" height="62" rx="12" fill="#9a8cf0" stroke="${INK}" stroke-width="4"/>
    <rect x="70" y="42" width="24" height="30" rx="8" fill="#ffd35c" stroke="${INK}" stroke-width="4"/>
    <path d="M104 14 V70 M98 20 L104 12 L110 20 M98 64 L104 72 L110 64" fill="none" stroke="${INK}" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></svg>`
};
const GAMES = [
  { id: 'dig', label: 'חופרים מאובן' },
  { id: 'eats', label: 'מי אוכל מה?' },
  { id: 'shadow', label: 'של מי הצל?' },
  { id: 'egg', label: 'ביצה או נולד?' },
  { id: 'size', label: 'מי יותר גדול?', wide: true }
];
let gamesPlayed = (() => { const r = store.get('ymd-games', {}), out = {}; if (isObj(r)) for (const g of ['dig', 'eats', 'shadow', 'egg', 'size']) if (r[g]) out[g] = Math.floor(cleanNum(r[g], 0, 1e6, 0)); return out; })();
function renderGames(){
  const g = $('games-grid');
  g.textContent = '';
  for (const gm of GAMES){
    const b = document.createElement('button');
    b.type = 'button'; b.className = 'game-tile' + (gm.wide ? ' wide' : ''); b.dir = 'rtl';
    b.innerHTML = `<span class="gi gi-${gm.id}">${GAME_ICON[gm.id]}</span>` + `<span>${gm.label}</span>` + (gamesPlayed[gm.id] ? `<span class="stars">★ ${gamesPlayed[gm.id]}</span>` : '');
    b.addEventListener('click', () => { initAudio(); sfx.tap(); startGame(gm.id); });
    g.append(b);
  }
}

let gameOn = null, gameToken = 0;
const alive = tok => gameOn && tok === gameToken;
function setDots(n, done){
  gameDots.textContent = '';
  for (let i = 0; i < n; i++){ const d = document.createElement('i'); if (i < done) d.className = 'done'; gameDots.append(d); }
}
function pickBtn(sp, cls = 'g-pick'){
  const b = document.createElement('button');
  b.type = 'button'; b.className = cls; b.dataset.sp = sp;
  b.setAttribute('aria-label', PET_NAMES[sp].he);
  b.append(friendPic(sp, { size: 220 }));
  return b;
}
function tapOnce(btns){
  return new Promise(res => {
    const on = e => { const b = e.currentTarget; initAudio(); res(b); };
    btns.forEach(b => b.addEventListener('click', on));
  });
}
function startGame(id){
  stopSpeech(); stopMic();
  gameOn = id; gameToken++;
  inPlay = false;
  gameEl.hidden = false;
  document.body.classList.add('in-game');
  gameEl.className = 'game g-' + id;
  bubbleAnchor = () => ({ x: innerWidth / 2, y: 0 });
  gameBody.textContent = '';
  closeWardrobe();
  const run = { dig: gameDig, eats: gameEats, shadow: gameShadow, egg: gameEgg, size: gameSize }[id];
  run(gameToken).catch(() => {});
}
function closeGame(){
  gameOn = null; gameToken++;
  gameEl.hidden = true;
  document.body.classList.remove('in-game');
  gameBody.textContent = '';
  stopSpeech();
  inPlay = true;
  bubbleAnchor = null;
  setRoom('play', true);
  if (pendingBed) startBedtime();
}
$('game-exit').addEventListener('click', () => { sfx.tap(); closeGame(); });

async function finishGame(tok, id){
  if (!alive(tok)) return;
  gamesPlayed[id] = (gamesPlayed[id] || 0) + 1; store.set('ymd-games', gamesPlayed);
  stats.games++; saveStats();
  addNeed('fun', 25); addNeed('energy', -4);
  sfx.win();
  FX.emit('confetti', innerWidth / 2, innerHeight * 0.3, 40, { speed: 340, g: 420, size: 11 });
  await sayP('gameDone', null, 9);
  if (!alive(tok)) return;
  const next = OUTFIT_ORDER.find(o => !owned.includes(o));
  closeGame();
  if (next){
    owned.push(next); store.set('ymd-owned', owned);
    setTimeout(() => { Pet.wear(next); FX.emit('sparkle', Pet.headTop().x, Pet.headTop().y, 14, { speed: 200 }); sfx.sparkle(); say('newHat', null, 9); }, 300);
  }
}

/* Who eats what: one food, two friends; tap the one who eats it. */
async function gameEats(tok){
  const rounds = ageCfg().rounds;
  setDots(rounds, 0);
  let lastFood = null;
  for (let r = 0; r < rounds; r++){
    if (!alive(tok)) return;
    let f;
    do { f = pick(FOOD_ORDER); } while (f === lastFood);
    lastFood = f;
    const eaters = SPECIES_ORDER.filter(s => DIET[s].includes(f));
    const others = SPECIES_ORDER.filter(s => !DIET[s].includes(f));
    const yes = pick(eaters), no = pick(others);
    const col = document.createElement('div'); col.className = 'g-col';
    const food = document.createElement('div'); food.className = 'g-food pop-in'; food.append(itemPic(f, FOOD_ART[f], 170));
    const row = document.createElement('div'); row.className = 'g-row';
    const cards = shuffle([yes, no]).map(s => pickBtn(s));
    row.append(...cards);
    col.append(food, row);
    gameBody.textContent = ''; gameBody.append(col);
    const fv = { food: FOODS[f], foodAcc: { he: FOODS[f].he, ru: FOODS[f].ruAcc, en: FOODS[f].en } };
    say('eatsAsk', fv, 9);
    for (;;){
      const b = await tapOnce(cards.filter(c => !c.classList.contains('fade')));
      if (!alive(tok)) return;
      if (b.dataset.sp === yes){
        stopSpeech();
        b.classList.add('right'); sfx.chomp(); sfx.yes();
        const rb = b.getBoundingClientRect(); FX.emit('heart', rb.left + rb.width / 2, rb.top + rb.height * 0.3, 6, { angle: -Math.PI / 2, speed: 160 });
        food.style.transition = 'transform .5s cubic-bezier(.3,.7,.4,1), opacity .5s';
        const fb = food.getBoundingClientRect();
        food.style.transform = `translate(${rb.left + rb.width / 2 - fb.left - fb.width / 2}px, ${rb.top + rb.height * 0.35 - fb.top - fb.height / 2}px) scale(.3)`;
        food.style.opacity = '0';
        if (!hasFact(yes, 'eats')) unlockFact(yes, 'eats', false);
        await sayP('eatsYes', Object.assign({ sp: yes }, fv, { pet: { he: PET_NAMES[yes].he, ru: cap(PET_NAMES[yes].ru), en: PET_NAMES[yes].en } }));
        break;
      }
      stopSpeech();
      b.classList.add('nope'); b.classList.add('fade'); sfx.nope();
      await sayP('eatsNo', { sp: b.dataset.sp, diet: DIET_TEXT[b.dataset.sp] });
      if (!alive(tok)) return;
    }
    if (!alive(tok)) return;
    setDots(rounds, r + 1);
    await wait(500);
  }
  finishGame(tok, 'eats');
}
const cap = s => s.charAt(0).toUpperCase() + s.slice(1);

/* Whose shadow: a silhouette and three friends. */
async function gameShadow(tok){
  const rounds = ageCfg().rounds;
  setDots(rounds, 0);
  const order = shuffle(SPECIES_ORDER);
  for (let r = 0; r < rounds; r++){
    if (!alive(tok)) return;
    const target = order[r % order.length];
    const opts3 = shuffle([target, ...shuffle(SPECIES_ORDER.filter(s => s !== target)).slice(0, profile.age <= 3 ? 1 : 2)]);
    const col = document.createElement('div'); col.className = 'g-col';
    const sh = document.createElement('div'); sh.className = 'g-target shadow pop-in'; sh.append(friendPic(target, { size: 300 }));
    const row = document.createElement('div'); row.className = 'g-row' + (opts3.length === 3 ? ' three' : '');
    const cards = opts3.map(s => pickBtn(s));
    row.append(...cards);
    col.append(sh, row);
    gameBody.textContent = ''; gameBody.append(col);
    say('shadowAsk', null, 9);
    let misses = 0;
    for (;;){
      const b = await tapOnce(cards.filter(c => !c.classList.contains('fade')));
      if (!alive(tok)) return;
      if (b.dataset.sp === target){
        stopSpeech();
        b.classList.add('right'); sh.classList.add('reveal'); sfx.yes(); sfx.voice(target);
        const rb = sh.getBoundingClientRect(); FX.emit('sparkle', rb.left + rb.width / 2, rb.top + rb.height / 2, 12, { speed: 220 });
        if (!hasFact(target, 'body')) unlockFact(target, 'body', false);
        await sayP('shadowYes', { sp: target });
        break;
      }
      stopSpeech();
      b.classList.add('nope', 'fade'); sfx.nope();
      misses++;
      await sayP('shadowHint', { sp: target, feature: FEATURE[target] });
      if (misses >= 2) cards.find(c => c.dataset.sp === target).classList.add('right');
      if (!alive(tok)) return;
    }
    setDots(rounds, r + 1);
    await wait(700);
  }
  finishGame(tok, 'shadow');
}

/* Egg or born: does this friend hatch, or is it born? */
const EGG_SVG = `<svg viewBox="0 0 100 100"><path d="M50 8 C72 8 84 44 84 62 C84 82 70 94 50 94 C30 94 16 82 16 62 C16 44 28 8 50 8 Z" fill="#fff5e2" stroke="${INK}" stroke-width="5"/>
  <g fill="#9edc8a"><circle cx="38" cy="40" r="7"/><circle cx="62" cy="62" r="9"/><circle cx="40" cy="74" r="5"/><circle cx="62" cy="30" r="4"/></g></svg>`;
const BORN_SVG = `<svg viewBox="0 0 100 100"><path d="M10 52 H90 Q86 90 50 90 Q14 90 10 52 Z" fill="#e8c27a" stroke="${INK}" stroke-width="5" stroke-linejoin="round"/>
  <path d="M14 62 H86 M18 74 H82" stroke="#c98a4b" stroke-width="4"/><path d="M22 52 Q50 4 78 52" fill="none" stroke="${INK}" stroke-width="5"/>
  <path d="M26 52 Q50 36 74 52 Z" fill="#ff9ec4" stroke="${INK}" stroke-width="4" stroke-linejoin="round"/>
  <path d="M50 28 C46 22 38 24 40 30 L50 38 L60 30 C62 24 54 22 50 28 Z" fill="#ff5d8f" stroke="${INK}" stroke-width="3"/></svg>`;
async function gameEgg(tok){
  const rounds = Math.min(SPECIES_ORDER.length, ageCfg().rounds + 1);
  setDots(rounds, 0);
  // always at least one friend that is born, so the answer is not always "egg"
  let order = shuffle(SPECIES_ORDER).slice(0, rounds);
  if (order.every(s => FROM_EGG[s])) order[rounds - 1] = pick(['elephant', 'lion']);
  if (order.every(s => !FROM_EGG[s])) order[0] = pick(['trex', 'penguin']);
  for (let r = 0; r < rounds; r++){
    if (!alive(tok)) return;
    const sp = order[r];
    const col = document.createElement('div'); col.className = 'g-col';
    const t = document.createElement('div'); t.className = 'g-target pop-in'; t.append(friendPic(sp, { stage: 0, pose: 'happy', size: 300 }));
    const row = document.createElement('div'); row.className = 'g-row';
    const egg = document.createElement('button'); egg.type = 'button'; egg.className = 'choice-btn'; egg.dataset.k = 'egg'; egg.innerHTML = EGG_SVG + '<span dir="rtl">ביצה</span>';
    const born = document.createElement('button'); born.type = 'button'; born.className = 'choice-btn'; born.dataset.k = 'born'; born.innerHTML = BORN_SVG + '<span dir="rtl">נולד</span>';
    row.append(egg, born);
    col.append(t, row);
    gameBody.textContent = ''; gameBody.append(col);
    say('eggAsk', { sp, pet: { he: PET_NAMES[sp].he, ru: PET_NAMES[sp].ru, en: PET_NAMES[sp].en } }, 9);
    const right = FROM_EGG[sp] ? 'egg' : 'born';
    for (;;){
      const b = await tapOnce([egg, born].filter(c => !c.classList.contains('fade')));
      if (!alive(tok)) return;
      stopSpeech();
      if (b.dataset.k === right){
        b.classList.add('right'); sfx.yes(); if (right === 'egg') sfx.crack();
        const rb = t.getBoundingClientRect(); FX.emit('heart', rb.left + rb.width / 2, rb.top + rb.height / 2, 8, { speed: 200 });
        if (!hasFact(sp, 'baby')) unlockFact(sp, 'baby', false);
        await sayFactP(sp, 'baby');
        break;
      }
      b.classList.add('nope', 'fade'); sfx.nope();
      await sayP('tryAgain');
      if (!alive(tok)) return;
    }
    setDots(rounds, r + 1);
    await wait(500);
  }
  finishGame(tok, 'egg');
}

/* Who is bigger: two friends at the same size; after the answer they grow or shrink to their real sizes. */
function sizePairs(){
  const out = [];
  for (const a of SPECIES_ORDER) for (const b of SPECIES_ORDER){
    if (a >= b) continue;
    if (SIZE_SKIP.some(([x, y]) => (x === a && y === b) || (x === b && y === a))) continue;
    const ra = REAL_SIZE[a], rb = REAL_SIZE[b];
    if (Math.max(ra, rb) / Math.min(ra, rb) < 1.3) continue;
    out.push([a, b]);
  }
  return out;
}
async function gameSize(tok){
  const rounds = ageCfg().rounds;
  setDots(rounds, 0);
  const pairs = shuffle(sizePairs());
  for (let r = 0; r < rounds; r++){
    if (!alive(tok)) return;
    const [a, b] = shuffle(pairs[r % pairs.length]);
    const big = REAL_SIZE[a] > REAL_SIZE[b] ? a : b, small = big === a ? b : a;
    const col = document.createElement('div'); col.className = 'g-col';
    const st = document.createElement('div'); st.className = 'size-stage';
    const cards = [a, b].map(s => pickBtn(s));
    cards.forEach(c => { c.style.width = '44%'; });
    st.append(...cards);
    col.append(st);
    gameBody.textContent = ''; gameBody.append(col);
    say('sizeAsk', null, 9);
    const btn = await tapOnce(cards);
    if (!alive(tok)) return;
    stopSpeech();
    const ok = btn.dataset.sp === big;
    btn.classList.add(ok ? 'right' : 'nope');
    if (ok) sfx.yes(); else sfx.nope();
    // grow to real size: the bigger one stays, the smaller one shrinks (never smaller than a thumb)
    const ratio = REAL_SIZE[small] / REAL_SIZE[big];
    for (const c of cards) c.style.width = (c.dataset.sp === big ? 52 : Math.max(10, 52 * ratio)) + '%';
    sfx.stretch();
    if (!hasFact(big, 'size')) unlockFact(big, 'size', false);
    if (!hasFact(small, 'size')) unlockFact(small, 'size', false);
    const names = s => ({ he: PET_NAMES[s].he, ru: PET_NAMES[s].ru, en: PET_NAMES[s].enThe });
    const bigCap = { he: PET_NAMES[big].he, ru: cap(PET_NAMES[big].ru), en: cap(PET_NAMES[big].enThe) };
    await wait(900);
    if (!alive(tok)) return;
    await sayP(ok ? 'sizeYes' : 'sizeNo', { sp: big, big: ok ? bigCap : names(big), small: names(small) });
    if (!alive(tok)) return;
    setDots(rounds, r + 1);
    await wait(600);
  }
  finishGame(tok, 'size');
}

/* Dig: brush the sand away with a finger to find a dinosaur in the stone. */
async function gameDig(tok){
  const n = profile.age >= 5 ? 3 : 2;
  setDots(n, 0);
  const order = shuffle(['trex', 'trike', 'stego', 'brachio']);
  for (let r = 0; r < n; r++){
    if (!alive(tok)) return;
    const sp = order[r];
    const col = document.createElement('div'); col.className = 'g-col';
    const area = document.createElement('div'); area.className = 'dig-area';
    area.innerHTML = `<svg class="cracks" viewBox="0 0 100 100" preserveAspectRatio="none"><path d="M0 30 L20 34 L34 26 L60 36 L100 28 M0 74 L30 70 L52 80 L80 72 L100 78 M40 0 L44 18 M72 100 L68 84" fill="none" stroke="#7a5a32" stroke-width=".8"/></svg>
      <div class="fossil"></div><canvas></canvas>
      <svg class="sweep" viewBox="0 0 64 64">${TOOL_ART.brush.replace(/<\/?svg[^>]*>/g, '')}</svg>`;
    const fos = area.querySelector('.fossil');
    if (World.on){
      // in 3D the fossil is a picture; it wakes up by fading to a picture of the friend awake
      const a1 = document.createElement('div'); a1.className = 'f-sleep'; a1.append(friendPic(sp, { pose: 'sleep', size: 420 }));
      const a2 = document.createElement('div'); a2.className = 'f-awake'; a2.append(friendPic(sp, { pose: 'happy', size: 420 }));
      fos.append(a1, a2);
    } else fos.append(friendPic(sp, { pose: 'sleep', size: 420 }));
    col.append(area);
    gameBody.textContent = ''; gameBody.append(col);
    if (r === 0) say('digHello', null, 9);
    await new Promise(res => requestAnimationFrame(res));
    const cv = area.querySelector('canvas'), sweep = area.querySelector('.sweep');
    const rect = area.getBoundingClientRect();
    const dpr = Math.min(3, devicePixelRatio || 1);
    cv.width = Math.round(rect.width * dpr); cv.height = Math.round(rect.height * dpr);
    const c = cv.getContext('2d');
    c.scale(dpr, dpr);
    const W = rect.width, H = rect.height;
    // sand in layers, with pebbles
    const grd = c.createLinearGradient(0, 0, 0, H); grd.addColorStop(0, '#e9cf9c'); grd.addColorStop(0.5, '#ddbb7f'); grd.addColorStop(1, '#cfa86a');
    c.fillStyle = grd; c.fillRect(0, 0, W, H);
    for (let i = 0; i < 5; i++){ c.fillStyle = i % 2 ? 'rgba(160,110,50,.12)' : 'rgba(255,240,200,.18)'; c.fillRect(0, H * (0.12 + i * 0.18), W, H * 0.06); }
    for (let i = 0; i < 260; i++){ c.fillStyle = pick(['rgba(140,95,45,.35)', 'rgba(255,245,220,.5)', 'rgba(110,80,40,.25)']); c.beginPath(); c.arc(rand(0, W), rand(0, H), rand(1, 3.2), 0, 7); c.fill(); }
    for (let i = 0; i < 14; i++){ c.fillStyle = pick(['#b98f5a', '#a77d4a', '#c9a06a']); c.strokeStyle = 'rgba(60,40,20,.5)'; c.lineWidth = 1.5; c.beginPath(); c.ellipse(rand(0, W), rand(0, H), rand(5, 11), rand(4, 8), rand(0, 3), 0, 7); c.fill(); c.stroke(); }
    c.globalCompositeOperation = 'destination-out';
    const G = 20, grid = new Uint8Array(G * G);
    let cleared = 0;
    const brushR = W * 0.085;
    const done = await new Promise(res => {
      let last = null, lastSfx = 0;
      const at = e => { const b = cv.getBoundingClientRect(); return { x: e.clientX - b.left, y: e.clientY - b.top }; };
      const scrub = (p) => {
        sweep.style.display = 'none';
        const from = last || p;
        const steps = Math.max(1, Math.ceil(Math.hypot(p.x - from.x, p.y - from.y) / (brushR * 0.4)));
        for (let i = 1; i <= steps; i++){
          const x = from.x + (p.x - from.x) * i / steps, y = from.y + (p.y - from.y) * i / steps;
          c.beginPath(); c.arc(x, y, brushR, 0, 7); c.fill();
          const gx0 = Math.max(0, Math.floor((x - brushR) / W * G)), gx1 = Math.min(G - 1, Math.floor((x + brushR) / W * G));
          const gy0 = Math.max(0, Math.floor((y - brushR) / H * G)), gy1 = Math.min(G - 1, Math.floor((y + brushR) / H * G));
          for (let gy = gy0; gy <= gy1; gy++) for (let gx = gx0; gx <= gx1; gx++){
            const cx = (gx + 0.5) / G * W, cy = (gy + 0.5) / G * H;
            if (!grid[gy * G + gx] && Math.hypot(cx - x, cy - y) < brushR){ grid[gy * G + gx] = 1; cleared++; }
          }
        }
        last = p;
        const now = performance.now();
        if (now - lastSfx > 110){ lastSfx = now; sfx.dig(); const b = cv.getBoundingClientRect(); FX.emit('dust', b.left + p.x, b.top + p.y, 2, { speed: 80, size: 8, life: 0.8 }); }
        // the middle counts more: that's where the fossil is
        if (cleared / (G * G) > 0.6){ cv.onpointermove = null; res(true); }
      };
      cv.onpointerdown = e => { if (!alive(tok)) return res(false); initAudio(); try { cv.setPointerCapture(e.pointerId); } catch (err) {} last = null; scrub(at(e)); };
      cv.onpointermove = e => { if (e.buttons || e.pointerType === 'touch') scrub(at(e)); };
      cv.onpointerup = () => { last = null; };
      const watch = setInterval(() => { if (!alive(tok)){ clearInterval(watch); res(false); } }, 400);
    });
    if (!done || !alive(tok)) return;
    cv.style.transition = 'opacity .8s'; cv.style.opacity = '0';
    sfx.sparkle();
    const b = area.getBoundingClientRect();
    FX.emit('sparkle', b.left + b.width / 2, b.top + b.height / 2, 16, { speed: 260 });
    await sayP('digFound', { sp, pet: { he: PET_NAMES[sp].he, ru: PET_NAMES[sp].ru, en: PET_NAMES[sp].en } });
    if (!alive(tok)) return;
    if (!stats.digs){ await sayP('fossilWhat'); if (!alive(tok)) return; }
    stats.digs++; saveStats();
    area.querySelector('.fossil').classList.add('alive');
    sfx.voice(sp); sfx.hatch();
    if (!hasFact(sp, 'fun')) unlockFact(sp, 'fun', false);
    setDots(n, r + 1);
    await wait(1600);
  }
  finishGame(tok, 'dig');
}

/* ---------- the album ---------- */
let albumSp = null;
function renderAlbum(){
  const tabs = $('album-tabs'), cards = $('cards');
  if (!albumSp) albumSp = current || 'trex';
  tabs.textContent = '';
  for (const sp of SPECIES_ORDER){
    const b = document.createElement('button');
    b.type = 'button'; b.className = 'album-tab'; b.setAttribute('role', 'tab'); b.setAttribute('aria-selected', String(sp === albumSp));
    b.setAttribute('aria-label', PET_NAMES[sp].he);
    b.style.setProperty('--c', mix(SPECIES[sp].c.body, 'w', 0.62));
    b.append(friendPic(sp, { size: 84 }));
    b.insertAdjacentHTML('beforeend', `<span class="count">${factCount(sp)}/6</span>`);
    b.addEventListener('click', () => { initAudio(); sfx.tap(); albumSp = sp; renderAlbum(); sayFrom(LINES.pickFriend, { sp }, 5); });
    tabs.append(b);
  }
  cards.textContent = '';
  const fresh = new Set(todayFacts.map(([s, k]) => s + ':' + k));
  for (const k of FACT_KINDS){
    const has = hasFact(albumSp, k);
    const b = document.createElement('button');
    b.type = 'button'; b.className = 'fact-card' + (has ? '' : ' locked') + (fresh.has(albumSp + ':' + k) ? ' fresh' : '');
    b.dir = 'rtl';
    b.innerHTML = has ? `<span class="k">${FACT_ICON[k]}</span><span>${FACTS[albumSp][k].he}</span>` : `<span class="k">${FACT_ICON[k]}</span><span>?</span><span style="font-size:13px">${FACT_HOW[k]}</span>`;
    b.addEventListener('click', () => {
      initAudio();
      if (has){ stopSpeech(); sayFact(albumSp, k, 9); }
      else { sfx.nope(); say('cardLocked', null, 6); }
    });
    cards.append(b);
  }
}
