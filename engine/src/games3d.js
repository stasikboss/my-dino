/* Action games played in 3D with the friend itself, out in the meadow:
   - catch: food falls from the sky; move the friend under the foods it eats and it catches them in its mouth.
   - jump: the friend runs along; a tap makes it jump over rocks and logs and collect stars.
   - bubbles: bubbles float up; pop as many as the friend asks for, counting together.
   The game logic lives here so it runs in step with the picture; the page shows the top bar and does the talking,
   through the hooks it passes in (onScore, onDone, onYuck, onRound...). */
import * as THREE from 'three';
import { V, glossy, skin, blob, canvasTex } from './util.js';
import { buildItem } from './items.js';
import { burst } from './life.js';

const sm = u => { u = Math.max(0, Math.min(1, u)); return u * u * (3 - 2 * u); };

function view(E){
  // the part of the meadow the camera sees at the friend's depth: left/right edges, ground, top
  const tl = E.screenToWorld(0, 60, 0) || V(-2, 3, 0), br = E.screenToWorld(innerWidth, innerHeight, 0) || V(2, 0, 0);
  return { left: tl.x, right: br.x, top: tl.y, halfW: (br.x - tl.x) / 2 };
}
function sized(obj, size){
  obj.updateMatrixWorld(true);
  const b = new THREE.Box3().setFromObject(obj), s = b.getSize(new THREE.Vector3()), c = b.getCenter(new THREE.Vector3());
  const g = new THREE.Group(); g.add(obj); obj.position.sub(c);
  g.scale.setScalar(size / Math.max(s.x, s.y, s.z));
  g.userData.fx = true;
  return g;
}
function friendBox(E){
  const r = E.friend; const k = r.inner.scale.x;
  return { h: (r.height || 1.6) * k, w: (r.width || 1.4) * k };
}
function mouthPos(E){ const p = new THREE.Vector3(); E.friend.mouthAnchor.getWorldPosition(p); return p; }

/* ---------------- catch ---------------- */
function catchGame(E, o){
  const foods = o.foods, eats = new Set(o.diet);
  const items = [];
  const W = E.walk;
  let score = 0, spawnIn = 1.2, targetX = 0, ended = false, mouthOpen = 0;
  W.locked = true; W.x = 0; W.z = 0.2; W.y = 0; W.yaw = 0;
  const g = {
    mouth: 0,
    items,
    pointer(type, x){ const p = E.screenToWorld(x, innerHeight * 0.6, W.z); if (p){ const v = view(E); targetX = Math.max(v.left + 0.35, Math.min(v.right - 0.35, p.x)); } },
    update(dt){
      const v = view(E);
      const rest = E.friend.turn || 0;
      // walk toward the finger
      const dx = targetX - W.x;
      if (Math.abs(dx) > 0.03){
        const step = Math.sign(dx) * Math.min(Math.abs(dx), 2.6 * dt);
        W.x += step;
        const want = (dx > 0 ? Math.PI / 2 : -Math.PI / 2) * 0.75 - rest;
        W.yaw += (want - W.yaw) * Math.min(1, dt * 10);
        W.amt += (1 - W.amt) * Math.min(1, dt * 10); W.phase += dt * 14;
      } else {
        W.yaw += (0 - W.yaw) * Math.min(1, dt * 6);
        W.amt += (0 - W.amt) * Math.min(1, dt * 8); if (W.amt > 0.02) W.phase += dt * 10;
      }
      // new food from the sky
      if (!ended && (spawnIn -= dt) <= 0 && items.length < 2){
        spawnIn = 1.6 + Math.random() * 1.2;
        const good = Math.random() < 0.7;
        const pool = foods.filter(f => eats.has(f) === good);
        const f = pool[Math.floor(Math.random() * pool.length)] || foods[0];
        const m = sized(buildItem(f), 0.58);
        m.position.set(v.left + 0.4 + Math.random() * (v.right - v.left - 0.8), v.top + 0.3, W.z + 0.15);
        E.scene.add(m);
        items.push({ m, f, good: eats.has(f), vy: -0.7 - Math.random() * 0.2, spin: (Math.random() - 0.5) * 3, state: 'fall', age: 0 });
      }
      // falling, caught, bounced off
      const mp = mouthPos(E);
      let wantOpen = 0;
      for (const it of items){
        it.age += dt;
        if (it.state === 'fall'){
          it.m.position.y += it.vy * dt; it.m.rotation.z += it.spin * dt; it.m.rotation.y += dt;
          const near = Math.abs(it.m.position.x - mp.x) < 0.5 && it.m.position.y - mp.y < 0.9 && it.m.position.y > mp.y - 0.2;
          if (near && it.good) wantOpen = 1;
          if (Math.abs(it.m.position.x - mp.x) < 0.46 && it.m.position.y - mp.y < 0.2 && it.m.position.y - mp.y > -0.26){
            if (it.good){
              it.state = 'eaten'; it.age = 0; score++;
              burst(E, 'crumb', mp.clone().add(V(0, 0, 0.1)), 7, { color: '#ffcf7a' });
              burst(E, 'spark', mp.clone().add(V(0, 0.4, 0)), 5);
              E.cue('chomp1'); E.act('love', { dur: 1.2 });
              if (o.onScore) o.onScore(score);
              if (score >= o.goal && !ended){ ended = true; setTimeout(() => o.onDone && o.onDone(), 900); }
            } else {
              it.state = 'bounce'; it.age = 0; it.vx = (it.m.position.x < mp.x ? -1 : 1) * 1.2; it.vy = 2.2;
              E.act('shakehead'); E.cue('nope');
              if (o.onYuck) o.onYuck(it.f);
            }
          }
          if (it.m.position.y < 0.2){ it.state = 'bounce'; it.age = 0; it.vx = (Math.random() - 0.5) * 0.6; it.vy = 1.2; }
        } else if (it.state === 'eaten'){
          it.m.scale.multiplyScalar(0.8); it.m.position.lerp(mp, 0.4);
          if (it.age > 0.25) it.dead = true;
        } else if (it.state === 'bounce'){
          it.vy -= 7 * dt; it.m.position.x += it.vx * dt; it.m.position.y += it.vy * dt; it.m.rotation.z += 6 * dt;
          if (it.m.position.y < 0.2){ it.m.position.y = 0.2; it.vy = Math.abs(it.vy) * 0.4; it.vx *= 0.6; }
          if (it.age > 1.2) it.m.scale.multiplyScalar(0.85);
          if (it.age > 1.6) it.dead = true;
        }
        if (it.dead) E.scene.remove(it.m);
      }
      for (let i = items.length - 1; i >= 0; i--) if (items[i].dead) items.splice(i, 1);
      mouthOpen += (wantOpen - mouthOpen) * Math.min(1, dt * 10);
      g.mouth = mouthOpen * 0.9;
    },
    stop(){ for (const it of items) E.scene.remove(it.m); items.length = 0; }
  };
  return g;
}

/* ---------------- jump ---------------- */
function rock(){ const g = new THREE.Group(); blob(g, V(0, 0.12, 0), V(0.26, 0.17, 0.22), skin('#9aa3ad', { roughness: 0.8 })); blob(g, V(0.12, 0.08, 0.06), V(0.14, 0.1, 0.13), skin('#b8c0c8', { roughness: 0.8 })); return g; }
function log(){
  const g = new THREE.Group();
  const m = new THREE.Mesh(new THREE.CylinderGeometry(0.16, 0.16, 0.62, 20), skin('#a86b3c', { roughness: 0.75 })); m.rotation.x = Math.PI / 2; m.position.y = 0.16; m.castShadow = true; g.add(m);
  for (const z of [-0.31, 0.31]){ const c = new THREE.Mesh(new THREE.CircleGeometry(0.155, 20), skin('#e8c08a', { roughness: 0.7 })); c.position.set(0, 0.16, z + Math.sign(z) * 0.001); c.rotation.y = z > 0 ? 0 : Math.PI; g.add(c); }
  return g;
}
function tuft(){
  const g = new THREE.Group();
  for (let i = 0; i < 4; i++){ const b = new THREE.Mesh(new THREE.ConeGeometry(0.03, 0.18 + Math.random() * 0.1, 5), skin('#5cbf4a', { roughness: 0.8 })); b.position.set((Math.random() - 0.5) * 0.12, 0.09, (Math.random() - 0.5) * 0.08); b.rotation.z = (Math.random() - 0.5) * 0.5; g.add(b); }
  if (Math.random() < 0.5){ const f = new THREE.Mesh(new THREE.SphereGeometry(0.045, 10, 8), glossy(['#ff7aa8', '#ffd23a', '#ffffff', '#b28cff'][Math.floor(Math.random() * 4)])); f.position.y = 0.26; g.add(f); }
  g.userData.fx = true;
  return g;
}
let starGeo = null;
function starMesh(){
  if (!starGeo){
    const s = new THREE.Shape();
    for (let i = 0; i < 10; i++){ const a = Math.PI / 2 + i * Math.PI / 5, rr = i % 2 ? 0.42 : 1; i ? s.lineTo(Math.cos(a) * rr, Math.sin(a) * rr) : s.moveTo(Math.cos(a) * rr, Math.sin(a) * rr); }
    starGeo = new THREE.ExtrudeGeometry(s, { depth: 0.25, bevelEnabled: true, bevelThickness: 0.12, bevelSize: 0.1, bevelSegments: 3, curveSegments: 4 }); starGeo.center(); starGeo.userData.shared = true;
  }
  const m = new THREE.Mesh(starGeo, glossy('#ffd23a', { roughness: 0.2, emissive: '#ffb000', emissiveIntensity: 0.35 }));
  m.scale.setScalar(0.24); m.castShadow = true;
  const g = new THREE.Group(); g.add(m); g.userData.fx = true;
  return g;
}
function jumpGame(E, o){
  const W = E.walk;
  const things = [];
  let score = 0, spawnIn = 1.0, vy = 0, ended = false, nextKind = 0, stumble = 0;
  const speed = o.speed || 1.5;
  const fb = friendBox(E);
  W.locked = true; W.run = true; W.z = 0.2; W.y = 0;
  const rest = E.friend.turn || 0;
  const v0 = view(E);
  // just above the friend's head, so it takes a jump to reach
  const starY = () => fb.h * 0.95 + 0.26 + Math.random() * 0.3;
  W.x = v0.left + fb.w * 0.65 + 0.2; W.yaw = Math.PI / 2 - rest;
  // grass along the way, so it looks like running
  for (let i = 0; i < 9; i++){ const t = tuft(); t.position.set(v0.left + (v0.right - v0.left) * i / 8, 0, W.z + 0.5 + Math.random() * 0.4); E.scene.add(t); things.push({ m: t, kind: 'tuft' }); }
  const g = {
    pointer(type){ if (type === 'down' && W.y <= 0.001 && !ended){ vy = 3.7; E.cue('jump'); E.act('surprise', { dur: 0.6 }); } },
    update(dt){
      const v = view(E);
      W.x = v.left + fb.w * 0.65 + 0.2;
      W.amt = 1; W.phase += dt * 12 * (W.y > 0 ? 0.3 : 1);
      W.yaw = Math.PI / 2 - rest;
      // jumping
      if (W.y > 0 || vy > 0){ vy -= 9.5 * dt; W.y = Math.max(0, W.y + vy * dt); if (W.y === 0) vy = 0; }
      if (stumble > 0) stumble -= dt;
      // new obstacle or star
      if (!ended && (spawnIn -= dt) <= 0){
        spawnIn = 1.7 + Math.random() * 0.7;
        const kind = nextKind++ % 3 === 2 ? 'star' : (Math.random() < 0.5 ? 'rock' : 'log');
        let m;
        if (kind === 'star'){ m = starMesh(); m.position.set(v.right + 0.4, starY(), W.z); }
        else { m = kind === 'rock' ? rock() : log(); m.scale.setScalar(1.35); m.userData.fx = true; m.position.set(v.right + 0.4, 0, W.z); m.traverse(c => { if (c.isMesh) c.castShadow = true; }); }
        E.scene.add(m);
        const thing = { m, kind, hit: false };
        // a star always floats over an obstacle, to jump for it
        things.push(thing);
        if (kind !== 'star' && Math.random() < 0.6){ const s = starMesh(); s.position.set(v.right + 0.4, starY(), W.z); E.scene.add(s); things.push({ m: s, kind: 'star' }); }
      }
      const fx = W.x, fy = W.y + fb.h * 0.45;
      for (const t of things){
        t.m.position.x -= speed * dt * (t.kind === 'tuft' ? 1 : 1);
        if (t.kind === 'tuft'){ if (t.m.position.x < v.left - 0.3) t.m.position.x = v.right + 0.3; continue; }
        if (t.kind === 'star'){
          t.m.rotation.y += dt * 3;
          if (!t.hit && Math.abs(t.m.position.x - fx) < fb.w * 0.4 + 0.1 && Math.abs(t.m.position.y - fy) < fb.h * 0.5 + 0.1){
            t.hit = true; score++; t.dead = true;
            burst(E, 'spark', t.m.position.clone(), 8);
            E.cue('star');
            if (o.onScore) o.onScore(score);
            if (score >= o.goal && !ended){ ended = true; W.run = false; setTimeout(() => o.onDone && o.onDone(), 900); }
          }
        } else if (!t.hit && Math.abs(t.m.position.x - fx) < fb.w * 0.3 && W.y < 0.3){
          t.hit = true; stumble = 0.5; E.act('shakehead'); E.cue('bump');
        }
        if (t.m.position.x < v.left - 0.6) t.dead = true;
        if (t.dead) E.scene.remove(t.m);
      }
      for (let i = things.length - 1; i >= 0; i--) if (things[i].dead) things.splice(i, 1);
      g.mouth = W.y > 0.05 ? 0.5 : 0;
    },
    stop(){ for (const t of things) E.scene.remove(t.m); things.length = 0; W.run = false; }
  };
  return g;
}

/* ---------------- bubbles ---------------- */
const BUBBLE_MAT = (() => { const m = new THREE.MeshPhysicalMaterial({ color: new THREE.Color('#ffffff'), roughness: 0.04, metalness: 0, transmission: 0, transparent: true, opacity: 0.38, iridescence: 1, iridescenceIOR: 1.35, clearcoat: 1, side: THREE.FrontSide, depthWrite: false }); m.userData.shared = true; return m; })();
const bubbleGeo = new THREE.SphereGeometry(1, 32, 20); bubbleGeo.userData.shared = true;
// the cartoon bubble: a clear middle, a rainbow-tinted rim and a shine, always facing the camera, so it shows on the sky
let rimMat = null;
function bubbleRim(){
  if (rimMat) return rimMat;
  const tex = canvasTex(256, 256, (g, w) => {
    const c = w / 2;
    const gr = g.createRadialGradient(c, c, 0, c, c, c);
    gr.addColorStop(0, 'rgba(220,245,255,0.10)'); gr.addColorStop(0.62, 'rgba(200,236,255,0.22)');
    gr.addColorStop(0.84, 'rgba(150,215,255,0.65)'); gr.addColorStop(0.93, 'rgba(255,255,255,0.95)'); gr.addColorStop(1, 'rgba(255,255,255,0)');
    g.fillStyle = gr; g.fillRect(0, 0, w, w);
    // a soft rainbow sheen along one side of the rim
    const cg = g.createLinearGradient(0, 0, w, w);
    cg.addColorStop(0, 'rgba(255,140,200,0.55)'); cg.addColorStop(0.5, 'rgba(255,230,120,0.35)'); cg.addColorStop(1, 'rgba(120,200,255,0.55)');
    g.globalCompositeOperation = 'source-atop'; g.lineWidth = w * 0.05; g.strokeStyle = cg;
    g.beginPath(); g.arc(c, c, c * 0.88, 0, Math.PI * 2); g.stroke();
    // the shine
    g.globalCompositeOperation = 'source-over';
    g.fillStyle = 'rgba(255,255,255,0.95)';
    g.beginPath(); g.ellipse(c * 0.62, c * 0.56, c * 0.17, c * 0.1, -0.7, 0, Math.PI * 2); g.fill();
    g.beginPath(); g.arc(c * 0.86, c * 0.4, c * 0.05, 0, Math.PI * 2); g.fill();
  });
  rimMat = new THREE.SpriteMaterial({ map: tex, transparent: true, depthWrite: false });
  rimMat.userData.shared = true;
  return rimMat;
}
function bubblesGame(E, o){
  const W = E.walk;
  W.locked = true; W.x = 0; W.z = 0.2; W.y = 0; W.yaw = 0; W.amt = 0;
  const list = [];
  let spawnIn = 0.2, popped = 0, look = null, lookT = 0;
  const g = {
    mouth: 0,
    count: 0,
    pointer(type, x, y){
      if (type !== 'down') return;
      let best = null, bd = 1e9;
      for (const b of list){
        if (b.dead) continue;
        const s = E.worldToScreen(b.m.position);
        const edge = E.worldToScreen(b.m.position.clone().add(V(b.r, 0, 0)));
        const rad = Math.abs(edge.x - s.x) + 22;
        const d = Math.hypot(s.x - x, s.y - y);
        if (d < rad && d < bd){ bd = d; best = b; }
      }
      if (!best) return;
      best.dead = true; E.scene.remove(best.m);
      burst(E, 'bubble', best.m.position.clone(), 6); burst(E, 'spark', best.m.position.clone(), 4);
      E.cue('pop');
      look = best.m.position.clone(); lookT = 1.2;
      popped++;
      if (o.onPop) o.onPop(popped);
    },
    resetCount(){ popped = 0; },
    update(dt){
      const v = view(E);
      if ((spawnIn -= dt) <= 0 && list.filter(b => !b.dead).length < (o.max || 7)){
        spawnIn = 0.5 + Math.random() * 0.6;
        const r = 0.2 + Math.random() * 0.13;
        const m = new THREE.Mesh(bubbleGeo, BUBBLE_MAT);
        m.scale.setScalar(r); m.renderOrder = 4; m.userData.fx = true;
        const rim = new THREE.Sprite(bubbleRim()); rim.scale.setScalar(2.08); rim.renderOrder = 5; m.add(rim);
        m.position.set(v.left + 0.3 + Math.random() * (v.right - v.left - 0.6), 0.2, W.z + 0.4 + Math.random() * 0.3);
        E.scene.add(m);
        list.push({ m, r, vy: 0.32 + Math.random() * 0.22, ph: Math.random() * 6, age: 0 });
      }
      for (const b of list){
        if (b.dead) continue;
        b.age += dt;
        b.m.position.y += b.vy * dt;
        b.m.position.x += Math.sin(b.age * 1.6 + b.ph) * 0.25 * dt;
        const k = 1 + Math.sin(b.age * 5 + b.ph) * 0.04; b.m.scale.set(b.r * k, b.r / k, b.r);
        if (b.m.position.y > v.top + 0.4){ b.dead = true; E.scene.remove(b.m); }
      }
      for (let i = list.length - 1; i >= 0; i--) if (list[i].dead) list.splice(i, 1);
      if (lookT > 0){ lookT -= dt; E.lookOverride = look; g.mouth = 0.5 * Math.min(1, lookT * 2); } else { E.lookOverride = null; g.mouth = 0; }
    },
    stop(){ for (const b of list) E.scene.remove(b.m); list.length = 0; E.lookOverride = null; }
  };
  return g;
}

export const GAMES3D = { catch: catchGame, jump: jumpGame, bubbles: bubblesGame };
