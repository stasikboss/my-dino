/* The friend's life from moment to moment: how it breathes, blinks and looks around; the reactions it plays when
   touched (a purr, a giggle, a sneeze, a look back at its tail, a dizzy spin...); walking across the room on its
   own legs; eating food for real, bite by bite; heading a ball; following a butterfly with its eyes. Also the small
   3D effects that go with them: crumbs, sparkles, hearts, sneeze drops, bubbles and dizzy stars.

   The game still speaks to the friend through state classes (happy, talk, sleep, hop...), and can ask for an action
   by name with E.act(name). Each frame, the state gives a base pose, every running action adds its own offsets on
   top, and the walk adds steps. */
import * as THREE from 'three';
import { V, glossy, basic, roundedShape, v2, release } from './util.js';
import { buildItem } from './items.js';

export const ease = (a, b, k) => a + (b - a) * k;
// takes a food, ball or butterfly out of the scene and frees the shapes only it used
export function discard(E, obj){ if (!obj) return; if (obj.parent) obj.parent.remove(obj); try { release(obj); } catch (e) {} }
const clamp01 = u => Math.max(0, Math.min(1, u));
const sm = u => { u = clamp01(u); return u * u * (3 - 2 * u); };
const bell = u => Math.sin(Math.PI * clamp01(u));
const seg = (u, a, b) => clamp01((u - a) / (b - a));
const angDiff = (a, b) => { let d = b - a; while (d > Math.PI) d -= Math.PI * 2; while (d < -Math.PI) d += Math.PI * 2; return d; };

const ONE_SHOT = { hop: 0.55, squish: 0.35, wiggle: 0.7, shake: 0.5, nod: 0.64 };

function pose(){
  return { y: 0, sq: 0, roll: 0, pitch: 0, yaw: 0, hYaw: 0, hPitch: 0, hRoll: 0, mouth: -1, open: -1, happy: -1, wide: 0,
    arms: 0, wave: 0, ears: 0, tail: 0, love: 0, legKick: null, look: null };
}

/* ---------- actions: each writes offsets into the pose while it runs (u goes 0..1) ---------- */
const ACTIONS = {
  // a pat on the head: eyes close happily and the head leans into the hand
  purr: { dur: 1.9, run(u, P){ const b = bell(u); P.happy = 1; P.hRoll += 0.24 * b; P.hPitch -= 0.08 * b; P.roll += 0.05 * b; P.tail += 1.6 * b; P.sq -= 0.025 * b; P.ears += 0.3 * b; } },
  // a tickle on the belly: bouncing laughter
  giggle: { dur: 1.5, run(u, P){
    const k = 1 - sm(seg(u, 0.6, 1));
    P.y += Math.abs(Math.sin(u * Math.PI * 7)) * 0.05 * k;
    P.roll += Math.sin(u * Math.PI * 9) * 0.07 * k;
    P.mouth = Math.max(P.mouth, (0.5 + 0.4 * Math.abs(Math.sin(u * Math.PI * 11))) * k);
    P.happy = 1; P.arms += 1.3 * k; P.tail += 2 * k;
  } },
  // a touch on the nose: ah... ah... achoo!
  sneeze: { dur: 1.6, run(u, P, a, E){
    if (u < 0.5){ const k = sm(seg(u, 0, 0.5)); P.hPitch -= 0.3 * k; P.open = 1 - 0.65 * k; P.mouth = Math.max(P.mouth, 0.3 * k); P.sq -= 0.035 * k; P.wide = 0.3 * k; }
    else if (u < 0.64){
      const k = bell(seg(u, 0.5, 0.64)); P.hPitch += 0.32 * k; P.mouth = 1; P.open = 0; P.sq += 0.07 * k;
      if (!a.fired){ a.fired = true; E.burstAt('drop', 'mouth', 14); E.cue('sneeze'); }
    } else { const k = seg(u, 0.64, 1); P.hPitch += 0.08 * (1 - k); P.open = k < 0.25 ? 0.15 : -1; P.happy = k > 0.35 ? 1 : -1; P.mouth = Math.max(P.mouth, 0.2 * (1 - k)); }
  } },
  // a touch on the tail: turns around to see who it was, and wags it
  lookback: { dur: 2.0, run(u, P, a){ const b = sm(seg(u, 0, 0.28)) * (1 - sm(seg(u, 0.72, 1))); P.hYaw += a.side * 1.0 * b; P.yaw += a.side * 0.4 * b; P.tail += 3.5 * b; P.wide = 0.6 * b; P.mouth = Math.max(P.mouth, 0.25 * b); } },
  // a touch on a foot: lifts it, then a little hop
  stomp: { dur: 1.0, run(u, P, a){ P.legKick = { side: a.side, amt: bell(seg(u, 0, 0.55)) }; P.y += bell(seg(u, 0.55, 1)) * 0.1; P.happy = u > 0.5 ? 1 : -1; P.roll += -a.side * 0.06 * bell(seg(u, 0, 0.55)); } },
  // ears, horns, frill, mane: a shake of the head, ears flapping
  shakehead: { dur: 1.0, run(u, P){ const k = 1 - u; P.hYaw += Math.sin(u * Math.PI * 6) * 0.38 * k; P.ears += Math.sin(u * Math.PI * 12) * 1.4 * k; P.open = u < 0.6 ? 0.45 : -1; } },
  // too many pokes: a spin, then wobbly with stars around the head
  dizzy: { dur: 3.2, run(u, P, a, E, t){
    P.yaw += Math.PI * 2 * sm(seg(u, 0, 0.3));
    if (u > 0.3){ const k = 1 - sm(seg(u, 0.75, 1)); P.roll += Math.sin(t * 7) * 0.14 * k; P.hRoll += Math.sin(t * 7 + 1.2) * 0.2 * k; P.open = u < 0.85 ? 0.3 : -1; P.mouth = Math.max(P.mouth, 0.3 * k); }
    if (!a.fired && u > 0.28){ a.fired = true; E.stars(2.0); E.cue('dizzy'); }
  } },
  yawn: { dur: 2.6, run(u, P){ const b = bell(seg(u, 0.05, 0.9)); P.mouth = Math.max(P.mouth, Math.pow(b, 0.6)); P.open = 1 - 0.85 * b; P.hPitch -= 0.26 * b; P.arms += 2.2 * b; P.sq -= 0.05 * b; P.wave += 0.6 * b; } },
  stretch: { dur: 1.8, run(u, P){ const b = bell(u); P.sq -= 0.08 * b; P.arms += 2.4 * b; P.hPitch -= 0.22 * b; P.mouth = Math.max(P.mouth, 0.55 * b); P.open = 1 - 0.7 * b; } },
  dance: { dur: 4.4, run(u, P, a){
    const env = sm(seg(u, 0, 0.08)) * (1 - sm(seg(u, 0.9, 1)));
    const beat = u * 4.4 * 2.2;   // beats
    P.y += Math.abs(Math.sin(beat * Math.PI)) * 0.07 * env;
    P.roll += Math.sin(beat * Math.PI) * 0.12 * env;
    P.hRoll += Math.sin(beat * Math.PI + 0.8) * 0.17 * env;
    P.yaw += Math.sin(beat * Math.PI * 0.5) * 0.25 * env;
    P.arms += 1.6 * env; P.tail += 2.5 * env; P.wave += env;
    P.mouth = Math.max(P.mouth, 0.35 * env);
    P.happy = (Math.floor(beat) % 4 < 2) ? 1 : -1;
    P.legKick = { side: Math.floor(beat) % 2 ? 1 : -1, amt: 0.6 * env * Math.abs(Math.sin(beat * Math.PI)) };
  } },
  lookaround: { dur: 3.4, run(u, P){ const b = bell(u); P.hYaw += Math.sin(u * Math.PI * 2) * 0.75 * b; P.hPitch -= 0.1 * b; P.wide = 0.3 * b; } },
  surprise: { dur: 0.9, run(u, P){ const b = bell(u); P.wide = b; P.mouth = Math.max(P.mouth, 0.65 * b); P.y += bell(seg(u, 0, 0.45)) * 0.08; P.sq -= 0.04 * b; } },
  love: { dur: 2.2, run(u, P){ const b = Math.pow(bell(u), 0.5); P.love = Math.max(P.love, b); P.hRoll += Math.sin(u * Math.PI * 3) * 0.1 * b; P.mouth = Math.max(P.mouth, 0.2 * b); P.tail += 2 * b; } },
  wave: { dur: 1.6, run(u, P){ const b = bell(u); P.wave += 1.6 * b; P.happy = 1; P.hRoll += Math.sin(u * Math.PI * 4) * 0.08 * b; } },
  header: { dur: 0.8, run(u, P){ P.hPitch += u < 0.35 ? -0.3 * sm(u / 0.35) : 0.35 * bell(seg(u, 0.35, 0.8)) - 0.3 * (1 - seg(u, 0.35, 0.5)); P.y += bell(seg(u, 0.2, 0.7)) * 0.1; P.happy = u > 0.4 ? 1 : -1; } },
  // after the bath: a big shake to dry off, like a puppy
  shakedry: { dur: 1.3, run(u, P, a, E){ const k = bell(u); P.roll += Math.sin(u * Math.PI * 14) * 0.13 * k; P.hRoll += Math.sin(u * Math.PI * 14 + 0.6) * 0.2 * k; P.ears += Math.sin(u * Math.PI * 16) * 1.4 * k; P.open = 0.2; P.tail += 3 * k; if (!a.fired && u > 0.25){ a.fired = true; E.burstAt('drop', 'center', 18, { spread: 1 }); } } },
  // a full turn on the spot (moving game)
  spin: { dur: 1.3, run(u, P){ P.yaw += Math.PI * 2 * sm(u); P.y += bell(u) * 0.06; P.happy = 1; P.arms += bell(u); } },
  // eating, driven by the food effect (a.ctl holds the mouth and look it wants)
  eat: { dur: 99, run(u, P, a){ const c = a.ctl; if (!c) return; if (c.mouth >= 0) P.mouth = Math.max(P.mouth, c.mouth); if (c.happy) P.happy = 1; if (c.open >= 0) P.open = c.open; P.hYaw += c.turn || 0; P.hPitch += c.pitch || 0; P.love = Math.max(P.love, c.love || 0); if (c.done) a.end = true; } }
};
export const ACTION_NAMES = Object.keys(ACTIONS);

/* ---------- per-friend extras built on first use: heart eyes, dizzy stars ---------- */
let heartGeo = null, starGeo = null;
function heartShape(){
  const s = new THREE.Shape();
  s.moveTo(0, -0.5);
  s.bezierCurveTo(-0.15, -0.35, -0.62, -0.05, -0.55, 0.25);
  s.bezierCurveTo(-0.5, 0.55, -0.12, 0.6, 0, 0.32);
  s.bezierCurveTo(0.12, 0.6, 0.5, 0.55, 0.55, 0.25);
  s.bezierCurveTo(0.62, -0.05, 0.15, -0.35, 0, -0.5);
  return s;
}
function heartGeometry(){
  if (!heartGeo){ heartGeo = new THREE.ExtrudeGeometry(heartShape(), { depth: 0.14, bevelEnabled: true, bevelThickness: 0.08, bevelSize: 0.06, bevelSegments: 3, curveSegments: 14 }); heartGeo.center(); heartGeo.userData.shared = true; }
  return heartGeo;
}
function starGeometry(){
  if (!starGeo){
    const s = new THREE.Shape();
    for (let i = 0; i < 10; i++){ const a = Math.PI / 2 + i * Math.PI / 5, rr = i % 2 ? 0.42 : 1; i ? s.lineTo(Math.cos(a) * rr, Math.sin(a) * rr) : s.moveTo(Math.cos(a) * rr, Math.sin(a) * rr); }
    starGeo = new THREE.ExtrudeGeometry(s, { depth: 0.2, bevelEnabled: true, bevelThickness: 0.1, bevelSize: 0.08, bevelSegments: 2, curveSegments: 4 }); starGeo.center(); starGeo.userData.shared = true;
  }
  return starGeo;
}
const HEART_MAT = glossy('#ff4f86', { roughness: 0.25, emissive: '#ff3d77', emissiveIntensity: 0.25 });
const STAR_MAT = glossy('#ffd23a', { roughness: 0.25, emissive: '#ffb800', emissiveIntensity: 0.35 });
function loveEyes(r){
  if (r._hearts) return r._hearts;
  r._hearts = r.eyes.map(e => {
    const m = new THREE.Mesh(heartGeometry(), HEART_MAT);
    m.position.set(0, 0, e.r * 1.02); m.scale.setScalar(0.001); m.visible = false; m.castShadow = false;
    e.g.add(m);
    return m;
  });
  return r._hearts;
}

/* ---------- the walk ---------- */
export function newWalk(){ return { x: 0, y: 0, z: 0, yaw: 0, target: null, amt: 0, phase: 0, resolve: null, speed: 1, locked: false, run: false, pause: 0 }; }

/* ---------- the animator ---------- */
export function animate(E, dt){
  const r = E.friend; if (!r) return;
  const A = E.anim, t = E.t;
  const now = new Set(E.stateEl ? Array.from(E.stateEl.classList) : []);
  for (const k of Object.keys(ONE_SHOT)) if (now.has(k) && !A.prev.has(k)) A[k + 'T'] = 0.0001;
  A.prev = now;
  const sleep = now.has('sleep'), happy = now.has('happy'), wide = now.has('wide');
  const blink = now.has('blink');
  A.sleep = ease(A.sleep, sleep ? 1 : 0, Math.min(1, dt * 4));
  A.happy = ease(A.happy, happy ? 1 : 0, Math.min(1, dt * 14));
  const openT = sleep ? 0 : blink ? 0 : 1;
  A.open = ease(A.open, openT, Math.min(1, dt * (blink ? 40 : 18)));
  A.talk = ease(A.talk, now.has('talk') ? 1 : 0, Math.min(1, dt * 22));
  A.tilt = ease(A.tilt, now.has('tilt') ? 1 : now.has('listen') ? -1 : 0, Math.min(1, dt * 6));
  A.excited = ease(A.excited, now.has('excited') ? 1 : 0, Math.min(1, dt * 6));

  // the actions running now
  const P = pose();
  if (!sleep){
    for (const a of E.actions){
      a.t += dt;
      const def = ACTIONS[a.name];
      const u = a.t / (a.dur || def.dur);
      if (u >= 1 || a.end){ a.done = true; continue; }
      def.run(u, P, a, E, t);
    }
  }
  E.actions = E.actions.filter(a => !a.done);

  // walking: steps, a bob and a sway
  const W = E.walk;
  walkStep(E, r, dt, W);
  const gait = r.gait || (r.legs.length === 2 ? 'biped' : 'quad');
  const hop = gait === 'hop';
  const step = hop ? W.phase * 0.62 : W.phase;
  // a kangaroo bounds along on both feet at once, leaning forward, its tail out behind for balance
  P.y += Math.abs(Math.sin(step)) * (hop ? 0.16 : gait === 'waddle' ? 0.025 : 0.035) * W.amt;
  if (hop) P.pitch += 0.12 * W.amt;
  P.roll += Math.sin(step) * (gait === 'waddle' ? 0.13 : gait === 'scoot' ? 0.05 : 0.035) * W.amt;
  const si = Math.floor(step / Math.PI);
  if (si !== W.stepIdx){ W.stepIdx = si; if (W.amt > 0.45 && W.y < 0.02) E.cue('step'); }

  // eyes and mouth
  const eyeOpen = P.open >= 0 ? Math.min(A.open, P.open) : A.open;
  const eyeHappy = P.happy >= 0 ? Math.max(P.happy, A.happy) : A.happy;
  for (const e of r.eyes){ e.set(eyeOpen, P.love > 0.3 ? 0 : eyeHappy, A.sleep); e.g.scale.setScalar(1 + (wide ? 0.12 : 0) + P.wide * 0.14); }
  if (P.love > 0.01 || r._hearts){
    const hs = loveEyes(r);
    for (const h of hs){ h.visible = P.love > 0.01; h.scale.setScalar(r.eyes[0].r * 1.7 * P.love * (1 + 0.12 * Math.sin(t * 12))); }
  }
  const m0 = Math.min(1, A.talk * (happy && !now.has('talk') ? 0 : 1));
  if (E.game && E.game.mouth) P.mouth = Math.max(P.mouth, E.game.mouth);
  r.mouth.set(P.mouth >= 0 ? Math.max(m0, P.mouth) : m0);

  // the classic one-shots the game asks for with classes
  let jumpY = 0, sq = 0, wig = 0, shake = 0, nod = 0;
  for (const k of Object.keys(ONE_SHOT)){
    const kk = k + 'T';
    if (!A[kk]) continue;
    A[kk] += dt;
    const u = A[kk] / ONE_SHOT[k];
    if (u >= 1){ A[kk] = 0; continue; }
    if (k === 'hop'){ jumpY = Math.sin(Math.min(1, u / 0.7) * Math.PI) * 0.32; if (u > 0.7) sq = Math.sin((u - 0.7) / 0.3 * Math.PI) * 0.08; }
    if (k === 'squish') sq = Math.sin(u * Math.PI) * 0.1;
    if (k === 'wiggle') wig = Math.sin(u * Math.PI * 10) * 0.08 * (1 - u);
    if (k === 'shake') shake = Math.sin(u * Math.PI * 6) * 0.3 * (1 - u);
    if (k === 'nod') nod = Math.sin(u * Math.PI * 4) * 0.14;
  }
  // a guided breath (E.breath from 0, out, to 1, in) is bigger and slower than the idle breathing
  const guided = E.breath != null;
  const breath = guided ? (E.breath - 0.4) * 0.11 : Math.sin(t * (sleep ? 1.4 : 2.1)) * (sleep ? 0.026 : 0.014);
  if (guided){ P.hPitch -= 0.08 * E.breath; P.happy = E.breath < 0.3 ? 1 : P.happy; }
  // asleep, the friend settles down low (into the bed, under the blanket)
  r.jump.position.y = jumpY + P.y - A.sleep * 0.13;
  const s2 = sq + P.sq;
  r.body.scale.set(1 + s2 * 0.6, 1 - s2 + breath, 1 + s2 * 0.6);
  r.body.rotation.z = wig + P.roll + Math.sin(t * 0.7) * 0.012;
  r.body.rotation.x = P.pitch;
  r.root.rotation.y = W.yaw + P.yaw;

  // the head: idle sway, look at what the finger holds (or the butterfly), nod, shake, tilt; droops in sleep
  const baseYaw = r.headYaw || 0;
  let lookYaw = 0, lookPitch = 0;
  const target = E.lookOverride || (E.look ? E.lookW : null);
  if (target && !sleep){
    const hp = new THREE.Vector3(); r.head.getWorldPosition(hp);
    const dir = target.clone().sub(hp);
    // in the friend's own frame (it may be turned while walking or spinning)
    const yawNow = r.root.rotation.y + (r.turn || 0) + baseYaw;
    lookYaw = Math.max(-0.6, Math.min(0.6, angDiff(yawNow, Math.atan2(dir.x, dir.z)) * 0.5));
    lookPitch = Math.max(-0.35, Math.min(0.35, -Math.atan2(dir.y, Math.hypot(dir.x, dir.z)) * 0.45));
  }
  r._yaw = ease(r._yaw || 0, lookYaw, Math.min(1, dt * 6));
  r._pitch = ease(r._pitch || 0, lookPitch, Math.min(1, dt * 6));
  r.head.rotation.y = baseYaw + r._yaw + shake + P.hYaw + Math.sin(t * 0.5) * 0.04 * (1 - A.sleep);
  r.head.rotation.x = r._pitch + nod + P.hPitch + A.sleep * 0.24 + Math.sin(t * 0.9) * 0.015;
  r.head.rotation.z = A.tilt * 0.18 + P.hRoll + Math.sin(t * 0.6) * 0.02;
  for (const e of r.eyes){
    const ty = target ? r._yaw * 1.2 : Math.sin(t * 0.33) * 0.08;
    const tx = target ? r._pitch * 1.2 : 0;
    e.look.rotation.y = ease(e.look.rotation.y, ty, Math.min(1, dt * 10));
    e.look.rotation.x = ease(e.look.rotation.x, tx, Math.min(1, dt * 10));
  }

  // tail, ears, trunk, flippers, arms
  const wag = A.excited + P.tail * 0.5;
  if (r.tail){ const sp = 1.9 + wag * 5; r.tail.rotation.y = Math.sin(t * sp) * (0.12 + Math.min(1.5, wag) * 0.14) * (1 - A.sleep * 0.8); }
  if (r.extra.earL){
    const f = Math.sin(t * 2.2) * 0.06 + (Math.sin(t * 0.7) > 0.93 ? Math.sin(t * 30) * 0.12 : 0) + Math.sin(t * 20) * 0.25 * Math.min(1, Math.abs(P.ears)) * Math.sign(P.ears || 1);
    if (r.sp === 'lion' || r.sp === 'kangaroo'){ r.extra.earL.rotation.set(0, 0, f); r.extra.earR.rotation.set(0, 0, -f); }
    else { r.extra.earL.rotation.y = -0.55 - f; r.extra.earR.rotation.y = 0.55 + f; }
  }
  if (r.trunk) r.trunk.rotation.x = Math.sin(t * 1.3) * 0.08 - A.talk * 0.12 - P.wave * 0.5 - Math.max(0, P.mouth) * 0.15;
  if (r.extra.finL){
    const flap = (A.excited + P.arms * 0.6) * Math.sin(t * 22) * 0.35 + Math.sin(t * 1.5) * 0.04;
    r.extra.finL.rotation.z = -flap - 0.05 - P.wave * 0.9;
    r.extra.finR.rotation.z = flap + 0.05 + P.wave * 0.3 * Math.sin(t * 9);
  }
  if (r.extra.armL){
    const f = Math.sin(t * 3) * 0.08 + (A.excited + P.arms * 0.5) * Math.sin(t * 18) * 0.4;
    r.extra.armL.rotation.x = f - P.wave * 0.6;
    r.extra.armR.rotation.x = -f - P.wave * (1.2 + 0.35 * Math.sin(t * 10));
  }

  // legs: the walk cycle, a lifted foot, or a front paw that waves
  for (const L of r.legs){
    const off = gait === 'biped' || gait === 'waddle' || gait === 'scoot' ? (L.side > 0 ? 0 : Math.PI) : ((L.front ? 1 : 0) ^ (L.side > 0 ? 1 : 0)) ? 0 : Math.PI;
    let rx = Math.sin(step + off) * (gait === 'scoot' ? 0.4 : 0.5) * W.amt;
    let ly = 0;
    if (hop) rx = Math.abs(Math.sin(step)) * 0.55 * W.amt;
    if (gait === 'waddle'){ ly = Math.max(0, Math.sin(step + off)) * 0.06 * W.amt; rx *= 0.4; }
    if (P.legKick && P.legKick.side === L.side && (L.front || r.legs.length <= 2)){ rx -= 0.7 * P.legKick.amt; ly += 0.05 * P.legKick.amt; }
    if (P.wave > 0.05 && L.front && L.side > 0 && r.legs.length === 4){ rx -= 0.9 * Math.min(1, P.wave) * (0.8 + 0.2 * Math.sin(t * 10)); ly += 0.08 * Math.min(1, P.wave); }
    L.g.rotation.x = ease(L.g.rotation.x, rx, Math.min(1, dt * 16));
    L.g.position.y = L.hip.y + ly;
  }
}

function walkStep(E, r, dt, W){
  if (W.locked) return;          // a game moves the friend itself
  const rest = r.turn || 0;
  let wantYaw = 0;
  // touched on the way: stop, turn to the child for a moment, then walk on
  if (W.pause > 0) W.pause -= dt;
  else if (W.target){
    const dx = W.target.x - W.x, dz = W.target.z - W.z, dist = Math.hypot(dx, dz);
    if (dist < 0.015){
      W.x = W.target.x; W.z = W.target.z; W.target = null;
      const res = W.resolve; W.resolve = null; if (res) res();
    } else {
      wantYaw = Math.atan2(dx, dz) - rest;
      const d = angDiff(W.yaw, wantYaw);
      W.yaw += Math.sign(d) * Math.min(Math.abs(d), dt * 7);
      if (Math.abs(d) < 0.7){
        const sp = 0.9 * W.speed * (r.inner ? r.inner.scale.x : 1);
        const k = Math.min(dist, sp * dt * (1 - Math.abs(d) / 0.7 * 0.6));
        W.x += dx / dist * k; W.z += dz / dist * k;
      }
      W.amt = ease(W.amt, 1, Math.min(1, dt * 8));
      W.phase += dt * 9 * W.amt * W.speed;
      return;
    }
  }
  // standing: turn back to face the child, and let the steps settle
  const d = angDiff(W.yaw, wantYaw);
  W.yaw += Math.sign(d) * Math.min(Math.abs(d), dt * 5);
  W.amt = ease(W.amt, 0, Math.min(1, dt * 8));
  if (W.amt > 0.02) W.phase += dt * 9 * W.amt;
}

/* ---------- 3D effects: particles, stars, food, ball, butterfly ---------- */
const sphereGeo = new THREE.SphereGeometry(1, 12, 8); sphereGeo.userData.shared = true;
export function burst(E, kind, at, n = 8, o = {}){
  const sc = o.scale || 1;
  for (let i = 0; i < n; i++){
    let geo = sphereGeo, color = o.color || '#ffffff', size = 0.03, vel, life = 0.9, g = -6, spin = 0, fade = true;
    const a = Math.random() * Math.PI * 2, up = Math.random();
    if (kind === 'crumb'){ size = 0.022 + Math.random() * 0.025; vel = V(Math.cos(a) * 0.9, 0.6 + up * 1.2, Math.sin(a) * 0.5 + 0.5); life = 0.8 + Math.random() * 0.4; }
    else if (kind === 'drop'){ color = o.color || '#dff4ff'; size = 0.018 + Math.random() * 0.02; const s = o.spread || 0.5; vel = V((Math.random() - 0.5) * 1.6 * s * 2, 0.3 + up * 0.9, 1.2 + Math.random() * 0.8); life = 0.6 + Math.random() * 0.3; g = -5; }
    else if (kind === 'spark'){ geo = starGeometry(); color = o.color || '#ffd23a'; size = 0.04 + Math.random() * 0.03; vel = V(Math.cos(a) * 0.7, 0.7 + up * 1.0, Math.sin(a) * 0.4 + 0.3); life = 0.9 + Math.random() * 0.4; g = -1.5; spin = 6; }
    else if (kind === 'heart'){ geo = heartGeometry(); color = o.color || '#ff5d8f'; size = 0.06 + Math.random() * 0.03; vel = V((Math.random() - 0.5) * 0.5, 0.6 + up * 0.4, 0.2); life = 1.2 + Math.random() * 0.3; g = 0.2; }
    else if (kind === 'bubble'){ color = '#eafaff'; size = 0.03 + Math.random() * 0.04; vel = V((Math.random() - 0.5) * 0.4, 0.3 + up * 0.4, (Math.random() - 0.5) * 0.3); life = 1.6 + Math.random(); g = 0.2; }
    else continue;
    const mat = new THREE.MeshBasicMaterial({ color: new THREE.Color(color), transparent: true, opacity: kind === 'bubble' ? 0.55 : 1, depthWrite: false });
    const m = new THREE.Mesh(geo, mat);
    m.position.copy(at).add(V((Math.random() - 0.5) * 0.06, (Math.random() - 0.5) * 0.06, (Math.random() - 0.5) * 0.06));
    m.scale.setScalar(size * sc);
    m.rotation.set(Math.random() * 3, Math.random() * 3, Math.random() * 3);
    m.renderOrder = 5;
    E.scene.add(m);
    E.parts.push({ m, vel: vel.multiplyScalar(sc), life, age: 0, g: g * sc, spin, fade, base: size * sc, kind });
  }
}
export function updateParticles(E, dt){
  if (!E.parts.length) return;
  for (const p of E.parts){
    p.age += dt;
    p.vel.y += p.g * dt;
    if (p.kind === 'bubble'){ p.vel.x += Math.sin(p.age * 5 + p.base * 100) * dt * 0.4; }
    p.m.position.addScaledVector(p.vel, dt);
    if (p.spin){ p.m.rotation.z += p.spin * dt; p.m.rotation.y += p.spin * dt * 0.5; }
    const u = p.age / p.life;
    if (p.kind === 'heart') p.m.scale.setScalar(p.base * (0.6 + 0.6 * Math.min(1, u * 3)));
    p.m.material.opacity = (p.kind === 'bubble' ? 0.55 : 1) * (1 - sm(seg(u, 0.6, 1)));
    if (p.m.position.y < 0.01 && p.kind === 'crumb'){ p.m.position.y = 0.01; p.vel.set(0, 0, 0); p.g = 0; }
    if (u >= 1){ p.dead = true; E.scene.remove(p.m); p.m.material.dispose(); }
  }
  E.parts = E.parts.filter(p => !p.dead);
}

// stars that circle over the head for a while
export function stars(E, sec){
  const r = E.friend; if (!r) return;
  const g = new THREE.Group();
  const n = 4;
  for (let i = 0; i < n; i++){ const s = new THREE.Mesh(starGeometry(), STAR_MAT); s.scale.setScalar(0.06); s.castShadow = false; g.add(s); }
  g.position.y = 0.12;
  r.hat.add(g);
  E.effects.push({ age: 0, update(dt){
    this.age += dt;
    const k = Math.min(1, this.age * 4) * (1 - sm(seg(this.age, sec - 0.4, sec)));
    g.children.forEach((s, i) => { const a = this.age * 5 + i / n * Math.PI * 2; s.position.set(Math.cos(a) * 0.32, Math.sin(a * 2) * 0.03, Math.sin(a) * 0.32); s.rotation.y = a * 2; s.scale.setScalar(0.06 * k + 0.0001); });
    if (this.age >= sec){ g.parent && g.parent.remove(g); return false; }
    return true;
  }, cancel(){ g.parent && g.parent.remove(g); } });
}

// where on the friend: the mouth, the nose (same), the top of the head, the middle
export function anchorPos(E, where){
  const r = E.friend; const p = new THREE.Vector3();
  if (!r) return p;
  if (where === 'mouth') r.mouthAnchor.getWorldPosition(p);
  else if (where === 'head') r.hat.getWorldPosition(p);
  else { r.body.getWorldPosition(p); p.y += (r.height || 1.4) * 0.45 * r.inner.scale.x; }
  return p;
}
function mouthFront(E){
  const r = E.friend;
  const p = anchorPos(E, 'mouth');
  const n = new THREE.Vector3(0, 0, 1).transformDirection(r.mouthAnchor.matrixWorld);
  // keep it in front, even if the mouth faces a little sideways
  n.y *= 0.5; n.z = Math.max(0.35, n.z); n.normalize();
  return { p, n };
}

/* Eating, bite by bite. ok: the friend eats this; otherwise it turns away and the food drops. from: a world point
   where the food starts (where the finger let go), or null for below the mouth. */
export function feed(E, food, ok, from){
  return new Promise(res => {
    const r = E.friend;
    const item = r && buildItem(food);
    if (!item){ res(); return; }
    item.updateMatrixWorld(true);
    const box = new THREE.Box3().setFromObject(item);
    const size = box.getSize(new THREE.Vector3()), ctr = box.getCenter(new THREE.Vector3());
    const holder = new THREE.Group(); holder.add(item); item.position.sub(ctr); holder.userData.fx = true;
    const target = 0.36 * r.inner.scale.x;
    // stand still to eat
    const Wk = E.walk; if (Wk.target){ Wk.target = null; const f = Wk.resolve; Wk.resolve = null; if (f) f(); }
    const k0 = target / Math.max(size.x, size.y, size.z);
    holder.scale.setScalar(k0);
    E.scene.add(holder);
    let mf = mouthFront(E);
    const endOf = () => { mf = mouthFront(E); return mf.p.clone().addScaledVector(mf.n, ok ? 0.17 : 0.45); };
    let end = endOf();
    const start = from ? from.clone() : mf.p.clone().add(V(0.1, -0.75, 0.9));
    const act = { name: 'eat', t: 0, dur: 99, ctl: { mouth: 0, happy: false, open: -1, turn: 0, pitch: 0 } };
    E.actions = E.actions.filter(a => a.name !== 'eat'); E.actions.push(act);
    const c = act.ctl;
    const bites = [0.4, 0.62, 0.84];
    let bitten = 0, fallV = null;
    const color = { meat: '#c9573e', fish: '#9fdcff', fruit: '#ff4b5c', grass: '#6cc24a', leaves: '#5cbf55', fern: '#4caf50' }[food] || '#e9b46a';
    E.effects.push({ age: 0, update(dt){
      this.age += dt;
      const t = this.age;
      end = endOf();   // the mouth moves (breathing, looking), so follow it
      if (t < 0.38){
        const u = sm(t / 0.38);
        holder.position.lerpVectors(start, end, u); holder.position.y += Math.sin(u * Math.PI) * 0.25;
        holder.rotation.y += dt * 4;
        c.mouth = ok ? 0.9 * u : 0; c.open = ok ? -1 : 1 - 0.5 * u; c.turn = ok ? 0 : -0.55 * u;
        return true;
      }
      if (ok){
        // the bites: the mouth snaps shut, a piece is gone, crumbs fly
        const tb = bites.find((b, i) => i === bitten && t >= b);
        if (tb !== undefined){
          bitten++;
          holder.scale.multiplyScalar(0.62);
          burst(E, 'crumb', mf.p.clone().addScaledVector(mf.n, 0.08), 7, { color });
          E.cue('chomp1');
          if (bitten === 3) holder.visible = false;
        }
        const near = bites.some(b => t >= b - 0.03 && t < b + 0.08);
        if (holder.visible){ holder.position.lerp(mf.p.clone().addScaledVector(mf.n, 0.17 - 0.05 * bitten), Math.min(1, dt * 12)); holder.rotation.y += dt * 1.5; }
        if (t < 0.95) c.mouth = near ? 0.08 : 0.85;
        else if (t < 1.4){ c.mouth = 0.08 + 0.28 * Math.abs(Math.sin((t - 0.95) * 16)); c.happy = true; c.pitch = Math.sin((t - 0.95) * 16) * 0.03; }
        else if (t < 2.0){ c.mouth = 0.35 * bell(seg(t, 1.4, 2.0)); c.happy = true; c.love = ok === 'love' ? bell(seg(t, 1.4, 2.0)) : 0; if (!this.yum){ this.yum = true; E.cue('yum'); burst(E, 'spark', anchorPos(E, 'head'), 5); } }
        else { c.done = true; discard(E, holder); res(); return false; }
        return true;
      }
      // not this food: the head turns away, the food falls and fades
      if (!fallV) fallV = V((Math.random() - 0.5) * 0.4, 0.4, 0.6);
      c.turn = -0.6 + Math.sin(t * 16) * 0.12 * (1 - seg(t, 0.4, 1)); c.mouth = 0; c.open = 0.55;
      fallV.y -= 6 * dt; holder.position.addScaledVector(fallV, dt); holder.rotation.z += dt * 5;
      if (holder.position.y < 0.12){ holder.position.y = 0.12; fallV.y = Math.abs(fallV.y) * 0.35; fallV.x *= 0.7; fallV.z *= 0.7; }
      if (t > 1.2){
        if (!this.faded){ this.faded = true; holder.traverse(o => { if (o.material){ o.material = o.material.clone(); o.material.userData.shared = false; o.material.transparent = true; } }); }
        holder.traverse(o => { if (o.material) o.material.opacity = Math.max(0, 1 - (t - 1.2) * 2); });
      }
      if (t > 1.7){ c.done = true; discard(E, holder); res(); return false; }
      return true;
    }, cancel(){ discard(E, holder); res(); } });
  });
}

/* A ball thrown at the friend: it flies to the head, gets headed up, bounces on the floor and rolls away. */
export function ball(E, from){
  const r = E.friend; if (!r) return;
  const b = buildItem('ball'); if (!b) return;
  const holder = new THREE.Group(); holder.add(b); holder.userData.fx = true;
  const R = 0.14 * r.inner.scale.x / 0.4;
  holder.scale.setScalar(R);
  const radius = 0.4 * R;
  E.scene.add(holder);
  const head = anchorPos(E, 'head').add(V(0, 0.05, 0.25));
  const start = from ? from.clone() : head.clone().add(V(0.2, -1.2, 1.4));
  let vel = null, phase = 'fly', bounces = 0;
  E.effects.push({ age: 0, update(dt){
    this.age += dt;
    if (phase === 'fly'){
      const u = sm(this.age / 0.45);
      holder.position.lerpVectors(start, head, u); holder.position.y += Math.sin(u * Math.PI) * 0.4;
      holder.rotation.x -= dt * 8;
      if (this.age >= 0.45){ phase = 'free'; E.act('header'); E.cue('boing'); burst(E, 'spark', head.clone(), 6); vel = V((Math.random() < 0.5 ? -1 : 1) * (0.7 + Math.random() * 0.5), 2.6, 0.9); }
      return true;
    }
    vel.y -= 6.5 * dt;
    holder.position.addScaledVector(vel, dt);
    holder.rotation.z -= vel.x * dt / radius; holder.rotation.x += vel.z * dt / radius;
    if (holder.position.y < radius){
      holder.position.y = radius;
      if (vel.y < -0.4){ vel.y = -vel.y * 0.55; bounces++; E.cue('bounce'); } else vel.y = 0;
      vel.x *= 0.92; vel.z *= 0.92;
    }
    const gone = this.age > 4.2;
    if (this.age > 3.6) holder.scale.setScalar(R * Math.max(0.001, 1 - (this.age - 3.6) / 0.6));
    if (gone){ discard(E, holder); return false; }
    return true;
  }, cancel(){ discard(E, holder); } });
}

/* A butterfly flutters in, circles around the friend's head (the friend follows it with its eyes), lands on its nose
   for a moment, and flies away. */
function makeButterfly(){
  const g = new THREE.Group();
  const wingMat = new THREE.MeshPhysicalMaterial({ color: new THREE.Color('#ff9ec4'), roughness: 0.4, sheen: 0.6, side: THREE.DoubleSide, emissive: new THREE.Color('#ff6fa8'), emissiveIntensity: 0.15 });
  const dotMat = new THREE.MeshBasicMaterial({ color: new THREE.Color('#fff3a8'), side: THREE.DoubleSide });
  const wing = (sx, upper) => {
    const pivot = new THREE.Group(); g.add(pivot);
    const shp = upper ? roundedShape([v2(0, 0), v2(0.5, 0.25), v2(0.62, 0.62), v2(0.2, 0.55)], 0.18) : roundedShape([v2(0, 0), v2(0.42, -0.12), v2(0.4, -0.45), v2(0.1, -0.38)], 0.14);
    const m = new THREE.Mesh(new THREE.ShapeGeometry(shp, 10), wingMat); m.scale.x = sx; pivot.add(m);
    const dot = new THREE.Mesh(new THREE.CircleGeometry(upper ? 0.1 : 0.07, 16), dotMat); dot.position.set(sx * (upper ? 0.33 : 0.25), upper ? 0.33 : -0.22, 0.002); pivot.add(dot);
    return pivot;
  };
  const wings = [wing(1, true), wing(-1, true), wing(1, false), wing(-1, false)];
  const body = new THREE.Mesh(new THREE.CapsuleGeometry(0.05, 0.45, 4, 10), glossy('#4a3a66'));
  g.add(body);
  for (const sx of [-1, 1]){ const an = new THREE.Mesh(new THREE.CylinderGeometry(0.008, 0.008, 0.28, 5), basic('#4a3a66')); an.position.set(sx * 0.06, 0.34, 0); an.rotation.z = -sx * 0.4; g.add(an); }
  g.rotation.x = -0.45;
  return { g, wings };
}
export function butterfly(E){
  return new Promise(res => {
    const r = E.friend; if (!r){ res(); return; }
    const bf = makeButterfly();
    const root = new THREE.Group(); root.add(bf.g); root.scale.setScalar(0.3); root.userData.fx = true;
    E.scene.add(root);
    const dur = 8;
    let landed = false;
    E.effects.push({ age: 0, update(dt){
      this.age += dt;
      const t = this.age;
      const head = anchorPos(E, 'head');
      const nose = mouthFront(E).p.clone().add(V(0, 0.12, 0.08));
      let p;
      if (t < 1.4){ const u = sm(t / 1.4); p = new THREE.Vector3(1.8, head.y + 0.6, 0.6).lerp(head.clone().add(V(0.5, 0.25, 0.3)), u); p.y += Math.sin(t * 6) * 0.06; }
      else if (t < 4.6){ const a = (t - 1.4) * 1.9; p = head.clone().add(V(Math.cos(a) * 0.55, 0.22 + Math.sin(a * 2) * 0.12, 0.25 + Math.sin(a) * 0.3)); }
      else if (t < 5.0){ const u = sm((t - 4.6) / 0.4); const a = 3.2 * 1.9; const from = head.clone().add(V(Math.cos(a) * 0.55, 0.22 + Math.sin(a * 2) * 0.12, 0.25 + Math.sin(a) * 0.3)); p = from.lerp(nose, u); }
      else if (t < 6.0){ p = nose; if (!landed){ landed = true; E.act('surprise'); E.cue('giggle'); } }
      else { const u = (t - 6.0) / 2; p = nose.clone().add(V(-u * 2.4, u * 1.6 + Math.sin(t * 6) * 0.05, u * 0.4)); if (!this.giggled){ this.giggled = true; E.act('giggle'); } }
      root.position.copy(p);
      const flap = t > 5.0 && t < 6.0 ? Math.sin(t * 6) * 0.3 + 0.6 : Math.sin(t * 28) * 0.9;
      bf.wings[0].rotation.y = flap; bf.wings[2].rotation.y = flap * 0.8; bf.wings[1].rotation.y = -flap; bf.wings[3].rotation.y = -flap * 0.8;
      root.rotation.y = Math.sin(t * 2) * 0.6;
      E.lookOverride = t < 6.3 ? p : null;
      if (t >= dur){ discard(E, root); E.lookOverride = null; res(); return false; }
      return true;
    }, cancel(){ discard(E, root); res(); } });
  });
}

/* Effects tick */
export function updateEffects(E, dt){
  if (E.effects.length) E.effects = E.effects.filter(fx => fx.update(dt) !== false);
  updateParticles(E, dt);
}
export function clearEffects(E){
  const fxs = E.effects.slice();
  E.effects.length = 0;
  for (const fx of fxs) if (fx.cancel) try { fx.cancel(); } catch (e) {}
  for (const p of E.parts){ E.scene.remove(p.m); p.m.material.dispose(); }
  E.parts.length = 0;
  E.lookOverride = null;
  // remove any food, ball or butterfly still in the scene
  for (const o of E.scene.children.slice()) if (o.userData.fx) discard(E, o);
}

/* Foam that stays on the friend where the sponge went, and pops off under the shower. Each puff is a few soft
   spheres stuck to the body part that was rubbed, so it moves with it. */
const FOAM_MAT = (() => { const m = new THREE.MeshPhysicalMaterial({ color: new THREE.Color('#ffffff'), roughness: 0.35, sheen: 1, sheenColor: new THREE.Color('#dff4ff'), clearcoat: 0.6 }); m.userData.shared = true; return m; })();
export function foamAt(E, hit){
  const r = E.friend; if (!r || !hit || !hit.object) return;
  r._foam = r._foam || [];
  if (r._foam.length >= 46){ const old = r._foam.shift(); old.parent && old.parent.remove(old); }
  const parent = hit.object.parent;
  const ws = new THREE.Vector3(); parent.getWorldScale(ws);
  const g = new THREE.Group();
  g.position.copy(parent.worldToLocal(hit.point.clone()));
  const k = 1 / Math.max(0.001, ws.x);
  for (let i = 0; i < 3; i++){
    const s = new THREE.Mesh(sphereGeo, FOAM_MAT);
    const rr = (0.035 + Math.random() * 0.03) * k;
    s.scale.setScalar(rr);
    s.position.set((Math.random() - 0.5) * 0.07 * k, (Math.random() - 0.3) * 0.05 * k, (Math.random() - 0.5) * 0.07 * k);
    s.castShadow = false;
    g.add(s);
  }
  g.userData.born = E.t;
  parent.add(g);
  r._foam.push(g);
}
export function popFoam(E, n){
  const r = E.friend; if (!r || !r._foam || !r._foam.length) return 0;
  let k = 0;
  while (k < n && r._foam.length){
    const g = r._foam.splice(Math.floor(Math.random() * r._foam.length), 1)[0];
    const p = new THREE.Vector3(); g.getWorldPosition(p);
    g.parent && g.parent.remove(g);
    burst(E, 'bubble', p, 2);
    k++;
  }
  return r._foam.length;
}
export function clearFoam(E){
  const r = E.friend; if (!r || !r._foam) return;
  for (const g of r._foam) g.parent && g.parent.remove(g);
  r._foam = [];
}
