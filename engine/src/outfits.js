/* Hats and glasses, in 3D. Each is built around (0,0,0) = the top of the head, about 0.6 wide, facing +z. */
import * as THREE from 'three';
import { V, glossy, skin, blob, tube, horn, slab, roundedShape, v2, canvasTex, matte } from './util.js';

function stripes(c1, c2, n){
  return canvasTex(64, 256, (g, w, h) => { for (let i = 0; i < n; i++){ g.fillStyle = i % 2 ? c2 : c1; g.fillRect(0, h * i / n, w, h / n + 1); } });
}
const B = {
  party(){
    const g = new THREE.Group();
    const cone = new THREE.Mesh(new THREE.ConeGeometry(0.22, 0.52, 48, 1, true), new THREE.MeshPhysicalMaterial({ map: stripes('#ff5d8f', '#fff4d6', 8), roughness: 0.4, clearcoat: 0.6, side: THREE.DoubleSide }));
    cone.position.y = 0.26; cone.castShadow = true; g.add(cone);
    const rim = new THREE.Mesh(new THREE.TorusGeometry(0.215, 0.03, 12, 48), glossy('#ffd35c'));
    rim.rotation.x = Math.PI / 2; rim.position.y = 0.01; g.add(rim);
    blob(g, V(0, 0.55, 0), V(0.075, 0.075, 0.075), skin('#ffd35c', { sheen: 0.9, roughness: 0.8 }), { seg: 32 });
    for (let i = 0; i < 8; i++){ const a = i / 8 * Math.PI * 2; blob(g, V(Math.cos(a) * 0.06, 0.56 + Math.sin(i) * 0.02, Math.sin(a) * 0.06), V(0.04, 0.04, 0.04), skin('#ffe58a', { sheen: 1, roughness: 0.9 }), { seg: 16 }); }
    return g;
  },
  cap(){
    const g = new THREE.Group();
    const dome = new THREE.Mesh(new THREE.SphereGeometry(0.3, 48, 24, 0, Math.PI * 2, 0, Math.PI / 2), glossy('#ff4b5c', { roughness: 0.45 }));
    dome.scale.set(1, 0.72, 1); dome.castShadow = true; g.add(dome);
    const visor = slab(g, roundedShape([v2(-0.24, 0), v2(0.24, 0), v2(0.2, 0.26), v2(-0.2, 0.26)], 0.1), 0.02, glossy('#d8303f', { roughness: 0.5 }), { bevel: 0.01, bevelSize: 0.01 });
    visor.rotation.x = -Math.PI / 2 + 0.12; visor.position.set(0, 0.02, 0.22);
    blob(g, V(0, 0.22, 0), V(0.045, 0.03, 0.045), glossy('#fff6e6'), { seg: 20 });
    const band = new THREE.Mesh(new THREE.TorusGeometry(0.3, 0.018, 10, 48), glossy('#fff6e6'));
    band.rotation.x = Math.PI / 2; band.position.y = 0.04; g.add(band);
    // a little star badge on the front
    const st = new THREE.Shape(); for (let i = 0; i < 10; i++){ const a = Math.PI / 2 + i * Math.PI / 5, rr = i % 2 ? 0.035 : 0.075; i ? st.lineTo(Math.cos(a) * rr, Math.sin(a) * rr) : st.moveTo(Math.cos(a) * rr, Math.sin(a) * rr); }
    const star = slab(g, st, 0.012, glossy('#ffd35c'), { bevel: 0.006, bevelSize: 0.006 });
    star.position.set(0, 0.12, 0.27); star.rotation.x = -0.35;
    return g;
  },
  explorer(){
    const g = new THREE.Group();
    const brim = new THREE.Mesh(new THREE.CylinderGeometry(0.46, 0.46, 0.03, 64), skin('#d9bf86', { roughness: 0.75, sheen: 0.4 }));
    brim.position.y = 0.02; brim.castShadow = true; g.add(brim);
    const crown = new THREE.Mesh(new THREE.SphereGeometry(0.29, 48, 24, 0, Math.PI * 2, 0, Math.PI / 2), skin('#e8d19a', { roughness: 0.75, sheen: 0.4 }));
    crown.scale.set(1, 1.1, 1); crown.position.y = 0.03; crown.castShadow = true; g.add(crown);
    const band = new THREE.Mesh(new THREE.CylinderGeometry(0.292, 0.292, 0.07, 64, 1, true), skin('#7a5a32', { roughness: 0.7 }));
    band.position.y = 0.07; g.add(band);
    blob(g, V(0, 0.34, 0), V(0.035, 0.03, 0.035), skin('#d9bf86'), { seg: 16 });
    return g;
  },
  crown(){
    const g = new THREE.Group();
    const gold = new THREE.MeshPhysicalMaterial({ color: '#ffc43a', metalness: 0.85, roughness: 0.28, clearcoat: 0.6 });
    const band = new THREE.Mesh(new THREE.CylinderGeometry(0.26, 0.27, 0.13, 48, 1, true), gold);
    band.position.y = 0.06; band.material.side = THREE.DoubleSide; g.add(band);
    for (let i = 0; i < 6; i++){
      const a = i / 6 * Math.PI * 2;
      const sp = new THREE.Mesh(new THREE.ConeGeometry(0.06, 0.15, 24), gold);
      sp.position.set(Math.cos(a) * 0.25, 0.19, Math.sin(a) * 0.25); g.add(sp);
      blob(g, V(Math.cos(a) * 0.25, 0.28, Math.sin(a) * 0.25), V(0.028, 0.028, 0.028), gold, { seg: 16 });
      const gem = blob(g, V(Math.cos(a + 0.52) * 0.27, 0.06, Math.sin(a + 0.52) * 0.27), V(0.035, 0.035, 0.02), glossy(i % 2 ? '#ff4b5c' : '#4fb8ff', { roughness: 0.1 }), { seg: 20 });
      gem.lookAt(Math.cos(a + 0.52) * 2, 0.06, Math.sin(a + 0.52) * 2);
    }
    const t1 = new THREE.Mesh(new THREE.TorusGeometry(0.265, 0.018, 10, 48), gold); t1.rotation.x = Math.PI / 2; t1.position.y = 0.0; g.add(t1);
    return g;
  },
  flower(){
    const g = new THREE.Group();
    const f = new THREE.Group(); f.position.set(0.18, 0.06, 0.08); f.rotation.set(-0.5, 0, -0.4); g.add(f);
    for (let i = 0; i < 6; i++){
      const a = i / 6 * Math.PI * 2;
      const p = blob(f, V(Math.cos(a) * 0.09, Math.sin(a) * 0.09, 0), V(0.075, 0.05, 0.025), skin('#ff9ec4', { sheen: 0.6 }), { seg: 24 });
      p.rotation.z = a;
    }
    blob(f, V(0, 0, 0.02), V(0.055, 0.055, 0.04), skin('#ffd35c', { sheen: 0.7 }), { seg: 24 });
    const leaf = blob(g, V(0.06, 0.02, 0.0), V(0.09, 0.03, 0.05), skin('#5cbf55'), { seg: 20 });
    leaf.rotation.z = 0.6;
    return g;
  },
  chef(){
    const g = new THREE.Group();
    const w = skin('#ffffff', { sheen: 0.6, roughness: 0.75 });
    const band = new THREE.Mesh(new THREE.CylinderGeometry(0.25, 0.26, 0.16, 48), w);
    band.position.y = 0.08; band.castShadow = true; g.add(band);
    for (const [x, y, z, r] of [[0, 0.3, 0, 0.2], [-0.15, 0.25, 0.05, 0.16], [0.15, 0.25, 0.05, 0.16], [0, 0.26, -0.13, 0.16], [0, 0.24, 0.14, 0.15]]) blob(g, V(x, y, z), V(r, r * 0.9, r), w, { seg: 32 });
    return g;
  }
};
export const OUTFIT_ORDER = ['party', 'cap', 'explorer', 'crown', 'flower', 'chef', 'glasses'];
export function buildHat(id){
  if (!B[id]) return null;
  const g = B[id]();
  g.traverse(o => { if (o.isMesh){ o.castShadow = true; o.userData.part = 'head'; } });
  return g;
}
export function buildGlasses(eyes, parentHead){
  // rims around each eye and a bridge, placed in the head's space
  const g = new THREE.Group();
  const rimMat = glossy('#2b2f45', { roughness: 0.3 });
  const lens = new THREE.MeshPhysicalMaterial({ color: '#bfe6ff', roughness: 0.05, transmission: 0.0, transparent: true, opacity: 0.28, clearcoat: 1 });
  const pts = [];
  for (const e of eyes){
    const wp = new THREE.Vector3(); e.g.getWorldPosition(wp);
    parentHead.worldToLocal(wp);
    const n = new THREE.Vector3(0, 0, 1).applyQuaternion(e.g.quaternion).normalize();
    const c = wp.clone().addScaledVector(n, e.r * 1.35);
    const rim = new THREE.Mesh(new THREE.TorusGeometry(e.r * 1.3, e.r * 0.13, 12, 40), rimMat);
    rim.position.copy(c); rim.lookAt(c.clone().add(n)); g.add(rim);
    const ln = new THREE.Mesh(new THREE.CircleGeometry(e.r * 1.25, 40), lens);
    ln.position.copy(c); ln.lookAt(c.clone().add(n)); g.add(ln);
    pts.push({ c, n, r: e.r });
  }
  if (pts.length === 2){
    const [a, b] = pts;
    const dir = b.c.clone().sub(a.c).normalize();
    const p0 = a.c.clone().addScaledVector(dir, a.r * 1.3), p1 = b.c.clone().addScaledVector(dir, -b.r * 1.3);
    const mid = p0.clone().add(p1).multiplyScalar(0.5).add(V(0, a.r * 0.25, a.r * 0.15));
    tube(g, [p0, mid, p1], [a.r * 0.12, a.r * 0.12, a.r * 0.12], rimMat, { tubular: 16, radial: 10, caps: false });
  }
  g.traverse(o => { if (o.isMesh) o.userData.part = 'head'; });
  return g;
}
void matte; void horn;
