/* Eyes and mouths that move: eyes with a colored iris that looks around, lids that blink, squint when happy and close
   in sleep; a mouth that smiles closed and opens to talk and eat. */
import * as THREE from 'three';
import { V, glossy, basic, skin, orient, blob, horn, radialTex, decal } from './util.js';

const capGeo = new Map();
function cap(r, theta){
  const k = r.toFixed(3) + ':' + theta.toFixed(3);
  if (!capGeo.has(k)) capGeo.set(k, new THREE.SphereGeometry(r, 48, 24, 0, Math.PI * 2, 0, theta));
  return capGeo.get(k);
}
const lidGeo = new Map();
function lid(r){
  if (!lidGeo.has(r)) lidGeo.set(r, new THREE.SphereGeometry(r, 48, 24, 0, Math.PI * 2, 0, Math.PI / 2));
  return lidGeo.get(r);
}

/* One eye. `at` and `normal` come from the head's surface; the eye sits partly sunk into the head. */
export function makeEye(parent, at, normal, r, irisHex, lidMat, o = {}){
  const g = new THREE.Group();
  g.position.copy(at).addScaledVector(normal, -r * (o.sink ?? 0.42));
  orient(g, normal);
  if (o.roll) g.rotateZ(o.roll);
  parent.add(g);
  const white = new THREE.Mesh(new THREE.SphereGeometry(r, 48, 32), glossy('#fbfcff', { roughness: 0.18 }));
  white.castShadow = false;
  g.add(white);
  // the iris and pupil are caps of slightly bigger spheres, so they hug the eyeball and turn with it
  const look = new THREE.Group(); g.add(look);
  const iris = new THREE.Mesh(cap(r * 1.012, 0.74), glossy(irisHex, { roughness: 0.28 }));
  iris.rotation.x = Math.PI / 2; look.add(iris);
  const ring = new THREE.Mesh(cap(r * 1.008, 0.79), glossy('#20142a', { roughness: 0.3 }));
  ring.rotation.x = Math.PI / 2; look.add(ring);
  const pupil = new THREE.Mesh(cap(r * 1.02, 0.42), glossy('#0d0a14', { roughness: 0.15 }));
  pupil.rotation.x = Math.PI / 2; look.add(pupil);
  const shine = new THREE.Mesh(new THREE.SphereGeometry(r * 0.2, 16, 12), basic('#ffffff', { toneMapped: false }));
  shine.position.set(-r * 0.3, r * 0.34, r * 0.95); look.add(shine);
  const shine2 = new THREE.Mesh(new THREE.SphereGeometry(r * 0.08, 12, 8), basic('#ffffff', { toneMapped: false }));
  shine2.position.set(r * 0.26, -r * 0.22, r * 0.99); look.add(shine2);
  // lids: half spheres a little bigger than the eye, in the skin color, that rotate down (upper) or up (lower)
  const lr = r * 1.1;
  const upper = new THREE.Mesh(lid(lr), lidMat); upper.castShadow = false;
  const lowerPivot = new THREE.Group(); lowerPivot.rotation.z = Math.PI;
  const lower = new THREE.Mesh(lid(lr), lidMat); lower.castShadow = false;
  lowerPivot.add(lower);
  g.add(upper, lowerPivot);
  // a lash line at the edge of the upper lid, so a closed eye reads as a closed eye
  const lash = new THREE.Mesh(new THREE.TorusGeometry(lr * 1.0, r * 0.07, 8, 40, Math.PI), glossy('#2a1a2e', { roughness: 0.4 }));
  upper.add(lash);
  lash.rotation.x = Math.PI / 2;
  // a smiling-eye arc (^), drawn on the closed lid when the friend is happy
  const arcA = Math.PI * 0.78;
  const hg = new THREE.TorusGeometry(r * 0.6, r * 0.1, 10, 36, arcA);
  hg.rotateZ(Math.PI / 2 - arcA / 2);
  hg.translate(0, -r * 0.22, 0);
  {
    const p = hg.attributes.position, R = r * 1.13;
    for (let i = 0; i < p.count; i++){ const x = p.getX(i), y = p.getY(i); p.setZ(i, p.getZ(i) + Math.sqrt(Math.max(0, R * R - x * x - y * y))); }
    hg.computeVertexNormals();
  }
  const happyArc = new THREE.Mesh(hg, glossy('#2a1a2e', { roughness: 0.4 }));
  happyArc.visible = false;
  g.add(happyArc);
  const e = { g, look, upper, lower, lash, happyArc, r };
  e.set = (open, happy, sleepy = 0) => {
    // open: 1 open .. 0 closed; happy > 0.5 shows the smiling arc over closed lids
    const upOpen = -1.05, upClosed = 1.45;
    const shut = Math.max(1 - open, happy > 0.5 ? 1 : 0);
    upper.rotation.x = Math.min(upClosed, upOpen + (upClosed - upOpen) * shut + 0.3 * sleepy);
    lower.rotation.x = -1.15 + 0.25 * shut;
    happyArc.visible = happy > 0.5;
    lash.visible = shut > 0.55 && happy <= 0.5;
  };
  e.set(1, 0, 0);
  return e;
}

/* A mouth on a curved face: a closed smile line, and a dark opening with a tongue that grows when the mouth opens. */
export function makeMouth(parent, at, normal, w, o = {}){
  const g = new THREE.Group();
  g.position.copy(at);
  orient(g, normal);
  parent.add(g);
  const lineMat = glossy(o.lineHex || '#3a1f2a', { roughness: 0.45 });
  const arc = Math.PI * (o.arc ?? 0.62);
  const sg = new THREE.TorusGeometry(w * 0.55, w * (o.thick ?? 0.075), 12, 48, arc);
  sg.rotateZ(-Math.PI / 2 - arc / 2);
  sg.translate(0, w * 0.55, 0);
  // follow the curve of the face so the ends of the smile don't float
  if (o.R){
    const p = sg.attributes.position;
    for (let i = 0; i < p.count; i++){ const x = p.getX(i), y = p.getY(i); p.setZ(i, p.getZ(i) - (x * x + y * y) / (2 * o.R)); }
    sg.computeVertexNormals();
  }
  const smile = new THREE.Mesh(sg, lineMat);
  smile.position.set(0, 0, w * 0.01);
  g.add(smile);
  // the opening: a dark oval sunk into the face (only the part outside the skin shows)
  const open = new THREE.Group(); g.add(open);
  const cav = new THREE.Mesh(new THREE.SphereGeometry(1, 40, 24), glossy('#5a1626', { roughness: 0.5 }));
  cav.scale.set(w * 0.42, w * 0.36, w * 0.22);
  open.add(cav);
  const tongue = new THREE.Mesh(new THREE.SphereGeometry(1, 32, 16), glossy('#ff7f96', { roughness: 0.4 }));
  tongue.scale.set(w * 0.26, w * 0.13, w * 0.16);
  tongue.position.set(0, -w * 0.2, w * 0.08);
  open.add(tongue);
  open.position.set(0, w * 0.08, -w * 0.06);
  const lip = new THREE.Mesh(new THREE.TorusGeometry(1, 0.09, 10, 48), lineMat);
  lip.scale.set(w * 0.42, w * 0.36, w * 0.3);
  open.add(lip);
  const m = { g, smile, open, cav, w, value: 0, onSet: null };
  m.set = v => {
    m.value = v;
    const s = Math.max(0.02, v);
    open.scale.set(0.75 + 0.25 * v, s, 1);
    open.visible = v > 0.04;
    smile.visible = v < 0.35;
    if (m.onSet) m.onSet(v);
  };
  m.set(0);
  return m;
}

/* Rosy cheeks: soft pink glows on the face. */
let blushTex = null;
export function cheeks(parent, head, dirs, size){
  blushTex = blushTex || radialTex('#ff6f8e', 128);
  for (const d of dirs){
    const s = head.surf(d);
    decal(parent, blushTex, size, s.p, s.n, { opacity: 0.55, lift: 0.006 });
  }
}

/* Teeth along a curve: small rounded white cones. */
export function teethRow(parent, xs, y, z, size, down = true){
  const g = new THREE.Group();
  for (const [x, k] of xs){
    const t = horn(g, size * k, size * 0.42 * k, glossy('#fffaf0', { roughness: 0.25 }), { radial: 12 });
    t.position.set(x, y, z);
    if (down) t.rotation.x = Math.PI;
  }
  parent.add(g);
  return g;
}
export { blob };
