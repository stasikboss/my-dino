/* Building blocks for a soft "vinyl toy" 3D look: materials, smooth shapes, placing details on curved surfaces,
   and small painted textures. Everything is made in code, so nothing needs to be downloaded. */
import * as THREE from 'three';

export const V = (x = 0, y = 0, z = 0) => new THREE.Vector3(x, y, z);
const tmpC = new THREE.Color();

export function shade(hex, t){
  // t > 0 lightens toward white, t < 0 darkens toward a warm deep tone
  const c = new THREE.Color(hex);
  if (t > 0) c.lerp(tmpC.set('#ffffff'), t); else c.lerp(tmpC.set('#2a1830'), -t);
  return c;
}

/* ---------- materials ---------- */
const matCache = new Map();
export function skin(hex, o = {}){
  const key = 'skin' + hex + JSON.stringify(o);
  if (matCache.has(key)) return matCache.get(key);
  const m = new THREE.MeshPhysicalMaterial({
    color: new THREE.Color(hex),
    roughness: o.roughness ?? 0.5,
    metalness: 0,
    sheen: o.sheen ?? 0.3,
    sheenRoughness: 0.6,
    sheenColor: shade(hex, 0.35),
    clearcoat: o.clearcoat ?? 0.12,
    clearcoatRoughness: 0.45,
    side: o.side ?? THREE.FrontSide,
    transparent: !!o.transparent,
    opacity: o.opacity ?? 1
  });
  matCache.set(key, m);
  return m;
}
export function glossy(hex, o = {}){
  const key = 'gl' + hex + JSON.stringify(o);
  if (matCache.has(key)) return matCache.get(key);
  const m = new THREE.MeshPhysicalMaterial({
    color: new THREE.Color(hex), roughness: o.roughness ?? 0.22, metalness: o.metalness ?? 0,
    clearcoat: 1, clearcoatRoughness: 0.08, transparent: !!o.transparent, opacity: o.opacity ?? 1,
    transmission: o.transmission ?? 0, thickness: o.thickness ?? 0, ior: o.ior ?? 1.45,
    emissive: o.emissive ? new THREE.Color(o.emissive) : new THREE.Color(0), emissiveIntensity: o.emissiveIntensity ?? 0
  });
  matCache.set(key, m);
  return m;
}
export function matte(hex, o = {}){
  const key = 'mt' + hex + JSON.stringify(o);
  if (matCache.has(key)) return matCache.get(key);
  const m = new THREE.MeshStandardMaterial({ color: new THREE.Color(hex), roughness: o.roughness ?? 0.85, metalness: o.metalness ?? 0,
    map: o.map || null, transparent: !!o.transparent, opacity: o.opacity ?? 1, side: o.side ?? THREE.FrontSide,
    emissive: o.emissive ? new THREE.Color(o.emissive) : new THREE.Color(0), emissiveIntensity: o.emissiveIntensity ?? 0 });
  matCache.set(key, m);
  return m;
}
export const basic = (hex, o = {}) => new THREE.MeshBasicMaterial({ color: new THREE.Color(hex), transparent: !!o.transparent, opacity: o.opacity ?? 1, depthWrite: o.depthWrite ?? true, map: o.map || null, toneMapped: o.toneMapped ?? true });

/* ---------- shapes ---------- */
const sphereGeo = new Map();
function sphere(seg){
  if (!sphereGeo.has(seg)) sphereGeo.set(seg, new THREE.SphereGeometry(1, seg, Math.round(seg * 0.66)));
  return sphereGeo.get(seg);
}
/* An ellipsoid with a helper to find points on its surface: surf(dir) gives the point where a ray from the center
   in that direction meets the surface, and the surface normal there (in the parent's space). */
export function blob(parent, center, radii, mat, o = {}){
  const m = new THREE.Mesh(sphere(o.seg || 56), mat);
  m.position.copy(center);
  m.scale.set(radii.x, radii.y, radii.z);
  if (o.rot) m.rotation.set(o.rot.x || 0, o.rot.y || 0, o.rot.z || 0);
  m.castShadow = o.shadow !== false; m.receiveShadow = true;
  if (o.part) m.userData.part = o.part;
  parent.add(m);
  m.surf = dir => surfOf(m, dir);
  return m;
}
export function surfOf(m, dir){
  // works in the mesh's local unit-sphere space, then maps out through its transform (relative to its parent)
  const q = m.quaternion.clone();
  const d = dir.clone().applyQuaternion(q.clone().invert()).normalize();
  const s = m.scale;
  const k = 1 / Math.sqrt((d.x / 1) ** 2 + (d.y / 1) ** 2 + (d.z / 1) ** 2);
  // point on the unit sphere along d, which after scaling lands on the ellipsoid along the scaled direction;
  // to hit the ellipsoid along `dir` itself, solve in scaled space instead:
  const e = V(d.x / s.x, d.y / s.y, d.z / s.z);
  const t = 1 / e.length();
  const pLocal = V(d.x * t, d.y * t, d.z * t); // in ellipsoid space (already scaled)
  const n = V(pLocal.x / (s.x * s.x), pLocal.y / (s.y * s.y), pLocal.z / (s.z * s.z)).applyQuaternion(q).normalize();
  const p = pLocal.applyQuaternion(q).add(m.position);
  void k;
  return { p, n };
}
export function orient(obj, normal, up = V(0, 1, 0)){
  // points the object's +z along the normal, keeping its +y as close to `up` as possible
  const z = normal.clone().normalize();
  let x = up.clone().cross(z);
  if (x.lengthSq() < 1e-6) x = V(1, 0, 0);
  x.normalize();
  const y = z.clone().cross(x).normalize();
  obj.quaternion.setFromRotationMatrix(new THREE.Matrix4().makeBasis(x, y, z));
  return obj;
}

/* A smooth tube along a curve whose thickness changes along the way (tails, necks, trunks, arms), with round ends. */
export function tube(parent, pts, radii, mat, o = {}){
  const curve = new THREE.CatmullRomCurve3(pts, false, 'centripetal');
  const tubular = o.tubular || 64, radial = o.radial || 28;
  const frames = curve.computeFrenetFrames(tubular, false);
  const pos = [], idx = [];
  const rAt = t => {
    const f = t * (radii.length - 1), i = Math.min(radii.length - 2, Math.floor(f)), u = f - i;
    const a = radii[i], b = radii[i + 1];
    return a + (b - a) * (u * u * (3 - 2 * u));
  };
  for (let i = 0; i <= tubular; i++){
    const t = i / tubular, c = curve.getPointAt(t), N = frames.normals[i], B = frames.binormals[i], r = rAt(t);
    for (let j = 0; j < radial; j++){
      const a = j / radial * Math.PI * 2, cs = Math.cos(a), sn = Math.sin(a);
      pos.push(c.x + r * (cs * N.x + sn * B.x), c.y + r * (cs * N.y + sn * B.y), c.z + r * (cs * N.z + sn * B.z));
    }
  }
  for (let i = 0; i < tubular; i++) for (let j = 0; j < radial; j++){
    const a = i * radial + j, b = (i + 1) * radial + j, c2 = (i + 1) * radial + (j + 1) % radial, d = i * radial + (j + 1) % radial;
    idx.push(a, b, d, b, c2, d);
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  g.setIndex(idx);
  g.computeVertexNormals();
  const grp = new THREE.Group();
  const m = new THREE.Mesh(g, mat); m.castShadow = o.shadow !== false; m.receiveShadow = true;
  if (o.part) m.userData.part = o.part;
  grp.add(m);
  if (o.caps !== false){
    const s0 = new THREE.Mesh(sphere(32), mat); s0.position.copy(curve.getPointAt(0)); s0.scale.setScalar(radii[0]); s0.castShadow = true;
    const s1 = new THREE.Mesh(sphere(32), mat); s1.position.copy(curve.getPointAt(1)); s1.scale.setScalar(radii[radii.length - 1]); s1.castShadow = true;
    if (o.part){ s0.userData.part = o.part; s1.userData.part = o.part; }
    grp.add(s0, s1);
  }
  grp.curve = curve;
  grp.rAt = rAt;
  parent.add(grp);
  return grp;
}

/* A flat 2D outline made into a soft, rounded-edge 3D piece (plates, frills, ears, leaves, beaks). */
export function slab(parent, shape, depth, mat, o = {}){
  const g = new THREE.ExtrudeGeometry(shape, { depth, bevelEnabled: true, bevelThickness: o.bevel ?? depth * 0.6, bevelSize: o.bevelSize ?? depth * 0.6,
    bevelSegments: o.bevelSeg ?? 5, curveSegments: o.curveSeg ?? 28, steps: 1 });
  g.translate(0, 0, -depth / 2);
  if (o.bend) bend(g, o.bend);
  g.computeVertexNormals();
  const m = new THREE.Mesh(g, mat); m.castShadow = o.shadow !== false; m.receiveShadow = true;
  if (o.part) m.userData.part = o.part;
  parent.add(m);
  return m;
}
/* Bends geometry around the x axis (positive k curls +y toward +z). */
export function bend(g, k){
  const p = g.attributes.position;
  const R = 1 / k;
  for (let i = 0; i < p.count; i++){
    const y = p.getY(i), z = p.getZ(i);
    const th = y * k;
    p.setY(i, (R - z) * Math.sin(th));
    p.setZ(i, R - (R - z) * Math.cos(th));
  }
  p.needsUpdate = true;
}
/* A horn or spike: a rounded cone, optionally curved. */
export function horn(parent, len, base, mat, o = {}){
  const pts = [];
  const n = 18;
  for (let i = 0; i <= n; i++){
    const t = i / n;
    const r = base * Math.pow(1 - t, o.power ?? 0.85) + base * 0.06 * (1 - t);
    pts.push(new THREE.Vector2(Math.max(0.0005, r * (i === n ? 0 : 1)), t * len));
  }
  pts[n].x = 0.0001;
  // round the very tip a little
  const g = new THREE.LatheGeometry(pts, o.radial || 24);
  if (o.curve) bend(g, o.curve);
  g.computeVertexNormals();
  const m = new THREE.Mesh(g, mat); m.castShadow = true; m.receiveShadow = true;
  if (o.part) m.userData.part = o.part;
  parent.add(m);
  return m;
}
export function roundedShape(points, radius){
  // a closed outline through the given corners, each corner rounded
  const s = new THREE.Shape();
  const n = points.length;
  for (let i = 0; i < n; i++){
    const p0 = points[(i - 1 + n) % n], p1 = points[i], p2 = points[(i + 1) % n];
    const v1 = new THREE.Vector2().subVectors(p0, p1).normalize(), v2 = new THREE.Vector2().subVectors(p2, p1).normalize();
    const r = Math.min(radius, p1.distanceTo(p0) / 2.2, p1.distanceTo(p2) / 2.2);
    const a = p1.clone().addScaledVector(v1, r), b = p1.clone().addScaledVector(v2, r);
    if (i === 0) s.moveTo(a.x, a.y); else s.lineTo(a.x, a.y);
    s.quadraticCurveTo(p1.x, p1.y, b.x, b.y);
  }
  s.closePath();
  return s;
}
export const v2 = (x, y) => new THREE.Vector2(x, y);

/* ---------- small painted textures ---------- */
export function canvasTex(w, h, draw, o = {}){
  const c = document.createElement('canvas');
  c.width = w; c.height = h;
  const g = c.getContext('2d');
  draw(g, w, h);
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = o.linear ? THREE.NoColorSpace : THREE.SRGBColorSpace;
  t.anisotropy = 8;
  if (o.repeat){ t.wrapS = t.wrapT = THREE.RepeatWrapping; t.repeat.set(o.repeat[0], o.repeat[1]); }
  t.needsUpdate = true;
  return t;
}
export function radialTex(color, size = 128, inner = 0){
  return canvasTex(size, size, (g, w) => {
    const gr = g.createRadialGradient(w / 2, w / 2, w * inner, w / 2, w / 2, w / 2);
    const c = new THREE.Color(color);
    const rgb = `${Math.round(c.r * 255)},${Math.round(c.g * 255)},${Math.round(c.b * 255)}`;
    gr.addColorStop(0, `rgba(${rgb},1)`); gr.addColorStop(0.5, `rgba(${rgb},.55)`); gr.addColorStop(1, `rgba(${rgb},0)`);
    g.fillStyle = gr; g.fillRect(0, 0, w, w);
  });
}
/* A soft decal (blush, contact shadow, glow) laid on a surface. */
export function decal(parent, tex, size, at, normal, o = {}){
  const m = new THREE.Mesh(new THREE.PlaneGeometry(size.x ?? size, size.y ?? size), new THREE.MeshBasicMaterial({ map: tex, transparent: true, depthWrite: false,
    opacity: o.opacity ?? 1, toneMapped: false, polygonOffset: true, polygonOffsetFactor: -4 }));
  m.position.copy(at).addScaledVector(normal, o.lift ?? 0.004);
  orient(m, normal);
  m.renderOrder = o.order ?? 2;
  parent.add(m);
  return m;
}
export function rng(seed){ let a = seed >>> 0; return () => { a |= 0; a = a + 0x6D2B79F5 | 0; let t = Math.imul(a ^ a >>> 15, 1 | a); t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t; return ((t ^ t >>> 14) >>> 0) / 4294967296; }; }
