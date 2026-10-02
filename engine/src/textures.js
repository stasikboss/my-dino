/* Painted textures for the rooms, made in code: wallpaper, wood floors, tiles, grass, sky, the views out of the windows. */
import * as THREE from 'three';
import { canvasTex, rng } from './util.js';

const cache = new Map();
const once = (k, f) => { if (!cache.has(k)) cache.set(k, f()); return cache.get(k); };

export const wallpaperDots = (base, dot, dot2) => once('wd' + base + dot, () => canvasTex(256, 256, (g, w, h) => {
  g.fillStyle = base; g.fillRect(0, 0, w, h);
  const R = rng(3);
  for (let y = 0; y < 4; y++) for (let x = 0; x < 4; x++){
    const cx = x * 64 + (y % 2 ? 32 : 0) + 16, cy = y * 64 + 16;
    g.fillStyle = dot; g.beginPath(); g.arc(cx, cy, 7, 0, 7); g.fill();
    g.fillStyle = dot2; g.beginPath(); g.arc(cx + 32, cy + 32, 3.5, 0, 7); g.fill();
  }
  // a faint paper grain
  for (let i = 0; i < 1800; i++){ g.fillStyle = `rgba(120,70,30,${0.012 + R() * 0.02})`; g.fillRect(R() * w, R() * h, 1.5, 1.5); }
}, { repeat: [10, 6] }));

export const wallpaperStars = () => once('ws', () => canvasTex(256, 256, (g, w, h) => {
  g.fillStyle = '#cfc6fb'; g.fillRect(0, 0, w, h);
  const star = (x, y, r, c) => { g.fillStyle = c; g.beginPath(); for (let i = 0; i < 10; i++){ const a = -Math.PI / 2 + i * Math.PI / 5, rr = i % 2 ? r * 0.45 : r; g[i ? 'lineTo' : 'moveTo'](x + Math.cos(a) * rr, y + Math.sin(a) * rr); } g.closePath(); g.fill(); };
  for (let y = 0; y < 4; y++) for (let x = 0; x < 4; x++){
    const cx = x * 64 + (y % 2 ? 32 : 0) + 16, cy = y * 64 + 18;
    star(cx, cy, 9, '#f6f0ff');
    g.fillStyle = '#b9aef5'; g.beginPath(); g.arc(cx + 32, cy + 30, 4, 0, 7); g.fill();
  }
}, { repeat: [10, 6] }));

export const wood = (c1, c2, plank = 6) => once('wood' + c1 + c2, () => canvasTex(512, 512, (g, w, h) => {
  const R = rng(11);
  const ph = h / plank;
  for (let i = 0; i < plank; i++){
    const shadeK = 0.9 + R() * 0.2;
    const col = new THREE.Color(c1).lerp(new THREE.Color(c2), R());
    col.multiplyScalar(shadeK);
    g.fillStyle = '#' + col.getHexString(); g.fillRect(0, i * ph, w, ph);
    // grain
    for (let k = 0; k < 18; k++){
      g.strokeStyle = `rgba(90,45,15,${0.05 + R() * 0.08})`; g.lineWidth = 1 + R() * 2;
      g.beginPath(); const y0 = i * ph + R() * ph;
      g.moveTo(0, y0); for (let x = 0; x <= w; x += 32) g.lineTo(x, y0 + Math.sin(x * 0.02 + k) * 3 * R());
      g.stroke();
    }
    // plank joints
    g.fillStyle = 'rgba(70,35,10,.35)'; g.fillRect(0, i * ph, w, 3);
    const jx = R() * w; g.fillRect(jx, i * ph, 3, ph);
  }
}, { repeat: [3, 4] }));

export const tiles = (c1, grout, n = 8, c2) => once('tiles' + c1 + grout + n + c2, () => canvasTex(512, 512, (g, w, h) => {
  g.fillStyle = grout; g.fillRect(0, 0, w, h);
  const s = w / n, R = rng(5);
  for (let y = 0; y < n; y++) for (let x = 0; x < n; x++){
    const col = new THREE.Color(c2 && (x + y) % 2 ? c2 : c1).multiplyScalar(0.96 + R() * 0.06);
    const gr = g.createLinearGradient(x * s, y * s, x * s + s, y * s + s);
    gr.addColorStop(0, '#' + col.clone().lerp(new THREE.Color('#fff'), 0.25).getHexString());
    gr.addColorStop(1, '#' + col.getHexString());
    g.fillStyle = gr;
    const m = 3;
    g.beginPath(); g.roundRect(x * s + m, y * s + m, s - m * 2, s - m * 2, 6); g.fill();
  }
}, { repeat: [4, 4] }));

export const grass = () => once('grass', () => canvasTex(512, 512, (g, w, h) => {
  g.fillStyle = '#86c95a'; g.fillRect(0, 0, w, h);
  const R = rng(9);
  for (let i = 0; i < 2600; i++){
    const x = R() * w, y = R() * h, l = 6 + R() * 10;
    g.strokeStyle = R() < 0.5 ? 'rgba(70,140,40,.5)' : 'rgba(170,225,110,.5)'; g.lineWidth = 2;
    g.beginPath(); g.moveTo(x, y); g.lineTo(x + (R() - 0.5) * 4, y - l); g.stroke();
  }
  for (let i = 0; i < 40; i++){
    const x = R() * w, y = R() * h, c = ['#fff6cf', '#ffd35c', '#ff9ec4', '#ffffff'][(R() * 4) | 0];
    for (let k = 0; k < 5; k++){ g.fillStyle = c; g.beginPath(); g.arc(x + Math.cos(k * 1.26) * 4, y + Math.sin(k * 1.26) * 4, 3.2, 0, 7); g.fill(); }
    g.fillStyle = '#ffb11f'; g.beginPath(); g.arc(x, y, 2.4, 0, 7); g.fill();
  }
}, { repeat: [8, 8] }));

export const sand = () => once('sand', () => canvasTex(512, 512, (g, w, h) => {
  g.fillStyle = '#ecc98e'; g.fillRect(0, 0, w, h);
  const R = rng(13);
  for (let i = 0; i < 5000; i++){ g.fillStyle = R() < 0.5 ? 'rgba(160,110,50,.25)' : 'rgba(255,245,220,.4)'; g.fillRect(R() * w, R() * h, 2, 2); }
  for (let i = 0; i < 30; i++){ g.fillStyle = 'rgba(150,105,55,.5)'; g.beginPath(); g.ellipse(R() * w, R() * h, 5 + R() * 6, 3 + R() * 4, R() * 3, 0, 7); g.fill(); }
}, { repeat: [8, 8] }));

export const skyGradient = (top, mid, bottom) => once('sky' + top + bottom, () => canvasTex(8, 512, (g, w, h) => {
  const gr = g.createLinearGradient(0, 0, 0, h);
  gr.addColorStop(0, top); gr.addColorStop(0.55, mid); gr.addColorStop(1, bottom);
  g.fillStyle = gr; g.fillRect(0, 0, w, h);
}));

/* The view out of a window: hills, a palm tree and a little volcano by day; the moon and stars by night. */
export const windowView = night => once('view' + night, () => canvasTex(512, 512, (g, w, h) => {
  const R = rng(night ? 21 : 4);
  const sky = g.createLinearGradient(0, 0, 0, h);
  if (night){ sky.addColorStop(0, '#141c4d'); sky.addColorStop(1, '#3a4aa0'); }
  else { sky.addColorStop(0, '#5cb6f5'); sky.addColorStop(0.75, '#bfe6ff'); sky.addColorStop(1, '#e8f7ff'); }
  g.fillStyle = sky; g.fillRect(0, 0, w, h);
  if (night){
    for (let i = 0; i < 70; i++){ g.fillStyle = `rgba(255,250,220,${0.4 + R() * 0.6})`; g.beginPath(); g.arc(R() * w, R() * h * 0.7, 0.8 + R() * 1.8, 0, 7); g.fill(); }
    const mg = g.createRadialGradient(340, 150, 10, 340, 150, 120); mg.addColorStop(0, 'rgba(255,240,180,.55)'); mg.addColorStop(1, 'rgba(255,240,180,0)');
    g.fillStyle = mg; g.fillRect(0, 0, w, h);
    g.fillStyle = '#ffe9a6'; g.beginPath(); g.arc(340, 150, 52, 0, 7); g.fill();
    g.fillStyle = '#2a3a8a'; g.beginPath(); g.arc(365, 130, 46, 0, 7); g.fill();
  } else {
    const sg = g.createRadialGradient(110, 110, 10, 110, 110, 110); sg.addColorStop(0, 'rgba(255,250,210,.95)'); sg.addColorStop(1, 'rgba(255,250,210,0)');
    g.fillStyle = sg; g.fillRect(0, 0, w, h);
    g.fillStyle = '#ffe26a'; g.beginPath(); g.arc(110, 110, 34, 0, 7); g.fill();
    for (const [x, y, s] of [[330, 90, 1], [420, 160, 0.7]]){ g.fillStyle = '#ffffff'; for (const [dx, dy, r] of [[0, 0, 26], [26, -10, 30], [54, 2, 24], [24, 10, 26]]){ g.beginPath(); g.arc(x + dx * s, y + dy * s, r * s, 0, 7); g.fill(); } }
    // volcano
    g.fillStyle = '#a7735a'; g.beginPath(); g.moveTo(250, 400); g.lineTo(330, 250); g.lineTo(370, 250); g.lineTo(460, 400); g.fill();
    g.fillStyle = '#ff7a3d'; g.beginPath(); g.moveTo(330, 250); g.quadraticCurveTo(350, 275, 370, 250); g.fill();
    g.fillStyle = 'rgba(230,235,240,.9)'; for (const [x, y, r] of [[350, 228, 12], [360, 205, 16], [348, 180, 18]]){ g.beginPath(); g.arc(x, y, r, 0, 7); g.fill(); }
  }
  const hill = (y, c, a, f) => { g.fillStyle = c; g.beginPath(); g.moveTo(0, h); for (let x = 0; x <= w; x += 8) g.lineTo(x, y - Math.sin(x * f + a) * 24 - Math.sin(x * f * 2.3) * 10); g.lineTo(w, h); g.fill(); };
  hill(380, night ? '#203070' : '#a6dc76', 1, 0.012);
  hill(440, night ? '#1a275c' : '#6db447', 2.2, 0.009);
  if (!night){
    // palm tree
    g.strokeStyle = '#8a5a2b'; g.lineWidth = 12; g.lineCap = 'round';
    g.beginPath(); g.moveTo(140, 470); g.quadraticCurveTo(120, 360, 160, 290); g.stroke();
    g.fillStyle = '#3fae5a';
    for (const a of [-2.6, -1.9, -1.2, -0.5, 0.2]){ g.save(); g.translate(160, 290); g.rotate(a); g.beginPath(); g.ellipse(48, 0, 50, 13, 0, 0, 7); g.fill(); g.restore(); }
  }
}));

export const paintingPaw = () => once('paw', () => canvasTex(256, 256, (g, w, h) => {
  g.fillStyle = '#fff4e0'; g.fillRect(0, 0, w, h);
  const gr = g.createRadialGradient(128, 128, 20, 128, 128, 150); gr.addColorStop(0, '#ffe8c4'); gr.addColorStop(1, '#ffcf96');
  g.fillStyle = gr; g.fillRect(10, 10, w - 20, h - 20);
  // a three-toed dinosaur footprint
  g.fillStyle = '#b06d3a';
  g.beginPath(); g.ellipse(128, 160, 34, 40, 0, 0, 7); g.fill();
  for (const [x, y, a] of [[78, 92, -0.45], [128, 70, 0], [178, 92, 0.45]]){ g.save(); g.translate(x, y); g.rotate(a); g.beginPath(); g.ellipse(0, 0, 16, 34, 0, 0, 7); g.fill(); g.restore(); }
}));

export const rugRings = (c1, c2, c3) => once('rug' + c1, () => canvasTex(512, 512, (g, w, h) => {
  const cx = w / 2, cy = h / 2;
  const rings = [[250, c1], [215, c2], [190, c1], [160, c3], [130, c1], [96, c2], [70, c1]];
  for (const [r, c] of rings){ g.fillStyle = c; g.beginPath(); g.arc(cx, cy, r, 0, 7); g.fill(); }
  g.setLineDash([14, 10]); g.strokeStyle = 'rgba(255,255,255,.75)'; g.lineWidth = 6; g.beginPath(); g.arc(cx, cy, 112, 0, 7); g.stroke();
  const R = rng(2); for (let i = 0; i < 3000; i++){ g.fillStyle = `rgba(0,0,0,${R() * 0.05})`; g.fillRect(R() * w, R() * h, 2, 2); }
}));

export const stripes = (c1, c2, n = 8, vertical = false) => once('st' + c1 + c2 + n + vertical, () => canvasTex(256, 256, (g, w, h) => {
  for (let i = 0; i < n; i++){ g.fillStyle = i % 2 ? c2 : c1; if (vertical) g.fillRect(w * i / n, 0, w / n + 1, h); else g.fillRect(0, h * i / n, w, h / n + 1); }
}));

export const eggSpots = (base, spot, seed = 1) => {
  // a fresh canvas each time, because cracks get drawn on it
  const c = document.createElement('canvas'); c.width = 512; c.height = 256;
  const g = c.getContext('2d');
  g.fillStyle = base; g.fillRect(0, 0, 512, 256);
  const R = rng(seed);
  for (let i = 0; i < 26; i++){
    g.fillStyle = spot; g.globalAlpha = 0.75 + R() * 0.25;
    const x = R() * 512, y = 30 + R() * 200, rx = 10 + R() * 18, ry = 8 + R() * 14, rot = R() * 3;
    // drawn again one width to each side, so a spot that crosses the edge continues around the egg
    for (const dx of [-512, 0, 512]){ g.beginPath(); g.ellipse(x + dx, y, rx, ry, rot, 0, 7); g.fill(); }
  }
  g.globalAlpha = 1;
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 8;
  t.wrapS = THREE.RepeatWrapping;
  return { tex: t, canvas: c, g };
};

export const straw = () => once('straw', () => canvasTex(256, 256, (g, w, h) => {
  g.fillStyle = '#c99a52'; g.fillRect(0, 0, w, h);
  const R = rng(17);
  for (let i = 0; i < 500; i++){ g.strokeStyle = R() < 0.5 ? 'rgba(255,225,150,.7)' : 'rgba(120,80,30,.5)'; g.lineWidth = 2 + R() * 2; const x = R() * w, y = R() * h, a = R() * 3; g.beginPath(); g.moveTo(x, y); g.lineTo(x + Math.cos(a) * 30, y + Math.sin(a) * 30); g.stroke(); }
}, { repeat: [3, 1] }));

export const weave = () => once('weave', () => canvasTex(256, 256, (g, w, h) => {
  g.fillStyle = '#c98a4b'; g.fillRect(0, 0, w, h);
  for (let y = 0; y < 8; y++) for (let x = 0; x < 8; x++){
    g.fillStyle = (x + y) % 2 ? '#e3ad6b' : '#b9783c';
    g.beginPath(); g.roundRect(x * 32 + 2, y * 32 + 2, 28, 28, 8); g.fill();
  }
}, { repeat: [6, 2] }));

export const blockLetter = (ch, bg) => once('bl' + ch + bg, () => canvasTex(128, 128, (g, w, h) => {
  g.fillStyle = bg; g.fillRect(0, 0, w, h);
  g.strokeStyle = 'rgba(255,255,255,.7)'; g.lineWidth = 8; g.strokeRect(8, 8, w - 16, h - 16);
  g.fillStyle = '#ffffff'; g.font = '700 84px Fredoka, Varela Round, sans-serif'; g.textAlign = 'center'; g.textBaseline = 'middle';
  g.fillText(ch, w / 2, h / 2 + 4);
}));
