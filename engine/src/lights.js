/* The light rig shared by the game and the picture renders: a warm key light with soft shadows, a cool fill,
   a rim light that outlines the friend from behind, and a soft room reflection for the glossy bits. */
import * as THREE from 'three';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';

export function makeRenderer(canvas, o = {}){
  const r = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: !!o.alpha, preserveDrawingBuffer: !!o.preserve, powerPreference: 'high-performance' });
  r.outputColorSpace = THREE.SRGBColorSpace;
  r.toneMapping = THREE.NeutralToneMapping;
  r.toneMappingExposure = o.exposure ?? 0.92;
  r.shadowMap.enabled = true;
  r.shadowMap.type = THREE.PCFShadowMap;
  if (o.alpha) r.setClearColor(0x000000, 0);
  return r;
}
let envCache = new WeakMap();
export function envFor(renderer){
  if (envCache.has(renderer)) return envCache.get(renderer);
  const pm = new THREE.PMREMGenerator(renderer);
  const env = pm.fromScene(new RoomEnvironment(), 0.04).texture;
  pm.dispose();
  envCache.set(renderer, env);
  return env;
}
export function rig(scene, o = {}){
  const g = new THREE.Group(); scene.add(g);
  const hemi = new THREE.HemisphereLight(o.sky ?? 0xfff3e2, o.ground ?? 0xb98a6a, o.hemi ?? 0.55);
  const key = new THREE.DirectionalLight(o.keyColor ?? 0xfff0dc, o.key ?? 2.9);
  key.position.set(-2.2, 4.2, 3.4);
  key.castShadow = true;
  key.shadow.mapSize.set(o.shadowSize ?? 2048, o.shadowSize ?? 2048);
  key.shadow.camera.left = -3; key.shadow.camera.right = 3; key.shadow.camera.top = 3.4; key.shadow.camera.bottom = -1.2;
  key.shadow.camera.near = 0.5; key.shadow.camera.far = 14;
  key.shadow.bias = -0.0004; key.shadow.normalBias = 0.02; key.shadow.radius = 6;
  const fill = new THREE.DirectionalLight(o.fillColor ?? 0xcfe2ff, o.fill ?? 0.55);
  fill.position.set(3, 2, 2.5);
  const rim = new THREE.DirectionalLight(o.rimColor ?? 0xfff6e8, o.rim ?? 1.3);
  rim.position.set(1.5, 3, -4);
  g.add(hemi, key, key.target, fill, rim);
  return { group: g, hemi, key, fill, rim };
}
