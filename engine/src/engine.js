/* The 3D engine behind the game. It draws one room and one friend in a full-screen canvas under the game's buttons,
   animates the friend from the same "state" classes the game already sets (happy, talk, sleep, hop...), and answers
   the questions the game asks: where is the mouth on screen, what part of the body is under this finger, how big
   is the friend on screen. It also renders still pictures of friends and items for buttons and cards. */
import * as THREE from 'three';
import { makeRenderer, envFor, rig } from './lights.js';
import { buildFriend, dress, SPECIES_ORDER } from './characters.js';
import { ROOM_BUILDERS } from './rooms.js';
import { radialTex, V, blob, skin, glossy, rng, release } from './util.js';
import * as T from './textures.js';
import { buildItem } from './items.js';
import * as Life from './life.js';
import { GAMES3D } from './games3d.js';

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
  look: null, lookW: new THREE.Vector3(), clock: { last: 0, getDelta(){ const n = performance.now(), d = this.last ? (n - this.last) / 1000 : 0; this.last = n; return d; } }, t: 0,
  anim: { open: 0, happy: 0, sleep: 0, talk: 0, jump: 0, squash: 0, wiggle: 0, shake: 0, nod: 0, tilt: 0, excited: 0, prev: new Set(), blink: 0 },
  dpr: 1, dprMax: 2, frameAvg: 16, frameN: 0, dark: 0, darkTarget: 0, blanket: 0, blanketTarget: 0, curtain: 1, curtainTarget: 1,
  hidden: false, egg: null, onFrame: null, boundsCache: null, boundsAt: 0, paused: false, busyUntil: 0,
  actions: [], effects: [], parts: [], walk: Life.newWalk(), lookOverride: null, cue: () => {}, game: null
};
window.DinoEngine = E;

E.init = (canvas, opts = {}) => {
  E.canvas = canvas;
  E.renderer = makeRenderer(canvas, {});
  E.dprMax = Math.min(opts.maxDpr || 2, window.devicePixelRatio || 1);
  // start a little below the sharpest setting and step up only while the device keeps up
  E.dpr = Math.min(E.dprMax, opts.startDpr || E.dprMax);
  E.renderer.setPixelRatio(E.dpr);
  E.scene = new THREE.Scene();
  E.scene.environment = envFor(E.renderer);
  E.scene.environmentIntensity = 0.45;
  E.L = rig(E.scene, { shadowSize: opts.shadowSize || 2048 });
  // two lights that only the bedroom uses: the bedside lamp, and a soft night light on the friend when the lamp is off.
  // They stay in the scene (at zero) in every room, so the set of lights, and with it the shaders, never changes.
  E.L.lamp = new THREE.PointLight('#ffcf7a', 0, 4.5, 1.6); E.scene.add(E.L.lamp);
  E.L.night = new THREE.PointLight('#9aa8ff', 0, 5.5, 2); E.L.night.position.set(0.6, 2.4, 2.2); E.scene.add(E.L.night);
  E.camera = new THREE.PerspectiveCamera(36, 1, 0.1, 120);
  E.petHolder = new THREE.Group(); E.scene.add(E.petHolder);
  const sh = new THREE.Mesh(new THREE.PlaneGeometry(1, 1), new THREE.MeshBasicMaterial({ map: radialTex('#4a2a1a', 128), transparent: true, opacity: 0.42, depthWrite: false }));
  sh.rotation.x = -Math.PI / 2; sh.renderOrder = 1; E.contact = sh; E.petHolder.add(sh);
  E.resize();
  addEventListener('resize', () => E.resize());
  E.ready = true;
  E.loop();
};
// the free band between the top bar and the buttons; smooth: glide there (when a sheet opens or closes)
E.setSafe = (top, bottom, smooth) => {
  E.safeTarget = { top, bottom };
  if (!smooth || E.paused){ E.safe = { top, bottom }; E.frame(); }
};
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
function buildRoom(name){
  if (!E.rooms[name]){ E.rooms[name] = ROOM_BUILDERS[name](); E.rooms[name].group.visible = false; E.scene.add(E.rooms[name].group); }
  return E.rooms[name];
}
E.setRoom = name => {
  if (name === 'album') name = 'play';          // the same meadow
  if (!ROOM_BUILDERS[name]) name = 'home';
  if (E.roomName === name) return;
  if (E.room) E.room.group.visible = false;
  E.room = buildRoom(name); E.room.group.visible = true; E.roomName = name;
  E.calm();
  const l = ROOM_LIGHT[name] || ROOM_LIGHT.home;
  E.L.key.intensity = l.key; E.L.hemi.intensity = l.hemi; E.L.hemi.color.setHex(l.sky); E.L.hemi.groundColor.setHex(l.ground);
  E.renderer.toneMappingExposure = l.exposure;
  E.scene.background = E.room.outdoor || E.room.studio ? null : new THREE.Color(E.room.wall || '#ffe2c2');
  if (E.room.studio) E.scene.background = new THREE.Color('#ffd9ae');
  E.darkTarget = 0; E.dark = 0; E.blanketTarget = 0; E.curtainTarget = 1;
  if (E.room.setCurtain) E.room.setCurtain(1);
  E.frame();
};

/* Builds the rooms ahead of time and prepares their shaders in the background (on the start screen), so the first
   visit to each room doesn't stutter. One room at a time, when the browser is idle. */
E.warm = (names, done) => {
  const queue = names.slice();
  const idle = f => (window.requestIdleCallback ? requestIdleCallback(f, { timeout: 600 }) : setTimeout(f, 60));
  const next = () => {
    if (!queue.length){ if (done) done(); return; }
    const n = queue.shift();
    try {
      if (!ROOM_BUILDERS[n]){ idle(next); return; }
      const r = buildRoom(n);
      // compile off the main thread where the browser can; otherwise right away (we are idle on the start screen)
      const p = E.renderer.extensions.has('KHR_parallel_shader_compile') ? E.renderer.compileAsync(r.group, E.camera, E.scene) : E.renderer.compile(r.group, E.camera, E.scene);
      Promise.resolve(p).catch(() => {}).then(() => idle(next));
    } catch (e) { idle(next); }
  };
  idle(next);
};

/* ---------- the friend ---------- */
E.setPet = (sp, o = {}) => {
  const key = sp + ':' + (o.stage ?? 2) + ':' + (o.outfit || '');
  if (E.friendKey === key && E.friend) return;
  if (E.friend){ E.petHolder.remove(E.friend.root); release(E.friend.root); }
  E.friendKey = key;
  if (!sp){ E.friend = null; return; }
  const r = buildFriend(sp, 2);
  normalize(r);
  applyStage(r, o.stage ?? 2);
  dress(r, o.outfit);
  E.petHolder.add(r.root);
  E.friend = r;
  E.calm();
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

/* ---------- life: actions, walking, eating, playing ---------- */
// stops whatever the friend was doing (a new room, a new friend)
E.calm = () => { E.actions = []; Life.clearEffects(E); Life.clearFoam(E); const W = E.walk; if (W.resolve){ const f = W.resolve; W.resolve = null; f(); } E.walk = Life.newWalk(); };
E.act = (name, o = {}) => {
  const r = E.friend; if (!r || !Life.ACTION_NAMES.includes(name)) return;
  if (name !== 'eat') E.actions = E.actions.filter(a => a.name !== name);
  const a = { name, t: 0, side: o.side || 1, dur: o.dur || 0 };
  if (name === 'lookback' && r.tail && !o.side){ const tp = new THREE.Vector3(), hp = new THREE.Vector3(); r.tail.getWorldPosition(tp); r.head.getWorldPosition(hp); a.side = tp.x >= hp.x ? 1 : -1; }
  E.actions.push(a);
};
E.busyActing = () => E.actions.length > 0 || !!E.walk.target || E.effects.length > 0;
E.burstAt = (kind, where, n = 8, o = {}) => {
  let p = Life.anchorPos(E, where === 'nose' ? 'mouth' : where);
  if (where === 'mouth' || where === 'nose'){ const r = E.friend; const nrm = new THREE.Vector3(0, 0, 1).transformDirection(r.mouthAnchor.matrixWorld); p.addScaledVector(nrm, 0.08); }
  Life.burst(E, kind, p, n, o);
};
E.burstScreen = (kind, x, y, n = 8, o = {}) => { const at = E.screenToWorld(x, y, Life.anchorPos(E, 'center').z + 0.3); if (at) Life.burst(E, kind, at, n, o); };
E.stars = sec => Life.stars(E, sec);
// foam from the sponge, at the point under the finger; the shower pops it off
E.foamAt = (x, y) => { const h = E.hit(x, y); if (h) Life.foamAt(E, h); return !!h; };
E.popFoam = n => Life.popFoam(E, n);
E.clearFoam = () => Life.clearFoam(E);
E.screenToWorld = (x, y, zPlane = 0.3) => {
  ray.setFromCamera(new THREE.Vector2(x / innerWidth * 2 - 1, -(y / innerHeight) * 2 + 1), E.camera);
  const p = new THREE.Vector3();
  return ray.ray.intersectPlane(new THREE.Plane(new THREE.Vector3(0, 0, 1), -zPlane), p) ? p : null;
};
// eat a food (ok: true, 'love' for a favorite, false: turns away); from: the screen point where the food was let go
E.feed = (food, ok, from) => {
  if (!E.friend) return Promise.resolve();
  const at = from ? E.screenToWorld(from.x, from.y, Life.anchorPos(E, 'mouth').z + 0.25) : null;
  return Life.feed(E, food, ok, at);
};
E.ball = from => { const at = from ? E.screenToWorld(from.x, from.y, Life.anchorPos(E, 'head').z + 0.6) : null; Life.ball(E, at); };
E.butterfly = () => Life.butterfly(E);
// paints the home in one of its color themes (and remembers the wall color for the background)
E.setTheme = (name, i) => {
  if (!ROOM_BUILDERS[name]) return;
  const room = buildRoom(name);
  if (room.setTheme){ room.wall = room.setTheme(i); if (E.room === room) E.scene.background = new THREE.Color(room.wall); }
};
// growing up: a pop from a little smaller to the new size, with sparkles and a big stretch
E.celebrate = () => {
  const r = E.friend; if (!r) return;
  const k0 = r.inner.scale.x;
  Life.burst(E, 'spark', Life.anchorPos(E, 'head'), 16);
  E.act('stretch');
  E.effects.push({ age: 0, update(dt){
    this.age += dt;
    const u = Math.min(1, this.age / 1.3);
    const m = u < 0.35 ? 0.84 + 0.26 * (u / 0.35) : 1.1 - 0.1 * Math.min(1, (u - 0.35) / 0.65) + Math.sin((u - 0.35) * 18) * 0.03 * (1 - u);
    if (E.friend !== r){ return false; }
    r.inner.scale.setScalar(k0 * m);
    if (u >= 1){ r.inner.scale.setScalar(k0); return false; }
    return true;
  } });
};
// walking happens on the floor of the home and the kitchen
E.walkable = () => E.roomName === 'home' || E.roomName === 'kitchen';
// how far to each side the friend can walk and still be fully seen
E.walkRange = () => {
  const r = E.friend; if (!r || !E.pxPerUnit) return 0;
  const halfW = innerWidth / 2 / E.pxPerUnit;
  return Math.max(0, halfW - (r.width || 1.4) * r.inner.scale.x * 0.55 - 0.05);
};
E.walkTo = (x, z = 0, speed = 1) => new Promise(res => {
  const W = E.walk;
  if (!E.friend || !E.walkable()){ res(); return; }
  if (W.resolve){ const f = W.resolve; W.resolve = null; f(); }
  W.target = { x, z }; W.speed = speed; W.resolve = res;
});
// walks in from the side of the screen (entering a room)
E.enter = side => {
  const r = E.friend; if (!r || !E.walkable()) return Promise.resolve();
  const halfW = innerWidth / 2 / (E.pxPerUnit || 200);
  E.walk.x = side * Math.min(1.8, halfW * 0.8); E.walk.z = -0.1;
  E.walk.yaw = side > 0 ? -Math.PI / 2 - (r.turn || 0) : Math.PI / 2 - (r.turn || 0);
  return E.walkTo(0, 0, 1.3);
};
// a little stroll: over to one side, a look around, and back to the middle
E.wander = async () => {
  if (!E.friend || !E.walkable() || E.walk.target) return;
  const range = E.walkRange();
  if (range < 0.15) { E.act('lookaround'); return; }
  const side = Math.random() < 0.5 ? -1 : 1;
  await E.walkTo(side * range * (0.6 + Math.random() * 0.4), -0.25 - Math.random() * 0.2, 0.8);
  if (!E.walkable()) return;
  E.act('lookaround');
  await new Promise(r => setTimeout(r, 2600));
  if (!E.walkable()) return;
  await E.walkTo(0, 0, 0.9);
};

/* ---------- action games in 3D (see games3d.js) ---------- */
E.startGame = (name, o = {}) => {
  if (!E.friend || !GAMES3D[name]) return false;
  E.stopGame();
  E.setRoom('play'); E.setLayout('game'); E.calm();
  E.game = GAMES3D[name](E, o);
  return true;
};
E.stopGame = () => { if (!E.game) return; try { E.game.stop(); } catch (e) {} E.game = null; E.calm(); };
E.gamePointer = (type, x, y) => { if (E.game) E.game.pointer(type, x, y); };

/* ---------- framing: the friend stands between the top bar and the buttons at the bottom ---------- */
E.setLayout = l => { if (E.layout !== l){ E.layout = l; E.frame(); } };
// frame things standing on the floor (from the floor up to worldH) so they fill a rectangle on screen
E.setFit = (rect, worldH) => { E.fit = rect ? { bottom: rect.bottom, h: rect.height, worldH } : null; E.frame(); };
E.frame = () => {
  if (!E.camera) return;
  const W = innerWidth, H = innerHeight;
  const top = E.safe.top, bottom = E.safe.bottom;
  const avail = Math.max(120, H - top - bottom);
  const game = E.layout === 'game';
  const small = E.layout === 'small' || game;
  const share = game ? 0.26 : small ? 0.3 : 0.74;
  // pixels per world unit at the friend
  let k = Math.min(avail * share / PRESENCE, W * (small ? 0.4 : 0.92) / (PRESENCE * 1.15));
  if (E.roomName === 'bath' && !small) k = Math.min(k, W * 0.98 / 2.6);
  if (E.roomName === 'bed' && !small) k = Math.min(k, W * 0.98 / 2.35);
  const fit = E.fit;
  if (fit) k = Math.min(fit.h / fit.worldH, W * 0.92 / (PRESENCE * 1.15));
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
  const target = fit ? fit.bottom - fit.h * 0.03 : game ? H - Math.max(36, H * 0.07) : H - bottom - (small ? 10 : Math.max(14, avail * 0.05));
  const off = sy - target;
  E.camera.setViewOffset(W, H, 0, off, W, H);
  E.camera.updateProjectionMatrix();
  E.pxPerUnit = k;
};

/* ---------- state from the game ---------- */
function has(c){ return E.stateEl ? E.stateEl.classList.contains(c) : false; }
const ease = (a, b, k) => a + (b - a) * k;
function animate(dt){ Life.animate(E, dt); }

/* ---------- placing the friend in the room ---------- */
function place(dt){
  const r = E.friend;
  const stg = E.stageEl ? E.stageEl.classList : null;
  const gone = E.hidden || (stg && stg.contains('gone')) || E.egg;
  E.petHolder.visible = !gone;
  if (!r) return;
  let x = 0, y = 0, z = 0;
  if (E.room){ if (E.room.petY != null && E.roomName !== 'play'){ y = E.room.petY; z = E.room.petZ || 0; } }
  // in the tub, short friends sit up higher, so the face (and the mouth, for brushing) stays above the bubbles
  if (E.roomName === 'bath') y = Math.max(y, 1.04 - restMouthY(r));
  if (E.roomName === 'bed') y -= E.blanket * 0.12;
  if (E.walkable() || E.game){ x += E.walk.x; z += E.walk.z; y += E.walk.y || 0; }
  E.petHolder.position.set(x, y, z);
  // the soft shadow under the friend
  const w = (r.width || 1.4) * (r.inner.scale.x);
  E.contact.scale.set(w * 1.15, (0.9) * r.inner.scale.x, 1);
  E.contact.position.set(0, 0.006, 0);
  E.contact.visible = E.roomName !== 'bath';
}
// how high the mouth is when the friend stands on the floor at rest
function restMouthY(r){
  if (r._mouthY != null) return r._mouthY;
  const save = E.petHolder.position.clone();
  E.petHolder.position.set(0, 0, 0); E.petHolder.updateMatrixWorld(true);
  const p = new THREE.Vector3(); r.mouthAnchor.getWorldPosition(p);
  E.petHolder.position.copy(save); E.petHolder.updateMatrixWorld(true);
  r._mouthY = p.y;
  return p.y;
}
const NIGHT = { keyDay: new THREE.Color(0xfff0dc), moon: new THREE.Color(0xa9b8ff), sky: new THREE.Color(), nightSky: new THREE.Color(0x6f78d8),
  fillDay: new THREE.Color(0xcfe2ff), nightFill: new THREE.Color(0x5a66d0), rimDay: new THREE.Color(0xfff6e8) };
E.dark = 0;
function roomFx(dt){
  const room = E.room; if (!room) return;
  if (room.update) room.update(E.t);
  // bedroom lights
  E.dark = ease(E.dark, E.darkTarget, Math.min(1, dt * 3));
  if (E.roomName === 'bed'){
    // lights off: the room sinks into a soft blue night, lit by the moon from the window
    const l = ROOM_LIGHT.bed, d = E.dark;
    E.L.key.intensity = l.key * (1 - 0.9 * d);
    E.L.key.color.lerpColors(NIGHT.keyDay, NIGHT.moon, d);
    E.L.hemi.intensity = l.hemi * (1 - 0.6 * d);
    E.L.hemi.color.lerpColors(NIGHT.sky.setHex(l.sky), NIGHT.nightSky, d);
    E.L.fill.color.lerpColors(NIGHT.fillDay, NIGHT.nightFill, d);
    E.L.fill.intensity = 0.55 * (1 - 0.55 * d);
    E.L.rim.color.lerpColors(NIGHT.rimDay, NIGHT.moon, d);
    E.L.rim.intensity = 1.3 * (1 - 0.2 * d);
    E.renderer.toneMappingExposure = l.exposure * (1 - 0.3 * d);
    E.scene.environmentIntensity = 0.45 * (1 - 0.75 * d);
    if (room.lampAt){ E.L.lamp.position.copy(room.lampAt); E.L.lamp.intensity = 3.2 * (1 - d); room.shadeMat.emissiveIntensity = 0.9 * (1 - d) + 0.05; }
    E.L.night.intensity = 2.6 * d;
    E.blanket = ease(E.blanket, E.blanketTarget, Math.min(1, dt * 3));
    if (room.blanket){ room.blanket.position.set(0, 0.62 + E.blanket * 0.0, 0.15 - (1 - E.blanket) * 0.0); room.blanket.visible = E.blanket > 0.02; room.blanket.scale.set(1, 1, Math.max(0.05, E.blanket)); room.blanket.position.z = -0.55 + 0.68 * 0.5 * (1 + E.blanket) - 0.2; }
  } else if (E.wasNight){ E.L.lamp.intensity = 0; E.L.night.intensity = 0; E.scene.environmentIntensity = 0.45; E.L.fill.color.copy(NIGHT.fillDay); E.L.fill.intensity = 0.55; E.L.key.color.copy(NIGHT.keyDay); E.L.rim.color.copy(NIGHT.rimDay); E.L.rim.intensity = 1.3; }
  E.wasNight = E.roomName === 'bed';
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
    const st = E.safeTarget;
    if (st && (Math.abs(st.top - E.safe.top) > 0.5 || Math.abs(st.bottom - E.safe.bottom) > 0.5)){
      const k = Math.min(1, dt * 7);
      E.safe = { top: ease(E.safe.top, st.top, k), bottom: ease(E.safe.bottom, st.bottom, k) };
      E.frame();
    }
    if (E.game) E.game.update(dt);
    place(dt);
    animate(dt);
    Life.updateEffects(E, dt);
    roomFx(dt);
    if (E.egg) E.egg.update(dt);
    if (E.onFrame) E.onFrame(dt);
    const t0 = performance.now();
    E.renderer.render(E.scene, E.camera);
    const ft = performance.now() - t0 + dt * 1000 * 0.25;
    // frames slowed by one-off work (pictures being made for buttons) don't count toward the speed check
    if (t0 > E.busyUntil) E.frameAvg = E.frameAvg * 0.95 + (dt * 1000) * 0.05;
    if (++E.frameN % 90 === 0){
      // after a step down, never climb back above it, so the picture doesn't keep changing
      if (E.frameAvg > 26 && E.dpr > 1){ E.dpr = Math.max(1, E.dpr - 0.25); E.dprMax = E.dpr; E.renderer.setPixelRatio(E.dpr); E.resize(); }
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
    return { part: part || 'belly', head: head || HEAD_PARTS.has(part), point: h.point, object: h.object };
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
/* The egg, in two halves that meet along a zigzag, so when the top flies off the bottom has a cracked edge. The crack
   drawn on the shell with each tap follows the same zigzag. */
const SEAM = 0.56, TEETH = 32, ZIG = 0.05;
const zigAt = u => { const f = ((u * TEETH) % 2 + 2) % 2; return f < 1 ? 1 - 2 * f : -1 + 2 * (f - 1); };   // +1 at even teeth, -1 at odd
function eggShell(sp, o = {}){
  const c = SPECIES_COLORS[sp] || ['#fff5e2', '#9edc8a'];
  const paint = T.eggSpots(c[0], c[1], sp.length * 7);
  const mat = new THREE.MeshPhysicalMaterial({ map: paint.tex, roughness: 0.35, clearcoat: 0.6, sheen: 0.2 });
  const inMat = new THREE.MeshStandardMaterial({ color: '#fff3df', roughness: 0.6, side: THREE.BackSide });
  const N = 32, SEG = 64;
  const half = (a, b, seamRow) => {
    const pts = [];
    for (let i = 0; i <= N; i++){ const t = a + (b - a) * i / N; const rr = Math.sin(Math.PI * t) ** 0.62 * 0.42 * (1 - 0.12 * t); pts.push(new THREE.Vector2(Math.max(0.0001, rr), t)); }
    const geo = new THREE.LatheGeometry(pts, SEG);
    const pos = geo.attributes.position, uv = geo.attributes.uv;
    for (let i = 0; i <= SEG; i++) for (let j = 0; j <= N; j++){
      const k = i * (N + 1) + j;
      uv.setY(k, a + (b - a) * j / N);            // one picture over the whole egg, so the crack lands on the seam
      if (j === seamRow){ const u = i / SEG; pos.setY(k, pos.getY(k) - zigAt(u) * ZIG); uv.setY(k, uv.getY(k) - zigAt(u) * ZIG); }
    }
    return geo;
  };
  const egg = new THREE.Group();
  const bGeo = half(0, SEAM, N);
  const bottom = new THREE.Mesh(bGeo, mat); bottom.castShadow = true; egg.add(bottom);
  const bIn = new THREE.Mesh(bGeo, inMat); bIn.scale.setScalar(0.985); bottom.add(bIn);
  const topG = new THREE.Group(); topG.position.y = SEAM;
  if (!o.noTop){
    const tGeo = half(SEAM, 1, 0); tGeo.translate(0, -SEAM, 0);
    const topM = new THREE.Mesh(tGeo, mat); topM.castShadow = true; topG.add(topM);
    const tIn = new THREE.Mesh(tGeo, inMat); tIn.scale.setScalar(0.985); topM.add(tIn);
    egg.add(topG);
  }
  return { egg, bottom, topG, paint, mat };
}
// draws the crack from tooth k0 to tooth k1 (teeth count around the egg; 0 faces the camera)
function drawCrack(paint, k0, k1){
  const g = paint.g, W = paint.canvas.width, H = paint.canvas.height, A = ZIG * H;
  const y0 = (1 - SEAM) * H;
  g.strokeStyle = '#4a3226'; g.lineWidth = 5; g.lineJoin = 'round'; g.lineCap = 'round';
  for (let k = k0; k < k1; k++){
    const m = ((k % TEETH) + TEETH) % TEETH, x1 = m * W / TEETH, x2 = x1 + W / TEETH;
    const ya = y0 + zigAt(m / TEETH) * A, yb = y0 + zigAt((m + 1) / TEETH) * A;
    g.beginPath(); g.moveTo(x1, ya); g.lineTo(x2, yb); g.stroke();
  }
  paint.tex.needsUpdate = true;
}
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
    const shell = eggShell(sp);
    shell.egg.position.y = 0.12; g.add(shell.egg);
    Object.assign(st, shell);
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
    if (st.rig){
      st.mt = ease(st.mt || 0, has('talk') ? 1 : 0, Math.min(1, dt * 22));
      st.rig.mouth.set(st.mt);
      st.rig.head.rotation.z = Math.sin(st.tt * 1.6) * 0.06;
      if (st.phase === 'open' && st.tt - st.t0 > 1) st.pet.position.y = (st.born ? 0.15 : 0.1) + Math.abs(Math.sin(st.tt * 2.4)) * 0.03;
    }
  };
  E.egg = st;
  E.petHolder.visible = false;
};
E.crack = () => {
  const st = E.egg; if (!st || st.phase !== 'wait') return;
  st.taps++; st.wob = 1;
  if (st.paint){
    // the crack grows from the front, a little wider each tap
    if (st.taps === 1) drawCrack(st.paint, -5, 5);
    else { drawCrack(st.paint, -11, -5); drawCrack(st.paint, 5, 11); }
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
E.clearEgg = () => { if (E.egg){ E.scene.remove(E.egg.g); release(E.egg.g); E.egg = null; } };
const SPECIES_COLORS = { trex: ['#fff5e2', '#7cc85a'], trike: ['#fff5e2', '#f2a33a'], stego: ['#fff5e2', '#45b0a5'], brachio: ['#fff5e2', '#9787ef'], anky: ['#fff5e2', '#5b8def'], penguin: ['#f4f8ff', '#9fb4d8'] };

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
function snapRender(obj, outW, outH, o = {}){
  snapSetup();
  if (snapR.getContext().isContextLost()){ release(obj); return ''; }
  // cropped pictures are drawn larger with room to spare, then trimmed to what was drawn, so every item fills its
  // button the same way whatever its shape
  const up = o.crop ? 1.5 : 1;
  const w = Math.round(outW * up), h = Math.round(outH * up);
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
  const url = o.crop ? cropped(w, h, outW, outH, o.pad ?? 0.06) : snapR.domElement.toDataURL('image/png');
  snapScene.remove(obj);
  release(obj);
  return url;
}
function cropped(w, h, outW, outH, pad){
  const gl = snapR.getContext(), px = new Uint8Array(w * h * 4);
  gl.readPixels(0, 0, w, h, gl.RGBA, gl.UNSIGNED_BYTE, px);
  let x0 = w, x1 = -1, y0 = h, y1 = -1;
  for (let y = 0; y < h; y++) for (let x = 0; x < w; x++){
    if (px[(y * w + x) * 4 + 3] > 24){ if (x < x0) x0 = x; if (x > x1) x1 = x; if (y < y0) y0 = y; if (y > y1) y1 = y; }
  }
  if (x1 < 0) return snapR.domElement.toDataURL('image/png');
  const sx = x0, sy = h - 1 - y1, sw = x1 - x0 + 1, sh = y1 - y0 + 1;   // the GL picture is upside down
  const c = document.createElement('canvas'); c.width = outW; c.height = outH;
  const k = Math.min(outW * (1 - 2 * pad) / sw, outH * (1 - 2 * pad) / sh);
  const dw = sw * k, dh = sh * k;
  const g = c.getContext('2d'); g.imageSmoothingQuality = 'high';
  g.drawImage(snapR.domElement, sx, sy, sw, sh, (outW - dw) / 2, (outH - dh) / 2, dw, dh);
  return c.toDataURL('image/png');
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
  if (url) snapCache.set(key, url);
  return url;
};
E.icon = (name, size = 160) => {
  const key = 'icon:' + name + ':' + size;
  if (snapCache.has(key)) return snapCache.get(key);
  const obj = buildItem(name);
  if (!obj) return '';
  const url = snapRender(obj, size, size, { margin: 1.3, dir: obj.userData.dir || V(0.35, 0.5, 1), crop: true });
  if (url) snapCache.set(key, url);
  return url;
};
// a baby peeking out of the bottom half of its egg (for the app icon and the share picture)
E.hatchling = (sp, w = 1024, o = {}) => {
  const holder = new THREE.Group();
  const shell = eggShell(sp, { noTop: true });
  const k = o.eggScale ?? 1.5;
  shell.egg.scale.setScalar(k); shell.egg.position.y = 0.02; holder.add(shell.egg);
  drawCrack(shell.paint, 0, TEETH);
  const r = buildFriend(sp, 2);
  normalize(r); applyStage(r, 0); dress(r, o.outfit);
  for (const e of r.eyes) e.set(1, o.pose === 'happy' ? 1 : 0, 0);
  if (o.pose === 'talk') r.mouth.set(0.8);
  r.root.position.y = 0.12 * k; if (o.turn != null) r.inner.rotation.y = o.turn; holder.add(r.root);
  const url = snapRender(holder, w, Math.round(w * (o.ratio ?? 1)), { margin: o.margin ?? 1.02, dir: o.dir || V(0, 0.16, 1) });
  return url;
};
E.friends = SPECIES_ORDER;
export default E;
