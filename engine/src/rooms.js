/* The rooms as small 3D dioramas: a back wall and a floor around the friend, furniture, and a few living details
   (smoke from the volcano, drifting clouds, a twinkling night sky). The friend stands at the origin. */
import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/examples/jsm/geometries/RoundedBoxGeometry.js';
import { V, skin, glossy, matte, basic, blob, tube, slab, horn, roundedShape, v2, radialTex, rng, shade } from './util.js';
import * as T from './textures.js';

const WALL_Z = -2.3;
function box(parent, w, h, d, mat, pos, o = {}){
  const m = new THREE.Mesh(new RoundedBoxGeometry(w, h, d, o.seg ?? 4, o.r ?? Math.min(w, h, d) * 0.18), mat);
  m.position.copy(pos); if (o.rot) m.rotation.set(o.rot.x || 0, o.rot.y || 0, o.rot.z || 0);
  m.castShadow = o.shadow !== false; m.receiveShadow = true;
  parent.add(m); return m;
}
function lathe(parent, profile, mat, pos, o = {}){
  const g = new THREE.LatheGeometry(profile.map(([x, y]) => v2(x, y)), o.seg ?? 48);
  const m = new THREE.Mesh(g, mat); m.position.copy(pos); m.castShadow = o.shadow !== false; m.receiveShadow = true;
  if (o.scale) m.scale.copy(o.scale);
  parent.add(m); return m;
}
function texMat(tex, o = {}){
  return new THREE.MeshStandardMaterial({ map: tex, roughness: o.roughness ?? 0.85, metalness: 0, color: o.color ? new THREE.Color(o.color) : new THREE.Color('#ffffff') });
}
function wallAndFloor(g, wallTex, floorTex, o = {}){
  const wall = new THREE.Mesh(new THREE.PlaneGeometry(22, 10), texMat(wallTex, { roughness: 0.95 }));
  wall.position.set(0, 4.6, WALL_Z); wall.receiveShadow = true; g.add(wall);
  const floor = new THREE.Mesh(new THREE.PlaneGeometry(22, 16), texMat(floorTex, { roughness: o.floorRough ?? 0.7 }));
  floor.rotation.x = -Math.PI / 2; floor.position.set(0, 0, WALL_Z + 8); floor.receiveShadow = true; g.add(floor);
  // a soft shadow where the wall meets the floor
  const ao = new THREE.Mesh(new THREE.PlaneGeometry(22, 0.9), new THREE.MeshBasicMaterial({ map: T.skyGradient('rgba(60,30,20,0)', 'rgba(60,30,20,0.08)', 'rgba(60,30,20,0.28)'), transparent: true, depthWrite: false }));
  ao.position.set(0, 0.45, WALL_Z + 0.01); g.add(ao);
  if (o.base){
    box(g, 22, o.baseH ?? 0.16, 0.08, matte(o.base, { roughness: 0.6 }), V(0, (o.baseH ?? 0.16) / 2, WALL_Z + 0.04), { r: 0.02, shadow: false });
  }
  if (o.wains){
    // a painted panel along the lower wall, with a rail on top
    const wm = matte(o.wains, { roughness: 0.75 });
    const panel = new THREE.Mesh(new THREE.PlaneGeometry(22, o.wainsH), wm); panel.position.set(0, o.wainsH / 2, WALL_Z + 0.02); panel.receiveShadow = true; g.add(panel);
    box(g, 22, 0.08, 0.1, matte(o.rail, { roughness: 0.5 }), V(0, o.wainsH, WALL_Z + 0.05), { r: 0.03, shadow: false });
    for (let x = -10; x <= 10; x += 1.1){
      box(g, 0.86, o.wainsH - 0.42, 0.03, matte(shade(o.wains, 0.12).getStyle(), { roughness: 0.7 }), V(x, o.wainsH / 2 + 0.06, WALL_Z + 0.035), { r: 0.012, shadow: false });
    }
  }
  return { wall, floor };
}
function windowOn(g, x, y, w, h, night, curtainHex){
  const grp = new THREE.Group(); grp.position.set(x, y, WALL_Z); g.add(grp);
  const frameMat = skin('#fff8ee', { roughness: 0.45, sheen: 0.2 });
  const outer = roundedShape([v2(-w / 2, -h / 2), v2(w / 2, -h / 2), v2(w / 2, h / 2), v2(-w / 2, h / 2)], 0.12);
  const hole = new THREE.Path(); const iw = w - 0.2, ih = h - 0.2;
  hole.moveTo(-iw / 2, -ih / 2); hole.lineTo(iw / 2, -ih / 2); hole.lineTo(iw / 2, ih / 2); hole.lineTo(-iw / 2, ih / 2); hole.lineTo(-iw / 2, -ih / 2);
  outer.holes.push(hole);
  const frame = slab(grp, outer, 0.08, frameMat, { bevel: 0.035, bevelSize: 0.035 }); frame.position.z = 0.08;
  const view = new THREE.Mesh(new THREE.PlaneGeometry(iw, ih), new THREE.MeshBasicMaterial({ map: T.windowView(night), toneMapped: false }));
  view.position.z = 0.02; grp.add(view);
  box(grp, 0.06, ih, 0.05, frameMat, V(0, 0, 0.09), { r: 0.02 });
  box(grp, iw, 0.06, 0.05, frameMat, V(0, 0, 0.09), { r: 0.02 });
  const glass = new THREE.Mesh(new THREE.PlaneGeometry(iw, ih), new THREE.MeshPhysicalMaterial({ color: '#ffffff', roughness: 0.05, transparent: true, opacity: 0.14, clearcoat: 1 }));
  glass.position.z = 0.07; grp.add(glass);
  box(grp, w + 0.3, 0.1, 0.32, frameMat, V(0, -h / 2 - 0.04, 0.16), { r: 0.04 });
  // curtains: folded cloth on a rod
  if (curtainHex){
    const rod = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.03, w + 1.0, 16), glossy('#d9a441', { metalness: 0.6, roughness: 0.3 }));
    rod.rotation.z = Math.PI / 2; rod.position.set(0, h / 2 + 0.22, 0.32); grp.add(rod);
    for (const sx of [-1, 1]) blob(grp, V(sx * (w / 2 + 0.5), h / 2 + 0.22, 0.32), V(0.06, 0.06, 0.06), glossy('#d9a441', { metalness: 0.6, roughness: 0.3 }), { seg: 16 });
    for (const sx of [-1, 1]){
      const cw = 0.55, ch = h + 0.5;
      const geo = new THREE.PlaneGeometry(cw, ch, 40, 30);
      const p = geo.attributes.position;
      for (let i = 0; i < p.count; i++){
        const px = p.getX(i), py = p.getY(i);
        const t = (py + ch / 2) / ch; // 0 bottom .. 1 top
        const pinch = 1 - 0.45 * Math.exp(-((t - 0.32) ** 2) / 0.012); // gathered by a tie-back
        p.setX(i, px * pinch + sx * (1 - pinch) * 0.12);
        p.setZ(i, Math.sin((px / cw + 0.5) * Math.PI * 5) * 0.045 * (0.6 + 0.4 * t));
      }
      geo.computeVertexNormals();
      const cm = new THREE.Mesh(geo, new THREE.MeshPhysicalMaterial({ color: curtainHex, roughness: 0.75, sheen: 0.8, sheenColor: shade(curtainHex, 0.4), side: THREE.DoubleSide }));
      cm.position.set(sx * (w / 2 + 0.22), 0.02, 0.36); cm.castShadow = true; cm.receiveShadow = true; grp.add(cm);
      const tie = new THREE.Mesh(new THREE.TorusGeometry(0.1, 0.022, 8, 24), glossy('#d9a441', { metalness: 0.5, roughness: 0.3 }));
      tie.position.set(sx * (w / 2 + 0.24), -h / 2 + 0.32 * (h + 0.5) - 0.2, 0.4); tie.scale.set(1.3, 0.6, 1); grp.add(tie);
    }
  }
  return grp;
}
function plant(g, pos, s = 1){
  const grp = new THREE.Group(); grp.position.copy(pos); grp.scale.setScalar(s); g.add(grp);
  lathe(grp, [[0, 0], [0.2, 0], [0.24, 0.05], [0.27, 0.36], [0.31, 0.38], [0.31, 0.44], [0.27, 0.44], [0.25, 0.4], [0, 0.4]], skin('#ff8a5c', { roughness: 0.5, sheen: 0.2 }), V(0, 0, 0));
  blob(grp, V(0, 0.41, 0), V(0.25, 0.04, 0.25), matte('#6b4424'), { seg: 24 });
  const leafShape = roundedShape([v2(0, 0), v2(0.11, 0.18), v2(0.06, 0.48), v2(0, 0.56), v2(-0.06, 0.48), v2(-0.11, 0.18)], 0.05);
  const R = rng(4);
  for (let i = 0; i < 9; i++){
    const a = i / 9 * Math.PI * 2 + R() * 0.3;
    const lf = slab(grp, leafShape, 0.012, skin(i % 2 ? '#3fae5a' : '#5cc46a', { roughness: 0.45 }), { bevel: 0.008, bevelSize: 0.008, bend: 1.4 });
    lf.position.set(Math.cos(a) * 0.05, 0.42, Math.sin(a) * 0.05);
    lf.rotation.set(0, -a + Math.PI / 2, 0);
    lf.rotateX(0.5 + R() * 0.4);
    lf.scale.setScalar(0.9 + R() * 0.5);
  }
  return grp;
}
function frame(g, pos, w, h, tex, color = '#ffc83d'){
  const grp = new THREE.Group(); grp.position.copy(pos); g.add(grp);
  const outer = roundedShape([v2(-w / 2, -h / 2), v2(w / 2, -h / 2), v2(w / 2, h / 2), v2(-w / 2, h / 2)], 0.06);
  const hole = new THREE.Path(); const iw = w - 0.14, ih = h - 0.14;
  hole.moveTo(-iw / 2, -ih / 2); hole.lineTo(iw / 2, -ih / 2); hole.lineTo(iw / 2, ih / 2); hole.lineTo(-iw / 2, ih / 2); hole.lineTo(-iw / 2, -ih / 2);
  outer.holes.push(hole);
  slab(grp, outer, 0.05, new THREE.MeshPhysicalMaterial({ color, metalness: 0.5, roughness: 0.35, clearcoat: 0.6 }), { bevel: 0.02, bevelSize: 0.02 }).position.z = 0.05;
  const art = new THREE.Mesh(new THREE.PlaneGeometry(iw, ih), texMat(tex, { roughness: 0.6 })); art.position.z = 0.02; grp.add(art);
  return grp;
}

/* ---------------- home ---------------- */
function home(){
  const g = new THREE.Group();
  wallAndFloor(g, T.wallpaperDots('#ffe2c2', '#ffc99a', '#ffd9b4'), T.wood('#e3a46c', '#c98a50'), { wains: '#f7c391', wainsH: 1.15, rail: '#e9a96e', base: '#d98e55' });
  windowOn(g, -0.75, 2.75, 1.25, 1.1, false, '#ff9a9a');
  frame(g, V(0.82, 2.85, WALL_Z + 0.03), 0.6, 0.6, T.paintingPaw());
  frame(g, V(2.7, 2.4, WALL_Z + 0.03), 0.8, 0.6, T.windowView(false), '#e9b96e');
  plant(g, V(1.15, 0, -1.2), 1.15);
  plant(g, V(-3.4, 0, -1.4), 1.4);
  // rug
  const rug = new THREE.Mesh(new THREE.CylinderGeometry(1.25, 1.25, 0.02, 72), texMat(T.rugRings('#ff9a8f', '#fff2df', '#ffd35c'), { roughness: 0.95 }));
  rug.scale.set(1.25, 1, 0.75); rug.position.set(0, 0.012, 0.15); rug.receiveShadow = true; g.add(rug);
  // toy blocks and a ball
  const letters = [['א', '#ff5d8f'], ['ב', '#4fb8ff'], ['ג', '#7cc85a']];
  letters.forEach(([ch, c], i) => {
    const m = new THREE.Mesh(new RoundedBoxGeometry(0.24, 0.24, 0.24, 4, 0.035), new THREE.MeshPhysicalMaterial({ map: T.blockLetter(ch, c), roughness: 0.45, clearcoat: 0.4 }));
    m.position.set(-1.15 + i * 0.27 - (i === 2 ? 0.13 : 0), 0.12 + (i === 2 ? 0.24 : 0), -0.45 + (i === 1 ? 0.06 : 0)); m.rotation.y = 0.4 + i * 0.3;
    m.castShadow = true; m.receiveShadow = true; g.add(m);
  });
  const ball = new THREE.Mesh(new THREE.SphereGeometry(0.17, 48, 32), new THREE.MeshPhysicalMaterial({ map: T.stripes('#4fb8ff', '#ffffff', 6, true), roughness: 0.35, clearcoat: 0.7 }));
  ball.position.set(1.0, 0.17, 0.55); ball.rotation.z = 0.5; ball.castShadow = true; g.add(ball);
  // a sofa at the side, for wide screens
  const sofaMat = skin('#7fc6bc', { roughness: 0.75, sheen: 0.7 });
  box(g, 2.0, 0.42, 0.8, sofaMat, V(-3.0, 0.3, -1.75), { r: 0.15 });
  box(g, 2.0, 0.75, 0.25, sofaMat, V(-3.0, 0.75, -2.08), { r: 0.12 });
  for (const sx of [-1, 1]) box(g, 0.25, 0.6, 0.8, sofaMat, V(-3.0 + sx * 1.0, 0.45, -1.75), { r: 0.12 });
  box(g, 0.5, 0.35, 0.18, skin('#ffd35c', { sheen: 0.6, roughness: 0.8 }), V(-3.4, 0.68, -1.9), { r: 0.1, rot: { z: 0.2 } });
  return { group: g, wall: '#ffe2c2' };
}

/* ---------------- kitchen ---------------- */
function kitchen(){
  const g = new THREE.Group();
  wallAndFloor(g, T.tiles('#e9f7f0', '#ffffff', 10), T.tiles('#f6e3bd', '#e8cf9a', 6, '#e2c084'), { base: '#6fb79c' });
  const white = skin('#f9fffd', { roughness: 0.35, sheen: 0.15, clearcoat: 0.4 });
  const mint = skin('#7fd1bd', { roughness: 0.45, clearcoat: 0.3 });
  const metal = glossy('#cfd8e2', { metalness: 0.8, roughness: 0.25 });
  // fridge
  box(g, 0.9, 2.1, 0.75, white, V(-1.25, 1.05, -1.75), { r: 0.14 });
  box(g, 0.86, 0.02, 0.02, glossy('#c7d3cf'), V(-1.25, 1.42, -1.37), { r: 0.005, shadow: false });
  box(g, 0.06, 0.38, 0.06, metal, V(-0.92, 1.72, -1.33), { r: 0.03 });
  box(g, 0.06, 0.55, 0.06, metal, V(-0.92, 1.0, -1.33), { r: 0.03 });
  const mag = [['#ff4b5c', -1.42, 1.85], ['#ffd35c', -1.2, 1.68], ['#4fb8ff', -1.48, 1.05]];
  for (const [c, x, y] of mag){ const m = blob(g, V(x, y, -1.36), V(0.06, 0.06, 0.03), glossy(c), { seg: 20 }); void m; }
  // counter with cabinets
  box(g, 2.2, 0.85, 0.7, mint, V(1.55, 0.43, -1.85), { r: 0.06 });
  box(g, 2.3, 0.08, 0.8, skin('#fffaf0', { roughness: 0.3, clearcoat: 0.6 }), V(1.55, 0.9, -1.82), { r: 0.03 });
  for (const x of [0.95, 1.55, 2.15]){ box(g, 0.5, 0.62, 0.03, skin('#95ddca', { roughness: 0.4 }), V(x, 0.44, -1.49), { r: 0.04, shadow: false }); box(g, 0.14, 0.04, 0.05, metal, V(x, 0.66, -1.46), { r: 0.02 }); }
  // fruit bowl
  lathe(g, [[0, 0], [0.12, 0], [0.22, 0.04], [0.3, 0.14], [0.32, 0.16], [0.3, 0.17], [0.2, 0.08], [0, 0.06]], glossy('#ffffff', { roughness: 0.2 }), V(1.25, 0.94, -1.8));
  for (const [x, z, c, r] of [[1.15, -1.8, '#ff4b5c', 0.1], [1.33, -1.78, '#ffd35c', 0.1], [1.25, -1.9, '#7cc85a', 0.095], [1.23, -1.75, '#ff9f43', 0.085]]) blob(g, V(x, 1.12 + (r - 0.08), z), V(r, r, r), glossy(c, { roughness: 0.35 }), { seg: 32 });
  // shelf with jars
  box(g, 1.3, 0.06, 0.3, skin('#e9a96e', { roughness: 0.5 }), V(0.75, 2.45, WALL_Z + 0.15), { r: 0.02 });
  const jar = (x, h, lid, fill) => {
    const m = new THREE.Mesh(new THREE.CylinderGeometry(0.13, 0.13, h, 32), new THREE.MeshPhysicalMaterial({ color: '#ffffff', transmission: 0.6, roughness: 0.08, thickness: 0.1, transparent: true, opacity: 0.6 }));
    m.position.set(x, 2.48 + h / 2, WALL_Z + 0.15); g.add(m);
    blob(g, V(x, 2.48 + h + 0.02, WALL_Z + 0.15), V(0.14, 0.04, 0.14), glossy(lid), { seg: 24 });
    for (let k = 0; k < 4; k++) blob(g, V(x + (k % 2 - 0.5) * 0.1, 2.52 + (k >> 1) * 0.08, WALL_Z + 0.15), V(0.05, 0.035, 0.05), skin(fill), { seg: 16 });
  };
  jar(0.35, 0.3, '#ff5d8f', '#c27e48'); jar(0.75, 0.24, '#4fb8ff', '#ffd35c'); jar(1.1, 0.28, '#7cc85a', '#ff9f43');
  // a wall clock
  const clock = new THREE.Group(); clock.position.set(-0.2, 3.1, WALL_Z + 0.04); g.add(clock);
  const face = new THREE.Mesh(new THREE.CylinderGeometry(0.28, 0.28, 0.06, 48), skin('#ffffff', { roughness: 0.3 })); face.rotation.x = Math.PI / 2; clock.add(face);
  const rimC = new THREE.Mesh(new THREE.TorusGeometry(0.28, 0.035, 12, 48), glossy('#ff8a5c')); rimC.position.z = 0.02; clock.add(rimC);
  for (let i = 0; i < 12; i++){ const a = i / 12 * Math.PI * 2; blob(clock, V(Math.cos(a) * 0.21, Math.sin(a) * 0.21, 0.035), V(0.014, 0.014, 0.01), glossy('#1b2430'), { seg: 8, shadow: false }); }
  box(clock, 0.025, 0.15, 0.015, glossy('#1b2430'), V(0, 0.06, 0.045), { r: 0.007, shadow: false });
  const mh = box(clock, 0.02, 0.2, 0.015, glossy('#1b2430'), V(0.06, 0.03, 0.05), { r: 0.006, shadow: false }); mh.rotation.z = -0.9;
  // high stool on wide screens
  box(g, 0.5, 0.06, 0.5, skin('#ffd35c', { roughness: 0.5 }), V(-2.8, 0.8, -0.9), { r: 0.03 });
  for (const [x, z] of [[-0.2, -0.2], [0.2, -0.2], [-0.2, 0.2], [0.2, 0.2]]) box(g, 0.05, 0.78, 0.05, skin('#e9a96e'), V(-2.8 + x, 0.4, -0.9 + z), { r: 0.02 });
  return { group: g };
}

/* ---------------- bathroom ---------------- */
function bath(){
  const g = new THREE.Group();
  wallAndFloor(g, T.tiles('#d7f0ff', '#ffffff', 10), T.tiles('#9fd5ee', '#ffffff', 8), { base: '#7cc3e6' });
  const porcelain = skin('#ffffff', { roughness: 0.18, clearcoat: 1, sheen: 0 });
  // the tub: the friend stands in it, so its lower body is under the water
  const tub = new THREE.Group(); g.add(tub);
  const shell = new THREE.Mesh(new RoundedBoxGeometry(2.4, 0.74, 1.5, 6, 0.34), porcelain);
  shell.position.set(0, 0.42, -0.15); shell.castShadow = true; shell.receiveShadow = true; tub.add(shell);
  const rim = new THREE.Mesh(new RoundedBoxGeometry(2.5, 0.12, 1.6, 6, 0.06), porcelain);
  rim.position.set(0, 0.78, -0.15); rim.receiveShadow = true; tub.add(rim);
  const water = new THREE.Mesh(new THREE.PlaneGeometry(2.2, 1.35), new THREE.MeshPhysicalMaterial({ color: '#8fd4f4', roughness: 0.05, clearcoat: 1, transparent: true, opacity: 0.95 }));
  water.rotation.x = -Math.PI / 2; water.position.set(0, 0.8, -0.15); tub.add(water);
  // foam: a ring of soft bubbles around the friend
  const foamMat = skin('#ffffff', { roughness: 0.3, sheen: 0.8, clearcoat: 0.5 });
  const R = rng(8);
  const foam = new THREE.Group(); tub.add(foam);
  for (let i = 0; i < 70; i++){
    const a = R() * Math.PI * 2, rr = 0.45 + R() * 0.62;
    const x = Math.cos(a) * rr * 1.5, z = -0.15 + Math.sin(a) * rr * 0.8;
    if (Math.abs(x) > 1.08 || Math.abs(z + 0.15) > 0.62) continue;
    const s = 0.07 + R() * 0.11;
    blob(foam, V(x, 0.81 + s * 0.35, z), V(s, s * 0.8, s), foamMat, { seg: 20, shadow: false });
  }
  for (const sx of [-1, 1]) for (const sz of [-1, 1]){
    lathe(tub, [[0, 0], [0.09, 0], [0.11, 0.06], [0.07, 0.14], [0.09, 0.2], [0, 0.2]], glossy('#ffc83d', { metalness: 0.6, roughness: 0.3 }), V(sx * 0.95, -0.02, -0.15 + sz * 0.5), { seg: 20 });
  }
  // rubber duck on the rim
  const duck = new THREE.Group(); duck.position.set(0.95, 0.84, 0.42); duck.rotation.y = -0.6; g.add(duck);
  blob(duck, V(0, 0.09, 0), V(0.13, 0.09, 0.11), glossy('#ffd23a', { roughness: 0.3 }), { seg: 32 });
  blob(duck, V(0.07, 0.2, 0), V(0.07, 0.07, 0.07), glossy('#ffd23a', { roughness: 0.3 }), { seg: 32 });
  const bk = horn(duck, 0.06, 0.03, glossy('#ff8a2a'), { radial: 12 }); bk.position.set(0.13, 0.19, 0); bk.rotation.z = -Math.PI / 2;
  for (const sz of [-1, 1]) blob(duck, V(0.1, 0.23, sz * 0.04), V(0.012, 0.012, 0.012), glossy('#1b2430'), { seg: 8, shadow: false });
  // mirror and towel
  const mir = new THREE.Group(); mir.position.set(-0.75, 2.75, WALL_Z + 0.03); g.add(mir);
  const mf = new THREE.Mesh(new THREE.TorusGeometry(0.42, 0.05, 16, 64), new THREE.MeshPhysicalMaterial({ color: '#ffc43a', metalness: 0.8, roughness: 0.25 })); mf.scale.set(0.8, 1, 1); mir.add(mf);
  const mg = new THREE.Mesh(new THREE.CircleGeometry(0.42, 48), new THREE.MeshPhysicalMaterial({ color: '#dff4ff', metalness: 1, roughness: 0.04 })); mg.scale.set(0.8, 1, 1); mg.position.z = -0.01; mir.add(mg);
  const rail = new THREE.Mesh(new THREE.CylinderGeometry(0.025, 0.025, 0.8, 16), glossy('#dfe7ef', { metalness: 0.8, roughness: 0.2 }));
  rail.rotation.z = Math.PI / 2; rail.position.set(0.85, 2.95, WALL_Z + 0.12); g.add(rail);
  const towel = new THREE.PlaneGeometry(0.6, 0.85, 20, 20);
  { const p = towel.attributes.position; for (let i = 0; i < p.count; i++){ const x = p.getX(i), y = p.getY(i); p.setZ(i, Math.sin(x * 9) * 0.015 + (y > 0.38 ? 0 : 0)); } towel.computeVertexNormals(); }
  const tw = new THREE.Mesh(towel, new THREE.MeshPhysicalMaterial({ map: T.stripes('#ff8fbf', '#ffd0e4', 10), roughness: 0.9, sheen: 1, sheenColor: new THREE.Color('#ffe0ee'), side: THREE.DoubleSide }));
  tw.position.set(0.85, 2.55, WALL_Z + 0.14); tw.castShadow = true; g.add(tw);
  // shelf with bottles
  box(g, 0.9, 0.05, 0.22, porcelain, V(1.6, 2.0, WALL_Z + 0.11), { r: 0.02 });
  for (const [x, h, c] of [[1.35, 0.32, '#7fd1c7'], [1.6, 0.24, '#ff9ec4'], [1.82, 0.28, '#ffd35c']]){
    lathe(g, [[0, 0], [0.07, 0], [0.08, 0.02], [0.08, h * 0.8], [0.04, h * 0.9], [0.035, h], [0, h]], glossy(c, { roughness: 0.25 }), V(x, 2.03, WALL_Z + 0.11), { seg: 24 });
  }
  // the shower curtain that closes for the potty
  const crod = new THREE.Mesh(new THREE.CylinderGeometry(0.025, 0.025, 2.8, 16), glossy('#dfe7ef', { metalness: 0.8, roughness: 0.2 }));
  crod.rotation.z = Math.PI / 2; crod.position.set(0, 3.0, 0.75); g.add(crod);
  const curtain = new THREE.Group(); g.add(curtain);
  const cgeo = new THREE.PlaneGeometry(2.7, 3.0, 60, 20);
  const cpos = cgeo.attributes.position; const base = Float32Array.from(cpos.array);
  const cm = new THREE.Mesh(cgeo, new THREE.MeshPhysicalMaterial({ map: T.stripes('#bfe9ff', '#ffffff', 14, true), roughness: 0.6, sheen: 0.5, side: THREE.DoubleSide, transparent: true, opacity: 0.97 }));
  cm.position.set(0, 1.5, 0.78); cm.castShadow = true; curtain.add(cm);
  const rings = [];
  for (let i = 0; i < 10; i++){ const rg = new THREE.Mesh(new THREE.TorusGeometry(0.05, 0.012, 8, 20), glossy('#ffffff')); rg.position.set(0, 3.0, 0.75); curtain.add(rg); rings.push(rg); }
  let open = 1;
  const setCurtain = t => {
    // t: 1 open (bunched at the left), 0 closed
    open = t;
    const w = 2.7, left = -1.35, bunch = 0.18;
    for (let i = 0; i < cpos.count; i++){
      const u = (base[i * 3] + w / 2) / w; // 0..1 across
      const span = bunch + (w - bunch) * (1 - t);
      const x = left + u * span;
      const folds = (0.05 + 0.1 * t) * Math.sin(u * Math.PI * (14 + 10 * t));
      cpos.setX(i, x - 0.0); cpos.setZ(i, folds);
    }
    cpos.needsUpdate = true; cgeo.computeVertexNormals();
    cm.position.x = 0;
    rings.forEach((rg, k) => { rg.position.x = left + (k / 9) * (bunch + (w - bunch) * (1 - t)); });
    curtain.visible = true;
  };
  setCurtain(1);
  // a potty by the tub
  const potty = new THREE.Group(); potty.position.set(-1.55, 0, 0.45); g.add(potty);
  lathe(potty, [[0, 0], [0.18, 0], [0.22, 0.04], [0.26, 0.24], [0.3, 0.27], [0.27, 0.3], [0.2, 0.26], [0, 0.24]], skin('#ffffff', { roughness: 0.25, clearcoat: 0.8 }), V(0, 0, 0));
  const seat = new THREE.Mesh(new THREE.TorusGeometry(0.235, 0.05, 16, 40), skin('#ff9ec4', { roughness: 0.4, clearcoat: 0.5 })); seat.rotation.x = Math.PI / 2; seat.position.y = 0.3; potty.add(seat);
  return { group: g, tub: { shell, foam }, setCurtain, petY: 0.02, petZ: -0.12 };
}

/* ---------------- bedroom ---------------- */
function bedroom(){
  const g = new THREE.Group();
  wallAndFloor(g, T.wallpaperStars(), T.wood('#c99a74', '#a8794f'), { wains: '#a59bf0', wainsH: 1.0, rail: '#8f84e6', base: '#7d72d6' });
  windowOn(g, -0.8, 2.75, 1.2, 1.05, true, '#8f84e6');
  const purple = skin('#9c8ff2', { roughness: 0.55, sheen: 0.4 });
  // bed: headboard, frame, mattress, pillow
  const head = box(g, 2.3, 1.45, 0.16, purple, V(0, 0.8, -1.55), { r: 0.08 });
  void head;
  for (const [x, c] of [[-0.7, '#fff3c4'], [0, '#ffe08a'], [0.7, '#fff3c4']]){
    const st = new THREE.Shape(); for (let i = 0; i < 10; i++){ const a = Math.PI / 2 + i * Math.PI / 5, rr = i % 2 ? 0.06 : 0.13; i ? st.lineTo(Math.cos(a) * rr, Math.sin(a) * rr) : st.moveTo(Math.cos(a) * rr, Math.sin(a) * rr); }
    const s = slab(g, st, 0.03, glossy(c, { roughness: 0.35 }), { bevel: 0.015, bevelSize: 0.015 }); s.position.set(x, 1.3, -1.45);
  }
  box(g, 2.3, 0.32, 1.9, skin('#8578e0', { roughness: 0.5 }), V(0, 0.2, -0.55), { r: 0.08 });
  box(g, 2.2, 0.26, 1.85, skin('#fffaf0', { roughness: 0.7, sheen: 0.5 }), V(0, 0.46, -0.55), { r: 0.11 });
  box(g, 0.95, 0.24, 0.45, skin('#ffffff', { roughness: 0.8, sheen: 0.8 }), V(-0.45, 0.68, -1.25), { r: 0.11, rot: { x: -0.25 } });
  // blanket that comes up when the friend sleeps
  const blanket = new THREE.Group(); g.add(blanket);
  const bg = new RoundedBoxGeometry(2.3, 0.18, 1.35, 6, 0.08);
  { const p = bg.attributes.position; for (let i = 0; i < p.count; i++){ const x = p.getX(i), z = p.getZ(i); p.setY(i, p.getY(i) + Math.sin(x * 4 + z * 3) * 0.02); } bg.computeVertexNormals(); }
  const bm = new THREE.Mesh(bg, new THREE.MeshPhysicalMaterial({ map: T.stripes('#ff9a9a', '#ffb8b0', 12, true), roughness: 0.8, sheen: 1, sheenColor: new THREE.Color('#ffe2dc') }));
  bm.castShadow = true; bm.receiveShadow = true; blanket.add(bm);
  const fold = box(blanket, 2.32, 0.12, 0.2, skin('#fff3e6', { roughness: 0.8, sheen: 0.8 }), V(0, 0.04, -0.6), { r: 0.06 });
  void fold;
  // night stand and lamp (the lamp's light switches off)
  box(g, 0.6, 0.6, 0.5, skin('#e9b17a', { roughness: 0.5 }), V(1.55, 0.3, -1.6), { r: 0.06 });
  box(g, 0.08, 0.04, 0.04, glossy('#ffc43a', { metalness: 0.6 }), V(1.55, 0.38, -1.34), { r: 0.015 });
  const lampG = new THREE.Group(); lampG.position.set(1.55, 0.6, -1.6); g.add(lampG);
  lathe(lampG, [[0, 0], [0.16, 0], [0.16, 0.04], [0.04, 0.06], [0.03, 0.4], [0, 0.4]], glossy('#ffc43a', { metalness: 0.5, roughness: 0.3 }), V(0, 0, 0), { seg: 24 });
  const shadeMat = new THREE.MeshPhysicalMaterial({ color: '#fff1c4', roughness: 0.7, emissive: new THREE.Color('#ffd27a'), emissiveIntensity: 0.9, side: THREE.DoubleSide, transmission: 0 });
  const shadeM = new THREE.Mesh(new THREE.CylinderGeometry(0.14, 0.24, 0.28, 32, 1, true), shadeMat); shadeM.position.y = 0.48; lampG.add(shadeM);
  // the lamp's light itself lives in the engine's light rig (always there, so moving between rooms never recompiles shaders)
  const lampAt = V(1.55, 1.05, -1.5);
  // a mobile of stars over the bed
  const mobile = new THREE.Group(); mobile.position.set(0.95, 3.95, -0.9); g.add(mobile);
  const bar = new THREE.Mesh(new THREE.CylinderGeometry(0.012, 0.012, 1.0, 8), glossy('#ffffff')); bar.rotation.z = Math.PI / 2; mobile.add(bar);
  const hang = [];
  for (const [x, len, c, sh] of [[-0.45, 0.5, '#ffe08a', 'star'], [0, 0.75, '#ff9ec4', 'moon'], [0.45, 0.55, '#9fdcff', 'star']]){
    const str = new THREE.Mesh(new THREE.CylinderGeometry(0.004, 0.004, len, 6), basic('#ffffff')); str.position.set(x, -len / 2, 0); mobile.add(str);
    const pg = new THREE.Group(); pg.position.set(x, -len - 0.1, 0); mobile.add(pg);
    let shape;
    if (sh === 'star'){ shape = new THREE.Shape(); for (let i = 0; i < 10; i++){ const a = Math.PI / 2 + i * Math.PI / 5, rr = i % 2 ? 0.05 : 0.11; i ? shape.lineTo(Math.cos(a) * rr, Math.sin(a) * rr) : shape.moveTo(Math.cos(a) * rr, Math.sin(a) * rr); } }
    else { shape = new THREE.Shape(); shape.absarc(0, 0, 0.11, Math.PI * 0.3, Math.PI * 1.7, false); shape.absarc(0.05, 0, 0.09, Math.PI * 1.6, Math.PI * 0.4, true); }
    slab(pg, shape, 0.03, glossy(c, { roughness: 0.3 }), { bevel: 0.015, bevelSize: 0.015 });
    hang.push(pg);
  }
  const mobileUpdate = t => { mobile.rotation.y = Math.sin(t * 0.4) * 0.5; hang.forEach((h, i) => { h.rotation.y = Math.sin(t * 0.9 + i) * 0.8; }); };
  // rug and a shelf with toys for wide screens
  const rug = new THREE.Mesh(new THREE.CylinderGeometry(1.2, 1.2, 0.02, 64), texMat(T.rugRings('#b9b0ff', '#fff3e6', '#ffe08a'), { roughness: 0.95 }));
  rug.scale.set(1.4, 1, 0.55); rug.position.set(0, 0.012, 0.85); rug.receiveShadow = true; g.add(rug);
  box(g, 1.2, 0.06, 0.28, skin('#e9b17a'), V(2.8, 1.9, WALL_Z + 0.14), { r: 0.02 });
  blob(g, V(2.5, 2.07, WALL_Z + 0.15), V(0.12, 0.12, 0.12), glossy('#ff5d8f'), { seg: 24 });
  box(g, 0.22, 0.22, 0.22, glossy('#4fb8ff', { roughness: 0.4 }), V(2.85, 2.04, WALL_Z + 0.15), { r: 0.03 });
  return { group: g, blanket, lampAt, shadeMat, update: mobileUpdate, petY: 0.58, petZ: -0.5 };
}

/* ---------------- outdoors: the games, the album and the dig ---------------- */
function outdoors(sandy){
  const g = new THREE.Group();
  const ground = new THREE.Mesh(new THREE.CircleGeometry(30, 64), texMat(sandy ? T.sand() : T.grass(), { roughness: 0.95 }));
  ground.rotation.x = -Math.PI / 2; ground.receiveShadow = true; g.add(ground);
  const skyMat = new THREE.MeshBasicMaterial({ map: sandy ? T.skyGradient('#6fc0f7', '#cfeeff', '#fff2d6') : T.skyGradient('#5cb4f5', '#bfe6ff', '#f2fbff'), side: THREE.BackSide, toneMapped: false, depthWrite: false });
  const sky = new THREE.Mesh(new THREE.SphereGeometry(40, 32, 16), skyMat); g.add(sky);
  const hillMat = c => skin(c, { roughness: 0.8, sheen: 0.3 });
  const hills = sandy ? [[-9, -14, 7, 2.6, '#f2d39b'], [6, -16, 9, 3.2, '#e8c286'], [16, -12, 6, 2.2, '#f2d39b'], [-18, -10, 6, 2.0, '#e8c286']]
    : [[-9, -14, 7, 2.6, '#a6dc76'], [6, -16, 9, 3.2, '#8fd062'], [16, -12, 6, 2.2, '#a6dc76'], [-18, -10, 6, 2.0, '#8fd062']];
  for (const [x, z, r, h, c] of hills) blob(g, V(x, -0.2, z), V(r, h, r * 0.7), hillMat(c), { seg: 48, shadow: false });
  // volcano
  const volc = new THREE.Group(); volc.position.set(sandy ? 3.5 : -4.2, 0, -9); g.add(volc);
  lathe(volc, [[0, 3.0], [0.55, 3.0], [0.7, 2.85], [1.6, 1.4], [2.8, 0.2], [3.0, 0], [0, 0]], skin('#a87458', { roughness: 0.85 }), V(0, 0, 0), { seg: 48 });
  lathe(volc, [[0, 2.98], [0.6, 2.98], [0.66, 2.9], [0.8, 2.55], [0.5, 2.6], [0, 2.7]], glossy('#ff6a2a', { emissive: '#ff5a1a', emissiveIntensity: 0.6, roughness: 0.4 }), V(0, 0.02, 0), { seg: 32 });
  for (const a of [0.3, 1.4, 2.6]){ const lv = tube(volc, [V(Math.cos(a) * 0.65, 2.85, Math.sin(a) * 0.65), V(Math.cos(a) * 1.0, 2.2, Math.sin(a) * 1.0), V(Math.cos(a) * 1.3, 1.6, Math.sin(a) * 1.3)], [0.12, 0.09, 0.05], glossy('#ff7a3d', { emissive: '#ff5a1a', emissiveIntensity: 0.4 }), { tubular: 16, radial: 10 }); void lv; }
  const smoke = [];
  for (let i = 0; i < 6; i++){ const s = blob(volc, V(0, 3.2, 0), V(0.4, 0.4, 0.4), skin('#eef1f5', { roughness: 0.9, sheen: 0.5 }), { seg: 24, shadow: false }); s.userData.ph = i / 6; smoke.push(s); }
  // trees
  const tree = (x, z, s, palm) => {
    const t = new THREE.Group(); t.position.set(x, 0, z); t.scale.setScalar(s); g.add(t);
    if (palm){
      const tr = tube(t, [V(0, 0, 0), V(0.15, 1.2, 0), V(0.05, 2.4, 0.1), V(-0.25, 3.2, 0.1)], [0.16, 0.13, 0.11, 0.09], skin('#b07a44', { roughness: 0.8 }), { tubular: 32, radial: 16 });
      const top = tr.curve.getPointAt(1);
      const leaf = roundedShape([v2(0, 0), v2(0.25, 0.4), v2(0.12, 1.3), v2(0, 1.5), v2(-0.12, 1.3), v2(-0.25, 0.4)], 0.12);
      for (let i = 0; i < 7; i++){
        const a = i / 7 * Math.PI * 2;
        const l = slab(t, leaf, 0.02, skin(i % 2 ? '#3fae5a' : '#5cc46a', { roughness: 0.45 }), { bevel: 0.01, bevelSize: 0.01, bend: -0.9 });
        l.position.copy(top); l.rotation.set(0, -a, 0); l.rotateX(1.1);
      }
      for (const [dx, dz] of [[0.1, 0.1], [-0.08, 0.12], [0.02, -0.1]]) blob(t, top.clone().add(V(dx, -0.12, dz)), V(0.09, 0.1, 0.09), skin('#8a5a2b'), { seg: 16 });
    } else {
      tube(t, [V(0, 0, 0), V(0.05, 0.8, 0), V(0, 1.4, 0)], [0.18, 0.14, 0.12], skin('#a8723d', { roughness: 0.85 }), { tubular: 16, radial: 14 });
      const leafMat = skin('#4fb85a', { roughness: 0.65, sheen: 0.5 });
      for (const [dx, dy, dz, r] of [[0, 1.9, 0, 0.75], [-0.5, 1.6, 0.1, 0.55], [0.5, 1.65, 0.05, 0.55], [0.1, 2.35, -0.05, 0.5], [0, 1.6, -0.45, 0.55]]) blob(t, V(dx, dy, dz), V(r, r * 0.9, r), leafMat, { seg: 32 });
      for (const [dx, dy, dz] of [[0.3, 1.8, 0.62], [-0.4, 1.5, 0.55], [0.55, 2.2, 0.3]]) blob(t, V(dx, dy, dz), V(0.08, 0.08, 0.08), glossy('#ff4b5c'), { seg: 16 });
    }
  };
  if (sandy){ tree(-2.6, -3.5, 0.9, true); tree(3.2, -4.5, 1.1, true); }
  else { tree(-2.4, -3.2, 1.0, false); tree(2.8, -4.2, 1.15, true); tree(-6, -6, 1.3, false); tree(6.5, -7, 1.2, false); }
  // rocks, bushes and flowers near the friend
  const rockMat = skin(sandy ? '#c9a16a' : '#b9b2a8', { roughness: 0.9 });
  for (const [x, z, r] of [[-1.4, -0.9, 0.22], [1.5, -1.2, 0.3], [-2.2, 0.2, 0.18]]) blob(g, V(x, r * 0.4, z), V(r * 1.3, r, r), rockMat, { seg: 24 });
  if (!sandy){
    for (const [x, z] of [[1.3, 0.4], [-1.2, 0.5], [0.8, -0.8], [-0.7, -1.2], [2.0, -0.3]]){
      const f = new THREE.Group(); f.position.set(x, 0, z); g.add(f);
      tube(f, [V(0, 0, 0), V(0, 0.2, 0)], [0.012, 0.01], skin('#3f9a3a'), { tubular: 4, radial: 6 });
      const c = ['#ff9ec4', '#fff3c4', '#ffd35c'][(Math.abs(x * 10) | 0) % 3];
      for (let k = 0; k < 5; k++){ const a = k / 5 * Math.PI * 2; blob(f, V(Math.cos(a) * 0.04, 0.22, Math.sin(a) * 0.04), V(0.035, 0.015, 0.035), skin(c), { seg: 12, shadow: false }); }
      blob(f, V(0, 0.225, 0), V(0.022, 0.015, 0.022), skin('#ffb11f'), { seg: 10, shadow: false });
    }
  }
  // clouds and the sun
  const clouds = [];
  for (const [x, y, z, s] of [[-4, 6.5, -14, 1.6], [3, 7.5, -16, 2.0], [9, 6.2, -14, 1.4], [-10, 7.2, -15, 1.7]]){
    const c = new THREE.Group(); c.position.set(x, y, z); c.scale.setScalar(s); g.add(c);
    for (const [dx, dy, r] of [[0, 0, 0.6], [0.6, 0.2, 0.7], [1.2, 0, 0.55], [0.6, -0.1, 0.6]]) blob(c, V(dx, dy, 0), V(r, r * 0.8, r * 0.7), skin('#ffffff', { roughness: 0.9, sheen: 0.4 }), { seg: 24, shadow: false });
    clouds.push(c);
  }
  const sun = new THREE.Mesh(new THREE.SphereGeometry(1.2, 32, 16), new THREE.MeshBasicMaterial({ color: '#fff3a6', toneMapped: false }));
  sun.position.set(sandy ? -7 : 7, 9, -20); g.add(sun);
  const halo = new THREE.Sprite(new THREE.SpriteMaterial({ map: radialTex('#fff3b0', 128), transparent: true, depthWrite: false, toneMapped: false, opacity: 0.8 }));
  halo.scale.set(9, 9, 1); halo.position.copy(sun.position); g.add(halo);
  const update = (t) => {
    smoke.forEach(s => { const k = (t * 0.12 + s.userData.ph) % 1; s.position.set(Math.sin(k * 4) * 0.3, 3.2 + k * 2.4, 0); s.scale.setScalar(0.25 + k * 0.7); s.material.opacity = 1; s.visible = k < 0.92; });
    clouds.forEach((c, i) => { c.position.x += Math.sin(t * 0.05 + i) * 0.002; });
  };
  return { group: g, update, outdoor: true };
}

/* ---------------- the hatching studio ---------------- */
function studio(){
  const g = new THREE.Group();
  // a seamless curved backdrop, like a photo studio
  const shape = [];
  for (let i = 0; i <= 24; i++){ const a = i / 24 * Math.PI / 2; shape.push(V(0, 1.6 - Math.cos(a) * 1.6, -Math.sin(a) * 1.6 + 1.6)); }
  const pts = [V(0, 0, 8), V(0, 0, 0), ...Array.from({ length: 24 }, (_, i) => { const a = (i + 1) / 24 * Math.PI / 2; return V(0, 1.6 - Math.cos(a) * 1.6, -Math.sin(a) * 1.6); }), V(0, 9, -1.6)];
  const geo = new THREE.BufferGeometry();
  const W = 30, pos = [], idx = [];
  pts.forEach(p => { pos.push(-W / 2, p.y, p.z - 1.2, W / 2, p.y, p.z - 1.2); });
  for (let i = 0; i < pts.length - 1; i++){ const a = i * 2; idx.push(a, a + 1, a + 2, a + 1, a + 3, a + 2); }
  geo.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3)); geo.setIndex(idx); geo.computeVertexNormals();
  const cyc = new THREE.Mesh(geo, new THREE.MeshStandardMaterial({ color: '#ffd9ae', roughness: 0.95, side: THREE.DoubleSide }));
  cyc.receiveShadow = true; g.add(cyc);
  // glowing dots of light in the back
  const R = rng(12);
  for (let i = 0; i < 18; i++){
    const s = new THREE.Sprite(new THREE.SpriteMaterial({ map: radialTex(R() < 0.5 ? '#fff3c4' : '#ffc6d9', 64), transparent: true, depthWrite: false, opacity: 0.6, toneMapped: false }));
    const sz = 0.3 + R() * 0.6; s.scale.set(sz, sz, 1); s.position.set((R() - 0.5) * 7, 1.2 + R() * 3.5, -2.6); g.add(s);
  }
  return { group: g, studio: true };
}

export const ROOM_BUILDERS = { home, kitchen, bath, bed: bedroom, play: () => outdoors(false), album: () => outdoors(false), dig: () => outdoors(true), studio };
