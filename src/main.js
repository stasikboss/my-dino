/* ---------- the flow: start, choosing a friend, hatching, a sitting, bedtime, goodnight ---------- */
const startEl = $('start'), chooseEl = $('choose'), introEl = $('intro'), nightEl = $('night');
const playBtn = $('play-btn'), friendsBtn = $('friends-btn'), startPet = $('start-pet'), sleepMsg = $('sleep-msg');
const clockEl = $('clock'), clockFill = $('clock-fill');
let elapsed = 0, sessionSec = sessionMin * 60, pendingBed = false, modalOpen = false;
let wakeLock = null;
async function keepAwake(){ try { if ('wakeLock' in navigator && !wakeLock) wakeLock = await navigator.wakeLock.request('screen'); } catch (e) {} }
function releaseAwake(){ try { if (wakeLock) wakeLock.release(); } catch (e) {} wakeLock = null; }
const runningAsApp = (window.matchMedia && (matchMedia('(display-mode: standalone)').matches || matchMedia('(display-mode: fullscreen)').matches)) || navigator.standalone === true;

function eyebrowText(){ const en = nameIn('en'); return en ? en + "'s Dino" : 'My Dino'; }
function titleText(){ const he = nameIn('he'); return he ? 'הדינו של ' + he : 'הדינו שלי'; }
function renderStart(){
  $('start-eyebrow').textContent = eyebrowText();
  $('start-title').textContent = titleText();
  document.title = titleText();
  const lock = lockReason();
  const sp = current;
  startPet.innerHTML = sp ? petSvg(sp, { stage: stageOf(sp), outfit: petData(sp).outfit }) : `<div class="egg-wrap" style="width:100%">${eggSvg('trex', 0)}</div>`;
  const svg = startPet.querySelector('.pet');
  if (svg && lock) svg.classList.add('sleep');
  sleepMsg.hidden = !lock;
  if (lock){
    const who = 'ה' + (sp ? PET_NAMES[sp].he : 'חבר');
    sleepMsg.textContent = lock === 'bed' ? `${who} ישן עכשיו. נשחק מחר בבוקר!` : `שיחקנו מספיק להיום. ${who} ישן, ונשחק מחר!`;
  }
  playBtn.hidden = !!lock;
  friendsBtn.hidden = !!lock || !sp;
}

/* Choosing a friend */
const friendsEl = $('friends');
function openChoose(fromStart){
  stopSpeech();
  closeWardrobe();
  friendsEl.textContent = '';
  for (const sp of SPECIES_ORDER){
    const b = document.createElement('button');
    b.type = 'button'; b.className = 'friend' + (sp === current ? ' current' : ''); b.dir = 'rtl';
    const d = pets[sp];
    b.innerHTML = petSvg(sp, { stage: d && d.born ? stageOf(sp) : 2, outfit: d && d.outfit }) + `<span>${PET_NAMES[sp].he}</span>` + (IS_DINO[sp] ? '<span class="tag">דינוזאור</span>' : '<span class="tag">חיה של היום</span>');
    b.addEventListener('click', () => pickFriend(sp, fromStart, b));
    friendsEl.append(b);
  }
  chooseEl.hidden = false;
  chooseEl.scrollTop = 0;
  bubbleAnchor = () => ({ x: innerWidth / 2, y: 0 });
  say('choose', null, 9);
}
let picking = false;
async function pickFriend(sp, fromStart, btn){
  if (picking) return;
  picking = true;
  initAudio(); stopSpeech();
  sfx.voice(sp);
  const svg = btn.querySelector('.pet'); if (svg){ svg.classList.add('happy', 'hop'); }
  await sayP('pickFriend', { sp });
  current = sp; store.set('ymd-current', sp);
  chooseEl.hidden = true;
  bubbleAnchor = null;
  picking = false;
  if (!petData(sp).born){ runIntro(sp); return; }
  if (fromStart || !inPlay) beginSession(false);
  else { Pet.mount(sp); markCareDay(sp); setRoom('home', true); say('hello', null, 9); }
}

/* Hatching (or, for the animals that are born, a basket) */
function eggSvg(sp, cracks){
  const c = SPECIES[sp].c;
  const spot = c.dark || c.mane || c.body;
  const crackPaths = [
    'M50 44 L58 52 L52 58 L60 66',
    'M50 44 L42 50 L48 58 L38 64 M60 66 L68 62',
    'M30 70 L38 64 M68 62 L76 70 M50 44 L52 34 L46 28'
  ];
  return `<svg viewBox="0 0 100 110" class="egg-svg">
    <ellipse cx="50" cy="102" rx="34" ry="6" fill="rgba(60,40,20,.18)"/>
    <path d="M14 96 Q50 108 86 96 Q92 86 80 84 Q50 92 20 84 Q8 86 14 96 Z" fill="#c98a4b" stroke="${INK}" stroke-width="3.5" stroke-linejoin="round"/>
    <path d="M18 88 Q30 80 26 92 M40 92 Q46 82 52 94 M66 92 Q72 82 80 90" fill="none" stroke="#8a5a2b" stroke-width="3" stroke-linecap="round"/>
    <g class="egg-body">
      <path d="M50 8 C72 8 84 46 84 64 C84 84 70 96 50 96 C30 96 16 84 16 64 C16 46 28 8 50 8 Z" fill="#fff5e2" stroke="${INK}" stroke-width="4"/>
      <g fill="${spot}" opacity=".85"><circle cx="38" cy="36" r="7"/><circle cx="64" cy="54" r="9"/><circle cx="36" cy="72" r="6"/><circle cx="62" cy="24" r="4.5"/><circle cx="68" cy="80" r="4"/></g>
      <path d="M30 28 Q36 16 46 14" fill="none" stroke="#fff" stroke-width="5" stroke-linecap="round"/>
      ${crackPaths.slice(0, cracks).map(d => `<path d="${d}" fill="none" stroke="${INK}" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>`).join('')}
    </g></svg>`;
}
const BASKET_SVG = `<svg viewBox="0 0 100 110"><ellipse cx="50" cy="102" rx="40" ry="6" fill="rgba(60,40,20,.18)"/>
  <path d="M10 56 H90 Q86 98 50 98 Q14 98 10 56 Z" fill="#e8c27a" stroke="${INK}" stroke-width="4" stroke-linejoin="round"/>
  <path d="M14 68 H86 M18 82 H82" stroke="#c98a4b" stroke-width="4"/><path d="M22 56 Q50 6 78 56" fill="none" stroke="${INK}" stroke-width="4.5"/>
  <path class="blanket-top" d="M8 58 Q30 30 50 40 Q70 30 92 58 Z" fill="#ff9ec4" stroke="${INK}" stroke-width="4" stroke-linejoin="round"/>
  <g fill="#fff"><circle cx="34" cy="48" r="3"/><circle cx="52" cy="46" r="3"/><circle cx="70" cy="50" r="3"/></g></svg>`;
const eggWrap = $('egg-wrap');
async function runIntro(sp){
  stopSpeech();
  startEl.hidden = true; chooseEl.hidden = true; nightEl.hidden = true;
  introEl.hidden = false;
  $('tap-hint').style.display = '';
  const egg = FROM_EGG[sp];
  let taps = 0, done = false;
  const draw = () => { eggWrap.innerHTML = egg ? eggSvg(sp, taps) : BASKET_SVG; eggWrap.firstElementChild.classList.add('egg-wobble'); };
  draw();
  bubbleAnchor = () => { const r = eggWrap.getBoundingClientRect(); return { x: r.left + r.width / 2, y: r.top + 10 }; };
  say(egg ? 'hatchTap' : 'bornTap', null, 9);
  await new Promise(res => {
    eggWrap.onclick = () => {
      if (done) return;
      initAudio();
      taps++;
      const r = eggWrap.getBoundingClientRect();
      if (egg){
        sfx.crack(); buzz(20);
        if (taps < 3){ draw(); eggWrap.firstElementChild.classList.remove('egg-wobble'); eggWrap.firstElementChild.classList.add('egg-tapped'); FX.emit('crumb', r.left + r.width / 2, r.top + r.height * 0.4, 6, { color: '#fff5e2', speed: 160, g: 500, size: 6 }); return; }
      } else sfx.whoosh();
      done = true; res();
    };
  });
  // out it comes
  stopSpeech();
  $('tap-hint').style.display = 'none';
  const r = eggWrap.getBoundingClientRect();
  sfx.hatch();
  FX.emit('confetti', r.left + r.width / 2, r.top + r.height * 0.4, 40, { speed: 340, g: 420, size: 11 });
  if (egg) FX.emit('crumb', r.left + r.width / 2, r.top + r.height * 0.4, 16, { color: '#fff5e2', speed: 260, g: 600, size: 9 });
  eggWrap.innerHTML = `<div class="pop-in" style="width:100%;height:100%">${petSvg(sp, { stage: 0 })}</div>`;
  const pet = eggWrap.querySelector('.pet'); pet.style.width = '100%'; pet.style.height = '100%'; pet.style.overflow = 'visible';
  pet.classList.add('happy');
  sfx.voice(sp);
  current = sp; store.set('ymd-current', sp);
  const d = petData(sp); d.born = true; d.days = []; savePets();
  bubbleAnchor = () => { const rr = eggWrap.getBoundingClientRect(); return { x: rr.left + rr.width / 2, y: rr.top + rr.height * 0.12 }; };
  await wait(700);
  await unlockFact(sp, 'baby');
  await sayP('hello');
  introEl.hidden = true;
  bubbleAnchor = null;
  beginSession(true);
}

/* A sitting */
function markCareDay(sp){
  const d = petData(sp);
  const before = stageOf(sp);
  if (!d.days.includes(dayKey())){ d.days.push(dayKey()); if (d.days.length > 60) d.days = d.days.slice(-60); savePets(); }
  return stageOf(sp) > before;
}
function beginSession(justHatched){
  if (lockReason()){ showStart(); return; }
  stopSpeech();
  startEl.hidden = true; chooseEl.hidden = true; introEl.hidden = true; nightEl.hidden = true;
  bubbleAnchor = null;
  bedtime = false; pendingBed = false; teethToday = false;
  elapsed = 0; sessionSec = sessionMin * 60;
  sleeping = false; roomEl.classList.remove('dark'); document.body.classList.remove('lights-off');
  const grew = markCareDay(current) && !justHatched;
  Pet.mount(current);
  inPlay = true;
  hudEl.hidden = false; trayEl.hidden = false; navEl.hidden = false; clockEl.hidden = false;
  setRoom('home', true);
  renderNeeds();
  keepAwake();
  if (!justHatched){
    if (grew){
      Pet.flash('hop', 600); sfx.hatch();
      const h = Pet.headTop(); FX.emit('sparkle', h.x, h.y + 40, 16, { speed: 240 });
      say('grew', null, 9);
    } else say('welcomeBack', null, 9);
  }
  nextNeedTalk = performance.now() + 70000;
  if (isAndroid && !runningAsApp && document.fullscreenEnabled && !document.fullscreenElement){
    try { const p = document.documentElement.requestFullscreen(); if (p && p.catch) p.catch(() => {}); } catch (e) {}
  }
}
function showStart(){
  inPlay = false;
  hudEl.hidden = true; trayEl.hidden = true; navEl.hidden = true; clockEl.hidden = true;
  gamesEl.hidden = true; albumEl.hidden = true;
  startEl.hidden = false;
  bubbleAnchor = () => { const r = startPet.getBoundingClientRect(); return { x: r.left + r.width / 2, y: r.top + 20 }; };
  renderStart();
}
function startBedtime(){
  if (bedtime) return;
  if (gameOn){ pendingBed = true; return; }
  pendingBed = false;
  bedtime = true;
  stopSpeech(); closeWardrobe();
  if (sleeping){ say('goodnight', null, 9, null, () => setTimeout(showNight, 3000)); return; }
  setRoom('bed', true);
  sfx.yawn();
  Pet.el && Pet.el.classList.add('tilt');
  setTimeout(() => Pet.el && Pet.el.classList.remove('tilt'), 2200);
  say('sleepy', null, 9, null, () => say(teethToday ? 'bedLamp' : 'bedBrush', null, 9));
}
function showNight(){
  if (!bedtime) return;
  inPlay = false;
  stopLullaby();
  releaseAwake();
  const sp = current;
  $('night-pet').innerHTML = petSvg(sp, { stage: stageOf(sp), outfit: petData(sp).outfit });
  $('night-pet').firstElementChild.classList.add('sleep');
  $('night-title').textContent = 'לילה טוב, ' + PET_NAMES[sp].he;
  const he = nameIn('he');
  $('night-sub').textContent = he ? `${he} ${profile.g === 'f' ? 'טיפלה' : 'טיפל'} יפה ב${PET_NAMES[sp].he} היום.` : `טיפלנו יפה ב${PET_NAMES[sp].he} היום.`;
  const learned = $('learned'), ask = $('ask-list');
  learned.textContent = ''; ask.textContent = '';
  const seen = todayFacts.slice(-6);
  $('learned-box').hidden = !seen.length;
  for (const [s, k] of seen){ const li = document.createElement('li'); li.textContent = FACTS[s][k].he; learned.append(li); }
  const pool = seen.length ? seen : FACT_KINDS.filter(k => hasFact(sp, k)).map(k => [sp, k]);
  for (const [s, k] of shuffle(pool).slice(0, 3)){
    const [q, a] = ASK[k](s);
    const li = document.createElement('li');
    li.append(q + ' ');
    const sa = document.createElement('span'); sa.className = 'ans'; sa.textContent = '(' + a + ')';
    li.append(sa);
    ask.append(li);
  }
  if (!pool.length){ const li = document.createElement('li'); li.textContent = 'מה החבר שלך אוכל? איך קוראים לו?'; ask.append(li); }
  $('offline-idea').textContent = pick(OFFLINE_IDEAS);
  hudEl.hidden = true; trayEl.hidden = true; navEl.hidden = true; clockEl.hidden = true;
  hideBubble();
  nightEl.hidden = false;
  saveDays(true);
}

/* Starting from the start screen */
function tryStart(){
  initAudio();
  if (lockReason()){ renderStart(); return; }
  sfx.tap();
  if (!current){ openChoose(true); return; }
  if (!petData(current).born){ runIntro(current); return; }
  beginSession(false);
}
playBtn.addEventListener('click', tryStart);
startPet.addEventListener('click', tryStart);
startPet.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' '){ e.preventDefault(); tryStart(); } });
friendsBtn.addEventListener('click', () => { initAudio(); sfx.tap(); openChoose(true); });

/* ---------- the parents' corner ---------- */
const gateEl = $('gate'), gateForm = $('gate-form'), gateQ = $('gate-q'), gateInput = $('gate-answer'), gateErr = $('gate-error');
const parentsEl = $('parents');
const nameInputs = { he: $('name-he'), ru: $('name-ru'), en: $('name-en') };
const optInputs = { mic: $('opt-mic'), count: $('opt-count'), needs: $('opt-needs') };
const langChips = Array.from(document.querySelectorAll('.lang-chip'));
const lenChips = Array.from(document.querySelectorAll('[data-len]'));
const ageChips = Array.from(document.querySelectorAll('[data-age]'));
const genderChips = Array.from(document.querySelectorAll('[data-g]'));
const dailyChips = Array.from(document.querySelectorAll('[data-daily]'));
const bedOn = $('bed-on'), bedTime = $('bed-time'), bedRow = $('bed-row');
const voiceNote = $('voice-note'), vcList = $('vc-list'), vcSum = $('vc-sum'), vcChrome = $('vc-chrome');
const noVoiceEl = $('no-voice'), noVoiceText = $('no-voice-text'), noVoiceLink = $('no-voice-link');
const vcStatus = {};
let gateAnswer = 0, afterGate = null;
function newGateQuestion(){
  const a = 11 + ((Math.random() * 9) | 0), b = 5 + ((Math.random() * 5) | 0);
  gateAnswer = a + b;
  gateQ.textContent = 'כמה זה ';
  const sum = document.createElement('bdi'); sum.dir = 'ltr'; sum.textContent = a + ' + ' + b;
  gateQ.append(sum, '?');
}
function syncModal(){ modalOpen = !gateEl.hidden || !parentsEl.hidden; }
function openGate(next){
  afterGate = next;
  newGateQuestion();
  gateErr.hidden = true; gateInput.value = '';
  gateEl.hidden = false; syncModal();
  setTimeout(() => { try { gateInput.focus(); } catch (e) {} }, 60);
}
function closeGate(){ gateEl.hidden = true; afterGate = null; syncModal(); }
gateForm.addEventListener('submit', e => {
  e.preventDefault();
  if (parseInt(String(gateInput.value).trim(), 10) === gateAnswer){
    const next = afterGate; gateEl.hidden = true; afterGate = null; syncModal();
    if (next) next();
  } else { gateErr.hidden = false; newGateQuestion(); gateInput.value = ''; gateInput.focus(); }
});
$('gate-cancel').addEventListener('click', closeGate);

const HE_DAYS = ['א׳', 'ב׳', 'ג׳', 'ד׳', 'ה׳', 'ו׳', 'ש׳'];
function renderChart(){
  const chartEl = $('chart');
  chartEl.textContent = '';
  const vals = [];
  for (let i = 6; i >= 0; i--){
    const d = new Date(); d.setDate(d.getDate() - i);
    vals.push({ label: i === 0 ? 'היום' : HE_DAYS[d.getDay()], min: Math.round((days[keyOf(d)] || 0) / 60), today: i === 0 });
  }
  const max = Math.max(30, ...vals.map(v => v.min));
  for (const v of vals){
    const col = document.createElement('div'); col.className = 'bar-col';
    const val = document.createElement('span'); val.className = 'bar-val'; val.textContent = String(v.min);
    const track = document.createElement('div'); track.className = 'bar-track';
    const bar = document.createElement('div'); bar.className = 'bar' + (v.today ? ' is-today' : '');
    bar.style.height = Math.max(2, v.min / max * 100) + '%';
    track.append(bar);
    const lab = document.createElement('span'); lab.className = 'bar-label'; lab.textContent = v.label;
    col.append(val, track, lab);
    chartEl.append(col);
  }
}
function renderParents(){
  for (const l of LANGS) nameInputs[l].value = profile[l] || '';
  genderChips.forEach(ch => ch.setAttribute('aria-pressed', String(ch.dataset.g === profile.g)));
  ageChips.forEach(ch => ch.setAttribute('aria-pressed', String(Number(ch.dataset.age) === profile.age)));
  lenChips.forEach(ch => ch.setAttribute('aria-pressed', String(Number(ch.dataset.len) === sessionMin)));
  dailyChips.forEach(ch => ch.setAttribute('aria-pressed', String(Number(ch.dataset.daily) === limits.daily)));
  for (const k of Object.keys(optInputs)) optInputs[k].checked = !!opts[k];
  bedOn.checked = !!limits.bedOn; bedTime.value = limits.bed; bedRow.hidden = !limits.bedOn;
  renderLangUI();
  $('today-min').textContent = String(Math.floor(todaySec() / 60));
  renderChart();
  const total = SPECIES_ORDER.reduce((n, s) => n + factCount(s), 0);
  const st = $('stats'); st.textContent = '';
  for (const t of [`כרטיסים באלבום: ${total} מתוך ${SPECIES_ORDER.length * FACT_KINDS.length}`, `משחקי למידה: ${stats.games}`, `ארוחות: ${stats.feeds} · אמבטיות: ${stats.baths} · שינה: ${stats.sleeps}`,
    mic.denied ? 'המיקרופון חסום בדפדפן הזה, ולכן ״חזור אחריי״ מוסתר. אפשר לאשר מיקרופון בהגדרות האתר.' : null]){
    if (!t) continue;
    const li = document.createElement('li'); li.textContent = t; st.append(li);
  }
  $('end-session').hidden = !inPlay || bedtime;
  $('new-session').textContent = !nightEl.hidden ? 'עוד זמן משחק' : inPlay ? 'להאריך את הזמן' : 'להתחיל לשחק';
}
function saveLimits(){ store.set('ymd-limits', limits); if (!startEl.hidden) renderStart(); }
function openParents(){ renderParents(); parentsEl.hidden = false; syncModal(); stopSpeech(); }
function closeParents(){ parentsEl.hidden = true; syncModal(); if (!startEl.hidden) renderStart(); }
document.querySelectorAll('[data-open-parents]').forEach(b => b.addEventListener('click', () => { initAudio(); openGate(openParents); }));
$('close-parents').addEventListener('click', closeParents);
$('new-session').addEventListener('click', () => {
  closeParents();
  initAudio();
  if (inPlay && !bedtime){ elapsed = 0; return; }
  if (sleeping) wakeUp(true);
  nightEl.hidden = true;
  if (!current){ showStart(); return; }
  beginSession(false);
});
$('end-session').addEventListener('click', () => { closeParents(); startBedtime(); });
$('reset-pet').addEventListener('click', () => {
  if (!current) return;
  if (!confirm(`לגדל את ה${PET_NAMES[current].he} מחדש, מביצה? האלבום והכובעים נשמרים.`)) return;
  pets[current] = { born: false, days: [], outfit: null }; savePets();
  closeParents();
  if (gameOn){ gameOn = null; gameToken++; gameEl.hidden = true; }
  inPlay = false; bedtime = false;
  hudEl.hidden = true; trayEl.hidden = true; navEl.hidden = true; clockEl.hidden = true; gamesEl.hidden = true; albumEl.hidden = true;
  runIntro(current);
});
for (const l of LANGS) nameInputs[l].addEventListener('input', () => { profile[l] = nameInputs[l].value.slice(0, 20); saveProfile(); });
genderChips.forEach(ch => ch.addEventListener('click', () => { profile.g = ch.dataset.g === 'f' ? 'f' : 'm'; saveProfile(); renderParents(); }));
ageChips.forEach(ch => ch.addEventListener('click', () => {
  profile.age = Number(ch.dataset.age); saveProfile();
  sessionMin = ageCfg().session; store.set('ymd-session-min', sessionMin); sessionSec = sessionMin * 60;
  renderParents();
}));
lenChips.forEach(ch => ch.addEventListener('click', () => { sessionMin = Number(ch.dataset.len); store.set('ymd-session-min', sessionMin); sessionSec = sessionMin * 60; renderParents(); }));
dailyChips.forEach(ch => ch.addEventListener('click', () => { limits.daily = Number(ch.dataset.daily); saveLimits(); renderParents(); }));
bedOn.addEventListener('change', () => { limits.bedOn = bedOn.checked; bedRow.hidden = !limits.bedOn; saveLimits(); });
bedTime.addEventListener('change', () => { if (/^\d{2}:\d{2}$/.test(bedTime.value)){ limits.bed = bedTime.value; saveLimits(); } });
for (const k of Object.keys(optInputs)) optInputs[k].addEventListener('change', () => {
  opts[k] = optInputs[k].checked; store.set('ymd-opts', opts);
  if (k === 'mic' && room === 'home' && inPlay) ROOM_SETUP.home();
  if (k === 'count' && !opts.count){ countGame = null; clearCountBadge(); }
});
langChips.forEach(ch => ch.addEventListener('click', () => {
  const l = ch.dataset.lang;
  langsOn[l] = !langsOn[l];
  store.set('ymd-langs', langsOn);
  renderLangUI();
  if (langsOn[l] && !muted && canVoice(l)) runVoiceTest(l);
}));
document.addEventListener('keydown', e => {
  if (e.key !== 'Escape') return;
  if (!gateEl.hidden) closeGate(); else if (!parentsEl.hidden) closeParents(); else if (!wardrobeEl.hidden) closeWardrobe();
});

/* The voice check */
const ANDROID_TTS_HELP = 'בגלקסי ובשאר מכשירי אנדרואיד: הגדרות ← ניהול כללי ← טקסט לדיבור (⁨Text-to-speech⁩). בוחרים מנוע מועדף של Google (⁨Speech Services by Google⁩), נכנסים להתקנת נתוני קול (⁨Install voice data⁩), מורידים עברית, רוסית ואנגלית, ולוחצים ״השמעה״ כדי לוודא שיש קול. אחר כך סוגרים לגמרי את Chrome ואת המשחק, ופותחים מחדש.';
const IOS_TTS_HELP = 'באייפון: הגדרות ← נגישות ← תוכן מוקרא (⁨Spoken Content⁩) ← קולות, ושם מורידים קול לשפה.';
function browserLabel(){
  if (isAndroidInApp) return 'דפדפן מובנה בתוך אפליקציה, אנדרואיד';
  if (isSamsungBrowser) return 'Samsung Internet';
  if (isAndroid) return 'Chrome או דפדפן אחר, אנדרואיד';
  if (isIOS) return navigator.standalone ? 'אפליקציה במסך הבית, iOS' : 'Safari, iOS';
  return 'דפדפן מחשב';
}
function chromeLink(){
  const target = /\.github\.io$/i.test(location.hostname) ? location.href.split('#')[0] : APP_URL;
  if (!isAndroid) return target;
  const u = new URL(target);
  return 'intent://' + u.host + u.pathname + u.search + '#Intent;scheme=https;package=com.android.chrome;S.browser_fallback_url=' + encodeURIComponent(target) + ';end';
}
function renderLangUI(){
  langChips.forEach(ch => ch.setAttribute('aria-pressed', String(!!langsOn[ch.dataset.lang])));
  const on = LANGS.filter(l => langsOn[l]);
  let note = '';
  if (!synth || health.off){
    note = isAndroidInApp ? 'בתוך אפליקציות באנדרואיד (כמו פייסבוק או אינסטגרם) אין מנוע דיבור, ולכן החבר מציג את המילים כטקסט. כדי לשמוע אותו, פותחים את המשחק ב-Chrome.'
      : isAndroid ? 'הטלפון לא משמיע את הקול של החבר, ולכן הוא מציג את המילים כטקסט. ' + ANDROID_TTS_HELP
      : isIOS ? 'המכשיר לא משמיע את הקול של החבר, ולכן הוא מציג את המילים כטקסט. ' + IOS_TTS_HELP
      : 'הדפדפן הזה לא משמיע את הקול של החבר, ולכן הוא מציג את המילים כטקסט.';
  } else if (on.length){
    const missing = on.filter(l => health.bad[l] || (voicesKnown() && !voiceFor(l)));
    if (missing.length){
      const names = missing.map(l => LANG_IN_HE[l]).join(' או ');
      note = (missing.length === on.length ? `אין במכשיר קול ${names}, ולכן החבר מציג את המילים כטקסט. ` : `אין במכשיר קול ${names}, ולכן החבר מדלג על ${missing.length > 1 ? 'השפות האלה' : 'השפה הזו'}. `)
        + (isAndroid ? ANDROID_TTS_HELP : isIOS ? IOS_TTS_HELP : 'אפשר להוסיף קולות בהגדרות ההקראה של המכשיר.');
    }
  }
  voiceNote.textContent = note; voiceNote.hidden = !note;
  renderVoiceCheck();
}
function renderVoiceCheck(){
  vcList.textContent = '';
  for (const l of LANGS){
    const li = document.createElement('li'); li.className = 'vc-row';
    const name = document.createElement('span'); name.className = 'vc-lang'; name.textContent = LANG_NAME[l]; if (l !== 'he') name.lang = l;
    const list = voicesFor(l);
    let mid;
    if (list.length > 1){
      mid = document.createElement('select'); mid.className = 'vc-select'; mid.setAttribute('aria-label', 'קול ' + LANG_IN_HE[l]);
      const chosen = voiceFor(l);
      for (const v of list.slice().sort((a, b) => voiceScore(b, l) - voiceScore(a, l))){
        const o = document.createElement('option'); o.value = voiceId(v); o.textContent = v.name || voiceId(v);
        if (chosen && voiceId(chosen) === voiceId(v)) o.selected = true;
        mid.append(o);
      }
      mid.addEventListener('change', () => { voicePick[l] = mid.value; store.set('ymd-voice-pick', voicePick); health.bad[l] = false; health.fail[l] = 0; runVoiceTest(l); });
    } else {
      mid = document.createElement('span'); mid.className = 'vc-voice';
      const v = list[0];
      mid.textContent = (!synth || health.off) ? 'לא זמין כאן' : v ? (v.name || voiceId(v)) : voicesKnown() ? 'אין קול במכשיר' : 'קול ברירת המחדל';
    }
    const btn = document.createElement('button'); btn.type = 'button'; btn.className = 'vc-test'; btn.textContent = '▶ בדיקה';
    btn.setAttribute('aria-label', 'להשמיע משפט ' + LANG_IN_HE[l]);
    btn.disabled = !synth;
    btn.addEventListener('click', () => { initAudio(); runVoiceTest(l); });
    const st = document.createElement('span'); st.className = 'vc-status'; st.setAttribute('aria-live', 'polite');
    const s = vcStatus[l];
    if (s){ st.textContent = s.text; st.classList.add(s.ok ? 'ok' : 'bad'); }
    li.append(name, mid, btn, st);
    vcList.append(li);
  }
  const bits = ['דפדפן: ' + browserLabel(), synth ? 'קולות במכשיר: ' + voices.length : 'אין מנוע דיבור'];
  if (health.started) bits.push('החבר כבר דיבר מאז שהמשחק נפתח');
  if (health.lastError) bits.push('תקלה אחרונה: ' + health.lastError);
  vcSum.textContent = bits.join(' · ');
  const showChrome = isAndroid && (isAndroidInApp || isSamsungBrowser || !synth);
  vcChrome.hidden = !showChrome;
  if (showChrome) vcChrome.href = chromeLink();
}
const RESULT_TEXT = { silent: 'לא נשמע: המנוע לא הגיב', 'too-short': 'לא נשמע: נגמר מיד, כנראה אין קול לשפה הזו', 'not-allowed': 'לא נשמע: הדפדפן חסם. לוחצים שוב על בדיקה', text: 'אין קול לשפה הזו במכשיר' };
function runVoiceTest(l){
  vcStatus[l] = { text: 'משמיע…', ok: true }; renderVoiceCheck();
  stopSpeech();
  const text = fillLine(lineFor(LINES.welcomeBack, l), l, { sp: current || 'trex' });
  enqueueLine({ text, lang: l, pri: 9, voiced: !!synth && !muted, quiet: true, onResult: (result, ms) => {
    if (result === 'ok') vcStatus[l] = { text: '✓ נשמע (' + (ms / 1000).toFixed(1) + ' שניות). אם לא שמעתם, בדקו את עוצמת המדיה', ok: true };
    else if (result === 'interrupted' || result === 'canceled') vcStatus[l] = null;
    else vcStatus[l] = { text: '✗ ' + (RESULT_TEXT[result] || ('לא נשמע: ' + result)), ok: false };
    renderLangUI(); renderNoVoice();
  } });
}
function renderNoVoice(){
  const show = !synth || health.off;
  noVoiceEl.hidden = !show;
  if (!show) return;
  const link = isAndroid && (isAndroidInApp || isSamsungBrowser || !synth);
  noVoiceText.textContent = link ? 'כאן החבר לא יכול לדבר, רק להציג מילים.' : 'החבר לא מצליח לדבר במכשיר הזה. איך מתקנים: בהגדרות להורים.';
  noVoiceLink.hidden = !link;
  if (link) noVoiceLink.href = chromeLink();
}
const muteBtn = $('mute');
function setMuted(m){
  muted = m; store.set('ymd-muted', m);
  if (master && AC) master.gain.setTargetAtTime(m ? 0 : (speechActive ? VOL_DUCK : VOL), AC.currentTime, 0.02);
  muteBtn.setAttribute('aria-pressed', String(m));
  $('icon-on').hidden = m; $('icon-off').hidden = !m;
  if (m) stopSpeech();
}
muteBtn.addEventListener('click', () => { initAudio(); setMuted(!muted); });

/* ---------- the loop ---------- */
let lastT = performance.now(), nextBlink = 0, nextIdle = performance.now() + 15000, lookUntil = 0;
addEventListener('pointermove', e => {
  if (!inPlay || drag || sleeping || !Pet.el) return;
  if (e.pointerType === 'mouse' || e.buttons || e.pointerType === 'touch'){ Pet.look(e.clientX, e.clientY); lookUntil = performance.now() + 1600; }
}, { passive: true });
function frame(now){
  const dt = Math.min(0.1, (now - lastT) / 1000);
  lastT = now;
  const visible = document.visibilityState === 'visible';
  if (visible && !modalOpen && (inPlay || gameOn)){
    elapsed += dt;
    days[dayKey()] = (days[dayKey()] || 0) + dt;
    saveDays();
    if (inPlay){ tickNeeds(dt, now); tickSleep(dt, now); }
    clockFill.style.width = Math.min(100, elapsed / sessionSec * 100) + '%';
    const over = elapsed >= sessionSec || (limits.daily > 0 && todaySec() >= limits.daily * 60);
    if (over && !bedtime && !pendingBed) startBedtime();
  }
  if (inPlay && Pet.el){
    if (now > nextBlink){ nextBlink = now + rand(2200, 5200); Pet.blink(); }
    if (now > lookUntil && lookUntil){ lookUntil = 0; Pet.lookHome(); }
    if (now > nextIdle && !sleeping && !drag && !speechBusy()){
      nextIdle = now + rand(12000, 22000);
      const r = Math.random();
      if (r < 0.35){ Pet.el.classList.add('tilt'); setTimeout(() => Pet.el && Pet.el.classList.remove('tilt'), 1500); }
      else if (r < 0.6){ Pet.flash('excited', 1600); }
      else if (r < 0.8){ Pet.flash('hop', 600); }
      else { Pet.look(Pet.center().x + rand(-200, 200), Pet.center().y - 100); lookUntil = now + 1500; }
    }
  }
  drawFx(dt);
  requestAnimationFrame(frame);
}

document.addEventListener('visibilitychange', () => {
  if (document.visibilityState === 'visible'){
    lastT = performance.now();
    if (synth && !cur) try { synth.cancel(); } catch (e) {}
    if (inPlay) keepAwake();
    if (!startEl.hidden) renderStart();
  } else {
    stopSpeech(); stopLullaby();
    saveDays(true);
  }
});
addEventListener('resize', () => { sizeFx(); placeBubble(); });
addEventListener('pagehide', () => saveDays(true));
setInterval(() => { if (!startEl.hidden) renderStart(); }, 30000);

if (synth){
  refreshVoices();
  try { synth.addEventListener('voiceschanged', refreshVoices); } catch (e) { synth.onvoiceschanged = refreshVoices; }
  let tries = 0;
  const poll = setInterval(() => {
    refreshVoices();
    if (voicesKnown() || ++tries > 20){
      clearInterval(poll);
      if (isAndroid && !voicesKnown() && !health.started) setSpeechOff('no-voices');
    }
  }, 400);
} else renderLangUI();
renderNoVoice();
setMuted(muted);
sizeFx();
renderNeeds();
showStart();
requestAnimationFrame(t => { lastT = t; frame(t); });
