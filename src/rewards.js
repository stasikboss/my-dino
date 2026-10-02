/* ---------- rewards: stickers, the daily surprise gift, growing up ---------- */
const GIFT_SVG = `<svg viewBox="0 0 100 100"><rect x="16" y="44" width="68" height="46" rx="8" fill="#ff7aa8" stroke="${INK}" stroke-width="4"/>
  <rect x="10" y="32" width="80" height="16" rx="6" fill="#ff9ec4" stroke="${INK}" stroke-width="4"/>
  <path d="M50 32 V90" stroke="#ffd23a" stroke-width="10"/><path d="M50 32 V90" stroke="${INK}" stroke-width="2" opacity=".25"/>
  <path d="M50 32 C36 14 22 22 34 32 Z M50 32 C64 14 78 22 66 32 Z" fill="#ffd23a" stroke="${INK}" stroke-width="3.5" stroke-linejoin="round"/></svg>`;

let giftPending = false, giftEl = null, giftBusy = false;
const revealEl = $('reveal');

/* A new sticker: picks one not collected yet, saves it, and shows it big. Resolves when the reveal closes. */
function earnSticker(){
  const missing = STICKERS.filter(s => !stickers.includes(s.id));
  if (!missing.length) return Promise.resolve(null);
  const st = pick(missing);
  stickers.push(st.id); saveStickers();
  return showReveal(st).then(() => st);
}
function showReveal(st){
  return new Promise(res => {
    revealEl.textContent = '';
    const card = document.createElement('div'); card.className = 'reveal-card'; card.dir = 'rtl';
    card.innerHTML = `<span class="reveal-kicker">מדבקה חדשה!</span><span class="sticker big">${stickerSvg(st)}</span><span class="reveal-name">${st.he}</span><span class="reveal-count">${stickers.length} מתוך ${STICKERS.length} מדבקות</span>`;
    revealEl.append(card);
    revealEl.hidden = false;
    sfx.hatch();
    FX.emit('confetti', innerWidth / 2, innerHeight * 0.35, 46, { speed: 360, g: 420, size: 11 });
    const done = () => { if (revealEl.hidden) return; revealEl.hidden = true; revealEl.onclick = null; clearTimeout(timer); res(); };
    const timer = setTimeout(done, 5200);
    setTimeout(() => { revealEl.onclick = () => { initAudio(); sfx.tap(); done(); }; }, 600);
    sayP(stickers.length === STICKERS.length ? 'allStickers' : 'newSticker', { st: { he: st.he, ru: st.ru, en: st.en } }, 9);
  });
}

/* The surprise gift: once a day, a present waits in the home. Tap it to open. */
function giftCheck(){
  if (store.get('ymd-gift', '') !== dayKey() && STICKERS.some(s => !stickers.includes(s.id))) giftPending = true;
}
function placeGift(){
  const show = giftPending && inPlay && room === 'home' && !bedtime && !sleeping && !gameOn;
  if (!show){ if (giftEl) giftEl.hidden = true; return; }
  if (!giftEl){
    giftEl = document.createElement('button');
    giftEl.type = 'button'; giftEl.className = 'gift'; giftEl.setAttribute('aria-label', 'מתנה');
    giftEl.append(itemPic('gift', GIFT_SVG, 120));
    giftEl.addEventListener('click', openGift);
    document.body.append(giftEl);
  }
  if (giftEl.hidden || !giftEl.dataset.shown){
    giftEl.hidden = false; giftEl.dataset.shown = '1';
    giftEl.classList.remove('opening'); void giftEl.offsetWidth; giftEl.classList.add('arrive');
    setTimeout(() => {
      if (!giftPending || giftEl.hidden) return;
      const r = giftEl.getBoundingClientRect();
      Pet.look(r.left + r.width / 2, r.top + r.height / 2); lookUntil = performance.now() + 2500;
      say('giftHere', null, 6);
    }, 900);
  }
}
async function openGift(){
  if (giftBusy || !giftPending) return;
  giftBusy = true;
  initAudio();
  const r = giftEl.getBoundingClientRect();
  giftEl.classList.remove('arrive'); giftEl.classList.add('opening');
  sfx.whoosh(); buzz(30);
  Pet.act('surprise');
  await wait(650);
  sfx.sparkle();
  FX.emit('confetti', r.left + r.width / 2, r.top + r.height / 2, 34, { speed: 320, g: 400, size: 10 });
  FX.emit('sparkle', r.left + r.width / 2, r.top + r.height / 2, 12, { speed: 220 });
  giftEl.hidden = true; giftEl.dataset.shown = '';
  giftPending = false; store.set('ymd-gift', dayKey());
  addNeed('fun', 10);
  await earnSticker();
  Pet.act('dance', { dur: 2.4 });
  giftBusy = false;
}

/* The album page of stickers */
function renderStickerPage(cards){
  cards.textContent = '';
  const grid = document.createElement('div'); grid.className = 'sticker-grid';
  for (const st of STICKERS){
    const has = stickers.includes(st.id);
    const b = document.createElement('button');
    b.type = 'button'; b.className = 'sticker-cell' + (has ? '' : ' locked');
    b.setAttribute('aria-label', has ? st.he : 'מדבקה שעוד לא נאספה');
    b.innerHTML = has ? `<span class="sticker">${stickerSvg(st)}</span>` : '<span class="sticker-q">?</span>';
    b.addEventListener('click', () => { initAudio(); if (has){ sfx.pop(); sayFrom({ he: [st.he + '!'], ru: [st.ru + '!'], en: [st.en + '!'] }, null, 6); } else { sfx.nope(); say('stickerLocked', null, 6); } });
    grid.append(b);
  }
  cards.append(grid);
}

/* ---------- painting the home: colors that open up as stickers are collected ---------- */
const THEMES = [
  { sw: ['#ffe2c2', '#ff9a8f'], need: 0 }, { sw: ['#dff5e8', '#6fc4a0'], need: 3 }, { sw: ['#dcefff', '#6aaeee'], need: 6 },
  { sw: ['#ece4ff', '#b29af0'], need: 9 }, { sw: ['#fff4c8', '#ff9a5c'], need: 12 }
];
const PAINT_SVG = `<svg viewBox="0 0 64 64"><rect x="10" y="10" width="40" height="16" rx="7" fill="#ff9ec4" stroke="${INK}" stroke-width="3.5"/>
  <path d="M50 18 H56 V32 H32 V40" fill="none" stroke="${INK}" stroke-width="3.5" stroke-linejoin="round"/><rect x="27" y="40" width="10" height="18" rx="4" fill="#4fb8ff" stroke="${INK}" stroke-width="3.5"/></svg>`;
let homeTheme = (() => { const v = store.get('ymd-theme', 0); return Number.isInteger(v) && v >= 0 && v < THEMES.length ? v : 0; })();
function applyTheme(){
  for (let i = 1; i < THEMES.length; i++) document.body.classList.toggle('theme-' + i, homeTheme === i);
  if (World.on) try { World.E.setTheme('home', homeTheme); } catch (e) {}
}
const sheetTitle = $('sheet-title');
function openPaint(){
  closeWardrobe();
  sheetTitle.textContent = 'צבע לחדר';
  outfitsEl.textContent = '';
  THEMES.forEach((th, i) => {
    const b = document.createElement('button');
    b.type = 'button'; b.className = 'outfit-btn theme-btn';
    const open = stickers.length >= th.need;
    if (!open) b.classList.add('locked');
    b.setAttribute('aria-pressed', String(homeTheme === i));
    b.setAttribute('aria-label', open ? 'צבע ' + (i + 1) : 'נפתח ב־' + th.need + ' מדבקות');
    b.innerHTML = `<span class="swatch" style="--a:${th.sw[0]};--b:${th.sw[1]}"></span>` + (open ? '' : `<span class="need">★${th.need}</span>`);
    b.addEventListener('click', () => {
      initAudio();
      if (!open){ sfx.nope(); const n = th.need; say('themeLocked', { nst: { he: n + ' מדבקות', ru: n + (n === 3 ? ' наклейки' : ' наклеек'), en: n + ' stickers' } }, 6); return; }
      if (homeTheme === i) return;
      homeTheme = i; store.set('ymd-theme', i); applyTheme();
      sfx.sparkle(); Pet.act('surprise'); say('themeNew', null, 5);
      openPaint();
    });
    outfitsEl.append(b);
  });
  const was = wardrobeEl.hidden;
  wardrobeEl.hidden = false;
  if (was) World.layout(true);
}
