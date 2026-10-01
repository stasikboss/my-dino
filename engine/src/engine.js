/* The 3D engine behind the game. It draws one room and one friend in a full-screen canvas under the game's buttons,
   animates the friend from the same "state" classes the game already sets (happy, talk, sleep, hop...), and answers
   the questions the game asks: where is the mouth on screen, what part of the body is under this finger, how big
   is the friend on screen. It also renders still pictures of friends and items for buttons and cards. */
import * as THREE from 'three';
import { makeRenderer, envFor, rig } from './lights.js';
import { buildFriend, dress, SPECIES_ORDER } from './characters.js';
import { ROOM_BUILDERS } from './rooms.js';
import { radialTex, V, blob, skin, glossy, rng } from './util.js';
import * as T from './textures.js';
import { buildItem } from './items.js';

const HEAD_PARTS = new Set(['head', 'face', 'horns', 'frill', 'mane', 'ears', 'trunk', 'beak']);
const PRESENCE = 1.75;               // every friend is scaled so its height (or 85% of its width) is this many units
const ROOM_LIGHT = {
  home: { key: 2.8, hemi: 0.55, sky: 0xfff1df, ground: 0xc58b62, exposure: 0.92 },
  kitchen: { key: 2.7, hemi: 0.62, sky: 0xf3fff9, ground: 0xc7a46a, exposure: 0.92 },
  bath: { key: 2.6, hemi: 0.68, sky: 0xf2fbff, ground: 0x8fc3dc, exposure: 0.93 },
  bed: { key: 2.5, hemi: 0.55, sky: 0xf3eeff, ground: 0x9a7a5c, exposure: 0.92 },
  play: { key: 3.0, hemi: 0.75, sky: 0xdff1ff, ground: 0x7fbf55, exposure: 0.95 },
  album: { key: 3.0, hemi: 0.75, sky: 0xdff1ff, ground: 0x7fbf55, exposure: 0.95 },
  dig: { key: 3.0, hemi: 0.75, sky: 0xe8f6ff, ground: 0xd8b071, exposure: 0.95 },
  studio: { key: 2.6, hemi: 0.7, sky: 0xfff3e2, ground: 0xe9b07c, exposure: 0.95 }
};

const E = {
  ready: false, renderer: null, canvas: null, scene: null, camera: null, L: null,
  rooms: {}, room: null, roomName: '', friend: null, friendKey: '', petHolder: null, contact: null,
  stateEl: null, stageEl: null, safe: { top: 80, bottom: 170 }, layout: 'normal',
  look: null, lookW: new THREE.Vector3(), clock: new THREE.Clock(), t: 0,
  anim: { open: 0, happy: 0, sleep: 0, talk: 0, jump: 0, squash: 0, wiggle: 0, shake: 0, nod: 0, tilt: 0, excited: 0, prev: new Set(), blink: 0 },
  dpr: 1, dprMax: 2, frameAvg: 16, frameN: 0, dark: 0, darkTarget: 0, blanket: 0, blanketTarget: 0, curtain: 1, curtainTarget: 1,
  hidden: false, egg: null, onFrame: null, boundsCache: null, boundsAt: 0, paused: false
};
window.DinoEngine = E;

E.init = (canvas, opts = {}) => {
  E.canvas = canvas;
  E.renderer = makeRenderer(canvas, {});
  E.dprMax = Math.min(opts.maxDpr || 2, window.devicePixelRatio || 1);
  E.dpr = E.dprMax;
  E.renderer.setPixelRatio(E.dpr);
  E.scene = new THREE.Scene();
  E.scene.environment = envFor(E.renderer);
  E.scene.environmentIntensity = 0.45;
  E.L = rig(E.scene, { shadowSize: opts.shadowSize || 2048 });
  E.camera = new THREE.PerspectiveCamera(36, 1, 0.1, 120);
  E.petHolder = new THREE.Group(); E.scene.add(E.petHolder);
  const sh = new THREE.Mesh(new THREE.PlaneGeometry(1, 1), new THREE.MeshBasicMaterial({ map: radialTex('#4a2a1a', 128), transparent: true, opacity: 0.42, depthWrite: false }));
  sh.rotation.x = -Math.PI / 2; sh.renderOrder = 1; E.contact = sh; E.petHolder.add(sh);
  E.resize();
  addEventListener('resize', () => E.resize());
  E.ready = true;
  E.loop();
};
E.setSafe = (top, bottom) => { E.safe = { top, bottom }; E.frame(); };
E.setStateEl = el => { E.stateEl = el; };
E.setStageEl = el => { E.stageEl = el; };
E.resize = () => {
  const w = innerWidth, h = innerHeight;
  E.renderer.setSize(w, h, false);
  E.canvas.style.width = w + 'px'; E.canvas.style.height = h + 'px';
  E.camera.aspect = w / h;
  E.frame();
};

/* ---------- rooms ---------- */
E.setRoom = name => {
  if (!ROOM_BUILDERS[name]) name = 'home';
  if (E.roomName === name) return;
  if (E.room) E.room.group.visible = false;
  if (!E.rooms[name]){ E.rooms[name] = ROOM_BUILDERS[name](); E.scene.add(E.rooms[name].group); }
  E.room = E.rooms[name]; E.room.group.visible = true; E.roomName = name;
  const l = ROOM_LIGHT[name] || ROOM_LIGHT.home;
  E.L.key.intensity = l.key; E.L.hemi.intensity = l.hemi; E.L.hemi.color.setHex(l.sky); E.L.hemi.groundColor.setHex(l.ground);
  E.renderer.toneMappingExposure = l.exposure;
  E.scene.background = E.room.outdoor || E.room.studio ? null : new THREE.Color(E.room.wall || '#ffe2c2');
  if (E.room.studio) E.scene.background = new THREE.Color('#ffd9ae');
  E.darkTarget = 0; E.dark = 0; E.blanketTarget = 0; E.curtainTarget = 1;
  if (E.room.setCurtain) E.room.setCurtain(1);
  E.frame();
};

/* ---------- the friend ---------- */
E.setPet = (sp, o = {}) => {
  const key = sp + ':' + (o.stage ?? 2) + ':' + (o.outfit || '');
  if (E.friendKey === key && E.friend) return;
  if (E.friend){ E.petHolder.remove(E.friend.root); }
  E.friendKey = key;
  if (!sp){ E.friend = null; return; }
  const r = buildFriend(sp, 2);
  normalize(r);
  applyStage(r, o.stage ?? 2);
  dress(r, o.outfit);
  E.petHolder.add(r.root);
  E.friend = r;
  E.boundsCache = null;
  E.frame();
};
E.setOutfit = outfit => { if (!E.friend) return; dress(E.friend, outfit); E.friendKey = E.friendKey.replace(/:[^:]*$/, ':' + (outfit || '')); };
E.hidePet = on => { E.hidden = on; };
function normalize(r){
  r.root.updateMatrixWorld(true);
  const b = new THREE.Box3().setFromObject(r.root);
  const h = b.max.y, w = b.max.x - b.min.x;
  const k = PRESENCE / Math.max(h, w * 0.85);
  r.norm = k;
  r.base = new THREE.Group();
  r.base.add(r.root);
  r.root.position.x = -((b.max.x + b.min.x) / 2) * 0.55;
  r.base.scale.setScalar(k);
  r.width = w * k; r.height = h * k;
  const orig = r.root;
  r.root = r.base; r.inner = orig;
}
function applyStage(r, stage){
  const k = [0.74, 0.87, 1][stage], hk = [1.2, 1.08, 1][stage];
  r.inner.scale.setScalar(k);
  r.head.scale.setScalar(hk);
  r.stage = stage;
}

/* ---------- framing: the friend stands between the top bar and the buttons at the bottom ---------- */
E.setLayout = l => { if (E.layout !== l){ E.layout = l; E.frame(); } };
E.frame = () => {
  if (!E.camera) return;
  const W = innerWidth, H = innerHeight;
  const top = E.safe.top, bottom = E.safe.bottom;
  const avail = Math.max(120, H - top - bottom);
  const small = E.layout === 'small';
  const share = small ? 0.3 : 0.74;
  // pixels per world unit at the friend
  let k = Math.min(avail * share / PRESENCE, W * (small ? 0.4 : 0.92) / (PRESENCE * 1.15));
  if (E.roomName === 'bath' && !small) k = Math.min(k, W * 0.98 / 2.6);
  if (E.roomName === 'bed' && !small) k = Math.min(k, W * 0.98 / 2.35);
  const fov = E.camera.fov * Math.PI / 180;
  const visH = H / k;
  const d = visH / (2 * Math.tan(fov / 2));
  const lift = E.roomName === 'bed' ? 0.55 : 0;
  E.camera.position.set(0, 1.25 + lift, d);
  E.camera.lookAt(0, 0.95 + lift * 0.9, 0);
  E.camera.clearViewOffset();
  E.camera.updateProjectionMatrix(); E.camera.updateMatrixWorld();
  // where do the friend's feet land on screen now? shift the picture so they sit just above the buttons
  const feetY = (E.roomName === 'bed' && !small) ? 0.5 : 0;
  const p = new THREE.Vector3(0, feetY, 0).project(E.camera);
  const sy = (1 - p.y) / 2 * H;
  const target = H - bottom - (small ? 10 : Math.max(14, avail * 0.05));
  const off = sy - target;
  E.camera.setViewOffset(W, H, 0, off, W, H);
  E.camera.updateProjectionMatrix();
  E.pxPerUnit = k;
};

/* ---------- state from the game ---------- */
function has(c){ return E.stateEl ? E.stateEl.classList.contains(c) : false; }
const ease = (a, b, k) => a + (b - a) * k;
const ONE_SHOT = { hop: 0.55, squish: 0.35, wiggle: 0.7, shake: 0.5, nod: 0.64 };
function animate(dt){
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
  for (const e of r.eyes){ e.set(A.open, A.happy, A.sleep); e.g.scale.setScalar(1 + (wide ? 0.12 : 0)); }
  r.mouth.set(Math.min(1, A.talk * (happy && !now.has('talk') ? 0 : 1)));
  // one-shot motions
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
  const breath = Math.sin(t * (sleep ? 1.4 : 2.1)) * (sleep ? 0.022 : 0.014);
  r.jump.position.y = jumpY;
  r.body.scale.set(1 + sq * 0.6, 1 - sq + breath, 1 + sq * 0.6);
  r.body.rotation.z = wig + Math.sin(t * 0.7) * 0.012;
  // the head: idle sway, look at what the finger holds, nod, shake, tilt; droops a little in sleep
  const baseYaw = r.headYaw || 0;
  let lookYaw = 0, lookPitch = 0;
  if (E.look && !sleep){
    const hp = new THREE.Vector3(); r.head.getWorldPosition(hp);
    const dir = E.lookW.clone().sub(hp);
    lookYaw = Math.max(-0.5, Math.min(0.5, Math.atan2(dir.x, dir.z) * 0.45));
    lookPitch = Math.max(-0.3, Math.min(0.3, -Math.atan2(dir.y, Math.hypot(dir.x, dir.z)) * 0.4));
  }
  r._yaw = ease(r._yaw || 0, lookYaw, Math.min(1, dt * 6));
  r._pitch = ease(r._pitch || 0, lookPitch, Math.min(1, dt * 6));
  r.head.rotation.y = baseYaw + r._yaw + shake + Math.sin(t * 0.5) * 0.04 * (1 - A.sleep);
  r.head.rotation.x = r._pitch + nod + A.sleep * 0.22 + Math.sin(t * 0.9) * 0.015;
  r.head.rotation.z = A.tilt * 0.18 + Math.sin(t * 0.6) * 0.02;
  // eyes follow too
  for (const e of r.eyes){
    const ty = E.look ? r._yaw * 1.2 : Math.sin(t * 0.33) * 0.08;
    const tx = E.look ? r._pitch * 1.2 : 0;
    e.look.rotation.y = ease(e.look.rotation.y, ty, Math.min(1, dt * 10));
    e.look.rotation.x = ease(e.look.rotation.x, tx, Math.min(1, dt * 10));
  }
  if (r.tail){ const sp = 1.9 + A.excited * 6; r.tail.rotation.y = Math.sin(t * sp) * (0.12 + A.excited * 0.12) * (1 - A.sleep * 0.8); }
  if (r.extra.earL){ const f = Math.sin(t * 2.2) * 0.06 + (Math.sin(t * 0.7) > 0.93 ? Math.sin(t * 30) * 0.12 : 0); r.extra.earL.rotation.y = -0.55 - f; r.extra.earR.rotation.y = 0.55 + f; if (r.sp === 'lion'){ r.extra.earL.rotation.set(0, 0, f); r.extra.earR.rotation.set(0, 0, -f); } }
  if (r.trunk) r.trunk.rotation.x = Math.sin(t * 1.3) * 0.08 - A.talk * 0.12;
  if (r.extra.finL){ const f = A.excited * Math.sin(t * 22) * 0.35 + Math.sin(t * 1.5) * 0.04; r.extra.finL.rotation.z = -f - 0.05; r.extra.finR.rotation.z = f + 0.05; }
  if (r.extra.armL){ const f = Math.sin(t * 3) * 0.08 + A.excited * Math.sin(t * 18) * 0.4; r.extra.armL.rotation.x = f; r.extra.armR.rotation.x = -f; }
}

/* ---------- placing the friend in the room ---------- */
function place(dt){
  const r = E.friend;
  const stg = E.stageEl ? E.stageEl.classList : null;
  const gone = E.hidden || (stg && stg.contains('gone')) || E.egg;
  E.petHolder.visible = !gone;
  if (!r) return;
  let x = 0, y = 0, z = 0;
  if (E.room){ if (E.room.petY != null && E.roomName !== 'play'){ y = E.room.petY; z = E.room.petZ || 0; } }
  if (E.roomName === 'bed') y -= E.blanket * 0.12;
  E.petHolder.position.set(x, y, z);
  // the soft shadow under the friend
  const w = (r.width || 1.4) * (r.inner.scale.x);
  E.contact.scale.set(w * 1.15, (0.9) * r.inner.scale.x, 1);
  E.contact.position.set(0, 0.006, 0);
  E.contact.visible = E.roomName !== 'bath';
}
E.dark = 0;
function roomFx(dt){
  const room = E.room; if (!room) return;
  if (room.update) room.update(E.t);
  // bedroom lights
  E.dark = ease(E.dark, E.darkTarget, Math.min(1, dt * 3));
  if (E.roomName === 'bed'){
    const l = ROOM_LIGHT.bed;
    E.L.key.intensity = l.key * (1 - 0.85 * E.dark);
    E.L.hemi.intensity = l.hemi * (1 - 0.6 * E.dark);
    E.L.hemi.color.setHex(E.dark > 0.5 ? 0x8c95ff : l.sky);
    E.L.fill.color.setHex(E.dark > 0.5 ? 0x7a86ff : 0xcfe2ff);
    E.L.fill.intensity = 0.55 + E.dark * 0.5;
    E.scene.environmentIntensity = 0.45 * (1 - 0.7 * E.dark);
    if (room.lampLight){ room.lampLight.intensity = 3.2 * (1 - E.dark); room.shadeMat.emissiveIntensity = 0.9 * (1 - E.dark) + 0.05; }
    E.blanket = ease(E.blanket, E.blanketTarget, Math.min(1, dt * 3));
    if (room.blanket){ room.blanket.position.set(0, 0.62 + E.blanket * 0.0, 0.15 - (1 - E.blanket) * 0.0); room.blanket.visible = E.blanket > 0.02; room.blanket.scale.set(1, 1, Math.max(0.05, E.blanket)); room.blanket.position.z = -0.55 + 0.68 * 0.5 * (1 + E.blanket) - 0.2; }
  } else { E.scene.environmentIntensity = 0.45; E.L.fill.color.setHex(0xcfe2ff); E.L.fill.intensity = 0.55; }
  if (room.setCurtain){
    const prev = E.curtain;
    E.curtain = ease(E.curtain, E.curtainTarget, Math.min(1, dt * 4));
    if (Math.abs(prev - E.curtain) > 0.001) room.setCurtain(E.curtain);
  }
}
E.setDark = on => { E.darkTarget = on ? 1 : 0; };
E.setBlanket = on => { E.blanketTarget = on ? 1 : 0; };
E.setCurtain = closed => { E.curtainTarget = closed ? 0 : 1; };

/* ---------- the loop, with resolution that adapts to how fast the device draws ---------- */
E.loop = () => {
  const step = () => {
    requestAnimationFrame(step);
    if (E.paused || document.hidden) { E.clock.getDelta(); return; }
    const dt = Math.min(0.06, E.clock.getDelta());
    E.t += dt;
    place(dt);
    animate(dt);
    roomFx(dt);
    if (E.egg) E.egg.update(dt);
    if (E.onFrame) E.onFrame(dt);
    const t0 = performance.now();
    E.renderer.render(E.scene, E.camera);
    const ft = performance.now() - t0 + dt * 1000 * 0.25;
    E.frameAvg = E.frameAvg * 0.95 + (dt * 1000) * 0.05;
    if (++E.frameN % 90 === 0){
      if (E.frameAvg > 26 && E.dpr > 1){ E.dpr = Math.max(1, E.dpr - 0.25); E.renderer.setPixelRatio(E.dpr); E.resize(); }
      else if (E.frameAvg < 17.5 && E.dpr < E.dprMax){ E.dpr = Math.min(E.dprMax, E.dpr + 0.25); E.renderer.setPixelRatio(E.dpr); E.resize(); }
    }
    void ft;
  };
  requestAnimationFrame(step);
};

/* ---------- questions from the game ---------- */
const v3 = new THREE.Vector3();
function toScreen(obj, off){
  obj.updateWorldMatrix(true, false);
  v3.set(0, 0, 0); if (off) v3.copy(off);
  obj.localToWorld(v3);
  v3.project(E.camera);
  return { x: (v3.x + 1) / 2 * innerWidth, y: (1 - v3.y) / 2 * innerHeight };
}
E.project = name => {
  const r = E.friend;
  if (!r){ return { x: innerWidth / 2, y: innerHeight * 0.45 }; }
  if (name === 'mouth') return toScreen(r.mouthAnchor);
  if (name === 'headTop'){
    // the top of the hat if there is one
    if (r.outfitObj && r.outfitObj.parent === r.hat) return toScreen(r.hat, V(0, 0.5, 0));
    return toScreen(r.hat, V(0, 0.08, 0));
  }
  if (name === 'center'){
    const b = E.bounds(); return { x: (b.left + b.right) / 2, y: (b.top + b.bottom) / 2 };
  }
  return toScreen(r.root);
};
E.worldToScreen = p => { v3.copy(p).project(E.camera); return { x: (v3.x + 1) / 2 * innerWidth, y: (1 - v3.y) / 2 * innerHeight }; };
E.bounds = () => {
  const r = E.friend;
  if (!r) return { left: 0, top: 0, right: 0, bottom: 0 };
  const now = performance.now();
  if (E.boundsCache && now - E.boundsAt < 120) return E.boundsCache;
  r.root.updateMatrixWorld(true);
  const b = new THREE.Box3();
  r.root.traverse(o => { if (o.isMesh && o.visible && o !== E.contact){ o.geometry.computeBoundingBox && !o.geometry.boundingBox && o.geometry.computeBoundingBox(); const bb = o.geometry.boundingBox.clone().applyMatrix4(o.matrixWorld); b.union(bb); } });
  const pts = [];
  for (const x of [b.min.x, b.max.x]) for (const y of [b.min.y, b.max.y]) for (const z of [b.min.z, b.max.z]) pts.push(E.worldToScreen(V(x, y, z)));
  const out = { left: Math.min(...pts.map(p => p.x)), right: Math.max(...pts.map(p => p.x)), top: Math.min(...pts.map(p => p.y)), bottom: Math.max(...pts.map(p => p.y)) };
  E.boundsCache = out; E.boundsAt = now;
  return out;
};
const ray = new THREE.Raycaster();
E.hit = (x, y) => {
  const r = E.friend; if (!r || !E.petHolder.visible) return null;
  ray.setFromCamera(new THREE.Vector2(x / innerWidth * 2 - 1, -(y / innerHeight) * 2 + 1), E.camera);
  const hits = ray.intersectObject(r.root, true);
  for (const h of hits){
    let o = h.object, part = null, head = false;
    while (o){ if (!part && o.userData.part) part = o.userData.part; if (o === r.head) head = true; o = o.parent; }
    if (!h.object.visible) continue;
    return { part: part || 'belly', head: head || HEAD_PARTS.has(part), point: h.point };
  }
  return null;
};
E.lookAt = (x, y) => {
  if (x == null){ E.look = null; return; }
  // a point in the plane in front of the friend
  ray.setFromCamera(new THREE.Vector2(x / innerWidth * 2 - 1, -(y / innerHeight) * 2 + 1), E.camera);
  const plane = new THREE.Plane(new THREE.Vector3(0, 0, 1), -0.8);
  const p = new THREE.Vector3();
  if (ray.ray.intersectPlane(plane, p)){ E.look = true; E.lookW.copy(p); }
};

/* ---------- hatching: an egg in a nest, or a basket with a blanket ---------- */
E.showEgg = (sp, born) => {
  E.clearEgg();
  const g = new THREE.Group(); E.scene.add(g);
  const st = { g, taps: 0, born, sp, wob: 0, phase: 'wait', tt: 0 };
  if (!born){
    // nest of straw
    const nest = new THREE.Mesh(new THREE.TorusGeometry(0.52, 0.2, 20, 48), new THREE.MeshStandardMaterial({ map: T.straw(), roughness: 1 }));
    nest.rotation.x = Math.PI / 2; nest.scale.set(1, 1, 0.75); nest.position.y = 0.14; nest.castShadow = true; nest.receiveShadow = true; g.add(nest);
    const R = rng(3);
    for (let i = 0; i < 40; i++){
      const a = R() * Math.PI * 2;
      const s = new THREE.Mesh(new THREE.CylinderGeometry(0.008, 0.008, 0.35, 5), new THREE.MeshStandardMaterial({ color: R() < 0.5 ? '#e5bd75' : '#b88a45', roughness: 1 }));
      s.position.set(Math.cos(a) * (0.5 + R() * 0.2), 0.2 + R() * 0.12, Math.sin(a) * (0.5 + R() * 0.2)); s.rotation.set(R() * 3, R() * 3, R() * 3); g.add(s);
    }
    // the egg: a smooth egg shape, in two halves so the top can fly off
    const c = SPECIES_COLORS[sp] || ['#fff5e2', '#9edc8a'];
    const paint = T.eggSpots(c[0], c[1], sp.length * 7);
    const mat = new THREE.MeshPhysicalMaterial({ map: paint.tex, roughness: 0.35, clearcoat: 0.6, sheen: 0.2 });
    const prof = (a, b) => { const pts = []; for (let i = 0; i <= 32; i++){ const t = a + (b - a) * i / 32; const y = t * 1.0; const rr = Math.sin(Math.PI * t) ** 0.62 * 0.42 * (1 - 0.12 * t); pts.push(new THREE.Vector2(Math.max(0.0001, rr), y)); } return pts; };
    const egg = new THREE.Group(); egg.position.y = 0.12; g.add(egg);
    const bottom = new THREE.Mesh(new THREE.LatheGeometry(prof(0, 0.56), 64), mat); bottom.castShadow = true; egg.add(bottom);
    const topG = new THREE.Group(); topG.position.y = 0.56; egg.add(topG);
    const topM = new THREE.Mesh(new THREE.LatheGeometry(prof(0.56, 1).map(p => new THREE.Vector2(p.x, p.y - 0.56)), 64), mat); topM.castShadow = true; topG.add(topM);
    Object.assign(st, { egg, bottom, topG, paint, mat });
  } else {
    // a woven basket with a soft blanket
    const basket = new THREE.Mesh(new THREE.LatheGeometry([[0, 0], [0.5, 0], [0.62, 0.08], [0.7, 0.42], [0.74, 0.46], [0.7, 0.48], [0.64, 0.12], [0, 0.1]].map(([x, y]) => new THREE.Vector2(x, y)), 64), new THREE.MeshStandardMaterial({ map: T.weave(), roughness: 0.85, side: THREE.DoubleSide }));
    basket.scale.set(1, 1, 0.8); basket.castShadow = true; basket.receiveShadow = true; g.add(basket);
    const blanket = new THREE.Group(); blanket.position.y = 0.45; g.add(blanket);
    const bl = new THREE.Mesh(new THREE.SphereGeometry(0.68, 48, 24, 0, Math.PI * 2, 0, Math.PI / 2), new THREE.MeshPhysicalMaterial({ map: T.stripes('#ff9ec4', '#ffd0e4', 10), roughness: 0.85, sheen: 1, sheenColor: new THREE.Color('#ffe6f0'), side: THREE.DoubleSide }));
    bl.scale.set(1, 0.5, 0.82); bl.castShadow = true; blanket.add(bl);
    Object.assign(st, { blanket });
  }
  st.update = dt => {
    st.tt += dt;
    if (st.phase === 'wait'){
      st.wob = Math.max(0, st.wob - dt * 3);
      const idle = Math.sin(st.tt * 2.2) > 0.85 ? Math.sin(st.tt * 18) * 0.05 : 0;
      const rot = Math.sin(st.tt * 30) * 0.12 * st.wob + idle;
      if (st.egg){ st.egg.rotation.z = rot; st.egg.scale.set(1 + st.wob * 0.05, 1 - st.wob * 0.06, 1 + st.wob * 0.05); }
      if (st.blanket){ st.blanket.position.y = 0.45 + Math.max(0, Math.sin(st.tt * 3)) * 0.03 + st.wob * 0.06; st.blanket.rotation.z = rot * 0.5; }
    } else if (st.phase === 'open'){
      const u = Math.min(1, (st.tt - st.t0) / 0.9);
      if (st.topG){ st.topG.position.set(u * 0.6, 0.56 + u * 1.4 - u * u * 1.0, u * 0.3); st.topG.rotation.z = -u * 2.2; st.topG.visible = u < 1; st.bottom.scale.setScalar(1 - Math.max(0, u - 0.4) * 1.4); st.bottom.visible = u < 0.98; }
      if (st.blanket){ st.blanket.position.set(-u * 0.9, 0.45 + Math.sin(u * Math.PI) * 0.8, 0.2 * u); st.blanket.rotation.z = u * 1.6; st.blanket.visible = u < 1; }
      if (st.pet){ const k = Math.min(1, u * 1.4); const s = k < 1 ? k * 1.12 : 1 + Math.sin((u - 0.71) * 10) * 0.04 * (1 - u); st.pet.scale.setScalar(Math.max(0.01, s)); }
      if (u >= 1 && st.done){ const d = st.done; st.done = null; d(); }
    }
  };
  E.egg = st;
  E.petHolder.visible = false;
};
E.crack = () => {
  const st = E.egg; if (!st || st.phase !== 'wait') return;
  st.taps++; st.wob = 1;
  if (st.paint){
    // draw a zigzag crack around the middle, a bit longer each tap
    const g = st.paint.g, y0 = 256 * (1 - 0.56) * 0.98;
    g.strokeStyle = '#3a2a2a'; g.lineWidth = 5; g.lineJoin = 'round'; g.lineCap = 'round';
    const from = (st.taps - 1) * 170 + 60, to = from + 170;
    g.beginPath();
    for (let x = from; x <= to; x += 17){ const yy = y0 + ((x / 17) % 2 ? -14 : 12); x === from ? g.moveTo(x % 512, yy) : g.lineTo(x % 512, yy); }
    g.stroke();
    st.paint.tex.needsUpdate = true;
  }
};
E.hatch = () => new Promise(res => {
  const st = E.egg; if (!st){ res(); return; }
  st.phase = 'open'; st.t0 = st.tt;
  // the baby appears from inside
  const r = buildFriend(st.sp, 2);
  normalize(r); applyStage(r, 0);
  for (const e of r.eyes) e.set(1, 1, 0);
  const holder = new THREE.Group(); holder.add(r.root); holder.position.y = st.born ? 0.15 : 0.1; holder.scale.setScalar(0.01);
  st.g.add(holder); st.pet = holder; st.rig = r;
  st.done = res;
});
E.clearEgg = () => { if (E.egg){ E.scene.remove(E.egg.g); E.egg = null; } };
const SPECIES_COLORS = { trex: ['#fff5e2', '#7cc85a'], trike: ['#fff5e2', '#f2a33a'], stego: ['#fff5e2', '#45b0a5'], brachio: ['#fff5e2', '#9787ef'], penguin: ['#f4f8ff', '#9fb4d8'] };

/* ---------- still pictures for buttons and cards ---------- */
let snapR = null, snapScene = null, snapCam = null, snapL = null;
const snapCache = new Map();
function snapSetup(){
  if (snapR) return;
  const c = document.createElement('canvas');
  snapR = makeRenderer(c, { alpha: true, preserve: true });
  snapR.setPixelRatio(1);
  snapScene = new THREE.Scene();
  snapScene.environment = envFor(snapR); snapScene.environmentIntensity = 0.5;
  snapL = rig(snapScene, { shadowSize: 1024, hemi: 0.75 });
  snapCam = new THREE.PerspectiveCamera(30, 1, 0.1, 50);
}
function snapRender(obj, w, h, o = {}){
  snapSetup();
  snapR.setSize(w, h, false);
  snapScene.add(obj);
  obj.updateMatrixWorld(true);
  const b = new THREE.Box3().setFromObject(obj);
  const size = b.getSize(new THREE.Vector3()), ctr = b.getCenter(new THREE.Vector3());
  snapCam.aspect = w / h;
  const fov = snapCam.fov * Math.PI / 180;
  const fitH = size.y / (2 * Math.tan(fov / 2)), fitW = size.x / (2 * Math.tan(fov / 2) * snapCam.aspect);
  const d = Math.max(fitH, fitW) * (o.margin ?? 1.18) + size.z / 2;
  const dir = (o.dir || V(0, 0.18, 1)).normalize();
  snapCam.position.copy(ctr).addScaledVector(dir, d);
  snapCam.lookAt(ctr);
  snapCam.updateProjectionMatrix();
  snapR.render(snapScene, snapCam);
  const url = snapR.domElement.toDataURL('image/png');
  snapScene.remove(obj);
  return url;
}
E.snapshot = (sp, o = {}) => {
  const key = [sp, o.stage ?? 2, o.outfit || '', o.pose || '', o.w || 360].join(':');
  if (snapCache.has(key)) return snapCache.get(key);
  const r = buildFriend(sp, 2);
  normalize(r); applyStage(r, o.stage ?? 2); dress(r, o.outfit);
  if (o.pose === 'happy') for (const e of r.eyes) e.set(1, 1, 0);
  if (o.pose === 'sleep'){ for (const e of r.eyes) e.set(0, 0, 1); r.head.rotation.x = 0.2; }
  if (o.pose === 'talk') r.mouth.set(0.8);
  const holder = new THREE.Group(); holder.add(r.root);
  const sh = new THREE.Mesh(new THREE.PlaneGeometry(1, 1), new THREE.MeshBasicMaterial({ map: radialTex('#4a2a1a', 128), transparent: true, opacity: 0.35, depthWrite: false }));
  sh.rotation.x = -Math.PI / 2; sh.scale.set((r.width || 1.4) * 1.1 * r.inner.scale.x, 0.8 * r.inner.scale.x, 1); sh.position.y = 0.004; holder.add(sh);
  const w = o.w || 360, h = Math.round(w * (o.ratio ?? 1.08));
  const url = snapRender(holder, w, h, { margin: o.margin ?? 1.1 });
  snapCache.set(key, url);
  return url;
};
E.icon = (name, size = 160) => {
  const key = 'icon:' + name + ':' + size;
  if (snapCache.has(key)) return snapCache.get(key);
  const obj = buildItem(name);
  if (!obj) return '';
  const url = snapRender(obj, size, size, { margin: 1.12, dir: obj.userData.dir || V(0.35, 0.5, 1) });
  snapCache.set(key, url);
  return url;
};
E.friends = SPECIES_ORDER;
export default E;
