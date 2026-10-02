/* ---------- basics ---------- */
const $ = id => document.getElementById(id);
const rand = (a, b) => a + Math.random() * (b - a);
const pick = arr => arr[(Math.random() * arr.length) | 0];
const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
const shuffle = arr => { const a = arr.slice(); for (let i = a.length - 1; i > 0; i--){ const j = (Math.random() * (i + 1)) | 0; [a[i], a[j]] = [a[j], a[i]]; } return a; };
const wait = ms => new Promise(r => setTimeout(r, ms));
const UA = navigator.userAgent || '';
const isIOS = /iPad|iPhone|iPod/.test(UA) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
const isAndroid = /Android/i.test(UA);
const isAndroidInApp = isAndroid && (/; wv\)/.test(UA) || /FBAN|FBAV|FB_IAB|Instagram|Line\/|MicroMessenger/i.test(UA));
const isSamsungBrowser = /SamsungBrowser/i.test(UA);
const reduceMotion = !!(window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches);
const APP_URL = 'https://stasikboss.github.io/my-dino/play.html';

/* Per-device storage. Everything stays on this device; the game works without it. The fruit game lives on the same
   site, so a name a parent already typed there is used here too. */
const store = {
  get(k, d){ try { const v = localStorage.getItem(k); return v === null ? d : JSON.parse(v); } catch (e) { return d; } },
  set(k, v){ try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) {} }
};

/* ---------- the child ---------- */
const AGE = {
  3: { count: [1, 2], rounds: 4, session: 10 },
  4: { count: [1, 3], rounds: 5, session: 15 },
  5: { count: [2, 4], rounds: 5, session: 15 },
  6: { count: [2, 5], rounds: 6, session: 20 }
};
/* Saved data is checked as it is read: anything of the wrong type or with an unknown value falls back to a safe
   default, so a damaged or edited storage can never break the game or put unexpected text on screen. */
const isObj = v => !!v && typeof v === 'object' && !Array.isArray(v);
const cleanStr = (v, max) => typeof v === 'string' ? v.replace(/[\u0000-\u001f\u007f<>]/g, '').slice(0, max) : '';
const cleanNum = (v, min, max, d) => { const n = Number(v); return Number.isFinite(n) ? Math.min(max, Math.max(min, n)) : d; };
const cleanBool = (v, d) => typeof v === 'boolean' ? v : d;
// No name until a parent sets one (the fruit game's name is used when it was set on this device).
const DEFAULT_PROFILE = { he: '', ru: '', en: '', g: 'm', age: 4 };
const savedProfile = store.get('ymd-profile', null) || store.get('yfs-profile', null);
const profileWasSet = isObj(savedProfile);
let profile = (() => {
  const r = isObj(savedProfile) ? savedProfile : {};
  return { he: cleanStr(r.he, 20), ru: cleanStr(r.ru, 20), en: cleanStr(r.en, 20), g: r.g === 'f' ? 'f' : 'm', age: AGE[r.age] ? Number(r.age) : 4 };
})();
const ageCfg = () => AGE[profile.age] || AGE[4];
const nameIn = lang => String(profile[lang] || '').trim();
function saveProfile(){ store.set('ymd-profile', profile); }
let opts = (() => { const r = store.get('ymd-opts', {}); const o = isObj(r) ? r : {}; return { mic: cleanBool(o.mic, true), count: cleanBool(o.count, true), needs: cleanBool(o.needs, true), three: cleanBool(o.three, true), music: cleanBool(o.music, true) }; })();

/* ---------- the pets, the album, the hats ---------- */
let current = store.get('ymd-current', null);
if (typeof current !== 'string' || !SPECIES_ORDER.includes(current)) current = null;
const DAY_KEY = /^\d{4}-\d{1,2}-\d{1,2}$/;
let pets = (() => {
  const r = store.get('ymd-pets', {}), out = {};
  if (!isObj(r)) return out;
  for (const sp of SPECIES_ORDER){
    const d = r[sp]; if (!isObj(d)) continue;
    const outfit = (typeof d.outfit === 'string' && OUTFIT_ORDER.includes(d.outfit)) ? d.outfit : null;
    const days = Array.isArray(d.days) ? d.days.filter(k => typeof k === 'string' && (DAY_KEY.test(k) || k.length <= 12)).slice(-60) : [];
    out[sp] = { born: d.born === true, days, outfit };
  }
  return out;
})();
let facts = (() => {
  const r = store.get('ymd-facts', {}), out = {};
  if (!isObj(r)) return out;
  for (const sp of SPECIES_ORDER){
    if (!isObj(r[sp])) continue;
    out[sp] = {};
    for (const k of FACT_KINDS) if (r[sp][k]) out[sp][k] = cleanNum(r[sp][k], 0, 9e15, 1);
  }
  return out;
})();
let owned = (() => { const r = store.get('ymd-owned', ['party', 'cap']); return Array.isArray(r) ? OUTFIT_ORDER.filter(o => r.includes(o)) : ['party', 'cap']; })();
let stats = (() => { const r = store.get('ymd-stats', {}), o = isObj(r) ? r : {}, out = {}; for (const k of ['games', 'feeds', 'baths', 'sleeps', 'digs']) out[k] = Math.floor(cleanNum(o[k], 0, 1e7, 0)); return out; })();
const savePets = () => store.set('ymd-pets', pets);
const saveFacts = () => store.set('ymd-facts', facts);
const saveStats = () => store.set('ymd-stats', stats);
const petData = sp => (pets[sp] = pets[sp] || { born: false, days: [], outfit: null });
const stageOf = sp => { const n = (petData(sp).days || []).length; return n >= 6 ? 2 : n >= 3 ? 1 : 0; };
const factCount = sp => FACT_KINDS.filter(k => facts[sp] && facts[sp][k]).length;

/* ---------- time: one sitting, the day, and the limits a parent can set ---------- */
const keyOf = d => d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate();
const dayKey = () => keyOf(new Date());
let days = (() => { const r = store.get('ymd-days', {}), out = {}; if (!isObj(r)) return out; for (const k of Object.keys(r)) if (DAY_KEY.test(k)) out[k] = cleanNum(r[k], 0, 86400, 0); return out; })();
const todaySec = () => days[dayKey()] || 0;
let daysSavedAt = 0;
function saveDays(force){
  const now = performance.now();
  if (!force && now - daysSavedAt < 5000) return;
  daysSavedAt = now;
  const cutoff = new Date(); cutoff.setDate(cutoff.getDate() - 21);
  for (const k of Object.keys(days)){ const p = k.split('-').map(Number); if (new Date(p[0], p[1] - 1, p[2]) < cutoff) delete days[k]; }
  store.set('ymd-days', days);
}
const SESSIONS = [10, 15, 20];
let sessionMin = Number(store.get('ymd-session-min', ageCfg().session));
if (!SESSIONS.includes(sessionMin)) sessionMin = 15;
let limits = (() => { const r = store.get('ymd-limits', {}), o = isObj(r) ? r : {}; return { daily: [0, 20, 30, 45].includes(Number(o.daily)) ? Number(o.daily) : 0, bedOn: o.bedOn === true, bed: typeof o.bed === 'string' && /^\d{2}:\d{2}$/.test(o.bed) ? o.bed : '19:30' }; })();
function inQuietHours(){
  const parts = String(limits.bed || '19:30').split(':').map(Number);
  const bedMin = (parts[0] || 0) * 60 + (parts[1] || 0);
  const wake = 6 * 60;
  const start = Math.max(wake + 1, bedMin - 120);
  const d = new Date(), nowMin = d.getHours() * 60 + d.getMinutes();
  return nowMin >= start || nowMin < wake;
}
function lockReason(){
  if (limits.bedOn && inQuietHours()) return 'bed';
  if (limits.daily > 0 && todaySec() >= limits.daily * 60) return 'daily';
  return null;
}

/* ---------- sound effects, made on the fly (no audio files) ---------- */
let AC = null, master = null, noiseBuf = null, silentEl = null, lastUnlock = 0, fxBus = null, musicBus = null;
const mic = { busy: false };
let sleeping = false;
let muted = store.get('ymd-muted', false) === true;
const VOL = 0.7, VOL_DUCK = 0.3;
const SILENT_WAV = 'data:audio/wav;base64,UklGRkQDAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YSADAACAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgA==';
function initAudio(){
  lastUnlock = performance.now();
  try { if (navigator.audioSession && navigator.audioSession.type !== 'playback' && !mic.busy) navigator.audioSession.type = 'playback'; } catch (e) {}
  try {
    if (!AC){
      const Ctx = window.AudioContext || window.webkitAudioContext; if (!Ctx) return;
      AC = new Ctx();
      const comp = AC.createDynamicsCompressor(); comp.threshold.value = -14; comp.ratio.value = 4;
      master = AC.createGain(); master.gain.value = muted ? 0 : VOL;
      // the compressor keeps the loud moments in check, so everything can sit a little louder after it
      const makeup = AC.createGain(); makeup.gain.value = 2;
      master.connect(comp); comp.connect(makeup); makeup.connect(AC.destination);
      const len = Math.floor(AC.sampleRate * 1.2);
      noiseBuf = AC.createBuffer(1, len, AC.sampleRate);
      const d = noiseBuf.getChannelData(0); for (let i = 0; i < len; i++) d[i] = Math.random() * 2 - 1;
      // two buses: effects and music; both get a touch of a soft room reverb
      fxBus = AC.createGain(); fxBus.connect(master);
      musicBus = AC.createGain(); musicBus.gain.value = opts.music ? 1 : 0; musicBus.connect(master);
      try {
        const conv = AC.createConvolver(); conv.buffer = impulse(1.5, 2.8);
        const s1 = AC.createGain(); s1.gain.value = 0.16; fxBus.connect(s1); s1.connect(conv);
        const s2 = AC.createGain(); s2.gain.value = 0.28; musicBus.connect(s2); s2.connect(conv);
        conv.connect(master);
      } catch (e) {}
    }
    if (AC.state !== 'running'){ const p = AC.resume(); if (p && p.catch) p.catch(() => {}); }
  } catch (e) { AC = null; }
  // music asked for before the first touch starts now
  try { if (AC && Music.name && !Music.timer) Music.play(Music.name); } catch (e) {}
  // older iPhones: a silent looping <audio> lets Web Audio play with the ring/silent switch on
  if (isIOS && !('audioSession' in navigator)){
    try {
      if (!silentEl){ silentEl = document.createElement('audio'); silentEl.src = SILENT_WAV; silentEl.loop = true; silentEl.setAttribute('playsinline', ''); silentEl.setAttribute('x-webkit-airplay', 'deny'); }
      if (silentEl.paused){ const p = silentEl.play(); if (p && p.catch) p.catch(() => {}); }
    } catch (e) {}
  }
}
['touchend', 'pointerup', 'click', 'keydown'].forEach(type => document.addEventListener(type, () => {
  if (!AC || AC.state !== 'running' || (silentEl && silentEl.paused)) initAudio();
}, { capture: true, passive: true }));
function impulse(sec, decay){
  const n = Math.floor(AC.sampleRate * sec), b = AC.createBuffer(2, n, AC.sampleRate);
  for (let c = 0; c < 2; c++){ const d = b.getChannelData(c); for (let i = 0; i < n; i++) d[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / n, decay); }
  return b;
}
const audioOn = () => !!(AC && master && !muted && (AC.state === 'running' || performance.now() - lastUnlock < 1000));
function envelope(g, t0, peak, dur, attack = 0.008){
  g.gain.setValueAtTime(0.0001, t0);
  g.gain.exponentialRampToValueAtTime(peak, t0 + attack);
  g.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
}
function noise(dur, type, f0, f1, q, vol, when = 0){
  if (!audioOn()) return;
  const t0 = AC.currentTime + when;
  const src = AC.createBufferSource(); src.buffer = noiseBuf;
  const fl = AC.createBiquadFilter(); fl.type = type; fl.Q.value = q;
  fl.frequency.setValueAtTime(f0, t0); fl.frequency.exponentialRampToValueAtTime(f1, t0 + dur);
  const g = AC.createGain(); envelope(g, t0, vol, dur, 0.01);
  src.connect(fl); fl.connect(g); g.connect(fxBus || master);
  src.start(t0, Math.random() * 0.4); src.stop(t0 + dur + 0.05);
}
function tone(freq, dur, type, vol, when = 0, glideTo = 0, vib = 0){
  if (!audioOn()) return;
  const t0 = AC.currentTime + when;
  const o = AC.createOscillator(); o.type = type;
  o.frequency.setValueAtTime(freq, t0);
  if (glideTo) o.frequency.exponentialRampToValueAtTime(glideTo, t0 + dur);
  if (vib){ const l = AC.createOscillator(), lg = AC.createGain(); l.frequency.value = vib; lg.gain.value = freq * 0.05; l.connect(lg); lg.connect(o.frequency); l.start(t0); l.stop(t0 + dur + 0.05); }
  const g = AC.createGain(); envelope(g, t0, vol, dur);
  o.connect(g); g.connect(fxBus || master);
  o.start(t0); o.stop(t0 + dur + 0.05);
}
/* A little voice: a buzzy tone shaped by two vowel resonances, with a pitch that rises and falls. */
function voc(f0, dur, when, o = {}){
  if (!audioOn()) return;
  const t0 = AC.currentTime + when;
  const osc = AC.createOscillator(); osc.type = 'sawtooth';
  osc.frequency.setValueAtTime(f0, t0);
  if (o.peak) osc.frequency.linearRampToValueAtTime(o.peak, t0 + dur * 0.35);
  osc.frequency.exponentialRampToValueAtTime(o.end || f0 * 0.85, t0 + dur);
  const l = AC.createOscillator(), lg = AC.createGain(); l.frequency.value = o.vib || 6; lg.gain.value = f0 * 0.035; l.connect(lg); lg.connect(osc.frequency);
  const out = AC.createGain(); envelope(out, t0, o.vol || 0.5, dur, 0.025);
  for (const [F, Q, k] of [[o.F1 || 700, 5, 1], [o.F2 || 1200, 7, 0.6]]){
    const bp = AC.createBiquadFilter(); bp.type = 'bandpass'; bp.frequency.value = F; bp.Q.value = Q;
    const gk = AC.createGain(); gk.gain.value = k;
    osc.connect(bp); bp.connect(gk); gk.connect(out);
  }
  out.connect(fxBus || master);
  osc.start(t0); osc.stop(t0 + dur + 0.05); l.start(t0); l.stop(t0 + dur + 0.05);
}
const NOTE = n => 440 * Math.pow(2, (n - 69) / 12);
const sfx = {
  tap(){ tone(660, 0.09, 'triangle', 0.12); },
  pop(){ tone(rand(700, 1100), 0.12, 'sine', 0.13, 0, 260); },
  boing(){ tone(220, 0.35, 'triangle', 0.18, 0, 520); },
  giggle(){ [0, 1, 2, 3].forEach(i => tone(880 + (i % 2) * 140, 0.09, 'triangle', 0.1, i * 0.085, 0, 18)); },
  chomp(){ noise(0.07, 'bandpass', 900, 500, 2, 0.35); noise(0.07, 'bandpass', 800, 450, 2, 0.3, 0.16); noise(0.06, 'bandpass', 700, 400, 2, 0.25, 0.32); },
  yum(){ [0, 4, 7].forEach((s, i) => tone(NOTE(72 + s), 0.18, 'triangle', 0.13, 0.45 + i * 0.08)); },
  nope(){ tone(330, 0.13, 'square', 0.06); tone(262, 0.2, 'square', 0.06, 0.14); },
  bubble(){ tone(rand(500, 900), 0.08, 'sine', 0.09, 0, rand(1200, 1600)); },
  squeak(){ tone(rand(1300, 1700), 0.06, 'sine', 0.05, 0, rand(1800, 2200)); },
  water(){ noise(0.5, 'bandpass', 3000, 2000, 0.8, 0.12); },
  sparkle(){ for (let i = 0; i < 5; i++) tone(NOTE(84 + [0, 4, 7, 12, 16][i]), 0.16, 'sine', 0.07, i * 0.06); },
  whoosh(){ noise(0.28, 'bandpass', 400, 2400, 1.2, 0.14); },
  flush(){ noise(1.6, 'lowpass', 2400, 300, 0.7, 0.3); noise(1.2, 'bandpass', 600, 1500, 1.5, 0.12, 0.2); },
  plop(){ tone(420, 0.16, 'sine', 0.22, 0, 120); },
  click(){ noise(0.03, 'highpass', 3000, 3000, 1, 0.3); tone(1800, 0.03, 'square', 0.04); },
  crack(){ noise(0.09, 'highpass', 2500, 1200, 1, 0.4); noise(0.06, 'bandpass', 1800, 900, 3, 0.3, 0.05); },
  hatch(){ [0, 4, 7, 12, 16, 19].forEach((s, i) => tone(NOTE(67 + s), 0.32, 'triangle', 0.13, i * 0.09)); },
  win(){ [0, 4, 7, 12, 7, 12, 16].forEach((s, i) => tone(NOTE(67 + s), 0.26, 'triangle', 0.13, i * 0.1)); },
  yes(){ tone(NOTE(76), 0.16, 'triangle', 0.14); tone(NOTE(83), 0.26, 'triangle', 0.14, 0.12); },
  dig(){ noise(0.12, 'bandpass', rand(600, 1000), rand(1200, 2200), 1.2, 0.08); },
  yawn(){ tone(320, 1.1, 'sine', 0.08, 0, 180, 5); },
  snore(){ noise(1.1, 'lowpass', 300, 160, 2, 0.07); },
  stretch(){ tone(260, 0.5, 'triangle', 0.1, 0, 520); },
  // reactions to touch
  purr(sp){
    if (sp === 'lion'){ for (let i = 0; i < 12; i++) noise(0.05, 'lowpass', 240, 170, 5, 0.16, i * 0.065); }
    else if (sp === 'penguin'){ [0, 0.12, 0.24].forEach((t, i) => tone(900 + i * 80, 0.1, 'sine', 0.06, t, 1100 + i * 80)); }
    else { const f = sp === 'trex' || sp === 'elephant' ? 300 : 420; tone(f, 0.45, 'sine', 0.1, 0, f * 1.45, 5); tone(f * 1.5, 0.35, 'sine', 0.04, 0.12, f * 2); }
  },
  ahh(){ tone(480, 0.22, 'sine', 0.07, 0, 600); tone(560, 0.26, 'sine', 0.08, 0.32, 720); },
  achoo(){ noise(0.34, 'bandpass', 4200, 1100, 0.9, 0.34); tone(740, 0.18, 'triangle', 0.08, 0, 300); },
  laugh(){ [0, 1, 2, 3, 4, 5].forEach(i => tone(780 - i * 40 + (i % 2) * 120, 0.08, 'triangle', 0.09, i * 0.095, 0, 22)); },
  dizzy(){ for (let i = 0; i < 6; i++) tone(950 - i * 90, 0.13, 'sine', 0.06, i * 0.08, 760 - i * 80); tone(200, 0.4, 'triangle', 0.1, 0.5, 420); },
  chomp1(){ noise(0.09, 'bandpass', rand(1100, 1400), 600, 1.1, 0.9); tone(rand(150, 190), 0.09, 'sine', 0.14, 0, 90); },
  bounce(){ tone(rand(170, 230), 0.12, 'sine', 0.16, 0, 110); },
  // a bouncy little tune for dancing (about four seconds)
  danceTune(){
    const mel = [72, 76, 79, 76, 74, 77, 81, 77, 72, 76, 79, 84, 83, 79, 76, 72];
    mel.forEach((n, i) => { tone(NOTE(n), 0.16, 'triangle', 0.07, i * 0.25); if (i % 2 === 0) tone(NOTE(n - 24), 0.2, 'sine', 0.08, i * 0.25); });
    for (let i = 0; i < 16; i++) noise(0.04, 'highpass', 6000, 6000, 1, i % 4 === 0 ? 0.08 : 0.03, i * 0.25);
  },
  tada(){ [0, 7, 12].forEach((s2, i) => tone(NOTE(72 + s2), 0.22, 'triangle', 0.1, i * 0.07)); },
  voice(sp){
    // each friend's own little voice when tapped: cute, never scary
    if (sp === 'trex'){ voc(150, 0.5, 0, { peak: 210, end: 120, F1: 750, F2: 1150, vol: 0.55 }); noise(0.4, 'lowpass', 700, 240, 3, 0.16); }
    else if (sp === 'lion'){ voc(170, 0.45, 0, { peak: 230, end: 130, F1: 800, F2: 1250, vol: 0.5 }); noise(0.36, 'bandpass', 480, 260, 2.5, 0.18); }
    else if (sp === 'elephant'){ tone(392, 0.5, 'sawtooth', 0.07, 0, 660, 6); voc(400, 0.5, 0, { peak: 620, end: 560, F1: 900, F2: 1600, vol: 0.4 }); }
    else if (sp === 'penguin'){ [0, 0.13, 0.26].forEach((t, i) => voc(620 + i * 40, 0.1, t, { peak: 820, end: 560, F1: 900, F2: 2400, vol: 0.45, vib: 10 })); }
    else if (sp === 'trike'){ voc(190, 0.24, 0, { peak: 240, end: 170, F1: 520, F2: 900, vol: 0.5 }); voc(170, 0.3, 0.26, { peak: 210, end: 140, F1: 480, F2: 860, vol: 0.45 }); }
    else if (sp === 'stego'){ voc(300, 0.18, 0, { peak: 360, end: 280, F1: 560, F2: 1800, vol: 0.45 }); voc(320, 0.2, 0.2, { peak: 400, end: 300, F1: 560, F2: 1800, vol: 0.45 }); }
    else if (sp === 'anky'){ voc(165, 0.2, 0, { peak: 205, end: 150, F1: 500, F2: 950, vol: 0.5 }); voc(150, 0.32, 0.24, { peak: 190, end: 120, F1: 470, F2: 900, vol: 0.48 }); noise(0.3, 'lowpass', 600, 260, 2, 0.08, 0.24); }
    else if (sp === 'kangaroo'){ [0, 0.11, 0.22].forEach(t => { noise(0.04, 'bandpass', 2000, 1400, 2.5, 0.7, t); tone(1500, 0.03, 'sine', 0.06, t, 1100); }); voc(360, 0.18, 0.36, { peak: 460, end: 340, F1: 700, F2: 1700, vol: 0.42 }); }
    else { voc(120, 0.7, 0, { peak: 150, end: 100, F1: 380, F2: 820, vol: 0.55, vib: 4 }); }
  },
  // a soft step; bigger friends step heavier
  step(sp){ const heavy = sp === 'trex' || sp === 'elephant' || sp === 'brachio' || sp === 'trike' || sp === 'anky'; noise(0.07, 'lowpass', heavy ? 260 : 520, heavy ? 140 : 300, 1.5, heavy ? 0.09 : 0.05); }
};
// A music box lullaby (Brahms' Wiegenlied, 1868), played softly while the pet sleeps.
const LULLABY = [[64, 1], [64, 1], [67, 3], [64, 1], [64, 1], [67, 3], [64, 1], [67, 1], [72, 2], [71, 2], [69, 2], [69, 2], [67, 2],
  [62, 1], [64, 1], [65, 2], [62, 2], [62, 1], [64, 1], [65, 4], [62, 1], [65, 1], [71, 1], [69, 1], [67, 2], [71, 2], [72, 4]];
let lullabyTimer = 0;
function playLullaby(){
  stopLullaby();
  if (!audioOn()) return;
  let t = 0;
  const beat = 0.34;
  for (const [n, d] of LULLABY){ tone(NOTE(n + 12), d * beat * 1.4, 'sine', 0.06, t); tone(NOTE(n + 24), 0.25, 'triangle', 0.015, t); t += d * beat; }
  lullabyTimer = setTimeout(() => { if (sleeping) playLullaby(); }, (t + 1.5) * 1000);
}
function stopLullaby(){ clearTimeout(lullabyTimer); lullabyTimer = 0; }
/* ---------- background music ----------
   A soft tune for each place, made on the spot with simple instruments (a kalimba, plucks, a music box, a bass,
   a shaker). Four chords to a loop, eighth notes; the melody uses notes that fit each chord, and every fourth time
   round it rests so the tune breathes. It plays quietly under everything, dips while the friend speaks, and stops
   while the friend sleeps (the lullaby plays then) or the microphone listens. */
const C_MAJ = [[0, 4, 7], [-3, 0, 4], [5, 9, 12], [7, 11, 14]];       // I vi IV V
const C_PLAIN = [[0, 4, 7], [5, 9, 12], [0, 4, 7], [7, 11, 14]];     // I IV I V
const SONGS = {
  theme: { bpm: 104, root: 60, prog: C_MAJ, lead: 'kalimba', arp: [0, 2, 1, 2, 0, 2, 1, 2], arpVoice: 'pluck', bass: true, shaker: true, vol: 1,
    mel: [[[0, 16, 1], [1, 19, 1], [2, 24, 2], [4, 19, 1], [5, 16, 1], [6, 19, 2], [8, 21, 2], [10, 19, 1], [11, 16, 1], [12, 12, 3], [16, 21, 2], [18, 24, 1], [19, 21, 1], [20, 17, 2], [22, 16, 2], [24, 19, 2], [26, 14, 1], [27, 16, 1], [28, 19, 3]],
          [[0, 24, 2], [2, 19, 2], [4, 16, 1], [5, 19, 1], [6, 24, 2], [8, 21, 3], [11, 24, 1], [12, 21, 2], [16, 17, 1], [17, 21, 1], [18, 24, 3], [22, 21, 2], [24, 23, 2], [26, 19, 2], [28, 14, 2], [30, 19, 2]]] },
  home: { bpm: 96, root: 60, prog: C_MAJ, lead: 'kalimba', arp: [0, 1, 2, 1, 0, 1, 2, 1], arpVoice: 'kalimba', bass: true, vol: 0.9,
    mel: [[[0, 16, 2], [2, 19, 2], [4, 24, 3], [8, 21, 2], [10, 16, 2], [12, 19, 3], [16, 17, 2], [18, 21, 2], [20, 24, 3], [24, 23, 2], [26, 19, 2], [28, 14, 3]],
          [[0, 19, 3], [3, 16, 1], [4, 12, 3], [8, 16, 3], [11, 21, 1], [12, 19, 3], [16, 21, 3], [19, 17, 1], [20, 12, 3], [24, 14, 2], [26, 19, 2], [28, 23, 3]]] },
  kitchen: { bpm: 112, root: 65, prog: C_MAJ, lead: 'pluck', arp: [0, -1, 1, 2, 0, -1, 2, 1], arpVoice: 'pluck', bass: true, shaker: true, vol: 0.85,
    mel: [[[0, 12, 1], [1, 16, 1], [2, 19, 1], [3, 24, 1], [4, 19, 2], [8, 21, 1], [9, 16, 1], [10, 21, 1], [11, 24, 1], [12, 21, 2], [16, 17, 1], [17, 21, 1], [18, 24, 1], [19, 29, 1], [20, 24, 2], [24, 19, 1], [25, 23, 1], [26, 26, 1], [27, 23, 1], [28, 19, 3]],
          [[0, 24, 2], [2, 24, 1], [3, 19, 1], [4, 16, 2], [8, 21, 2], [10, 21, 1], [11, 16, 1], [12, 12, 2], [16, 24, 2], [18, 21, 1], [19, 17, 1], [20, 21, 2], [24, 19, 2], [26, 23, 1], [27, 26, 1], [28, 31, 2]]] },
  bath: { bpm: 88, root: 67, prog: C_MAJ, lead: 'musicbox', arp: [0, 1, 2, 3, 2, 1, 0, 1], arpVoice: 'kalimba', bass: false, bubbles: true, vol: 0.8,
    mel: [[[0, 19, 3], [4, 16, 3], [8, 21, 3], [12, 16, 3], [16, 17, 3], [20, 21, 3], [24, 19, 4], [28, 14, 3]], [[0, 24, 4], [4, 19, 2], [6, 16, 2], [8, 12, 6], [16, 21, 4], [20, 17, 2], [22, 21, 2], [24, 19, 6]]] },
  bed: { bpm: 72, root: 65, prog: C_PLAIN, lead: 'musicbox', arp: [0, 1, 2, 1, 0, 1, 2, 1], arpVoice: 'musicbox', bass: false, vol: 0.7,
    mel: [[[0, 16, 3], [4, 19, 3], [8, 21, 3], [12, 17, 3], [16, 16, 3], [20, 12, 3], [24, 14, 4], [28, 11, 3]], [[0, 24, 4], [4, 19, 4], [8, 17, 4], [12, 21, 4], [16, 19, 4], [20, 16, 4], [24, 14, 6]]] },
  game: { bpm: 126, root: 62, prog: C_MAJ, lead: 'pluck', arp: [0, 2, 1, 2, 0, 2, 1, 2], arpVoice: 'pluck', bass: true, shaker: true, kick: true, vol: 0.9,
    mel: [[[0, 12, 1], [1, 16, 1], [2, 19, 1], [4, 24, 2], [6, 19, 2], [8, 21, 1], [9, 19, 1], [10, 16, 2], [12, 21, 2], [14, 24, 2], [16, 21, 1], [17, 24, 1], [18, 29, 2], [20, 24, 2], [22, 21, 2], [24, 23, 1], [25, 26, 1], [26, 31, 2], [28, 26, 2], [30, 23, 2]],
          [[0, 24, 2], [2, 19, 1], [3, 16, 1], [4, 19, 2], [6, 24, 2], [8, 28, 2], [10, 24, 1], [11, 21, 1], [12, 16, 2], [16, 17, 2], [18, 21, 1], [19, 24, 1], [20, 29, 2], [24, 26, 1], [25, 23, 1], [26, 19, 2], [28, 23, 4]]] },
  hatch: { bpm: 76, root: 57, prog: [[0, 3, 7], [-4, 0, 3], [3, 7, 10], [-2, 2, 5]], lead: 'musicbox', arp: [0, 1, 2, 3, 2, 1, 0, 1], arpVoice: 'kalimba', bass: false, vol: 0.75,
    mel: [[[0, 15, 4], [8, 12, 4], [16, 15, 4], [24, 17, 6]], [[0, 19, 4], [8, 15, 4], [16, 22, 4], [24, 17, 6]]] }
};
function mVoice(kind, midi, t, vol, out, len){
  const f = NOTE(midi);
  const g = AC.createGain(); g.connect(out);
  const osc = (type, freq, k, decay) => { const o = AC.createOscillator(); o.type = type; o.frequency.value = freq; const e = AC.createGain(); e.gain.setValueAtTime(0.0001, t); e.gain.exponentialRampToValueAtTime(vol * k, t + 0.006); e.gain.exponentialRampToValueAtTime(0.0001, t + decay); o.connect(e); e.connect(g); o.start(t); o.stop(t + decay + 0.05); };
  if (kind === 'kalimba'){ osc('sine', f, 1, 0.9); osc('sine', f * 5.4, 0.12, 0.12); }
  else if (kind === 'pluck'){ osc('triangle', f, 0.9, 0.28); osc('sine', f * 2, 0.25, 0.15); }
  else if (kind === 'musicbox'){ osc('sine', f, 0.9, 1.4); osc('sine', f * 3, 0.18, 0.5); osc('sine', f * 4.02, 0.06, 0.25); }
  else if (kind === 'bass'){ const o = AC.createOscillator(); o.type = 'triangle'; o.frequency.value = f; const lp = AC.createBiquadFilter(); lp.type = 'lowpass'; lp.frequency.value = 500; const e = AC.createGain(); const d = Math.max(0.2, len); e.gain.setValueAtTime(0.0001, t); e.gain.exponentialRampToValueAtTime(vol, t + 0.02); e.gain.exponentialRampToValueAtTime(0.0001, t + d); o.connect(lp); lp.connect(e); e.connect(g); o.start(t); o.stop(t + d + 0.05); }
}
const Music = {
  song: null, name: '', step: 0, loop: 0, nextT: 0, timer: 0, out: null, held: false,
  play(name){
    if (!SONGS[name]) name = '';
    if (name === this.name && this.timer) return;
    this.stop(true);
    this.name = name;
    if (!name || !AC || !musicBus) return;
    this.song = SONGS[name];
    this.out = AC.createGain(); this.out.gain.setValueAtTime(0.0001, AC.currentTime); this.out.connect(musicBus);
    this.out.gain.exponentialRampToValueAtTime(0.075 * (this.song.vol || 1), AC.currentTime + 1.2);
    this.step = 0; this.loop = 0; this.nextT = AC.currentTime + 0.15;
    this.timer = setInterval(() => this.tick(), 90);
  },
  // fade out what's playing (soft: keep the name, so returning to the same place resumes)
  stop(keepName){
    clearInterval(this.timer); this.timer = 0;
    if (this.out && AC){ const o = this.out; try { o.gain.cancelScheduledValues(AC.currentTime); o.gain.setTargetAtTime(0.0001, AC.currentTime, 0.25); } catch (e) {} setTimeout(() => { try { o.disconnect(); } catch (e) {} }, 1600); }
    this.out = null; this.song = null;
    if (!keepName) this.name = '';
  },
  tick(){
    if (!this.song || !AC) return;
    if (AC.state !== 'running' || muted || !opts.music || mic.busy || sleeping || document.hidden){ this.nextT = AC.currentTime + 0.1; return; }
    const S = this.song, stepDur = 60 / S.bpm / 2;
    if (this.nextT < AC.currentTime - 0.2) this.nextT = AC.currentTime + 0.05;
    while (this.nextT < AC.currentTime + 0.35){ this.note(this.step, this.nextT, stepDur); this.nextT += stepDur; this.step = (this.step + 1) % 32; if (this.step === 0) this.loop++; }
  },
  note(st, t, sd){
    const S = this.song, out = this.out, bar = Math.floor(st / 8), inBar = st % 8;
    const chord = S.prog[bar];
    // arpeggio
    const ai = S.arp[inBar];
    if (ai >= 0){ const n = S.root + chord[ai % 3] + 12 * (ai === 3 ? 1 : 0); mVoice(S.arpVoice, n, t, 0.33, out); }
    // bass on beats one and three
    if (S.bass && (inBar === 0 || inBar === 4)) mVoice('bass', S.root + chord[0] - 12, t, 0.75, out, sd * 3.5);
    // melody: A, A, B, rest
    const which = this.loop % 4;
    if (which !== 3){
      const mel = S.mel[which === 2 ? 1 : 0];
      for (const [ms, off] of mel) if (ms === st){ let n = S.root + off; while (n > 86) n -= 12; mVoice(S.lead, n, t, 0.6, out); }
    }
    if (S.shaker && inBar % 2 === 1){ const src = AC.createBufferSource(); src.buffer = noiseBuf; const hp = AC.createBiquadFilter(); hp.type = 'highpass'; hp.frequency.value = 7000; const e = AC.createGain(); e.gain.setValueAtTime(0.0001, t); e.gain.exponentialRampToValueAtTime(0.18, t + 0.005); e.gain.exponentialRampToValueAtTime(0.0001, t + 0.05); src.connect(hp); hp.connect(e); e.connect(out); src.start(t, Math.random()); src.stop(t + 0.08); }
    if (S.kick && inBar % 4 === 0){ const o = AC.createOscillator(); o.frequency.setValueAtTime(130, t); o.frequency.exponentialRampToValueAtTime(48, t + 0.14); const e = AC.createGain(); e.gain.setValueAtTime(0.0001, t); e.gain.exponentialRampToValueAtTime(0.7, t + 0.005); e.gain.exponentialRampToValueAtTime(0.0001, t + 0.18); o.connect(e); e.connect(out); o.start(t); o.stop(t + 0.2); }
    if (S.bubbles && Math.random() < 0.12){ const o = AC.createOscillator(); o.type = 'sine'; const f0 = 500 + Math.random() * 500; o.frequency.setValueAtTime(f0, t); o.frequency.exponentialRampToValueAtTime(f0 * 2.2, t + 0.07); const e = AC.createGain(); e.gain.setValueAtTime(0.0001, t); e.gain.exponentialRampToValueAtTime(0.12, t + 0.005); e.gain.exponentialRampToValueAtTime(0.0001, t + 0.08); o.connect(e); e.connect(out); o.start(t); o.stop(t + 0.1); }
  },
  setOn(on){ if (musicBus && AC) musicBus.gain.setTargetAtTime(on ? 1 : 0, AC.currentTime, 0.2); }
};
function buzz(ms){ try { if (navigator.vibrate) navigator.vibrate(ms); } catch (e) {} }

/* ---------- the voice ----------
   One line at a time, in order. Each line is said in one language, taking turns between the languages the parent
   switched on. While the line is heard, the pet's mouth moves. The engine is watched as it works: Android in-app
   browsers (Facebook, Instagram...) have a speech object that never makes a sound, and some phones list a language
   with no voice behind it. Those cases fall back to the speech bubble, and the parents' corner says how to fix it. */
const synth = (window.speechSynthesis && typeof window.SpeechSynthesisUtterance === 'function') ? window.speechSynthesis : null;
let voices = [];
let langsOn = (() => { const r = store.get('ymd-langs', store.get('yfs-langs', {})), o = isObj(r) ? r : {}; return { he: cleanBool(o.he, true), ru: cleanBool(o.ru, true), en: cleanBool(o.en, true) }; })();
let voicePick = (() => { const r = store.get('ymd-voice-pick', store.get('yfs-voice-pick', {})), out = {}; if (isObj(r)) for (const l of LANGS) if (typeof r[l] === 'string') out[l] = r[l].slice(0, 300); return out; })();
let langTurn = 0, talkUntil = 0, speechActive = false;
const health = { started: 0, silent: 0, off: !synth, why: synth ? '' : 'none', lastError: '', fail: { he: 0, ru: 0, en: 0 }, bad: { he: false, ru: false, en: false }, badEarly: [] };
const tagOf = v => String(v.lang || '').toLowerCase().replace(/_/g, '-');
const LANG_PREFIX = { he: ['he', 'iw'], ru: ['ru'], en: ['en'] };
const NOVELTY = /^(albert|bad news|bahh|bells|boing|bubbles|cellos|deranged|good news|hysterical|jester|junior|kathy|organ|pipe organ|princess|ralph|superstar|trinoids|whisper|wobble|zarvox|fred|eddy|flo|grandma|grandpa|reed|rocko|sandy|shelley)\b/i;
function voicesFor(l){ return voices.filter(v => { const t = tagOf(v); return LANG_PREFIX[l].some(p => t === p || t.startsWith(p + '-')); }); }
function voiceScore(v, l){
  const id = String(v.voiceURI || '') + ' ' + String(v.name || '');
  let s = 0;
  if (/com\.apple\.speech\.synthesis\.voice\.|com\.apple\.eloquence/i.test(id) || NOVELTY.test(String(v.name || ''))) s -= 20;
  if (/premium/i.test(id)) s += 6; else if (/enhanced|neural|natural/i.test(id)) s += 5; else if (/siri/i.test(id)) s += 4; else if (/google/i.test(id)) s += 3;
  if (v.localService) s += 1;
  const t = tagOf(v);
  if ((l === 'en' && t.startsWith('en-us')) || (l === 'ru' && t.startsWith('ru-ru')) || (l === 'he' && /^(he|iw)-il/.test(t))) s += 1;
  return s;
}
const voiceId = v => String(v.voiceURI || v.name || '');
function voiceFor(l){
  const list = voicesFor(l);
  if (!list.length) return null;
  const want = voicePick[l];
  if (want){ const v = list.find(x => voiceId(x) === want); if (v) return v; }
  return list.slice().sort((a, b) => voiceScore(b, l) - voiceScore(a, l))[0];
}
const voicesKnown = () => voices.length > 0;
const canVoice = l => !!synth && !health.off && !health.bad[l] && (!voicesKnown() || !!voiceFor(l));
function refreshVoices(){ if (synth){ try { voices = Array.from(synth.getVoices() || []); } catch (e) { voices = []; } } renderLangUI(); }
function setSpeechOff(why){ if (health.off) return; health.off = true; health.why = why; renderLangUI(); renderNoVoice(); }
function noteSpeechFail(l, why){
  if (document.visibilityState === 'hidden') return;
  health.lastError = why;
  if (!health.started){
    health.silent++;
    if (!health.bad[l]){ health.bad[l] = true; health.badEarly.push(l); }
    const on = LANGS.filter(x => langsOn[x]);
    if (on.every(x => health.bad[x]) || health.silent >= 4) setSpeechOff(why);
  } else if (++health.fail[l] >= 2 && !health.bad[l]) health.bad[l] = true;
  renderLangUI();
}
function noteSpeechOk(l){
  const first = !health.started;
  health.started++; health.silent = 0;
  if (health.off){ health.off = false; health.why = ''; }
  if (first && health.badEarly.length){ for (const x of health.badEarly) if (x !== l){ health.bad[x] = false; health.fail[x] = 1; } health.badEarly = []; }
  if (first){ renderLangUI(); renderNoVoice(); }
}
const NIQQUD = /[֑-ׇֽֿׁׂׅׄ]/g;
const plain = s => String(s == null ? '' : s).replace(NIQQUD, '').replace(/[־]/g, ' ');
function duck(on){ if (master && AC && !muted) master.gain.setTargetAtTime(on ? VOL_DUCK : VOL, AC.currentTime, 0.05); }
const textMs = t => 1100 + plain(t).length * 70;
const estSpeechMs = t => 900 + plain(t).length * 85;

const speechQ = [];
let cur = null, curSeq = 0, gapUntil = 0, pumpTimer = 0;
const speechBusy = () => !!cur || speechQ.length > 0;
function playItem(it){
  const seq = ++curSeq;
  cur = it; it.seq = seq; it.t0 = performance.now();
  talkUntil = it.t0 + 60000;
  if (!it.quiet) showBubble(it.text, it.lang);
  if (it.voiced && synth && (it.quiet || canVoice(it.lang)) && document.visibilityState !== 'hidden') startUtterance(it);
  else { if (!it.quiet) Pet.talk(true); it.timer = setTimeout(() => finishItem(seq, 'text'), textMs(it.text)); }
}
function startUtterance(it){
  const seq = it.seq;
  const go = () => {
    if (!cur || cur.seq !== seq) return;
    let u;
    try {
      u = new SpeechSynthesisUtterance(plain(it.text));
      u.lang = LANG_TAGS[it.lang];
      const v = voiceFor(it.lang); if (v) u.voice = v;
      u.rate = it.rate || 0.92; u.pitch = it.quiet ? 1 : 1.25; u.volume = 1;
    } catch (e) { failItem(seq, 'utterance'); return; }
    it.u = u;
    u.onstart = () => onUStart(seq);
    u.onend = () => onUEnd(seq);
    u.onerror = e => onUError(seq, (e && e.error) || 'error');
    it.watch = setTimeout(() => onUSilent(seq), health.started ? 3000 : 5000);
    try { synth.speak(u); if (synth.paused) synth.resume(); } catch (e) { failItem(seq, 'speak'); }
  };
  let busy = false; try { busy = synth.speaking || synth.pending; } catch (e) {}
  if (busy){ try { synth.cancel(); } catch (e) {} setTimeout(go, 90); } else go();
}
function onUStart(seq){
  if (!cur || cur.seq !== seq) return;
  const it = cur; it.started = performance.now();
  clearTimeout(it.watch);
  it.watch = setTimeout(() => { if (cur && cur.seq === seq){ try { synth.cancel(); } catch (e) {} finishItem(seq, 'stuck'); } }, estSpeechMs(it.text) * 2 + 4000);
  speechActive = true; duck(true);
  if (!it.quiet) Pet.talk(true);
  noteSpeechOk(it.lang);
}
function onUEnd(seq){
  if (!cur || cur.seq !== seq) return;
  const it = cur, now = performance.now();
  if (it.started && now - it.started < 160 && plain(it.text).length >= 6){ noteSpeechFail(it.lang, 'too-short'); keepText(seq, 'too-short'); return; }
  if (!it.started) noteSpeechOk(it.lang);
  health.fail[it.lang] = 0;
  finishItem(seq, 'ok');
}
function onUError(seq, err){
  if (!cur || cur.seq !== seq) return;
  if (err === 'interrupted' || err === 'canceled'){ finishItem(seq, err); return; }
  if (err !== 'not-allowed') noteSpeechFail(cur.lang, err); else health.lastError = err;
  keepText(seq, err);
}
function onUSilent(seq){
  if (!cur || cur.seq !== seq) return;
  try { synth.cancel(); } catch (e) {}
  noteSpeechFail(cur.lang, 'silent');
  keepText(seq, 'silent');
}
function failItem(seq, why){ if (cur && cur.seq === seq){ noteSpeechFail(cur.lang, why); keepText(seq, why); } }
function keepText(seq){
  const it = cur; if (!it || it.seq !== seq) return;
  clearTimeout(it.watch);
  if (speechActive){ speechActive = false; duck(false); }
  if (!it.quiet) Pet.talk(true);
  const left = Math.max(600, textMs(it.text) - (performance.now() - it.t0));
  it.timer = setTimeout(() => finishItem(seq, 'text'), left);
}
function finishItem(seq, result){
  if (!cur || cur.seq !== seq) return;
  const it = cur;
  clearTimeout(it.watch); clearTimeout(it.timer);
  cur = null;
  if (speechActive){ speechActive = false; duck(false); }
  Pet.talk(false);
  gapUntil = performance.now() + 160;
  talkUntil = speechQ.length ? performance.now() + 60000 : performance.now() + 600;
  if (!speechQ.length) hideBubbleSoon();
  if (it.onResult) try { it.onResult(result, it.started ? performance.now() - it.started : 0); } catch (e) {}
  if (it.onDone) try { it.onDone(); } catch (e) {}
  pump();
}
function pump(){
  clearTimeout(pumpTimer);
  if (cur || !speechQ.length) return;
  const w = gapUntil - performance.now();
  if (w > 0){ pumpTimer = setTimeout(pump, w); return; }
  playItem(speechQ.shift());
}
function interruptCurrent(){
  if (!cur) return;
  const it = cur;
  clearTimeout(it.watch); clearTimeout(it.timer);
  cur = null;
  try { if (synth) synth.cancel(); } catch (e) {}
  if (speechActive){ speechActive = false; duck(false); }
  Pet.talk(false);
  gapUntil = 0;
}
function enqueueLine(it){
  if (cur && it.pri >= 4 && cur.pri < 3) interruptCurrent();
  speechQ.push(it);
  if (!cur && speechQ.length === 1 && performance.now() >= gapUntil) playItem(speechQ.shift());
  else pump();
}
/* Stops the voice now; lines that were waiting are let go, and their follow-ups still run. */
function stopSpeech(){
  const waiting = speechQ.splice(0);
  const it = cur;
  interruptCurrent();
  talkUntil = 0;
  hideBubble();
  for (const x of [it, ...waiting]) if (x && x.onDone) try { x.onDone(); } catch (e) {}
}
function lineFor(bank, lang){
  const entry = bank[lang];
  if (!entry) return '';
  const list = Array.isArray(entry) ? entry : (entry[profile.g] || entry.m);
  return pick(list);
}
function petVars(sp, lang){
  const n = PET_NAMES[sp];
  return lang === 'he' ? n.he : lang === 'ru' ? n.ru : n.en;
}
function fillLine(t, lang, vars){
  const name = nameIn(lang);
  let s = t;
  if (name) s = s.split('{name}').join(name);
  else s = s.replace(/\{name\},\s*/g, '').replace(/,\s*\{name\}/g, '').replace(/\s*\{name\}/g, '').replace(/\{name\}\s*/g, '');
  const sp = (vars && vars.sp) || current;
  if (sp){
    const n = PET_NAMES[sp];
    s = s.split('{pet}').join(petVars(sp, lang)).split('{petA}').join(n.enA).split('{petThe}').join(n.enThe).split('{petCap}').join(n.en);
  }
  if (vars) for (const k of Object.keys(vars)){
    if (k === 'sp') continue;
    const v = vars[k];
    const val = (v && typeof v === 'object') ? v[lang] : v;
    s = s.split('{' + k + '}').join(val == null ? '' : String(val));
  }
  s = s.replace(/[ \t\n]+/g, ' ').trim();
  if (lang !== 'he' && s){
    s = s.charAt(0).toUpperCase() + s.slice(1);
    // a name that starts a new sentence gets a capital ("Right! The elephant...", "Правильно! Слон...")
    s = s.replace(/([.!?] )([a-zа-яё])/g, (m, p1, c) => p1 + c.toUpperCase());
  }
  return s;
}
/* Says a line in the next language (or a given one): out loud when the device can, otherwise in the bubble.
   pri 1-2: small talk, only when nobody is talking. 3-8: waits its turn unless something as important is waiting.
   9: always said, in order. onDone runs when the line is over. Returns the language used, or null. */
function sayFrom(bank, vars, pri, forceLang, onDone){
  const now = performance.now();
  const skip = () => { if (onDone) setTimeout(onDone, 0); return null; };
  if (pri < 3 && (speechBusy() || now < talkUntil)) return skip();
  if (pri < 9 && speechBusy() && [cur, ...speechQ].some(x => x && x.pri >= pri)) return skip();
  const on = LANGS.filter(l => langsOn[l]);
  if (!on.length) return skip();
  const voiced = synth ? on.filter(canVoice) : [];
  const pool = voiced.length ? voiced : on;
  let lang;
  if (forceLang && on.includes(forceLang)) lang = forceLang;
  else { lang = pool[langTurn % pool.length]; langTurn++; }
  const text = fillLine(lineFor(bank, lang), lang, vars);
  if (!text) return skip();
  enqueueLine({ text, lang, pri, voiced: !muted && voiced.includes(lang), onDone });
  return lang;
}
const say = (kind, vars, pri, lang, onDone) => sayFrom(LINES[kind], vars, pri, lang, onDone);
const sayP = (kind, vars, pri = 9, lang) => new Promise(r => { say(kind, vars, pri, lang, r); });
// A fact card: one sentence per language; said in the next language in turn.
function sayFact(sp, kind, pri = 8, onDone){
  const f = FACTS[sp][kind];
  return sayFrom({ he: [f.he], ru: [f.ru], en: [f.en] }, { sp }, pri, null, onDone);
}
const sayFactP = (sp, kind) => new Promise(r => sayFact(sp, kind, 9, r));
function sayRaw(texts, pri = 9, onDone){ return sayFrom({ he: [texts.he], ru: [texts.ru], en: [texts.en] }, null, pri, null, onDone); }

/* ---------- the speech bubble, above the pet's head ---------- */
const bubbleEl = $('bubble');
let bubbleHideTimer = 0;
let bubbleAnchor = null;   // a function giving the point the bubble points at, when it isn't the pet's head
function placeBubble(){
  if (bubbleEl.hidden) return;
  const head = bubbleAnchor ? bubbleAnchor() : Pet.headTop();
  const w = bubbleEl.offsetWidth, h = bubbleEl.offsetHeight;
  const W = innerWidth;
  const left = clamp(head.x - w / 2, 12, W - 12 - w);
  const minTop = 74 + (parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--safe-t')) || 0);
  const top = Math.max(minTop, head.y - h - 22);
  bubbleEl.style.left = left + 'px';
  bubbleEl.style.top = top + 'px';
  bubbleEl.style.setProperty('--tail-x', clamp(head.x - left, 26, w - 26) + 'px');
}
function showBubble(text, lang){
  clearTimeout(bubbleHideTimer);
  bubbleEl.textContent = text;
  bubbleEl.lang = lang; bubbleEl.dir = lang === 'he' ? 'rtl' : 'ltr';
  bubbleEl.hidden = false;
  bubbleEl.style.animation = 'none'; void bubbleEl.offsetWidth; bubbleEl.style.animation = '';
  placeBubble();
}
function hideBubbleSoon(){ clearTimeout(bubbleHideTimer); bubbleHideTimer = setTimeout(() => { if (!cur) bubbleEl.hidden = true; }, 900); }
function hideBubble(){ clearTimeout(bubbleHideTimer); bubbleEl.hidden = true; }
