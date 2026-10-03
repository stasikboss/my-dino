/* Things to hold and use, modeled in 3D and rendered as pictures for the buttons: foods, bathroom and bedroom
   tools, the room icons, and hats. */
import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/examples/jsm/geometries/RoundedBoxGeometry.js';
import { V, skin, glossy, matte, blob, tube, slab, horn, roundedShape, v2, rng, bend } from './util.js';
import * as T from './textures.js';
import { buildHat } from './outfits.js';

const rb = (w, h, d, r = 0.06, seg = 4) => new RoundedBoxGeometry(w, h, d, seg, r);
function mesh(parent, geo, mat, pos, rot){ const m = new THREE.Mesh(geo, mat); if (pos) m.position.copy(pos); if (rot) m.rotation.set(rot.x || 0, rot.y || 0, rot.z || 0); m.castShadow = true; m.receiveShadow = true; parent.add(m); return m; }
function lathe(parent, prof, mat, pos, seg = 48){ return mesh(parent, new THREE.LatheGeometry(prof.map(([x, y]) => v2(x, y)), seg), mat, pos); }
function star(r1, r2){ const s = new THREE.Shape(); for (let i = 0; i < 10; i++){ const a = Math.PI / 2 + i * Math.PI / 5, rr = i % 2 ? r2 : r1; i ? s.lineTo(Math.cos(a) * rr, Math.sin(a) * rr) : s.moveTo(Math.cos(a) * rr, Math.sin(a) * rr); } return s; }

const B = {
  meat(){
    const g = new THREE.Group();
    const m = blob(g, V(0.12, 0.12, 0), V(0.34, 0.27, 0.27), skin('#c9573e', { roughness: 0.45, clearcoat: 0.5 }), { rot: { z: 0.5 } });
    blob(g, V(0.18, 0.2, 0.12), V(0.18, 0.1, 0.1), skin('#e4825f', { roughness: 0.4, clearcoat: 0.6 }), { rot: { z: 0.5 } });
    void m;
    tube(g, [V(-0.12, -0.05, 0), V(-0.42, -0.25, 0)], [0.06, 0.055], skin('#fff6e6', { roughness: 0.35 }));
    for (const [dx, dy] of [[-0.03, 0.05], [0.05, -0.04]]) blob(g, V(-0.45 + dx, -0.27 + dy, 0), V(0.08, 0.08, 0.08), skin('#fff6e6', { roughness: 0.35 }));
    return g;
  },
  fish(){
    const g = new THREE.Group();
    blob(g, V(0, 0, 0), V(0.42, 0.22, 0.13), glossy('#5ab4ec', { roughness: 0.25 }));
    blob(g, V(0.02, -0.06, 0.02), V(0.34, 0.12, 0.11), glossy('#d9f1ff', { roughness: 0.25 }));
    const tail = slab(g, roundedShape([v2(0, 0), v2(0.22, 0.18), v2(0.18, 0), v2(0.22, -0.18)], 0.04), 0.04, glossy('#3d97d6', { roughness: 0.3 }), { bevel: 0.02, bevelSize: 0.02 });
    tail.position.set(0.36, 0, 0);
    const fin = slab(g, roundedShape([v2(-0.1, 0), v2(0.12, 0), v2(0.0, 0.12)], 0.03), 0.02, glossy('#3d97d6'), { bevel: 0.01, bevelSize: 0.01 });
    fin.position.set(0, 0.19, 0);
    blob(g, V(-0.27, 0.06, 0.1), V(0.05, 0.05, 0.03), glossy('#ffffff'), { seg: 16 });
    blob(g, V(-0.28, 0.06, 0.125), V(0.028, 0.028, 0.02), glossy('#1b2430'), { seg: 12 });
    g.rotation.z = 0.15;
    return g;
  },
  fern(){
    const g = new THREE.Group();
    const st = tube(g, [V(0, -0.4, 0), V(0.04, 0, 0.02), V(-0.02, 0.4, 0.04)], [0.02, 0.016, 0.01], skin('#2f8a3a'), { tubular: 24, radial: 8 });
    const leaf = roundedShape([v2(0, 0), v2(0.05, 0.04), v2(0.17, 0.02), v2(0.19, 0), v2(0.17, -0.02), v2(0.05, -0.04)], 0.02);
    for (let i = 0; i < 9; i++){
      const t = 0.08 + i * 0.1, p = st.curve.getPointAt(t), k = 1 - t * 0.6;
      for (const sx of [-1, 1]){
        const l = slab(g, leaf, 0.008, skin(i % 2 ? '#4fb85a' : '#63c66a', { roughness: 0.45 }), { bevel: 0.004, bevelSize: 0.004 });
        l.position.copy(p); l.scale.setScalar(k); l.rotation.set(0, 0, sx < 0 ? Math.PI - 0.35 : 0.35);
      }
    }
    return g;
  },
  leaves(){
    const g = new THREE.Group();
    const br = tube(g, [V(-0.4, -0.35, 0), V(0, 0, 0.02), V(0.38, 0.32, 0)], [0.03, 0.025, 0.015], skin('#8a5a2b', { roughness: 0.8 }), { tubular: 24, radial: 10 });
    const leaf = roundedShape([v2(0, 0), v2(0.08, 0.06), v2(0.1, 0.18), v2(0, 0.3), v2(-0.1, 0.18), v2(-0.08, 0.06)], 0.05);
    [[0.15, 0.6], [0.35, -0.8], [0.55, 0.7], [0.75, -0.6], [0.95, 0.3]].forEach(([t, a], i) => {
      const l = slab(g, leaf, 0.01, skin(i % 2 ? '#3fae5a' : '#5cc46a', { roughness: 0.4 }), { bevel: 0.006, bevelSize: 0.006, bend: 1.5 });
      l.position.copy(br.curve.getPointAt(t)); l.rotation.set(0.3, 0, a);
    });
    return g;
  },
  fruit(){
    const g = new THREE.Group();
    lathe(g, [[0, -0.02], [0.2, 0.02], [0.32, 0.16], [0.34, 0.3], [0.28, 0.46], [0.15, 0.52], [0.06, 0.48], [0, 0.45]], glossy('#ff3b4e', { roughness: 0.25 }), V(0, -0.25, 0), 48);
    tube(g, [V(0, 0.18, 0), V(0.03, 0.32, 0)], [0.022, 0.018], skin('#6b4424'), { tubular: 6, radial: 8 });
    const lf = slab(g, roundedShape([v2(0, 0), v2(0.08, 0.06), v2(0.16, 0), v2(0.08, -0.06)], 0.04), 0.01, skin('#4fb85a'), { bevel: 0.006, bevelSize: 0.006, bend: 2 });
    lf.position.set(0.04, 0.29, 0); lf.rotation.z = 0.4;
    blob(g, V(-0.14, 0.12, 0.22), V(0.06, 0.09, 0.03), new THREE.MeshBasicMaterial({ color: '#ffffff', transparent: true, opacity: 0.55 }), { seg: 16, shadow: false });
    return g;
  },
  grass(){
    const g = new THREE.Group();
    blob(g, V(0, -0.3, 0), V(0.34, 0.08, 0.2), matte('#6b4424'));
    const R = rng(5);
    for (let i = 0; i < 14; i++){
      const x = (R() - 0.5) * 0.5, z = (R() - 0.5) * 0.18, h = 0.4 + R() * 0.3;
      const blade = roundedShape([v2(-0.03, 0), v2(0.03, 0), v2(0.002, h)], 0.006);
      const b = slab(g, blade, 0.008, skin(R() < 0.5 ? '#5cbf55' : '#86d46a', { roughness: 0.45 }), { bevel: 0.004, bevelSize: 0.004, bend: 0.8 + R() });
      b.position.set(x, -0.3, z); b.rotation.set(0, R() * 3, (R() - 0.5) * 0.4);
    }
    return g;
  },
  sponge(){
    const g = new THREE.Group();
    mesh(g, rb(0.62, 0.36, 0.3, 0.1), skin('#ffd23a', { roughness: 0.8, sheen: 0.3 }), V(0, 0, 0), { z: 0.15 });
    const R = rng(3);
    for (let i = 0; i < 16; i++) blob(g, V((R() - 0.5) * 0.5, (R() - 0.5) * 0.26, 0.15), V(0.025 + R() * 0.02, 0.02, 0.01), matte('#d9a51a'), { seg: 10, shadow: false });
    for (const [x, y, r] of [[0.22, 0.28, 0.1], [0.05, 0.3, 0.07], [0.32, 0.12, 0.06]]) blob(g, V(x, y, 0.05), V(r, r, r), new THREE.MeshPhysicalMaterial({ color: '#ffffff', roughness: 0.05, transmission: 0.4, transparent: true, opacity: 0.8, clearcoat: 1, iridescence: 0.6 }), { seg: 24 });
    return g;
  },
  shower(){
    const g = new THREE.Group();
    const metal = glossy('#e6edf4', { metalness: 0.85, roughness: 0.2 });
    tube(g, [V(0.05, -0.45, 0), V(0.08, -0.05, 0), V(0, 0.2, 0.05)], [0.05, 0.045, 0.05], metal, { tubular: 16, radial: 16 });
    const head = new THREE.Group(); head.position.set(-0.05, 0.3, 0.08); head.rotation.set(0.6, 0, 0.3); g.add(head);
    mesh(head, new THREE.CylinderGeometry(0.2, 0.12, 0.12, 40), metal);
    mesh(head, new THREE.CylinderGeometry(0.19, 0.19, 0.02, 40), glossy('#cfd8e2'), V(0, 0.07, 0));
    for (let i = 0; i < 12; i++){ const a = i / 12 * Math.PI * 2; blob(head, V(Math.cos(a) * 0.11, 0.08, Math.sin(a) * 0.11), V(0.012, 0.006, 0.012), glossy('#7f8c99'), { seg: 8, shadow: false }); }
    for (const [x, y, z] of [[-0.2, 0.0, 0.3], [-0.1, -0.1, 0.35], [-0.28, -0.12, 0.25], [-0.16, -0.25, 0.32]]) blob(g, V(x, y, z), V(0.03, 0.05, 0.03), glossy('#5cc3ff', { roughness: 0.05 }), { seg: 16 });
    return g;
  },
  towel(){
    const g = new THREE.Group();
    const m = new THREE.MeshPhysicalMaterial({ map: T.stripes('#7fd1c7', '#c9f1ea', 8), roughness: 0.9, sheen: 1, sheenColor: new THREE.Color('#e9fffb') });
    mesh(g, rb(0.7, 0.16, 0.5, 0.07), m, V(0, -0.12, 0));
    mesh(g, rb(0.7, 0.16, 0.5, 0.07), m, V(0.03, 0.04, -0.02), { y: 0.1 });
    mesh(g, rb(0.7, 0.16, 0.5, 0.07), m, V(-0.02, 0.2, 0.01), { y: -0.08 });
    return g;
  },
  brush(){
    const g = new THREE.Group(); g.rotation.z = -0.7;
    mesh(g, rb(0.09, 0.8, 0.06, 0.03), glossy('#4fb8ff', { roughness: 0.3 }), V(0, 0, 0));
    mesh(g, rb(0.1, 0.18, 0.02, 0.01), glossy('#ffffff'), V(0, 0.32, 0.05));
    for (let i = 0; i < 4; i++) for (let j = 0; j < 2; j++) mesh(g, new THREE.CylinderGeometry(0.012, 0.012, 0.1, 6), glossy(i % 2 ? '#ffffff' : '#9fe0ff'), V(-0.025 + j * 0.05, 0.25 + i * 0.045, 0.1), { x: Math.PI / 2 });
    tube(g, [V(-0.03, 0.27, 0.16), V(0, 0.33, 0.18), V(0.03, 0.38, 0.16)], [0.03, 0.035, 0.025], skin('#7fe0b0', { roughness: 0.3 }), { tubular: 12, radial: 12 });
    return g;
  },
  potty(){
    const g = new THREE.Group();
    lathe(g, [[0, 0], [0.3, 0], [0.36, 0.06], [0.42, 0.36], [0.48, 0.4], [0.44, 0.44], [0.34, 0.4], [0, 0.38]], skin('#ffffff', { roughness: 0.2, clearcoat: 0.9 }), V(0, -0.22, 0));
    const seat = mesh(g, new THREE.TorusGeometry(0.39, 0.07, 16, 48), skin('#ff9ec4', { roughness: 0.35, clearcoat: 0.5 }), V(0, 0.2, 0), { x: Math.PI / 2 });
    void seat;
    g.userData.dir = V(0.2, 0.9, 1);
    return g;
  },
  soap(){
    const g = new THREE.Group();
    mesh(g, rb(0.6, 0.24, 0.36, 0.11), glossy('#ff9ec4', { roughness: 0.3 }), V(0, -0.1, 0));
    for (const [x, y, r] of [[-0.12, 0.18, 0.11], [0.1, 0.24, 0.13], [0.26, 0.12, 0.08], [-0.02, 0.36, 0.07]]) blob(g, V(x, y, 0.03), V(r, r, r), new THREE.MeshPhysicalMaterial({ color: '#ffffff', roughness: 0.05, transmission: 0.4, transparent: true, opacity: 0.85, clearcoat: 1, iridescence: 0.8 }), { seg: 24 });
    return g;
  },
  lamp(){
    const g = new THREE.Group();
    lathe(g, [[0, 0], [0.24, 0], [0.24, 0.05], [0.05, 0.08], [0.04, 0.5], [0, 0.5]], glossy('#ffc43a', { metalness: 0.5, roughness: 0.3 }), V(0, -0.45, 0), 32);
    mesh(g, new THREE.CylinderGeometry(0.2, 0.34, 0.38, 40, 1, true), new THREE.MeshPhysicalMaterial({ color: '#fff1c4', emissive: '#ffd27a', emissiveIntensity: 0.6, roughness: 0.7, side: THREE.DoubleSide }), V(0, 0.18, 0));
    blob(g, V(0, 0.05, 0), V(0.08, 0.08, 0.08), new THREE.MeshBasicMaterial({ color: '#fff8d0' }), { seg: 16 });
    return g;
  },
  book(){
    const g = new THREE.Group(); g.rotation.set(0.5, -0.3, 0);
    const cover = skin('#ff8a5c', { roughness: 0.5, clearcoat: 0.3 });
    for (const sx of [-1, 1]){
      const half = new THREE.Group(); half.rotation.y = sx * -0.25; g.add(half);
      mesh(half, rb(0.42, 0.56, 0.03, 0.012), cover, V(sx * 0.22, 0, -0.02));
      mesh(half, rb(0.39, 0.52, 0.05, 0.01), skin('#fffaf0', { roughness: 0.8 }), V(sx * 0.21, 0, 0.02));
      for (let i = 0; i < 4; i++) mesh(half, rb(0.26, 0.02, 0.01, 0.005), matte('#c9bfae'), V(sx * 0.21, 0.15 - i * 0.08, 0.05));
    }
    const s = slab(g, star(0.08, 0.035), 0.015, glossy('#ffd35c'), { bevel: 0.007, bevelSize: 0.007 }); s.position.set(0.2, -0.17, 0.06);
    return g;
  },
  mic(){
    const g = new THREE.Group(); g.rotation.z = -0.35;
    blob(g, V(0, 0.24, 0), V(0.18, 0.18, 0.18), new THREE.MeshPhysicalMaterial({ color: '#ff9ec4', roughness: 0.6, sheen: 0.8, sheenColor: new THREE.Color('#ffd9e8') }));
    mesh(g, new THREE.TorusGeometry(0.18, 0.025, 10, 40), glossy('#ffd35c', { metalness: 0.5 }), V(0, 0.2, 0), { x: Math.PI / 2 });
    mesh(g, new THREE.CylinderGeometry(0.07, 0.05, 0.5, 24), glossy('#ff5d8f', { roughness: 0.3 }), V(0, -0.15, 0));
    for (const [r, o] of [[0.3, 0.9], [0.42, 0.6]]){ const w = mesh(g, new THREE.TorusGeometry(r, 0.022, 8, 32, 1.3), glossy('#4fb8ff'), V(0, 0.24, 0)); w.rotation.z = -0.65; w.material = w.material.clone(); w.material.transparent = true; w.material.opacity = o; }
    return g;
  },
  hanger(){
    const g = new THREE.Group();
    tube(g, [V(-0.45, -0.12, 0), V(0, 0.16, 0), V(0.45, -0.12, 0)], [0.025, 0.025, 0.025], glossy('#c98a4b'), { tubular: 24, radial: 10 });
    tube(g, [V(-0.45, -0.12, 0), V(0.45, -0.12, 0)], [0.022, 0.022], glossy('#c98a4b'), { tubular: 4, radial: 10 });
    tube(g, [V(0, 0.16, 0), V(0, 0.28, 0), V(0.07, 0.38, 0), V(0.12, 0.3, 0)], [0.018, 0.018, 0.018, 0.016], glossy('#cfd8e2', { metalness: 0.8 }), { tubular: 16, radial: 8 });
    // a little shirt hanging from it
    const shirt = roundedShape([v2(-0.3, 0.1), v2(-0.12, 0.16), v2(0.12, 0.16), v2(0.3, 0.1), v2(0.36, -0.02), v2(0.2, -0.06), v2(0.18, -0.42), v2(-0.18, -0.42), v2(-0.2, -0.06), v2(-0.36, -0.02)], 0.05);
    const s = slab(g, shirt, 0.04, skin('#ff5d8f', { roughness: 0.6, sheen: 0.6 }), { bevel: 0.02, bevelSize: 0.02 }); s.position.set(0, -0.2, 0.03);
    const st = slab(g, star(0.08, 0.035), 0.015, glossy('#ffd35c'), { bevel: 0.006, bevelSize: 0.006 }); st.position.set(0, -0.36, 0.08);
    return g;
  },
  paint(){
    const g = new THREE.Group();
    mesh(g, new THREE.CylinderGeometry(0.16, 0.16, 0.56, 32), skin('#ff9ec4', { roughness: 0.8, sheen: 0.8 }), V(0, 0.18, 0), { z: Math.PI / 2 });
    for (const sx of [-1, 1]) mesh(g, new THREE.CylinderGeometry(0.05, 0.05, 0.04, 20), glossy('#cfd8e2', { metalness: 0.7, roughness: 0.3 }), V(sx * 0.3, 0.18, 0), { z: Math.PI / 2 });
    tube(g, [V(0.3, 0.18, 0), V(0.38, 0.18, 0), V(0.38, -0.02, 0), V(0, -0.08, 0), V(0, -0.2, 0)], [0.025, 0.025, 0.025, 0.025, 0.025], glossy('#cfd8e2', { metalness: 0.7, roughness: 0.3 }), { tubular: 24, radial: 10 });
    mesh(g, new THREE.CylinderGeometry(0.055, 0.06, 0.34, 20), glossy('#4fb8ff', { roughness: 0.35 }), V(0, -0.36, 0));
    for (const [x, c] of [[-0.12, '#7cc85a'], [0.02, '#ffd23a'], [0.15, '#4fb8ff']]) blob(g, V(x, 0.36, 0.06), V(0.05, 0.03, 0.05), glossy(c), { seg: 16 });
    g.userData.dir = V(0.3, 0.35, 1);
    return g;
  },
  gift(){
    const g = new THREE.Group();
    const pink = skin('#ff7aa8', { roughness: 0.45, clearcoat: 0.4 }), lid = skin('#ff9ec4', { roughness: 0.45, clearcoat: 0.4 }), gold = glossy('#ffd23a', { roughness: 0.3 });
    mesh(g, rb(0.62, 0.46, 0.62, 0.06), pink, V(0, -0.1, 0));
    mesh(g, rb(0.7, 0.14, 0.7, 0.05), lid, V(0, 0.18, 0));
    mesh(g, rb(0.12, 0.6, 0.64, 0.03), gold, V(0, -0.03, 0));
    mesh(g, rb(0.64, 0.6, 0.12, 0.03), gold, V(0, -0.03, 0));
    for (const sx of [-1, 1]){
      const loop = mesh(g, new THREE.TorusGeometry(0.11, 0.04, 12, 28), gold, V(sx * 0.11, 0.33, 0), { z: sx * 0.5, y: 0.2 });
      loop.scale.set(1, 0.75, 0.6);
    }
    blob(g, V(0, 0.29, 0), V(0.06, 0.05, 0.06), gold, { seg: 20 });
    g.userData.dir = V(0.35, 0.45, 1);
    return g;
  },
  // the breathing button: a flower to smell
  calm(){
    const g = new THREE.Group();
    tube(g, [V(0, -0.52, 0), V(0.04, -0.22, 0), V(0, 0.08, 0)], [0.035, 0.03, 0.03], skin('#5fa846'));
    blob(g, V(0.13, -0.3, 0.02), V(0.13, 0.045, 0.07), skin('#7cc85a'), { rot: { z: 0.55 } });
    for (let i = 0; i < 6; i++){ const a = i / 6 * Math.PI * 2; blob(g, V(Math.cos(a) * 0.17, 0.2 + Math.sin(a) * 0.17, 0), V(0.115, 0.115, 0.05), skin('#ff9ec4', { roughness: 0.45 })); }
    blob(g, V(0, 0.2, 0.035), V(0.095, 0.095, 0.06), skin('#ffd35c', { roughness: 0.4 }));
    g.userData.dir = V(0.1, 0.25, 1);
    return g;
  },
  ball(){
    const g = new THREE.Group();
    mesh(g, new THREE.SphereGeometry(0.4, 48, 32), new THREE.MeshPhysicalMaterial({ map: T.stripes('#4fb8ff', '#ffffff', 6, true), roughness: 0.3, clearcoat: 0.8 }), V(0, 0, 0), { z: 0.5, x: 0.3 });
    return g;
  },
  egg(){
    const g = new THREE.Group();
    const p = T.eggSpots('#fff5e2', '#7cc85a', 4);
    lathe(g, Array.from({ length: 33 }, (_, i) => { const t = i / 32; return [Math.max(0.0001, Math.sin(Math.PI * t) ** 0.62 * 0.36 * (1 - 0.12 * t)), t * 0.86]; }), new THREE.MeshPhysicalMaterial({ map: p.tex, roughness: 0.35, clearcoat: 0.6 }), V(0, -0.43, 0), 48);
    return g;
  },
  // room icons
  home(){
    const g = new THREE.Group();
    mesh(g, rb(0.7, 0.5, 0.6, 0.06), skin('#ffe3c2', { roughness: 0.5 }), V(0, -0.15, 0));
    const roof = mesh(g, new THREE.ConeGeometry(0.6, 0.38, 4), skin('#ff6b6b', { roughness: 0.4, clearcoat: 0.4 }), V(0, 0.28, 0), { y: Math.PI / 4 });
    roof.scale.set(1.05, 1, 0.95);
    mesh(g, rb(0.18, 0.3, 0.05, 0.03), skin('#c98a4b'), V(0, -0.25, 0.3));
    mesh(g, rb(0.15, 0.15, 0.04, 0.02), glossy('#9fdcff'), V(0.2, -0.05, 0.3));
    const h = slab(g, roundedShape([v2(0, -0.08), v2(0.09, 0.02), v2(0.05, 0.08), v2(0, 0.04), v2(-0.05, 0.08), v2(-0.09, 0.02)], 0.03), 0.03, glossy('#ff5d8f'), { bevel: 0.015, bevelSize: 0.015 });
    h.position.set(-0.2, -0.05, 0.31);
    g.userData.dir = V(0.4, 0.35, 1);
    return g;
  },
  kitchen(){
    const g = new THREE.Group();
    lathe(g, [[0, 0], [0.18, 0], [0.38, 0.12], [0.44, 0.3], [0.45, 0.32], [0.4, 0.31], [0.34, 0.2], [0, 0.16]], glossy('#7fd1c7', { roughness: 0.25 }), V(0, -0.25, 0));
    for (const [x, z, c, r] of [[-0.12, 0, '#ff3b4e', 0.13], [0.14, 0.02, '#ffd23a', 0.12], [0.02, -0.12, '#6cc24a', 0.12], [0.02, 0.12, '#ff9f43', 0.11]]) blob(g, V(x, 0.08 + r * 0.6, z), V(r, r, r), glossy(c, { roughness: 0.3 }), { seg: 24 });
    g.userData.dir = V(0.2, 0.8, 1);
    return g;
  },
  bath(){
    const g = new THREE.Group();
    mesh(g, rb(0.9, 0.36, 0.5, 0.15), skin('#ffffff', { roughness: 0.2, clearcoat: 1 }), V(0, -0.15, 0));
    for (const [x, y, r] of [[-0.25, 0.08, 0.14], [0, 0.12, 0.17], [0.25, 0.07, 0.13], [0.12, 0.25, 0.1], [-0.12, 0.24, 0.1]]) blob(g, V(x, y, 0.05), V(r, r * 0.9, r), skin('#ffffff', { sheen: 0.8, roughness: 0.4 }), { seg: 24 });
    blob(g, V(0.32, 0.2, 0.2), V(0.08, 0.06, 0.07), glossy('#ffd23a'), { seg: 20 });
    g.userData.dir = V(0.2, 0.6, 1);
    return g;
  },
  bed(){
    const g = new THREE.Group();
    const moon = new THREE.Shape(); moon.absarc(0, 0, 0.36, Math.PI * 0.25, Math.PI * 1.75, false); moon.absarc(0.16, 0.0, 0.3, Math.PI * 1.65, Math.PI * 0.35, true);
    const m = slab(g, moon, 0.12, glossy('#ffd35c', { roughness: 0.3 }), { bevel: 0.06, bevelSize: 0.05 }); m.rotation.z = -0.4; m.position.set(-0.05, 0.05, 0);
    const s1 = slab(g, star(0.1, 0.045), 0.04, glossy('#fff3c4'), { bevel: 0.02, bevelSize: 0.02 }); s1.position.set(0.32, 0.28, 0.05);
    const s2 = slab(g, star(0.06, 0.027), 0.03, glossy('#fff3c4'), { bevel: 0.015, bevelSize: 0.015 }); s2.position.set(0.36, -0.12, 0.05);
    return g;
  },
  play(){
    const g = new THREE.Group();
    mesh(g, rb(0.36, 0.36, 0.36, 0.06), new THREE.MeshPhysicalMaterial({ map: T.blockLetter('א', '#ff5d8f'), roughness: 0.4, clearcoat: 0.4 }), V(-0.2, -0.2, 0), { y: 0.3 });
    mesh(g, rb(0.36, 0.36, 0.36, 0.06), new THREE.MeshPhysicalMaterial({ map: T.blockLetter('ב', '#4fb8ff'), roughness: 0.4, clearcoat: 0.4 }), V(0.2, -0.2, 0.05), { y: -0.3 });
    mesh(g, new THREE.SphereGeometry(0.2, 32, 24), new THREE.MeshPhysicalMaterial({ map: T.stripes('#ffd35c', '#ffffff', 6, true), roughness: 0.3, clearcoat: 0.8 }), V(0, 0.18, 0), { z: 0.6 });
    return g;
  },
  album(){
    const g = new THREE.Group();
    mesh(g, rb(0.62, 0.8, 0.1, 0.04), skin('#ff8a5c', { roughness: 0.45, clearcoat: 0.4 }), V(0, 0, 0));
    mesh(g, rb(0.56, 0.74, 0.08, 0.02), skin('#fffaf0'), V(0.03, 0, -0.03));
    mesh(g, rb(0.36, 0.28, 0.02, 0.02), skin('#fff3dc'), V(0, 0.15, 0.06));
    blob(g, V(-0.05, 0.12, 0.08), V(0.06, 0.06, 0.02), skin('#6cc24a'), { seg: 16 });
    const s = slab(g, star(0.13, 0.06), 0.04, glossy('#ffd35c'), { bevel: 0.02, bevelSize: 0.02 }); s.position.set(0, -0.2, 0.07);
    g.rotation.y = -0.3;
    return g;
  },
  // needs
  needFood(){ return B.fruit(); },
  needClean(){
    const g = new THREE.Group();
    for (const [x, y, r] of [[-0.12, -0.08, 0.26], [0.2, 0.12, 0.2], [0.18, -0.22, 0.13]]) blob(g, V(x, y, 0), V(r, r, r), new THREE.MeshPhysicalMaterial({ color: '#d6f2ff', roughness: 0.05, clearcoat: 1, iridescence: 0.9, iridescenceIOR: 1.3 }), { seg: 32 });
    return g;
  },
  needEnergy(){ return B.bed(); },
  needFun(){ return B.ball(); }
};
export function buildItem(name){
  let g = null;
  if (name.startsWith('hat:')){ g = buildHat(name.slice(4)); if (g) g.userData.dir = V(0.3, 0.6, 1); }
  else if (B[name]) g = B[name]();
  if (!g) return null;
  g.traverse(o => { if (o.isMesh){ o.castShadow = true; } });
  return g;
}
export const ITEM_NAMES = Object.keys(B);
void bend; void horn;
