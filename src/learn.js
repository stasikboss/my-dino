/* ---------- growing up well: games for the body, the feelings and the mind, and help for the grown-ups ----------
   Each piece rests on research with children aged 3 to 6 (sources in the README):
   - Moving and freezing: freeze games ("Red Light, Purple Light") practiced self-regulation in preschool, and the
     child moves away from the screen while playing.
   - Feelings: naming a feeling from what happened, then something that helps (Preschool PATHS, Kindness Curriculum).
   - Breathing together: "smell the flower, blow out the candle", a slow breath to calm down.
   - Patterns: patterning at age 4 predicted math knowledge years later (Rittle-Johnson et al., 2017).
   - First sounds: hearing how words start is a foundation for reading.
   - What comes next: the game, not the parent, announces the next activity (Hiniker et al., CHI 2016). */

/* ---------- breathing together ---------- */
const calmEl = $('calm'), calmBall = $('calm-ball'), calmIcon = $('calm-icon');
let calmRun = null;
// cycles of a slow breath, in through the nose (smell the flower), out through the mouth (blow out the candle)
function breatheTogether(cycles = 3){
  if (calmRun) return calmRun.p;
  const run = { stop: false, p: null };
  calmRun = run;
  run.p = (async () => {
    stopSpeech(); stopMic(); closeWardrobe();
    calmEl.hidden = false;
    lastTouch = performance.now();
    await sayP('breatheHello', null, 9);
    const IN = 3600, OUT = 4600;
    for (let c = 0; c < cycles && !run.stop; c++){
      // the friend speaks the first two breaths, then it is quiet
      calmIcon.innerHTML = CALM_ART.flower; calmEl.dataset.phase = 'in';
      if (c < 2) say('breatheIn', null, 9);
      tone(262, IN / 1000, 'sine', 0.035, 0, 392);
      await breathPhase(run, IN, 0, 1);
      if (run.stop) break;
      calmIcon.innerHTML = CALM_ART.candle; calmEl.dataset.phase = 'out';
      if (c < 2) say('breatheOut', null, 9);
      noise(OUT / 1000 * 0.7, 'lowpass', 900, 300, 0.7, 0.05);
      await breathPhase(run, OUT, 1, 0);
      practice('calm');
    }
    const done = !run.stop;
    Pet.breathe(null);
    calmEl.hidden = true; calmEl.dataset.phase = '';
    if (calmRun === run) calmRun = null;
    if (done) await sayP('breatheDone', null, 8);
    return done;
  })();
  return run.p;
}
function breathPhase(run, ms, from, to){
  return new Promise(res => {
    const t0 = performance.now();
    const step = now => {
      if (run.stop){ res(); return; }
      const u = Math.min(1, (now - t0) / ms), e = u * u * (3 - 2 * u), v = from + (to - from) * e;
      calmBall.style.transform = `scale(${(0.55 + 0.45 * v).toFixed(3)})`;
      Pet.breathe(v);
      lastTouch = performance.now();
      if (u < 1) requestAnimationFrame(step); else res();
    };
    requestAnimationFrame(step);
  });
}
function stopBreathing(){
  if (!calmRun) return;
  calmRun.stop = true; calmRun = null;
  calmEl.hidden = true; calmEl.dataset.phase = '';
  Pet.breathe(null);
}
$('calm-close').addEventListener('click', () => { sfx.tap(); stopSpeech(); stopBreathing(); });

/* ---------- moving like the animals, and freeze dance ---------- */
// played with the friend itself, big in the meadow: the screen shows only what to do
function startLive(id){
  stopSpeech(); stopMic();
  gameOn = id; gameToken++;
  const tok = gameToken;
  inPlay = false;
  closeWardrobe();
  gameEl.hidden = false;
  gameEl.className = 'game g-live g-' + id;
  gameBody.textContent = '';
  document.body.classList.add('in-game', 'in-live');
  bubbleAnchor = null;
  stageEl.classList.remove('small');
  World.liveTop = 0;
  if (World.on){ World.E.setLayout('normal'); World.layout(); }
  gameMove(tok).catch(() => {});
}
const NOTE_SVG = `<svg viewBox="0 0 100 100"><path d="M40 72 V22 L82 12 V62" fill="none" stroke="${INK}" stroke-width="7" stroke-linejoin="round"/><ellipse cx="30" cy="74" rx="14" ry="11" fill="#ff5d8f" stroke="${INK}" stroke-width="4"/><ellipse cx="72" cy="64" rx="14" ry="11" fill="#4fb8ff" stroke="${INK}" stroke-width="4"/></svg>`;
const STATUE_SVG = `<svg viewBox="0 0 100 100"><rect x="20" y="78" width="60" height="14" rx="4" fill="#c9d3e0" stroke="${INK}" stroke-width="4"/><circle cx="50" cy="22" r="11" fill="#e6ecf4" stroke="${INK}" stroke-width="4"/>
  <path d="M50 34 V58 M50 40 L30 30 M50 40 L70 30 M50 58 L38 78 M50 58 L62 78" stroke="${INK}" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>
  <g stroke="#9fd0ff" stroke-width="3.5" stroke-linecap="round"><path d="M16 14 v12 M10 20 h12 M12 16 l8 8 M20 16 l-8 8"/><path d="M84 46 v10 M79 51 h10"/></g></svg>`;
function moveCard(pic, n){
  gameBody.textContent = '';
  const card = document.createElement('div'); card.className = 'move-card pop-in';
  const p = document.createElement('div'); p.className = 'move-pic'; p.append(pic); card.append(p);
  const pips = document.createElement('div'); pips.className = 'pips';
  for (let i = 0; i < n; i++){ const d = document.createElement('i'); pips.append(d); }
  card.append(pips);
  gameBody.append(card);
  // where the card ends (offsets, not the box on screen, which is still growing in); on a wide screen it stands to the side
  let y = card.offsetHeight;
  for (let n = card; n; n = n.offsetParent) y += n.offsetTop;
  const top = innerWidth > innerHeight * 1.3 ? 0 : y;
  if (Math.abs(top - World.liveTop) > 4){ World.liveTop = top; World.layout(true); }
  return pips;
}
const iconPic = svg => { const s = document.createElement('span'); s.className = 'pic'; s.innerHTML = svg; return s; };
function doMove(m, i){
  if (m.id === 'jump'){ Pet.flash('hop', 600); sfx.boing(); }
  else if (m.id === 'stomp'){ Pet.act('stomp', { side: i % 2 ? 1 : -1 }); sfx.step('trex'); buzz(15); }
  else if (m.id === 'stretch'){ if (i === 1) Pet.act('stretch', { dur: m.n * 1.15 }); sfx.stretch(); }
  else if (m.id === 'waddle'){ Pet.flash('wiggle', 700); sfx.step('penguin'); }
  else if (m.id === 'swing'){ Pet.act('wave'); sfx.whoosh(); }
  else if (m.id === 'spin'){ Pet.act('spin'); sfx.whoosh(); }
}
async function gameMove(tok){
  const lang = countLang();
  const moves = shuffle(MOVES).slice(0, profile.age <= 3 ? 3 : 4);
  const rounds = moves.length + 2;
  let r = 0;
  setDots(rounds, 0);
  await sayP('moveHello', null, 9);
  for (const m of moves){
    if (!alive(tok)) return;
    const pips = moveCard(friendPic(m.sp || Pet.sp, { pose: 'happy', size: 220 }), m.n);
    await sayP('move_' + m.id, { times: { he: TIMES.he[m.n - 1], ru: TIMES.ru[m.n - 1], en: TIMES.en[m.n - 1] } }, 9);
    await wait(500);
    for (let i = 1; i <= m.n; i++){
      if (!alive(tok)) return;
      doMove(m, i);
      if (m.n > 1) sayCount(i, lang);
      pips.children[i - 1].className = 'on';
      lastTouch = performance.now();
      await wait(m.id === 'stretch' ? 1150 : m.id === 'spin' ? 1500 : 1000);
    }
    if (!alive(tok)) return;
    practice('move');
    setDots(rounds, ++r);
    await sayP('moveGood', null, 9);
  }
  // freeze dance: dance while the music plays; when it stops, freeze like a statue
  if (!alive(tok)) return;
  moveCard(iconPic(NOTE_SVG), 0);
  await sayP('freezeHello', null, 9);
  for (let k = 0; k < 2; k++){
    if (!alive(tok)) return;
    moveCard(iconPic(NOTE_SVG), 0).parentNode.classList.add('dancing');
    Music.play('dance', { fx: true });
    const until = performance.now() + rand(4200, 7000);
    // the friend keeps dancing as long as the music plays
    let nextDance = 0;
    while (performance.now() < until){
      if (performance.now() >= nextDance){ Pet.act('dance'); nextDance = performance.now() + (World.on ? 4400 : 2100); }
      await wait(200);
      if (!alive(tok)){ Music.cut(); return; }
      lastTouch = performance.now();
    }
    Music.cut();
    Pet.freeze(true);
    moveCard(iconPic(STATUE_SVG), 0).parentNode.classList.add('frozen-card');
    say('freeze', null, 9);
    await wait(3200);
    if (!alive(tok)){ Pet.freeze(false); return; }
    Pet.freeze(false);
    practice('move');
    setDots(rounds, ++r);
    await sayP('freezeGood', null, 9);
    if (k === 0 && alive(tok)) await sayP('freezeGo', null, 9);
  }
  if (!alive(tok)) return;
  await sayP('moveDone', null, 9);
  finishGame(tok, 'move');
}

/* ---------- feelings ---------- */
function scenePic(s){
  if (s.id === 'gift') return itemPic('gift', GIFT_SVG, 200);
  if (s.id === 'friend'){ const other = pick(SPECIES_ORDER.filter(x => x !== Pet.sp)); return friendPic(other, { pose: 'happy', size: 220 }); }
  return iconPic(SCENE_ART[s.id]);
}
const sayTextP = texts => new Promise(r => sayRaw(texts, 9, r));
async function gameFeelings(tok){
  const rounds = profile.age <= 3 ? 3 : 4;
  setDots(rounds, 0);
  // a different feeling each round
  const list = [], seen = new Set();
  for (const s of shuffle(SITUATIONS)){ if (seen.has(s.feel)) continue; seen.add(s.feel); list.push(s); if (list.length === rounds) break; }
  await sayP('feelHello', null, 9);
  for (let r = 0; r < rounds; r++){
    if (!alive(tok)) return;
    const s = list[r];
    const others = shuffle(FEELING_ORDER.filter(f => f !== s.feel)).slice(0, profile.age >= 5 ? 3 : 2);
    const col = document.createElement('div'); col.className = 'g-col';
    const scene = document.createElement('div'); scene.className = 'g-scene pop-in'; scene.append(scenePic(s));
    const row = document.createElement('div'); row.className = 'g-row faces' + (others.length === 3 ? ' four' : '');
    const btns = shuffle([s.feel, ...others]).map(f => {
      const b = document.createElement('button'); b.type = 'button'; b.className = 'choice-btn face-btn'; b.dataset.f = f;
      b.innerHTML = FACE_ART[f] + `<span dir="rtl">${FEELINGS[f].he}</span>`;
      b.setAttribute('aria-label', FEELINGS[f].he);
      return b;
    });
    row.append(...btns);
    col.append(scene, row);
    gameBody.textContent = ''; gameBody.append(col);
    say('feelAsk', { story: { he: s.he, ru: s.ru, en: s.en } }, 9);
    let misses = 0;
    for (;;){
      const b = await tapOnce(btns.filter(x => !x.classList.contains('fade')));
      if (!alive(tok)) return;
      stopSpeech();
      if (b.dataset.f === s.feel){
        b.classList.add('right'); sfx.yes();
        const rb = b.getBoundingClientRect(); FX.emit('heart', rb.left + rb.width / 2, rb.top + rb.height / 3, 6, { angle: -Math.PI / 2, speed: 150 });
        practice('feelings');
        const F = FEELINGS[s.feel];
        if (misses) await sayP('triedAgain', null, 9);
        if (!alive(tok)) return;
        await sayTextP(F.yes);
        if (!alive(tok)) return;
        await sayTextP(F.help);
        // angry: we calm down together, two slow breaths
        if (s.feel === 'angry' && alive(tok)) await breatheTogether(2);
        break;
      }
      misses++;
      b.classList.add('nope', 'fade'); sfx.nope();
      await sayP('feelNo', null, 9);
      if (!alive(tok)) return;
      if (misses >= 2) btns.find(x => x.dataset.f === s.feel).classList.add('hint');
    }
    if (!alive(tok)) return;
    setDots(rounds, r + 1);
    await wait(600);
  }
  if (!alive(tok)) return;
  await sayP('feelDone', null, 9);
  finishGame(tok, 'feelings');
}

/* ---------- patterns: what comes next? ---------- */
// grouped by color: a pattern takes one from each group, so the things in it never look alike
const PATTERN_GROUPS = [['fern', 'leaves', 'grass'], ['meat', 'fruit'], ['fish']];
const PATTERN_ITEMS = PATTERN_GROUPS.flat();
const groupOf = f => PATTERN_GROUPS.findIndex(g => g.includes(f));
const PATTERN_TONE = [523, 659, 784];
function makePattern(level){
  const kinds = level === 0 ? ['AB'] : level === 1 ? ['AB', 'AAB', 'ABB'] : ['AAB', 'ABB', 'ABC'];
  const unit = pick(kinds).split('');
  const items = shuffle(PATTERN_GROUPS).map(g => pick(g)), map = { A: items[0], B: items[1], C: items[2] };
  const seq = [];
  // AB ends on either one, so the answer isn't always the same place in the pattern
  const total = unit.length === 2 ? pick([5, 6]) : 6;
  for (let i = 0; i < total; i++) seq.push(unit[i % unit.length]);
  const answer = seq.pop();
  // the choices: the right one, the other one from the pattern (so it takes looking), and one more
  const used = [...new Set(unit)].filter(x => x !== answer).map(x => map[x]);
  let extra = PATTERN_ITEMS.filter(x => x !== map[answer] && !used.includes(x) && groupOf(x) !== groupOf(map[answer]));
  if (!extra.length) extra = PATTERN_ITEMS.filter(x => x !== map[answer] && !used.includes(x));
  const choices = shuffle([map[answer], used[0], pick(extra)]);
  return { shown: seq.map(x => map[x]), answer: map[answer], choices, tones: seq.map(x => PATTERN_TONE['ABC'.indexOf(x)]), answerTone: PATTERN_TONE['ABC'.indexOf(answer)] };
}
function patternLevel(r){ return profile.age <= 3 ? 0 : profile.age === 4 ? (r < 2 ? 0 : 1) : (r < 1 ? 1 : 2); }
async function gamePatterns(tok){
  const rounds = profile.age <= 3 ? 3 : 4;
  setDots(rounds, 0);
  await sayP('patternHello', null, 9);
  for (let r = 0; r < rounds; r++){
    if (!alive(tok)) return;
    const P = makePattern(patternLevel(r));
    const col = document.createElement('div'); col.className = 'g-col';
    const line = document.createElement('div'); line.className = 'pattern-row';
    const cells = P.shown.map(f => { const c = document.createElement('span'); c.className = 'p-cell'; c.append(itemPic(f, FOOD_ART[f], 90)); return c; });
    const slot = document.createElement('span'); slot.className = 'p-cell p-slot'; slot.textContent = '?';
    line.append(...cells, slot);
    const row = document.createElement('div'); row.className = 'g-row three';
    const btns = P.choices.map(f => { const b = document.createElement('button'); b.type = 'button'; b.className = 'choice-btn'; b.dataset.f = f; b.setAttribute('aria-label', FOODS[f].he); b.append(itemPic(f, FOOD_ART[f], 120)); return b; });
    row.append(...btns);
    col.append(line, row);
    gameBody.textContent = ''; gameBody.append(col);
    // the row plays like a little song, so the pattern can be heard too
    for (let i = 0; i < cells.length; i++){ const c = cells[i], f = P.tones[i]; setTimeout(() => { if (!alive(tok)) return; c.classList.add('bop'); tone(f, 0.18, 'triangle', 0.08); setTimeout(() => c.classList.remove('bop'), 260); }, 300 + i * 380); }
    say('patternAsk', null, 9);
    let misses = 0;
    for (;;){
      const b = await tapOnce(btns.filter(x => !x.classList.contains('fade')));
      if (!alive(tok)) return;
      stopSpeech();
      if (b.dataset.f === P.answer){
        b.classList.add('right'); sfx.yes();
        slot.textContent = ''; slot.classList.add('filled'); slot.append(itemPic(P.answer, FOOD_ART[P.answer], 90));
        tone(P.answerTone, 0.3, 'triangle', 0.1, 0.05);
        practice('patterns');
        await sayP(misses ? 'triedAgain' : 'patternYes', null, 9);
        break;
      }
      misses++;
      b.classList.add('nope', 'fade'); sfx.nope();
      await sayP('patternNo', null, 9);
      if (!alive(tok)) return;
      // listen to it again
      for (let i = 0; i < cells.length; i++){ const c = cells[i], f = P.tones[i]; setTimeout(() => { if (!alive(tok)) return; c.classList.add('bop'); tone(f, 0.18, 'triangle', 0.08); setTimeout(() => c.classList.remove('bop'), 260); }, i * 380); }
    }
    if (!alive(tok)) return;
    setDots(rounds, r + 1);
    await wait(700);
  }
  finishGame(tok, 'patterns');
}

/* ---------- first sounds: which one starts like this word? ---------- */
function wordPic(k, size){
  if (SPECIES[k]) return friendPic(k, { pose: 'happy', size: size + 40 });
  if (FOOD_ART[k]) return itemPic(k, FOOD_ART[k], size);
  if (k === 'egg') return itemPic('egg', EGG_SVG, size);
  if (k === 'gift') return itemPic('gift', GIFT_SVG, size);
  return itemPic(k, TOOL_ART[k], size);
}
async function gameSounds(tok){
  const rounds = profile.age >= 5 ? 4 : 3;
  setDots(rounds, 0);
  const langs = LANGS.filter(l => langsOn[l]);
  if (!langs.length) langs.push('he');
  const decks = {}; for (const l of langs) decks[l] = shuffle(SOUND_ROUNDS[l]);
  await sayP('soundHello', null, 9);
  for (let r = 0; r < rounds; r++){
    if (!alive(tok)) return;
    const lang = langs[r % langs.length];
    const R = decks[lang].pop() || pick(SOUND_ROUNDS[lang]);
    const W = WORDS[lang];
    const col = document.createElement('div'); col.className = 'g-col';
    const target = document.createElement('div'); target.className = 'g-target sound-target pop-in';
    target.append(wordPic(R.word, 200));
    const badge = document.createElement('span'); badge.className = 'letter'; badge.textContent = R.letter; badge.lang = lang; target.append(badge);
    const opts = shuffle([R.match, ...R.other]);
    const row = document.createElement('div'); row.className = 'g-row three';
    const btns = opts.map(k => { const b = document.createElement('button'); b.type = 'button'; b.className = 'choice-btn'; b.dataset.k = k; b.setAttribute('aria-label', W[k]); b.lang = lang; b.append(wordPic(k, 120)); return b; });
    row.append(...btns);
    col.append(target, row);
    gameBody.textContent = ''; gameBody.append(col);
    say('soundAsk', { word: W[R.word], o1: W[opts[0]], o2: W[opts[1]], o3: W[opts[2]] }, 9, lang);
    let misses = 0;
    for (;;){
      const b = await tapOnce(btns.filter(x => !x.classList.contains('fade')));
      if (!alive(tok)) return;
      stopSpeech();
      if (b.dataset.k === R.match){
        b.classList.add('right'); sfx.yes(); badge.classList.add('glow');
        practice('sounds');
        if (misses) await sayP('triedAgain', null, 9, lang);
        if (!alive(tok)) return;
        await sayP('soundYes', { word: W[R.word], match: W[R.match], letter: R.say }, 9, lang);
        break;
      }
      misses++;
      b.classList.add('nope', 'fade'); sfx.nope();
      await sayP('soundNo', { pickedw: W[b.dataset.k], word: W[R.word] }, 9, lang);
      if (!alive(tok)) return;
      if (misses >= 2) btns.find(x => x.dataset.k === R.match).classList.add('hint');
    }
    if (!alive(tok)) return;
    setDots(rounds, r + 1);
    await wait(600);
  }
  finishGame(tok, 'sounds');
}

/* ---------- what comes after the game ---------- */
function sayNext(onDone){ if (nextAct && LINES['next_' + nextAct]) say('next_' + nextAct, null, 9, null, onDone); else if (onDone) onDone(); }

/* ---------- the parents' corner: what we practiced this week, and a way to carry it into the day ---------- */
function renderSkills(){
  const el = $('skills'); if (!el) return;
  el.textContent = '';
  const week = weekSkills();
  const done = SKILL_ORDER.filter(k => week[k]).sort((a, b) => week[b] - week[a]);
  if (!done.length){ const li = document.createElement('li'); li.className = 'skill-empty'; li.textContent = 'עוד לא שיחקנו השבוע. אחרי כמה משחקים יופיע כאן מה תרגלנו, ורעיון לכל תחום.'; el.append(li); return; }
  const max = Math.max(...done.map(k => week[k]));
  for (const k of done){
    const li = document.createElement('li'); li.className = 'skill';
    const top = document.createElement('div'); top.className = 'skill-top';
    const name = document.createElement('strong'); name.textContent = SKILLS[k].he;
    const n = document.createElement('span'); n.className = 'skill-n'; n.textContent = week[k] === 1 ? 'פעם אחת' : week[k] + ' פעמים';
    top.append(name, n);
    const bar = document.createElement('div'); bar.className = 'skill-bar'; const fill = document.createElement('i'); fill.style.width = Math.max(6, week[k] / max * 100) + '%'; bar.append(fill);
    const idea = document.createElement('p'); idea.className = 'skill-idea'; idea.textContent = SKILLS[k].idea;
    li.append(top, bar, idea);
    el.append(li);
  }
  const rest = SKILL_ORDER.filter(k => !week[k]);
  if (rest.length){ const li = document.createElement('li'); li.className = 'skill-empty'; li.textContent = 'עוד לא תרגלנו השבוע: ' + rest.map(k => SKILLS[k].he).join(', ') + '.'; el.append(li); }
}
