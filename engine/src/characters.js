/* The seven friends, built from soft rounded shapes. Each builder returns a rig: groups the animator moves (body, head,
   tail, ears, trunk, flippers, arms), the eyes and mouth, and anchor points (mouth, top of head, hat mount).
   Units: the floor is y = 0, the friend faces +z (toward the camera). */
import * as THREE from 'three';
import { V, skin, glossy, matte, blob, tube, slab, horn, orient, roundedShape, v2, shade, rng } from './util.js';
import { makeEye, makeMouth, cheeks, teethRow } from './face.js';

function group(parent, pos){ const g = new THREE.Group(); if (pos) g.position.copy(pos); parent.add(g); return g; }
function spots(parent, on, dirs, size, mat){
  for (const [d, k] of dirs){
    const s = on.surf(d);
    const m = blob(parent, s.p, V(size * k, size * k * 0.8, size * 0.28), mat, { seg: 24, shadow: false });
    orient(m, s.n);
    m.position.addScaledVector(s.n, -size * 0.12);
  }
}
function hatAnchor(parent, at, normal){
  // hats are built standing up (+y), so the anchor's +y follows the head's surface, leaning toward straight up
  const a = new THREE.Group(); a.position.copy(at);
  const n = normal.clone().normalize().add(V(0, 1, 0)).normalize();
  a.quaternion.setFromUnitVectors(V(0, 1, 0), n);
  parent.add(a); return a;
}
function anchorAt(parent, at, normal){
  const a = new THREE.Group(); a.position.copy(at); if (normal) orient(a, normal); parent.add(a); return a;
}
function nails(parent, x, y, z, w, n = 3, mat = glossy('#fff8ec', { roughness: 0.3 })){
  for (let i = 0; i < n; i++){
    const t = n === 1 ? 0 : i / (n - 1) - 0.5;
    blob(parent, V(x + t * w, y, z), V(0.042, 0.032, 0.03), mat, { seg: 16, shadow: false });
  }
}
function base(sp){
  const root = new THREE.Group(); root.name = sp;
  const jump = group(root);
  const body = group(jump);
  const torso = group(body);
  return { sp, root, jump, body, torso, eyes: [], parts: [], extra: {} };
}

/* ---------------- T. rex ---------------- */
function trex(){
  const r = base('trex');
  const C = { body: '#5fbf4a', belly: '#e8f5b2', spot: '#3f8f34', claw: '#fff6e6' };
  const S = skin(C.body), B = skin(C.belly, { sheen: 0.3 }), D = skin(C.spot);
  const t = r.torso;
  const torso = blob(t, V(0, 0.66, -0.02), V(0.5, 0.55, 0.44), S, { part: 'belly' });
  blob(t, V(0, 0.6, 0.16), V(0.37, 0.43, 0.3), B, { part: 'belly' });
  for (const y of [0.45, 0.6, 0.75]){
    const g = new THREE.Mesh(new THREE.TorusGeometry(0.29, 0.012, 8, 40, 1.9), skin('#cfe39a'));
    g.rotation.set(Math.PI / 2 + 0.05, 0, Math.PI / 2 - 0.95); g.position.set(0, y, 0.14); g.scale.set(1, 1.05, 1);
    t.add(g);
  }
  spots(t, torso, [[V(-0.85, 0.35, 0.3), 1], [V(0.9, 0.15, 0.25), 0.8], [V(0.7, 0.55, -0.35), 1.1], [V(-0.6, 0.65, -0.4), 0.9]], 0.07, D);
  for (const sx of [-1, 1]){
    blob(r.body, V(sx * 0.3, 0.38, 0.02), V(0.21, 0.24, 0.23), S, { part: 'legs' });
    tube(r.body, [V(sx * 0.3, 0.32, 0.05), V(sx * 0.31, 0.08, 0.09)], [0.15, 0.135], S, { part: 'legs' });
    blob(r.body, V(sx * 0.31, 0.06, 0.15), V(0.17, 0.08, 0.22), S, { part: 'legs' });
    for (const k of [-1, 0, 1]){
      const c = horn(r.body, 0.07, 0.035, glossy(C.claw, { roughness: 0.3 }), { radial: 12 });
      c.position.set(sx * 0.31 + k * 0.075, 0.05, 0.33); c.rotation.x = Math.PI / 2 - 0.3;
    }
    // tiny arms
    const arm = group(t, V(sx * 0.35, 0.86, 0.24));
    tube(arm, [V(0, 0, 0), V(sx * 0.07, -0.08, 0.12), V(sx * 0.08, -0.16, 0.17)], [0.075, 0.062, 0.05], S, { part: 'arms' });
    blob(arm, V(sx * 0.085, -0.19, 0.19), V(0.06, 0.055, 0.06), S, { part: 'arms' });
    for (const k of [-1, 1]){
      const c = horn(arm, 0.045, 0.02, glossy(C.claw), { radial: 10 });
      c.position.set(sx * 0.085 + k * 0.025, -0.23, 0.2); c.rotation.x = Math.PI;
    }
    r.extra[sx < 0 ? 'armL' : 'armR'] = arm;
  }
  // tail
  const tail = group(r.body, V(0.12, 0.5, -0.3));
  const tl = tube(tail, [V(0, 0, 0), V(0.35, -0.16, -0.22), V(0.72, -0.28, -0.18), V(0.98, -0.32, 0.02)], [0.26, 0.17, 0.09, 0.035], S, { part: 'tail' });
  spots(tail, { surf: d => { const p = tl.curve.getPointAt(0.45); return { p: p.clone().add(V(0, 0.15, 0)), n: V(0.2, 1, 0.3).normalize() }; } }, [[V(0, 1, 0), 0.9]], 0.06, D);
  r.tail = tail;
  // neck and head
  blob(r.body, V(0, 1.0, 0.02), V(0.36, 0.25, 0.33), S, { part: 'head' });
  const head = group(r.body, V(0, 1.05, 0.02));
  r.head = head;
  const skull = blob(head, V(0, 0.32, -0.04), V(0.46, 0.42, 0.44), S, { part: 'head' });
  const snout = blob(head, V(0, 0.16, 0.3), V(0.4, 0.25, 0.4), S, { part: 'face' });
  blob(head, V(0, 0.04, 0.2), V(0.34, 0.12, 0.34), S, { part: 'face' });
  // soft ridge bumps along the head and back, so it reads as a dinosaur
  for (const [y, z, k] of [[0.74, -0.06, 0.07], [0.7, -0.28, 0.08], [0.56, -0.44, 0.075]]){
    const h = horn(head, k * 1.4, k, skin(C.spot), { radial: 16, part: 'head' });
    h.position.set(0, y, z); h.rotation.x = -0.5;
  }
  for (const [y, z, k] of [[1.13, -0.36, 0.07], [0.98, -0.44, 0.065], [0.82, -0.47, 0.06]]){
    const h = horn(t, k * 1.4, k, skin(C.spot), { radial: 16, part: 'belly' });
    h.position.set(0, y, z); h.rotation.x = -1.0;
  }
  spots(head, skull, [[V(-0.3, 1, -0.1), 1], [V(0.05, 1, 0.12), 0.8], [V(0.35, 0.95, -0.05), 1], [V(-0.85, 0.3, -0.1), 0.6], [V(0.85, 0.3, -0.1), 0.6]], 0.065, D);
  for (const sx of [-1, 1]){
    const s = skull.surf(V(sx * 0.5, 0.52, 0.82));
    r.eyes.push(makeEye(head, s.p, s.n, 0.15, '#c9862f', S, { sink: 0.5 }));
    const brow = tube(head, [s.p.clone().add(V(-sx * 0.11, 0.17, 0.0)), s.p.clone().add(V(sx * 0.0, 0.2, 0.02)), s.p.clone().add(V(sx * 0.1, 0.16, -0.02))], [0.025, 0.03, 0.022], D, { tubular: 16, radial: 10 });
    r.extra[sx < 0 ? 'browL' : 'browR'] = brow;
    const n = snout.surf(V(sx * 0.18, 0.5, 1));
    blob(head, n.p, V(0.025, 0.018, 0.02), glossy('#24361e'), { seg: 12, shadow: false });
  }
  const ms = snout.surf(V(0, -0.42, 1));
  r.mouth = makeMouth(head, ms.p, ms.n, 0.5, { R: 0.42, arc: 0.6, thick: 0.06 });
  // upper teeth hang from the smile line
  const w = 0.5, arc = Math.PI * 0.6;
  const teeth = [];
  for (const f of [-0.85, -0.5, -0.17, 0.17, 0.5, 0.85]){
    const ph = f * arc / 2;
    const x = 0.55 * w * Math.sin(ph), y = 0.55 * w * (1 - Math.cos(ph));
    teeth.push([x, y]);
  }
  const tg = new THREE.Group(); r.mouth.g.add(tg);
  for (const [x, y] of teeth){
    const c = horn(tg, 0.075, 0.034, glossy('#fffaf0', { roughness: 0.22 }), { radial: 12 });
    c.position.set(x, y + 0.01, -(x * x + y * y) / (2 * 0.42) + 0.02);
    c.rotation.x = Math.PI;
  }
  cheeks(head, skull, [V(-0.78, 0.08, 0.7), V(0.78, 0.08, 0.7)], 0.2);
  const top = skull.surf(V(0, 1, 0.05));
  r.hat = hatAnchor(head, top.p, top.n); r.hatScale = 1.15;
  r.headTop = r.hat;
  r.mouthAnchor = r.mouth.g;
  r.turn = -0.32; r.headYaw = 0.22;
  return r;
}

/* ---------------- Triceratops ---------------- */
function trike(){
  const r = base('trike');
  const C = { body: '#f29b38', frill: '#ffcf55', spot: '#d77b20', horn: '#fff3dc', beak: '#c98a4b', snout: '#f7b65c' };
  const S = skin(C.body), F = skin(C.frill), D = skin(C.spot), H = glossy(C.horn, { roughness: 0.32 });
  const t = r.torso;
  const torso = blob(t, V(0.08, 0.6, -0.36), V(0.62, 0.47, 0.68), S, { part: 'back' });
  spots(t, torso, [[V(0.7, 0.6, -0.2), 1.1], [V(0.95, 0.2, -0.3), 0.8], [V(-0.6, 0.65, -0.5), 0.9], [V(0.3, 0.9, -0.6), 1]], 0.075, D);
  for (const sx of [-1, 1]){
    tube(r.body, [V(sx * 0.3, 0.45, 0.1), V(sx * 0.31, 0.08, 0.15)], [0.165, 0.145], S, { part: 'legs' });
    blob(r.body, V(sx * 0.31, 0.06, 0.2), V(0.17, 0.075, 0.19), S, { part: 'legs' });
    nails(r.body, sx * 0.31, 0.05, 0.37, 0.16);
    tube(r.body, [V(sx * 0.36, 0.42, -0.78), V(sx * 0.37, 0.08, -0.74)], [0.16, 0.14], S, { part: 'legs' });
    blob(r.body, V(sx * 0.37, 0.06, -0.69), V(0.16, 0.07, 0.18), S, { part: 'legs' });
  }
  const tail = group(r.body, V(0.5, 0.58, -0.82));
  tube(tail, [V(0, 0, 0), V(0.22, -0.12, -0.16), V(0.46, -0.3, -0.12), V(0.62, -0.38, 0.04)], [0.2, 0.13, 0.07, 0.03], S, { part: 'tail' });
  r.tail = tail;
  const head = group(r.body, V(0, 0.8, 0.2));
  r.head = head;
  // the frill: a scalloped half disc tilted back behind the head
  const fr = new THREE.Shape();
  const R0 = 0.66, n = 9;
  fr.moveTo(-R0 * 0.98, -0.06);
  for (let i = 0; i < n; i++){
    const a0 = Math.PI - i * Math.PI / n, a1 = Math.PI - (i + 1) * Math.PI / n, am = (a0 + a1) / 2;
    fr.quadraticCurveTo(Math.cos(am) * R0 * 1.2, Math.sin(am) * R0 * 1.2 + 0.0, Math.cos(a1) * R0 * 0.98, Math.sin(a1) * R0 * 0.98);
  }
  fr.quadraticCurveTo(0.3, -0.22, 0, -0.18);
  fr.quadraticCurveTo(-0.3, -0.22, -R0 * 0.98, -0.06);
  const frill = slab(head, fr, 0.05, F, { part: 'frill', bevel: 0.03, bevelSize: 0.03 });
  frill.position.set(0, 0.3, -0.1); frill.rotation.x = -0.32;
  for (let i = 0; i < 7; i++){
    const a = Math.PI * (0.12 + i * 0.76 / 6);
    const sp = blob(frill, V(Math.cos(a) * 0.6, Math.sin(a) * 0.6, 0.05), V(0.06, 0.06, 0.02), D, { seg: 20, shadow: false });
    void sp;
  }
  const skull = blob(head, V(0, 0.16, 0.16), V(0.42, 0.37, 0.37), S, { part: 'head' });
  const snout = blob(head, V(0, 0.02, 0.4), V(0.25, 0.18, 0.18), skin(C.snout), { part: 'face' });
  for (const sx of [-1, 1]){
    const s = skull.surf(V(sx * 0.46, 0.4, 0.82));
    r.eyes.push(makeEye(head, s.p, s.n, 0.143, '#7a4a1e', S, { sink: 0.38 }));
    const hb = skull.surf(V(sx * 0.42, 0.85, 0.45));
    const h = horn(head, 0.46, 0.075, H, { curve: 1.3, part: 'horns' });
    h.position.copy(hb.p).addScaledVector(hb.n, -0.02);
    h.rotation.set(0.2, 0, -sx * 0.22);
    blob(head, hb.p, V(0.085, 0.05, 0.085), S, { seg: 20, part: 'horns' });
  }
  const nh = snout.surf(V(0, 0.8, 0.6));
  const nose = horn(head, 0.17, 0.065, H, { curve: 1.6, part: 'horns' });
  nose.position.copy(nh.p).addScaledVector(nh.n, -0.02); nose.rotation.x = 0.45;
  const beak = horn(head, 0.1, 0.075, glossy(C.beak, { roughness: 0.35 }), { curve: -2 });
  const bt = snout.surf(V(0, -0.4, 1));
  beak.position.copy(bt.p).add(V(0, 0.02, -0.02)); beak.rotation.x = Math.PI * 0.72;
  const ms = skull.surf(V(0, -0.55, 0.85));
  r.mouth = makeMouth(head, ms.p.clone().add(V(0, 0.02, 0.04)), ms.n, 0.3, { R: 0.3, arc: 0.55 });
  cheeks(head, skull, [V(-0.78, -0.12, 0.62), V(0.78, -0.12, 0.62)], 0.17);
  const top = skull.surf(V(0, 1, 0.25));
  r.hat = hatAnchor(head, top.p, top.n); r.hatScale = 0.95;
  r.headTop = r.hat; r.mouthAnchor = r.mouth.g;
  return r;
}

/* ---------------- Stegosaurus (shown turned, so the plates show) ---------------- */
function stego(){
  const r = base('stego');
  const C = { body: '#45b0a5', belly: '#d5f0c2', plate: '#ff8257', plate2: '#ffb48e', spike: '#fff3dc', spot: '#2f8c82' };
  const S = skin(C.body), L = skin(C.belly, { sheen: 0.3 }), P = skin(C.plate, { roughness: 0.5 }), D = skin(C.spot);
  const t = r.torso;
  const torso = blob(t, V(0, 0.62, -0.38), V(0.5, 0.48, 0.8), S, { part: 'back' });
  blob(t, V(0, 0.46, -0.3), V(0.42, 0.32, 0.66), L, { part: 'belly' });
  spots(t, torso, [[V(0.9, 0.3, 0.1), 1], [V(0.95, 0.2, -0.5), 0.8], [V(-0.9, 0.3, -0.2), 1], [V(0.8, 0.4, 0.6), 0.7]], 0.07, D);
  // two rows of plates along the back
  const plateShape = (w, h) => roundedShape([v2(0, h), v2(w * 0.5, h * 0.42), v2(w * 0.3, 0), v2(-w * 0.3, 0), v2(-w * 0.5, h * 0.42)], Math.min(w, h) * 0.18);
  const sizes = [0.22, 0.3, 0.36, 0.38, 0.33, 0.25, 0.18];
  for (let i = 0; i < sizes.length; i++){
    const z = 0.22 - i * 0.22;
    const top = torso.surf(V(0, 1, (z + 0.38) / 0.8));
    for (const sx of [-1, 1]){
      const h = sizes[i] * (sx < 0 ? 1 : 0.86);
      const pl = slab(t, plateShape(h * 0.95, h), 0.035, sx < 0 ? P : skin(C.plate2, { roughness: 0.5 }), { part: 'plates', bevel: 0.02, bevelSize: 0.02 });
      pl.rotation.y = Math.PI / 2;
      pl.rotation.x = 0;
      pl.position.set(sx * 0.065, top.p.y - 0.06, z + (sx < 0 ? 0 : -0.11));
      pl.rotateX(-sx * 0.12);
    }
  }
  for (const [sx, z] of [[-1, 0.12], [1, 0.12], [-1, -0.82], [1, -0.82]]){
    tube(r.body, [V(sx * 0.25, 0.42, z), V(sx * 0.26, 0.08, z + 0.02)], [0.14, 0.125], S, { part: 'legs' });
    blob(r.body, V(sx * 0.26, 0.06, z + 0.06), V(0.15, 0.07, 0.17), S, { part: 'legs' });
    nails(r.body, sx * 0.26, 0.05, z + 0.2, 0.14);
  }
  const tail = group(r.body, V(0, 0.6, -1.08));
  const tl = tube(tail, [V(0, 0, 0), V(0, 0.04, -0.34), V(0, 0.16, -0.64), V(0, 0.3, -0.86)], [0.24, 0.15, 0.08, 0.04], S, { part: 'tail' });
  for (const [sx, k] of [[-1, 0.78], [1, 0.78], [-1, 0.92], [1, 0.92]]){
    const p = tl.curve.getPointAt(k);
    const sp = horn(tail, 0.24, 0.045, glossy(C.spike, { roughness: 0.3 }), { part: 'spikes' });
    sp.position.copy(p);
    sp.rotation.set(-0.5, 0, -sx * 1.1);
  }
  r.tail = tail;
  blob(r.body, V(0, 0.6, 0.26), V(0.26, 0.26, 0.32), S, { part: 'head' });
  const head = group(r.body, V(0, 0.58, 0.46));
  r.head = head;
  const skull = blob(head, V(0, 0.06, 0.12), V(0.28, 0.25, 0.32), S, { part: 'head' });
  spots(head, skull, [[V(0, 1, -0.2), 0.8], [V(-0.5, 0.8, -0.3), 0.6]], 0.05, D);
  for (const sx of [-1, 1]){
    const s = skull.surf(V(sx * 0.58, 0.45, 0.72));
    r.eyes.push(makeEye(head, s.p, s.n, 0.114, '#4f7a2a', S, { sink: 0.36 }));
  }
  const ms = skull.surf(V(0, -0.38, 1));
  r.mouth = makeMouth(head, ms.p, ms.n, 0.22, { R: 0.26 });
  cheeks(head, skull, [V(-0.8, -0.05, 0.6), V(0.8, -0.05, 0.6)], 0.12);
  const top = skull.surf(V(0, 1, 0.1));
  r.hat = hatAnchor(head, top.p, top.n); r.hatScale = 0.72;
  r.headTop = r.hat; r.mouthAnchor = r.mouth.g;
  r.turn = -0.75; r.headYaw = 0.6;
  return r;
}

/* ---------------- Brachiosaurus (turned, long neck up) ---------------- */
function brachio(){
  const r = base('brachio');
  const C = { body: '#9787ef', belly: '#e4defe', spot: '#b9afff', dark: '#7766d6' };
  const S = skin(C.body), L = skin(C.belly, { sheen: 0.3 }), Sp = skin(C.spot);
  const t = r.torso;
  const torso = blob(t, V(0, 0.76, -0.42), V(0.5, 0.44, 0.74), S, { part: 'back', rot: { x: 0.14 } });
  blob(t, V(0, 0.62, -0.36), V(0.42, 0.3, 0.6), L, { part: 'belly', rot: { x: 0.14 } });
  spots(t, torso, [[V(0.9, 0.5, 0), 1.1], [V(0.85, 0.4, -0.6), 0.8], [V(-0.85, 0.5, -0.3), 1], [V(0.3, 1, -0.4), 0.9]], 0.08, Sp);
  for (const [sx, z, top] of [[-1, 0.08, 0.66], [1, 0.08, 0.66], [-1, -0.88, 0.56], [1, -0.88, 0.56]]){
    tube(r.body, [V(sx * 0.25, top, z), V(sx * 0.26, 0.08, z + 0.02)], [0.155, 0.135], S, { part: 'legs' });
    blob(r.body, V(sx * 0.26, 0.06, z + 0.06), V(0.16, 0.07, 0.18), S, { part: 'legs' });
    nails(r.body, sx * 0.26, 0.05, z + 0.21, 0.14);
  }
  const tail = group(r.body, V(0, 0.68, -1.1));
  tube(tail, [V(0, 0, 0), V(0.04, -0.1, -0.34), V(0.14, -0.3, -0.62), V(0.3, -0.46, -0.78)], [0.22, 0.14, 0.07, 0.035], S, { part: 'tail' });
  r.tail = tail;
  const neck = tube(t, [V(0, 0.92, 0.08), V(0, 1.38, 0.3), V(0, 1.84, 0.34), V(0, 2.08, 0.28)], [0.26, 0.19, 0.155, 0.135], S, { part: 'neck' });
  spots(t, { surf: d => { const p = neck.curve.getPointAt(0.45); return { p: p.clone().add(V(0.17, 0, 0)), n: V(1, 0.1, 0.2).normalize() }; } }, [[V(1, 0, 0), 0.7]], 0.06, Sp);
  r.extra.neck = neck;
  const head = group(t, V(0, 2.1, 0.3));
  r.head = head;
  const skull = blob(head, V(0, 0.06, 0.13), V(0.27, 0.23, 0.31), S, { part: 'head' });
  blob(head, V(0, 0.21, 0.02), V(0.15, 0.13, 0.15), S, { part: 'head' });
  for (const sx of [-1, 1]){
    const s = skull.surf(V(sx * 0.58, 0.5, 0.7));
    r.eyes.push(makeEye(head, s.p, s.n, 0.111, '#6a4fc9', S, { sink: 0.36 }));
    const n = skull.surf(V(sx * 0.2, 0.55, 1));
    blob(head, n.p, V(0.018, 0.014, 0.014), glossy('#3a2a7a'), { seg: 12, shadow: false });
  }
  const ms = skull.surf(V(0, -0.35, 1));
  r.mouth = makeMouth(head, ms.p, ms.n, 0.21, { R: 0.26 });
  cheeks(head, skull, [V(-0.8, -0.05, 0.6), V(0.8, -0.05, 0.6)], 0.11);
  const top = skull.surf(V(0, 1, -0.2));
  r.hat = hatAnchor(head, top.p.clone().add(V(0, 0.02, 0)), top.n); r.hatScale = 0.7;
  r.headTop = r.hat; r.mouthAnchor = r.mouth.g;
  r.turn = -0.55; r.headYaw = 0.5;
  return r;
}

/* ---------------- Elephant ---------------- */
function elephant(){
  const r = base('elephant');
  const C = { body: '#a3b3d1', ear: '#f6b3c3', tusk: '#fff7e8', nail: '#fbf3e6', dark: '#8494b6' };
  const S = skin(C.body), E = skin(C.ear, { sheen: 0.3 });
  const t = r.torso;
  blob(t, V(0, 0.68, -0.24), V(0.56, 0.52, 0.6), S, { part: 'belly' });
  for (const [sx, z] of [[-1, 0.08], [1, 0.08], [-1, -0.56], [1, -0.56]]){
    tube(r.body, [V(sx * 0.27, 0.5, z), V(sx * 0.28, 0.07, z + 0.02)], [0.175, 0.165], S, { part: 'legs' });
    nails(r.body, sx * 0.28, 0.05, z + 0.19, 0.18);
  }
  const tail = group(r.body, V(0.1, 0.8, -0.8));
  tube(tail, [V(0, 0, 0), V(0.08, -0.15, -0.06), V(0.14, -0.36, -0.06)], [0.03, 0.026, 0.024], S, { part: 'tail', radial: 12 });
  blob(tail, V(0.14, -0.42, -0.06), V(0.045, 0.07, 0.045), skin('#58627a'), { seg: 20 });
  r.tail = tail;
  const head = group(r.body, V(0, 1.02, 0.1));
  r.head = head;
  const skull = blob(head, V(0, 0.24, 0.14), V(0.46, 0.43, 0.42), S, { part: 'head' });
  // ears: big rounded flaps hinged at the side of the head
  const earShape = roundedShape([v2(0, 0.26), v2(0.3, 0.42), v2(0.5, 0.3), v2(0.52, -0.05), v2(0.38, -0.32), v2(0.12, -0.36), v2(0, -0.12)], 0.16);
  const innerShape = roundedShape([v2(0.04, 0.2), v2(0.29, 0.33), v2(0.43, 0.24), v2(0.44, -0.04), v2(0.33, -0.26), v2(0.13, -0.28), v2(0.04, -0.08)], 0.13);
  for (const sx of [-1, 1]){
    const ear = group(head, V(sx * 0.34, 0.3, 0.02));
    const flap = group(ear); flap.scale.x = sx;
    const e1 = slab(flap, earShape, 0.05, S, { part: 'ears', bevel: 0.025, bevelSize: 0.025 });
    const e2 = slab(flap, innerShape, 0.02, E, { part: 'ears', bevel: 0.012, bevelSize: 0.012 });
    e2.position.z = 0.035;
    void e1;
    ear.rotation.y = sx * 0.55;
    r.extra[sx < 0 ? 'earL' : 'earR'] = ear;
  }
  for (const sx of [-1, 1]){
    const s = skull.surf(V(sx * 0.44, 0.36, 0.85));
    r.eyes.push(makeEye(head, s.p, s.n, 0.137, '#5a6f96', S, { sink: 0.38 }));
  }
  // trunk, curling up at the end
  const trunk = group(head, V(0, 0.08, 0.46));
  const tr = tube(trunk, [V(0, 0.04, 0), V(0, -0.2, 0.13), V(0, -0.42, 0.17), V(0.03, -0.58, 0.14), V(0.1, -0.64, 0.07)], [0.17, 0.14, 0.115, 0.095, 0.088], S, { part: 'trunk' });
  {
    const p = tr.curve.getPointAt(1), tg = tr.curve.getTangentAt(1);
    const tip = blob(trunk, p.clone().addScaledVector(tg, 0.07), V(0.07, 0.07, 0.03), skin(C.dark), { seg: 24, shadow: false });
    orient(tip, tg);
  }
  r.trunk = trunk;
  for (const sx of [-1, 1]){
    const tk = horn(head, 0.2, 0.04, glossy(C.tusk, { roughness: 0.3 }), { curve: -2.4, part: 'trunk' });
    tk.position.set(sx * 0.17, 0.02, 0.42); tk.rotation.set(Math.PI * 0.82, sx * 0.25, sx * 0.2);
  }
  const ms = skull.surf(V(0.36, -0.62, 0.72));
  r.mouth = makeMouth(head, ms.p, ms.n, 0.17, { R: 0.3, arc: 0.55 });
  cheeks(head, skull, [V(-0.66, -0.08, 0.75), V(0.66, -0.08, 0.75)], 0.18);
  const top = skull.surf(V(0, 1, 0.1));
  r.hat = hatAnchor(head, top.p, top.n); r.hatScale = 1.05;
  r.headTop = r.hat; r.mouthAnchor = r.mouth.g;
  return r;
}

/* ---------------- Lion (sitting) ---------------- */
function lion(){
  const r = base('lion');
  const C = { body: '#f2b53e', mane: '#cf6a2a', mane2: '#e8853a', muzzle: '#fff0c9', nose: '#6e3428', ear: '#ffb3a7' };
  const S = skin(C.body), M = skin(C.mane, { sheen: 0.8, roughness: 0.7 }), M2 = skin(C.mane2, { sheen: 0.8, roughness: 0.7 }), W = skin(C.muzzle, { sheen: 0.4 });
  const t = r.torso;
  blob(t, V(0, 0.52, -0.12), V(0.46, 0.52, 0.42), S, { part: 'belly' });
  blob(t, V(0, 0.56, 0.14), V(0.3, 0.38, 0.28), W, { part: 'belly' });
  for (const sx of [-1, 1]){
    blob(r.body, V(sx * 0.36, 0.26, -0.1), V(0.22, 0.22, 0.3), S, { part: 'legs' });
    tube(r.body, [V(sx * 0.18, 0.52, 0.18), V(sx * 0.19, 0.1, 0.25)], [0.125, 0.11], S, { part: 'paws' });
    blob(r.body, V(sx * 0.19, 0.065, 0.31), V(0.14, 0.075, 0.17), S, { part: 'paws' });
    for (const k of [-1, 0, 1]) blob(r.body, V(sx * 0.19 + k * 0.055, 0.06, 0.465), V(0.03, 0.03, 0.02), skin('#e3a032'), { seg: 12, shadow: false });
  }
  const tail = group(r.body, V(0.3, 0.16, -0.38));
  const tl = tube(tail, [V(0, 0, 0), V(0.38, 0.02, 0.22), V(0.5, 0.26, 0.42), V(0.46, 0.5, 0.5)], [0.055, 0.05, 0.045, 0.04], S, { part: 'tail', radial: 14 });
  const tip = tl.curve.getPointAt(1);
  blob(tail, tip.clone().add(V(0, 0.07, 0)), V(0.1, 0.13, 0.1), M, { part: 'tail' });
  r.tail = tail;
  const head = group(r.body, V(0, 1.0, 0.08));
  r.head = head;
  const C0 = V(0, 0.2, 0.0);
  blob(head, C0.clone().add(V(0, 0, -0.12)), V(0.52, 0.5, 0.2), M2, { part: 'mane' });
  const R = rng(7);
  for (let k = 0; k < 18; k++){
    const a = k / 18 * Math.PI * 2;
    blob(head, C0.clone().add(V(Math.cos(a) * 0.52, Math.sin(a) * 0.5, -0.04)), V(1, 1, 1).multiplyScalar(0.16 + R() * 0.04), k % 2 ? M : M2, { part: 'mane', seg: 32 });
  }
  for (let k = 0; k < 14; k++){
    const a = (k + 0.5) / 14 * Math.PI * 2;
    blob(head, C0.clone().add(V(Math.cos(a) * 0.42, Math.sin(a) * 0.4, -0.16)), V(1, 1, 1).multiplyScalar(0.2), M, { part: 'mane', seg: 32 });
  }
  const skull = blob(head, V(0, 0.2, 0.12), V(0.41, 0.39, 0.37), S, { part: 'face' });
  for (const sx of [-1, 1]){
    const ear = group(head, V(sx * 0.29, 0.52, 0.06));
    blob(ear, V(0, 0, 0), V(0.12, 0.12, 0.08), S, { part: 'mane' });
    blob(ear, V(0, 0, 0.05), V(0.065, 0.065, 0.03), skin(C.ear), { seg: 24 });
    r.extra[sx < 0 ? 'earL' : 'earR'] = ear;
    blob(head, V(sx * 0.095, 0.06, 0.43), V(0.125, 0.1, 0.09), W, { part: 'face' });
    const s = skull.surf(V(sx * 0.42, 0.42, 0.82));
    r.eyes.push(makeEye(head, s.p, s.n, 0.13, '#b5761e', S, { sink: 0.36 }));
    for (const [dx, dy] of [[0.07, 0.03], [0.12, 0.0], [0.09, -0.04]]) blob(head, V(sx * dx, 0.06 + dy, 0.52), V(0.012, 0.012, 0.01), glossy('#8a5a2a'), { seg: 10, shadow: false });
  }
  blob(head, V(0, -0.04, 0.39), V(0.08, 0.06, 0.06), W, { part: 'face' });
  const noseShape = roundedShape([v2(-0.075, 0.03), v2(0.075, 0.03), v2(0, -0.055)], 0.025);
  const nose = slab(head, noseShape, 0.04, glossy(C.nose, { roughness: 0.3 }), { bevel: 0.02, bevelSize: 0.02 });
  nose.position.set(0, 0.13, 0.5); nose.rotation.x = -0.25;
  r.mouth = makeMouth(head, V(0, 0.015, 0.5), V(0, -0.1, 1).normalize(), 0.14, { R: 0.2, arc: 0.7 });
  cheeks(head, skull, [V(-0.72, -0.02, 0.68), V(0.72, -0.02, 0.68)], 0.16);
  const top = skull.surf(V(0, 1, 0));
  r.hat = hatAnchor(head, top.p.clone().add(V(0, 0.08, 0)), top.n); r.hatScale = 1.05;
  r.headTop = r.hat; r.mouthAnchor = r.mouth.g;
  return r;
}

/* ---------------- Penguin ---------------- */
function penguin(){
  const r = base('penguin');
  const C = { body: '#2f3e5c', belly: '#fffaf2', beak: '#ffa53b', feet: '#ff9a2e' };
  const S = skin(C.body, { sheen: 0.7 }), W = skin(C.belly, { sheen: 0.35 }), O = glossy(C.beak, { roughness: 0.3 });
  // the penguin's head is its whole upper body, so it rocks from low down
  const head = group(r.body, V(0, 0.35, 0));
  r.head = head;
  const torso = blob(head, V(0, 0.45, 0), V(0.56, 0.8, 0.5), S, { part: 'belly' });
  const belly = blob(head, V(0, 0.37, 0.12), V(0.45, 0.66, 0.42), W, { part: 'belly' });
  void torso;
  const tuft = horn(head, 0.14, 0.05, S, { curve: -3 });
  tuft.position.set(0, 1.22, 0.02); tuft.rotation.z = 0.2;
  const tuft2 = horn(head, 0.11, 0.04, S, { curve: -3 });
  tuft2.position.set(0.04, 1.21, 0.0); tuft2.rotation.z = -0.4;
  for (const sx of [-1, 1]){
    const fl = group(r.body, V(sx * 0.5, 1.08, 0));
    const f = blob(fl, V(sx * 0.07, -0.3, 0), V(0.09, 0.36, 0.2), S, { part: 'flippers' });
    f.rotation.z = sx * 0.28;
    r.extra[sx < 0 ? 'finL' : 'finR'] = fl;
    blob(r.body, V(sx * 0.18, 0.04, 0.24), V(0.16, 0.05, 0.2), glossy(C.feet, { roughness: 0.4 }), { part: 'feet' });
    const s = belly.surf(V(sx * 0.42, 0.78, 0.8));
    r.eyes.push(makeEye(head, s.p, s.n, 0.125, '#33466e', W, { sink: 0.38 }));
  }
  // the beak is the mouth: the lower half opens
  const bs = belly.surf(V(0, 0.56, 1));
  const beak = group(head, bs.p.clone().add(V(0, 0, -0.04)));
  const upper = horn(beak, 0.22, 0.1, O, { radial: 24 });
  upper.rotation.x = Math.PI / 2 - 0.15; upper.scale.set(1.25, 1, 0.8);
  const hinge = group(beak, V(0, -0.025, 0));
  const lower = horn(hinge, 0.15, 0.075, O, { radial: 24 });
  lower.rotation.x = Math.PI / 2 + 0.12; lower.scale.set(1.15, 1, 0.6);
  const inside = blob(beak, V(0, -0.02, 0.06), V(0.06, 0.03, 0.06), glossy('#5a1626'), { seg: 20, shadow: false });
  r.mouth = { g: beak, value: 0, set(v){ this.value = v; hinge.rotation.x = v * 0.55; upper.rotation.x = Math.PI / 2 - 0.15 - v * 0.12; inside.visible = v > 0.05; } };
  r.mouth.set(0);
  cheeks(head, belly, [V(-0.66, 0.5, 0.6), V(0.66, 0.5, 0.6)], 0.17);
  r.hat = hatAnchor(head, V(0, 1.24, 0), V(0, 1, 0)); r.hatScale = 1.0;
  r.headTop = r.hat; r.mouthAnchor = beak;
  return r;
}

export const BUILDERS = { trex, trike, stego, brachio, elephant, lion, penguin };
export const SPECIES_ORDER = ['trex', 'trike', 'stego', 'brachio', 'elephant', 'lion', 'penguin'];

/* Builds a friend at a growth stage: babies are smaller with a bigger head, as real babies are. */
export function buildFriend(sp, stage = 2){
  const r = BUILDERS[sp]();
  const k = [0.74, 0.87, 1][stage];
  const hk = [1.2, 1.08, 1][stage];
  r.root.scale.setScalar(k);
  r.head.scale.setScalar(hk);
  if (r.turn) r.body.rotation.y = r.turn;
  if (r.headYaw) r.head.rotation.y = r.headYaw;
  r.stage = stage;
  r.root.traverse(o => { if (o.isMesh){ o.castShadow = o.castShadow !== false; } });
  return r;
}

import { buildHat, buildGlasses } from './outfits.js';
/* Puts on a hat or glasses (or takes them off with null). */
export function dress(r, outfit){
  if (r.outfitObj){ r.outfitObj.parent.remove(r.outfitObj); r.outfitObj = null; }
  if (!outfit) return;
  if (outfit === 'glasses'){ r.head.updateMatrixWorld(true); const g = buildGlasses(r.eyes, r.head); r.head.add(g); r.outfitObj = g; return; }
  const h = buildHat(outfit);
  if (!h) return;
  h.scale.setScalar(r.hatScale || 1);
  r.hat.add(h);
  r.outfitObj = h;
}
