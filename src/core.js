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
const DEFAULT_PROFILE = { he: 'יונתן', ru: 'Йонатан', en: 'Yonatan', g: 'm', age: 4 };
let profile = Object.assign({}, DEFAULT_PROFILE, store.get('ymd-profile', null) || store.get('yfs-profile', null) || {});
if (!AGE[profile.age]) profile.age = 4;
if (profile.g !== 'f') profile.g = 'm';
const ageCfg = () => AGE[profile.age] || AGE[4];
const nameIn = lang => String(profile[lang] || '').trim();
function saveProfile(){ store.set('ymd-profile', profile); }
let opts = Object.assign({ mic: true, count: true, needs: true }, store.get('ymd-opts', {}));

/* ---------- the pets, the album, the hats ---------- */
let current = store.get('ymd-current', null);
if (current && !SPECIES[current]) current = null;
let pets = store.get('ymd-pets', {});
if (!pets || typeof pets !== 'object') pets = {};
let facts = store.get('ymd-facts', {});
if (!facts || typeof facts !== 'object') facts = {};
let owned = store.get('ymd-owned', ['party', 'cap']);
if (!Array.isArray(owned)) owned = ['party', 'cap'];
let stats = Object.assign({ games: 0, feeds: 0, baths: 0, sleeps: 0, digs: 0 }, store.get('ymd-stats', {}));
const savePets = () => store.set('ymd-pets', pets);
const saveFacts = () => store.set('ymd-facts', facts);
const saveStats = () => store.set('ymd-stats', stats);
const petData = sp => (pets[sp] = pets[sp] || { born: false, days: [], outfit: null });
const stageOf = sp => { const n = (petData(sp).days || []).length; return n >= 6 ? 2 : n >= 3 ? 1 : 0; };
const factCount = sp => FACT_KINDS.filter(k => facts[sp] && facts[sp][k]).length;

/* ---------- time: one sitting, the day, and the limits a parent can set ---------- */
const keyOf = d => d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate();
const dayKey = () => keyOf(new Date());
let days = store.get('ymd-days', {});
if (!days || typeof days !== 'object') days = {};
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
let limits = Object.assign({ daily: 0, bedOn: false, bed: '19:30' }, store.get('ymd-limits', {}));
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
let AC = null, master = null, noiseBuf = null, silentEl = null, lastUnlock = 0;
const mic = { busy: false };
let sleeping = false;
let muted = !!store.get('ymd-muted', false);
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
      master.connect(comp); comp.connect(AC.destination);
      const len = Math.floor(AC.sampleRate * 1.2);
      noiseBuf = AC.createBuffer(1, len, AC.sampleRate);
      const d = noiseBuf.getChannelData(0); for (let i = 0; i < len; i++) d[i] = Math.random() * 2 - 1;
    }
    if (AC.state !== 'running'){ const p = AC.resume(); if (p && p.catch) p.catch(() => {}); }
  } catch (e) { AC = null; }
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
  src.connect(fl); fl.connect(g); g.connect(master);
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
  o.connect(g); g.connect(master);
  o.start(t0); o.stop(t0 + dur + 0.05);
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
  voice(sp){
    // each friend's own little sound when tapped: cute, never scary
    if (sp === 'trex'){ noise(0.42, 'lowpass', 900, 260, 3, 0.3); tone(170, 0.42, 'sawtooth', 0.06, 0, 120); }
    else if (sp === 'lion'){ noise(0.38, 'bandpass', 500, 260, 2.5, 0.34); tone(220, 0.38, 'sawtooth', 0.05, 0, 150); }
    else if (sp === 'elephant'){ tone(392, 0.5, 'sawtooth', 0.09, 0, 660, 6); tone(390, 0.5, 'square', 0.03, 0, 650); }
    else if (sp === 'penguin'){ [0, 0.14].forEach(t => tone(780, 0.11, 'square', 0.05, t, 600)); }
    else if (sp === 'trike'){ tone(260, 0.3, 'triangle', 0.16, 0, 200); noise(0.2, 'lowpass', 600, 300, 2, 0.15); }
    else if (sp === 'stego'){ tone(300, 0.22, 'triangle', 0.15, 0, 380); tone(380, 0.2, 'triangle', 0.12, 0.2, 300); }
    else { tone(180, 0.6, 'triangle', 0.16, 0, 140, 3); }
  }
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
function buzz(ms){ try { if (navigator.vibrate) navigator.vibrate(ms); } catch (e) {} }

/* ---------- the voice ----------
   One line at a time, in order. Each line is said in one language, taking turns between the languages the parent
   switched on. While the line is heard, the pet's mouth moves. The engine is watched as it works: Android in-app
   browsers (Facebook, Instagram...) have a speech object that never makes a sound, and some phones list a language
   with no voice behind it. Those cases fall back to the speech bubble, and the parents' corner says how to fix it. */
const synth = (window.speechSynthesis && typeof window.SpeechSynthesisUtterance === 'function') ? window.speechSynthesis : null;
let voices = [];
let langsOn = Object.assign({ he: true, ru: true, en: true }, store.get('ymd-langs', store.get('yfs-langs', {})));
let voicePick = Object.assign({}, store.get('ymd-voice-pick', store.get('yfs-voice-pick', {})));
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
  s = s.replace(/\s+/g, ' ').trim();
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
