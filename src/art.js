/* ---------- artwork: nine original characters drawn as SVG on a 240x240 stage, hats, foods and tools ----------
   Every character shares one rig so the game can animate them the same way:
   .p-tail (wags), .p-body (breathes), .p-head (tilts, nods), .eye (blinks, looks, closes, smiles), .mouth (talks, eats).
   Coordinates are in stage units; the ground is at y=226. */
const INK = '#1b2430';
const SW = 4;

const scallop = (cx, cy, rx, ry, n, bump, a0 = 0, a1 = 360) => {
  // a wavy ellipse (a frill or a mane): n bumps between angles a0 and a1, closed through the center when partial
  const pts = [];
  const full = a1 - a0 >= 360;
  const steps = n * 2;
  let d = '';
  for (let i = 0; i <= steps; i++){
    const t = (a0 + (a1 - a0) * i / steps) * Math.PI / 180;
    const out = i % 2 === 1;
    const k = out ? 1 + bump : 1;
    pts.push([cx + Math.cos(t) * rx * k, cy + Math.sin(t) * ry * k]);
  }
  d = 'M' + pts[0][0].toFixed(1) + ' ' + pts[0][1].toFixed(1);
  for (let i = 1; i < pts.length; i += 2){
    const c = pts[i], e = pts[i + 1] || pts[0];
    d += ' Q' + c[0].toFixed(1) + ' ' + c[1].toFixed(1) + ' ' + e[0].toFixed(1) + ' ' + e[1].toFixed(1);
  }
  return d + (full ? ' Z' : ' L' + cx + ' ' + cy + ' Z');
};

let U = 'p0';               // the id prefix of the character being drawn (each drawing has its own gradients)
function eyeSvg(x, y, r){
  const ry = r * 1.12;
  const f = n => n.toFixed(1);
  return `<g class="eye" transform="translate(${x} ${y})">
    <g class="eye-open">
      <ellipse rx="${r}" ry="${f(ry)}" fill="url(#${U}-ew)" stroke="${INK}" stroke-width="3.5"/>
      <g class="pupil">
        <circle r="${f(r * 0.68)}" fill="url(#${U}-iris)"/>
        <circle r="${f(r * 0.4)}" fill="#120d20"/>
        <ellipse cx="${f(-r * 0.26)}" cy="${f(-r * 0.3)}" rx="${f(r * 0.27)}" ry="${f(r * 0.24)}" fill="#fff"/>
        <circle cx="${f(r * 0.24)}" cy="${f(r * 0.26)}" r="${f(r * 0.12)}" fill="#fff" opacity=".9"/>
      </g>
      <path d="M${f(-r * 0.92)} ${f(-ry * 0.3)} Q0 ${f(-ry * 1.15)} ${f(r * 0.92)} ${f(-ry * 0.3)} Q0 ${f(-ry * 0.78)} ${f(-r * 0.92)} ${f(-ry * 0.3)} Z" fill="${INK}" opacity=".13"/>
      <path class="lid" d="M${f(-r * 1.02)} ${f(-ry * 0.12)} Q${f(-r * 0.7)} ${f(-ry * 1.12)} 0 ${f(-ry * 1.08)} Q${f(r * 0.7)} ${f(-ry * 1.12)} ${f(r * 1.02)} ${f(-ry * 0.12)}" fill="none" stroke="${INK}" stroke-width="2.6" stroke-linecap="round"/>
    </g>
    <path class="eye-shut" d="M${-r} -1 Q0 ${f(r * 0.8)} ${r} -1" fill="none" stroke="${INK}" stroke-width="4" stroke-linecap="round"/>
    <path class="eye-happy" d="M${-r} ${f(r * 0.35)} Q0 ${f(-r * 0.95)} ${r} ${f(r * 0.35)}" fill="none" stroke="${INK}" stroke-width="4.5" stroke-linecap="round"/>
  </g>`;
}
const cheeks = (x1, x2, y, rx = 9, ry = 6) =>
  `<g class="cheeks" fill="url(#${U}-cheek)"><ellipse cx="${x1}" cy="${y}" rx="${rx * 1.5}" ry="${ry * 1.5}"/><ellipse cx="${x2}" cy="${y}" rx="${rx * 1.5}" ry="${ry * 1.5}"/></g>`;

// A plain smiling mouth (closed) and an open one (talking, eating), centered at x,y with width w.
function mouthSvg(x, y, w, extraClosed = '', extraOpen = ''){
  const h = w / 2;
  return `<g class="mouth" transform="translate(${x} ${y})">
    <g class="m-closed"><path d="M${-h} 0 Q0 ${(w * 0.55).toFixed(1)} ${h} 0" fill="none" stroke="${INK}" stroke-width="4" stroke-linecap="round"/>${extraClosed}</g>
    <g class="m-open"><path d="M${(-h * 0.8).toFixed(1)} -2 Q0 ${(w * 0.95).toFixed(1)} ${(h * 0.8).toFixed(1)} -2 Q0 4 ${(-h * 0.8).toFixed(1)} -2 Z" fill="url(#${U}-mouth)" stroke="${INK}" stroke-width="3.5" stroke-linejoin="round"/>
      <ellipse cx="0" cy="${(w * 0.42).toFixed(1)}" rx="${(w * 0.2).toFixed(1)}" ry="${(w * 0.1).toFixed(1)}" fill="#ff8fa3"/>${extraOpen}</g>
  </g>`;
}
const legPath = (x1, x2, top, bottom = 222) => {
  // a soft, slightly bulging leg with a round foot
  const mid = (x1 + x2) / 2, h = bottom - top;
  return `M${x1 + 1} ${top} C${x1 - 3} ${top + h * 0.45} ${x1 - 3} ${bottom - 10} ${x1} ${bottom - 3} Q${mid} ${bottom + 6} ${x2} ${bottom - 3} C${x2 + 3} ${bottom - 10} ${x2 + 3} ${top + h * 0.45} ${x2 - 1} ${top} Z`;
};
const toes = (x1, x2, y, n = 3, color = '#fff5e2') => {
  let s = `<g fill="${color}" stroke="${INK}" stroke-width="2">`;
  const w = (x2 - x1) / n;
  for (let i = 0; i < n; i++) s += `<path d="M${(x1 + w * i + 2).toFixed(1)} ${y} Q${(x1 + w * (i + 0.5)).toFixed(1)} ${y - 8} ${(x1 + w * (i + 1) - 2).toFixed(1)} ${y} Z"/>`;
  return s + '</g>';
};
const thick = (d, w, fill) =>
  `<path d="${d}" fill="none" stroke="${INK}" stroke-width="${(w + SW * 2 * 0.8).toFixed(1)}" stroke-linecap="round" stroke-linejoin="round"/>` +
  `<path d="${d}" fill="none" stroke="${fill}" stroke-width="${w}" stroke-linecap="round" stroke-linejoin="round"/>`;
const plate = (x, base, w, h, fill, rot = 0) =>
  `<path transform="rotate(${rot} ${x} ${base})" d="M${x - w / 2} ${base} L${(x - w * 0.56).toFixed(1)} ${(base - h * 0.45).toFixed(1)} Q${x} ${base - h * 1.08} ${(x + w * 0.56).toFixed(1)} ${(base - h * 0.45).toFixed(1)} L${x + w / 2} ${base} Z" fill="${fill}" stroke="${INK}" stroke-width="${SW}" stroke-linejoin="round"/>`;

/* Each species: colors, body (drawn behind the head), head, and the anchors the game needs:
   mouth (where food goes), head (pivot for tilting), hat (top of the head and its width), eyes (for glasses). */
const SPECIES = {
  trex: {
    line: '#2c6a1e',
    iris: '#c9862f', gloss: [[88, 38, 20, 9], [96, 130, 12, 7]], ao: [120, 124, 50, 11],
    c: { body: '#6cc24a', dark: '#4f9c34', belly: '#eaf6b5' },
    mouth: [120, 100], headPivot: [120, 122], hat: [120, 26, 1.55], eyes: [[97, 68], [143, 68], 13],
    tail: [150, 180],
    body(c){
      return `<g class="p-tail" style="transform-origin:150px 184px"><path d="M146 166 C188 156 222 174 232 206 C214 210 184 204 148 200 Z" fill="${c.body}" stroke="${INK}" stroke-width="${SW}" stroke-linejoin="round"/>
          <g fill="${c.dark}"><ellipse cx="190" cy="176" rx="6" ry="4"/><ellipse cx="212" cy="190" rx="5" ry="3.5"/></g></g>
        <path d="${legPath(84, 116, 180)}" fill="${c.body}" stroke="${INK}" stroke-width="${SW}" stroke-linejoin="round"/>
        <path d="${legPath(124, 156, 180)}" fill="${c.body}" stroke="${INK}" stroke-width="${SW}" stroke-linejoin="round"/>
        ${toes(84, 116, 224)}${toes(124, 156, 224)}
        <path d="M74 168 C70 130 94 110 120 110 C146 110 170 130 166 168 C163 200 144 212 120 212 C96 212 77 200 74 168 Z" fill="${c.body}" stroke="${INK}" stroke-width="${SW}"/>
        <ellipse cx="120" cy="172" rx="31" ry="32" fill="${c.belly}"/>
        <g fill="none" stroke="${c.raw.dark}" stroke-width="2.5" stroke-linecap="round" opacity=".45"><path d="M98 160 Q120 166 142 160"/><path d="M96 174 Q120 181 144 174"/><path d="M100 188 Q120 194 140 188"/></g>
        <g class="p-arm-l">${thick('M90 144 Q74 148 76 160', 8, c.body)}<path d="M73 162 l-4 5 M78 163 l-1 6" stroke="${INK}" stroke-width="2.5" stroke-linecap="round"/></g>
        <g class="p-arm-r">${thick('M150 144 Q166 148 164 160', 8, c.body)}<path d="M167 162 l4 5 M162 163 l1 6" stroke="${INK}" stroke-width="2.5" stroke-linecap="round"/></g>`;
    },
    head(c){
      const teeth = (y, dir) => [92, 102, 112, 128, 138, 148].map((x, i) => {
        const yy = y + (Math.abs(x - 120) > 20 ? -3 : 0);
        return `<path d="M${x - 4} ${yy} L${x} ${yy + 7 * dir} L${x + 4} ${yy} Z" fill="#fffaf0" stroke="${INK}" stroke-width="2" stroke-linejoin="round"/>`;
      }).join('');
      return `<path d="M58 84 C56 42 88 22 120 22 C152 22 184 42 182 84 C182 112 156 126 120 126 C84 126 58 112 58 84 Z" fill="${c.body}" stroke="${INK}" stroke-width="${SW}"/>
        <g fill="${c.dark}"><ellipse cx="100" cy="36" rx="7" ry="4.5"/><ellipse cx="121" cy="30" rx="6" ry="4"/><ellipse cx="141" cy="36" rx="7" ry="4.5"/><ellipse cx="168" cy="70" rx="4" ry="6"/><ellipse cx="72" cy="70" rx="4" ry="6"/></g>
        <path d="M82 50 Q96 42 108 50" fill="none" stroke="${INK}" stroke-width="4" stroke-linecap="round"/><path d="M132 50 Q144 42 158 50" fill="none" stroke="${INK}" stroke-width="4" stroke-linecap="round"/>
        <g fill="${INK}"><ellipse cx="112" cy="86" rx="2.6" ry="2"/><ellipse cx="128" cy="86" rx="2.6" ry="2"/></g>
        ${eyeSvg(97, 68, 13)}${eyeSvg(143, 68, 13)}
        ${cheeks(76, 164, 92, 10, 6)}
        <g class="mouth" transform="translate(0 0)">
          <g class="m-closed"><path d="M84 98 Q120 120 156 98" fill="none" stroke="${INK}" stroke-width="4" stroke-linecap="round"/>${teeth(101, 1)}</g>
          <g class="m-open"><path d="M84 96 Q120 140 156 96 Q120 104 84 96 Z" fill="url(#${U}-mouth)" stroke="${INK}" stroke-width="3.5" stroke-linejoin="round"/><ellipse cx="120" cy="122" rx="14" ry="6" fill="#ff8fa3"/>${teeth(99, 1)}</g>
        </g>`;
    }
  },

  trike: {
    line: '#8a4410',
    iris: '#7a4a1e', gloss: [[100, 78, 16, 7], [96, 30, 16, 6], [120, 152, 16, 6]], ao: [126, 150, 54, 11],
    c: { body: '#f2a33a', dark: '#cf7f22', frill: '#ffd35c', spot: '#f2a33a', horn: '#fff5e2', beak: '#c98a4b' },
    mouth: [120, 136], headPivot: [120, 150], hat: [120, 68, 1.15], eyes: [[100, 98], [140, 98], 12],
    body(c){
      return `<g class="p-tail" style="transform-origin:184px 192px"><path d="M178 180 C206 176 226 188 234 208 C214 212 196 208 176 204 Z" fill="${c.body}" stroke="${INK}" stroke-width="${SW}" stroke-linejoin="round"/></g>
        <path d="${legPath(168, 194, 186)}" fill="${c.dark}" stroke="${INK}" stroke-width="${SW}" stroke-linejoin="round"/>
        <ellipse cx="134" cy="176" rx="74" ry="40" fill="${c.body}" stroke="${INK}" stroke-width="${SW}"/>
        <g fill="${c.dark}" opacity=".7"><ellipse cx="168" cy="160" rx="9" ry="6"/><ellipse cx="190" cy="176" rx="6" ry="4.5"/><ellipse cx="150" cy="146" rx="6" ry="4"/></g>
        <path d="${legPath(70, 98, 184)}" fill="${c.body}" stroke="${INK}" stroke-width="${SW}" stroke-linejoin="round"/>
        <path d="${legPath(108, 136, 188)}" fill="${c.body}" stroke="${INK}" stroke-width="${SW}" stroke-linejoin="round"/>
        ${toes(70, 98, 224)}${toes(108, 136, 224)}`;
    },
    head(c){
      const fan = [];
      const N = 11, a0 = 196, a1 = 344;
      for (let k = 0; k <= N * 2; k++){
        const ang = (a0 + (a1 - a0) * k / (N * 2)) * Math.PI / 180, out = k % 2 ? 1.11 : 1;
        fan.push([120 + Math.cos(ang) * 80 * out, 92 + Math.sin(ang) * 66 * out]);
      }
      let fd = `M96 136 C70 134 44 120 ${fan[0][0].toFixed(1)} ${fan[0][1].toFixed(1)}`;
      for (let k = 1; k < fan.length; k += 2) fd += ` Q${fan[k][0].toFixed(1)} ${fan[k][1].toFixed(1)} ${fan[k + 1][0].toFixed(1)} ${fan[k + 1][1].toFixed(1)}`;
      fd += ` C196 120 170 134 144 136 Z`;
      return `<path d="${fd}" fill="${c.frill}" stroke="${INK}" stroke-width="${SW}" stroke-linejoin="round"/>
        <path d="${fd}" fill="none" stroke="${c.raw.spot}" stroke-width="7" opacity=".35" transform="translate(120 96) scale(.84) translate(-120 -96)"/>
        <g fill="${c.spot}"><circle cx="60" cy="74" r="7"/><circle cx="180" cy="74" r="7"/><circle cx="82" cy="44" r="6"/><circle cx="158" cy="44" r="6"/><circle cx="120" cy="32" r="6.5"/><circle cx="100" cy="36" r="4"/><circle cx="140" cy="36" r="4"/></g>
        <ellipse cx="120" cy="108" rx="52" ry="44" fill="${c.body}" stroke="${INK}" stroke-width="${SW}"/>
        <path d="M92 80 C82 62 80 44 86 26 C94 42 102 58 106 74 Z" fill="${c.horn}" stroke="${INK}" stroke-width="${SW}" stroke-linejoin="round"/>
        <path d="M148 80 C158 62 160 44 154 26 C146 42 138 58 134 74 Z" fill="${c.horn}" stroke="${INK}" stroke-width="${SW}" stroke-linejoin="round"/>
        <path d="M86 26 C84 34 85 40 88 46 L92 40 Z M154 26 C156 34 155 40 152 46 L148 40 Z" fill="#d8c3a0" opacity=".9"/>
        <path d="M111 124 Q117 106 121 98 Q125 106 129 124 Z" fill="${c.horn}" stroke="${INK}" stroke-width="3.5" stroke-linejoin="round"/>
        ${eyeSvg(100, 98, 12)}${eyeSvg(140, 98, 12)}
        ${cheeks(82, 158, 120, 9, 6)}
        <g class="mouth">
          <g class="m-closed"><path d="M98 132 Q120 146 142 132" fill="none" stroke="${INK}" stroke-width="4" stroke-linecap="round"/>
            <path d="M110 140 Q120 156 130 140 Q120 146 110 140 Z" fill="${c.beak}" stroke="${INK}" stroke-width="3" stroke-linejoin="round"/></g>
          <g class="m-open"><path d="M98 130 Q120 162 142 130 Q120 136 98 130 Z" fill="url(#${U}-mouth)" stroke="${INK}" stroke-width="3.5" stroke-linejoin="round"/>
            <ellipse cx="120" cy="146" rx="9" ry="4" fill="#ff8fa3"/>
            <path d="M110 150 Q120 166 130 150 Q120 156 110 150 Z" fill="${c.beak}" stroke="${INK}" stroke-width="3" stroke-linejoin="round"/></g>
        </g>`;
    }
  },

  stego: {
    line: '#1d5e57',
    iris: '#4f7a2a', gloss: [[56, 120, 14, 6], [116, 134, 14, 6]], ao: [96, 178, 26, 9],
    c: { body: '#4fb3a9', dark: '#3a8f87', far: '#3a8f87', belly: '#d9f2c4', plate: '#ff8a5c', plate2: '#ffb38a', spike: '#fff5e2' },
    mouth: [72, 164], headPivot: [88, 176], hat: [73, 114, 1.3], eyes: [[56, 140], [90, 140], 11],
    body(c){
      const plates = [[92, 136, 22, 22], [112, 120, 26, 30], [136, 114, 28, 34], [160, 120, 26, 30], [180, 136, 22, 24], [196, 154, 18, 18]];
      const back = plates.map(p => plate(p[0] + 10, p[1] + 4, p[2] * 0.8, p[3] * 0.8, c.plate2)).join('');
      const front = plates.map((p, i) => plate(p[0], p[1], p[2], p[3], c.plate, (i - 2.5) * 7)).join('');
      const spikes = [[214, 150, -30], [222, 142, -10], [226, 158, 40], [230, 150, 60]].map(s =>
        `<path transform="rotate(${s[2]} ${s[0]} ${s[1]})" d="M${s[0] - 4} ${s[1]} L${s[0]} ${s[1] - 16} L${s[0] + 4} ${s[1]} Z" fill="${c.spike}" stroke="${INK}" stroke-width="3" stroke-linejoin="round"/>`).join('');
      return `<g class="p-tail" style="transform-origin:186px 186px">${spikes}<path d="M180 172 C204 164 220 154 232 144 C232 164 214 186 186 200 Z" fill="${c.body}" stroke="${INK}" stroke-width="${SW}" stroke-linejoin="round"/></g>
        ${back}
        <path d="${legPath(112, 134, 192)}" fill="${c.far}" stroke="${INK}" stroke-width="${SW}" stroke-linejoin="round"/>
        <path d="${legPath(148, 170, 192)}" fill="${c.far}" stroke="${INK}" stroke-width="${SW}" stroke-linejoin="round"/>
        ${front}
        <path d="M64 186 C58 146 98 122 138 122 C184 122 214 152 206 190 C200 212 168 214 136 212 C104 212 70 210 64 186 Z" fill="${c.body}" stroke="${INK}" stroke-width="${SW}" stroke-linejoin="round"/>
        <path d="M78 196 C88 182 112 178 138 178 C166 178 190 184 198 196 C188 208 164 210 136 210 C108 210 86 208 78 196 Z" fill="${c.belly}" opacity=".9"/>
        <g fill="${c.dark}" opacity=".6"><ellipse cx="150" cy="148" rx="7" ry="5"/><ellipse cx="172" cy="160" rx="5" ry="4"/><ellipse cx="128" cy="144" rx="5" ry="3.5"/></g>
        <path d="${legPath(80, 106, 186)}" fill="${c.body}" stroke="${INK}" stroke-width="${SW}" stroke-linejoin="round"/>
        <path d="${legPath(166, 192, 186)}" fill="${c.body}" stroke="${INK}" stroke-width="${SW}" stroke-linejoin="round"/>
        ${toes(80, 106, 224)}${toes(166, 192, 224)}`;
    },
    head(c){
      return `<path d="M98 160 C112 168 116 184 108 196 L80 192 Z" fill="${c.body}" stroke="${INK}" stroke-width="${SW}" stroke-linejoin="round"/>
        <ellipse cx="73" cy="146" rx="44" ry="36" fill="${c.body}" stroke="${INK}" stroke-width="${SW}"/>
        <g fill="${c.dark}" opacity=".6"><ellipse cx="72" cy="116" rx="7" ry="4"/><ellipse cx="96" cy="122" rx="4" ry="3"/></g>
        ${eyeSvg(56, 140, 11)}${eyeSvg(90, 140, 11)}
        ${cheeks(40, 106, 158, 8, 5)}
        ${mouthSvg(72, 162, 22)}`;
    }
  },

  brachio: {
    line: '#4636a6',
    iris: '#6a4fc9', gloss: [[72, 36, 13, 6], [150, 148, 12, 6]], ao: null,
    c: { body: '#9a8cf0', dark: '#7867d8', far: '#7f70dc', belly: '#e6e0ff', spot: '#b9afff' },
    mouth: [86, 70], headPivot: [90, 78], hat: [88, 30, 1.3], eyes: [[72, 50], [104, 50], 11],
    body(c){
      return `<g class="p-tail" style="transform-origin:194px 196px"><path d="M188 184 C214 184 232 196 236 214 C218 214 198 210 184 204 Z" fill="${c.body}" stroke="${INK}" stroke-width="${SW}" stroke-linejoin="round"/></g>
        <path d="${legPath(124, 146, 168)}" fill="${c.far}" stroke="${INK}" stroke-width="${SW}" stroke-linejoin="round"/>
        <path d="${legPath(154, 174, 186)}" fill="${c.far}" stroke="${INK}" stroke-width="${SW}" stroke-linejoin="round"/>
        <path d="M98 170 C96 132 84 102 72 66 L108 60 C114 96 128 124 146 146 Z" fill="${c.body}" stroke="${INK}" stroke-width="${SW}" stroke-linejoin="round"/>
        <g fill="${c.spot}"><ellipse cx="104" cy="122" rx="6" ry="4" transform="rotate(-60 104 122)"/><ellipse cx="94" cy="96" rx="5" ry="3.5" transform="rotate(-65 94 96)"/><ellipse cx="114" cy="146" rx="5" ry="3.5"/></g>
        <path d="M88 176 C84 146 112 128 148 134 C186 140 210 164 202 192 C196 212 160 214 140 212 C114 212 92 202 88 176 Z" fill="${c.body}" stroke="${INK}" stroke-width="${SW}" stroke-linejoin="round"/>
        <path d="M106 198 C116 186 136 182 158 184 C180 186 194 192 198 198 C186 208 162 210 142 210 C126 210 112 206 106 198 Z" fill="${c.belly}" opacity=".9"/>
        <g fill="${c.spot}"><ellipse cx="150" cy="150" rx="8" ry="5"/><ellipse cx="174" cy="160" rx="6" ry="4"/><ellipse cx="130" cy="146" rx="5" ry="3.5"/></g>
        <path d="${legPath(94, 120, 162)}" fill="${c.body}" stroke="${INK}" stroke-width="${SW}" stroke-linejoin="round"/>
        <path d="${legPath(172, 196, 188)}" fill="${c.body}" stroke="${INK}" stroke-width="${SW}" stroke-linejoin="round"/>
        ${toes(94, 120, 224)}${toes(172, 196, 224)}`;
    },
    head(c){
      return `<path d="M84 30 Q90 14 104 22 Q110 30 104 34 Z" fill="${c.body}" stroke="${INK}" stroke-width="${SW}" stroke-linejoin="round"/>
        <ellipse cx="88" cy="56" rx="42" ry="31" fill="${c.body}" stroke="${INK}" stroke-width="${SW}"/>
        <g fill="${c.dark}" opacity=".55"><ellipse cx="96" cy="32" rx="5" ry="3"/></g>
        ${eyeSvg(72, 50, 11)}${eyeSvg(104, 50, 11)}
        ${cheeks(56, 120, 66, 8, 5)}
        ${mouthSvg(88, 70, 22)}`;
    }
  },

  anky: {
    line: '#28407e',
    iris: '#3a5aa8', gloss: [[54, 152, 14, 6], [124, 150, 18, 7]], ao: [96, 196, 26, 9],
    c: { body: '#5f91f0', dark: '#4677d6', far: '#4677d6', belly: '#e1eaff', armor: '#ffd06e', armor2: '#f2b347', beak: '#3d5fa8' },
    mouth: [64, 186], headPivot: [92, 186], hat: [68, 142, 1.15], eyes: [[52, 166], [84, 166], 10],
    body(c){
      const knob = (x, y, r, f) => `<path d="M${x - r} ${y + r * 0.35} Q${x - r * 0.9} ${y - r * 0.9} ${x} ${y - r * 1.15} Q${x + r * 0.9} ${y - r * 0.9} ${x + r} ${y + r * 0.35} Z" fill="${f}" stroke="${INK}" stroke-width="3" stroke-linejoin="round"/>`;
      // the bony club at the end of the tail: two round lobes
      const tail = `<g class="p-tail" style="transform-origin:196px 190px"><path d="M194 176 C210 172 220 172 228 176 C228 186 214 192 196 200 Z" fill="${c.body}" stroke="${INK}" stroke-width="${SW}" stroke-linejoin="round"/>
          <ellipse cx="229" cy="180" rx="13" ry="11" fill="${c.armor2}" stroke="${INK}" stroke-width="${SW}"/><ellipse cx="225" cy="176" rx="7" ry="5" fill="${c.armor}" opacity=".9"/></g>`;
      // side spikes along the lower edge of the shell, pointing out
      const spikes = [[76, 184, -70], [98, 202, -100], [124, 206, -95], [150, 206, -85], [176, 202, -80], [198, 188, -60]].map(s =>
        `<path transform="rotate(${s[2] + 90} ${s[0]} ${s[1]})" d="M${s[0] - 6} ${s[1]} L${s[0]} ${s[1] + 14} L${s[0] + 6} ${s[1]} Z" fill="${c.armor2}" stroke="${INK}" stroke-width="3" stroke-linejoin="round"/>`).join('');
      // rows of armor knobs on the back
      const rows = [[[108, 146, 8], [130, 138, 9], [154, 138, 9], [176, 146, 8]], [[94, 166, 7], [118, 160, 8], [142, 156, 8], [166, 160, 8], [188, 168, 7]], [[104, 184, 6], [128, 180, 7], [152, 180, 7], [176, 184, 6]]];
      const knobs = rows.map((row, i) => row.map((k, j) => knob(k[0], k[1], k[2], (i + j) % 2 ? c.armor : c.armor2)).join('')).join('');
      return `${tail}
        <path d="${legPath(116, 140, 198)}" fill="${c.far}" stroke="${INK}" stroke-width="${SW}" stroke-linejoin="round"/>
        <path d="${legPath(160, 184, 198)}" fill="${c.far}" stroke="${INK}" stroke-width="${SW}" stroke-linejoin="round"/>
        ${spikes}
        <path d="M70 192 C66 150 104 128 142 128 C184 128 212 152 208 190 C204 210 172 212 140 212 C108 212 74 210 70 192 Z" fill="${c.body}" stroke="${INK}" stroke-width="${SW}" stroke-linejoin="round"/>
        <path d="M80 198 C92 190 114 188 140 188 C166 188 188 190 200 198 C190 208 166 210 140 210 C112 210 90 208 80 198 Z" fill="${c.belly}" opacity=".85"/>
        ${knobs}
        <path d="${legPath(88, 114, 194)}" fill="${c.body}" stroke="${INK}" stroke-width="${SW}" stroke-linejoin="round"/>
        <path d="${legPath(170, 196, 194)}" fill="${c.body}" stroke="${INK}" stroke-width="${SW}" stroke-linejoin="round"/>
        ${toes(88, 114, 224)}${toes(170, 196, 224)}`;
    },
    head(c){
      return `<path d="M96 168 C110 172 116 188 108 200 L84 196 Z" fill="${c.body}" stroke="${INK}" stroke-width="${SW}" stroke-linejoin="round"/>
        <path d="M84 146 L96 132 L98 150 Z M50 146 L36 134 L40 152 Z" fill="${c.armor2}" stroke="${INK}" stroke-width="3" stroke-linejoin="round"/>
        <path d="M28 172 C26 148 46 138 68 138 C92 138 110 150 108 174 C106 194 88 200 66 200 C44 200 30 192 28 172 Z" fill="${c.body}" stroke="${INK}" stroke-width="${SW}"/>
        <g fill="${c.armor}" stroke="${INK}" stroke-width="2.5"><ellipse cx="58" cy="146" rx="6" ry="4"/><ellipse cx="76" cy="144" rx="6" ry="4"/><ellipse cx="94" cy="152" rx="5" ry="3.5"/></g>
        ${eyeSvg(52, 166, 10)}${eyeSvg(84, 166, 10)}
        ${cheeks(38, 98, 182, 7, 5)}
        <path d="M54 194 Q64 200 74 194 Q64 206 54 194 Z" fill="${c.beak}" stroke="${INK}" stroke-width="2.5" stroke-linejoin="round"/>
        ${mouthSvg(64, 184, 22)}`;
    }
  },

  elephant: {
    line: '#46527a',
    iris: '#5a6f96', gloss: [[100, 54, 17, 8], [96, 150, 12, 6]], ao: [120, 138, 46, 11],
    c: { body: '#a6b5d0', dark: '#8596b8', ear: '#f7b5c4', tusk: '#fffaf0' },
    mouth: [134, 124], headPivot: [120, 134], hat: [120, 44, 1.45], eyes: [[98, 82], [142, 82], 12],
    body(c){
      return `<g class="p-tail" style="transform-origin:170px 176px">${thick('M168 176 Q186 182 184 198', 5, c.body)}<path d="M180 196 l2 10 l5 -8 Z" fill="${INK}"/></g>
        <ellipse cx="120" cy="180" rx="58" ry="44" fill="${c.body}" stroke="${INK}" stroke-width="${SW}"/>
        <path d="${legPath(80, 112, 192)}" fill="${c.body}" stroke="${INK}" stroke-width="${SW}" stroke-linejoin="round"/>
        <path d="${legPath(128, 160, 192)}" fill="${c.body}" stroke="${INK}" stroke-width="${SW}" stroke-linejoin="round"/>
        <g fill="#fff5e2" stroke="${INK}" stroke-width="2">${[84, 93, 102, 132, 141, 150].map(x => `<path d="M${x} 222 Q${x + 4} 214 ${x + 8} 222 Z"/>`).join('')}</g>`;
    },
    head(c){
      return `<g class="p-ear-l" style="transform-origin:82px 92px"><path d="M84 66 C36 44 14 106 38 132 C56 150 84 134 88 110 Z" fill="${c.body}" stroke="${INK}" stroke-width="${SW}" stroke-linejoin="round"/>
          <path d="M80 76 C46 62 32 104 46 122 C58 136 76 124 80 108 Z" fill="${c.ear}"/></g>
        <g class="p-ear-r" style="transform-origin:158px 92px"><path d="M156 66 C204 44 226 106 202 132 C184 150 156 134 152 110 Z" fill="${c.body}" stroke="${INK}" stroke-width="${SW}" stroke-linejoin="round"/>
          <path d="M160 76 C194 62 208 104 194 122 C182 136 164 124 160 108 Z" fill="${c.ear}"/></g>
        <ellipse cx="120" cy="88" rx="50" ry="48" fill="${c.body}" stroke="${INK}" stroke-width="${SW}"/>
        <path d="M104 50 Q120 44 136 50" fill="none" stroke="${c.raw.dark}" stroke-width="3" stroke-linecap="round"/>
        ${eyeSvg(98, 82, 12)}${eyeSvg(142, 82, 12)}
        ${cheeks(86, 154, 104, 9, 6)}
        ${mouthSvg(136, 124, 18)}
        <path d="M100 112 Q92 128 98 140 Q106 130 110 116 Z" fill="${c.tusk}" stroke="${INK}" stroke-width="3" stroke-linejoin="round"/>
        <path d="M150 116 Q148 130 154 140 Q160 128 158 112 Z" fill="${c.tusk}" stroke="${INK}" stroke-width="3" stroke-linejoin="round"/>
        <g class="p-trunk" style="transform-origin:120px 104px">${thick('M120 100 C118 128 112 146 98 152 Q86 156 86 144', 20, c.body)}
          <g fill="none" stroke="${c.raw.dark}" stroke-width="2.5" stroke-linecap="round"><path d="M110 118 h18"/><path d="M108 130 h16"/><path d="M102 142 l12 4"/></g></g>`;
    }
  },

  lion: {
    line: '#7a3612',
    iris: '#b5761e', gloss: [[102, 66, 13, 6], [78, 40, 14, 6], [104, 162, 10, 5]], ao: [120, 150, 46, 9],
    c: { body: '#f4b942', dark: '#d9962a', mane: '#d06a2b', mane2: '#e8843a', muzzle: '#fff0c9', nose: '#7a3b2e', ear: '#ffb3a7' },
    mouth: [120, 132], headPivot: [120, 150], hat: [120, 32, 1.4], eyes: [[100, 88], [140, 88], 11],
    body(c){
      return `<g class="p-tail" style="transform-origin:160px 214px">${thick('M160 214 C198 218 210 186 196 166', 6, c.body)}<ellipse cx="195" cy="162" rx="9" ry="11" fill="${c.mane}" stroke="${INK}" stroke-width="3"/></g>
        <path d="M76 222 C68 180 90 148 120 148 C150 148 172 180 164 222 Z" fill="${c.body}" stroke="${INK}" stroke-width="${SW}" stroke-linejoin="round"/>
        <ellipse cx="120" cy="190" rx="24" ry="28" fill="${c.muzzle}" opacity=".9"/>
        <g fill="${c.body}" stroke="${INK}" stroke-width="${SW}"><ellipse cx="98" cy="218" rx="17" ry="10"/><ellipse cx="142" cy="218" rx="17" ry="10"/></g>
        <g stroke="${INK}" stroke-width="2.5" stroke-linecap="round"><path d="M93 214 v6 M101 214 v6"/><path d="M137 214 v6 M145 214 v6"/></g>`;
    },
    head(c){
      return `<path d="${scallop(120, 94, 70, 68, 12, 0.13)}" fill="${c.mane}" stroke="${INK}" stroke-width="${SW}" stroke-linejoin="round"/>
        <path d="${scallop(120, 96, 56, 54, 12, 0.1)}" fill="${c.mane2}"/>
        <g fill="none" stroke="${c.raw.mane}" stroke-width="3" stroke-linecap="round" opacity=".7">${[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map(a => { const r = Math.PI * a / 180, x1 = 120 + Math.cos(r) * 52, y1 = 94 + Math.sin(r) * 50, x2 = 120 + Math.cos(r + 0.18) * 64, y2 = 94 + Math.sin(r + 0.18) * 62; return `<path d="M${x1.toFixed(1)} ${y1.toFixed(1)} Q${((x1 + x2) / 2 + Math.cos(r) * 4).toFixed(1)} ${((y1 + y2) / 2 + Math.sin(r) * 4).toFixed(1)} ${x2.toFixed(1)} ${y2.toFixed(1)}"/>`; }).join('')}</g>
        <g fill="${c.body}" stroke="${INK}" stroke-width="${SW}"><circle cx="82" cy="58" r="14"/><circle cx="158" cy="58" r="14"/></g>
        <g fill="${c.ear}"><circle cx="82" cy="58" r="7"/><circle cx="158" cy="58" r="7"/></g>
        <circle cx="120" cy="98" r="46" fill="${c.body}" stroke="${INK}" stroke-width="${SW}"/>
        ${eyeSvg(100, 88, 11)}${eyeSvg(140, 88, 11)}
        ${cheeks(84, 156, 112, 8, 5)}
        <g fill="${c.muzzle}"><ellipse cx="109" cy="118" rx="14" ry="11"/><ellipse cx="131" cy="118" rx="14" ry="11"/></g>
        <g fill="${c.dark}"><circle cx="103" cy="116" r="1.8"/><circle cx="109" cy="122" r="1.8"/><circle cx="137" cy="116" r="1.8"/><circle cx="131" cy="122" r="1.8"/></g>
        <g class="mouth">
          <g class="m-closed"><path d="M120 114 V122 M108 124 Q114 131 120 124 Q126 131 132 124" fill="none" stroke="${INK}" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/></g>
          <g class="m-open"><path d="M120 114 V120" stroke="${INK}" stroke-width="3.5" stroke-linecap="round"/><path d="M106 122 Q120 150 134 122 Q120 128 106 122 Z" fill="url(#${U}-mouth)" stroke="${INK}" stroke-width="3.5" stroke-linejoin="round"/>
            <ellipse cx="120" cy="136" rx="7" ry="3.5" fill="#ff8fa3"/><path d="M110 124 l2 6 l2 -5 Z M126 124 l2 6 l2 -6 Z" fill="#fffaf0" stroke="${INK}" stroke-width="1.5"/></g>
        </g>
        <path d="M113 108 Q120 104 127 108 Q124 115 120 116 Q116 115 113 108 Z" fill="${c.nose}" stroke="${INK}" stroke-width="2.5" stroke-linejoin="round"/>`;
    }
  },

  penguin: {
    line: '#121a2e',
    iris: '#3a4a6a', gloss: [[96, 44, 15, 7], [96, 140, 10, 16]], ao: null,
    c: { body: '#2f3e5c', belly: '#fffaf2', beak: '#ffa53b', feet: '#ffa53b', patch: '#ffd35c' },
    mouth: [120, 112], headPivot: [120, 140], hat: [120, 36, 1.2], eyes: [[102, 90], [138, 90], 11],
    body(c){
      return `<g class="p-flip-l" style="transform-origin:76px 132px"><path d="M74 128 C48 150 46 186 62 198 C72 182 80 162 82 140 Z" fill="${c.body}" stroke="${INK}" stroke-width="${SW}" stroke-linejoin="round"/></g>
        <g class="p-flip-r" style="transform-origin:164px 132px"><path d="M166 128 C192 150 194 186 178 198 C168 182 160 162 158 140 Z" fill="${c.body}" stroke="${INK}" stroke-width="${SW}" stroke-linejoin="round"/></g>
        <path d="M120 30 C170 30 186 100 182 150 C178 200 152 222 120 222 C88 222 62 200 58 150 C54 100 70 30 120 30 Z" fill="${c.body}" stroke="${INK}" stroke-width="${SW}"/>
        <path d="M120 70 C138 52 164 60 164 90 C164 112 168 140 164 168 C160 198 142 212 120 212 C98 212 80 198 76 168 C72 140 76 112 76 90 C76 60 102 52 120 70 Z" fill="${c.belly}"/>
        <path d="M112 34 Q108 16 116 10 Q118 22 120 30 Q124 14 134 12 Q128 24 126 34 Z" fill="${c.body}" stroke="${INK}" stroke-width="3.5" stroke-linejoin="round"/>
        <g fill="${c.feet}" stroke="${INK}" stroke-width="${SW}" stroke-linejoin="round"><path d="M86 222 Q92 210 104 214 Q114 210 118 222 Z"/><path d="M122 222 Q126 210 136 214 Q148 210 154 222 Z"/></g>`;
    },
    head(c){
      return `${eyeSvg(102, 90, 11)}${eyeSvg(138, 90, 11)}
        ${cheeks(88, 152, 108, 8, 5)}
        <g class="mouth">
          <g class="m-closed"><path d="M107 104 Q120 98 133 104 L120 120 Z" fill="${c.beak}" stroke="${INK}" stroke-width="3.5" stroke-linejoin="round"/><path d="M112 108 Q120 112 128 108" fill="none" stroke="${INK}" stroke-width="2" stroke-linecap="round"/></g>
          <g class="m-open"><path d="M108 112 L132 112 L120 128 Z" fill="${c.beak}" stroke="${INK}" stroke-width="3.5" stroke-linejoin="round"/><path d="M110 109 L130 109 L120 117 Z" fill="#7a2e3b"/>
            <path d="M107 100 Q120 94 133 100 L120 110 Z" fill="${c.beak}" stroke="${INK}" stroke-width="3.5" stroke-linejoin="round"/></g>
        </g>`;
    }
  },

  kangaroo: {
    line: '#7a3a14',
    iris: '#6b3d1e', gloss: [[104, 48, 13, 6], [100, 140, 10, 16]], ao: [120, 120, 30, 8],
    c: { body: '#de9057', dark: '#bf6f3c', belly: '#f9dfc4', ear: '#ffb3a7', nose: '#5a3426' },
    mouth: [120, 100], headPivot: [120, 112], hat: [120, 40, 1.05], eyes: [[104, 66], [136, 66], 10],
    body(c){
      return `<g class="p-tail" style="transform-origin:150px 204px"><path d="M140 196 C170 196 200 206 232 222 C206 226 172 224 146 218 Z" fill="${c.body}" stroke="${INK}" stroke-width="${SW}" stroke-linejoin="round"/></g>
        <g fill="${c.dark}" stroke="${INK}" stroke-width="${SW}" stroke-linejoin="round"><path d="M70 222 Q72 210 92 210 Q108 210 110 222 Z"/><path d="M130 222 Q132 210 148 210 Q168 210 170 222 Z"/></g>
        <path d="M120 104 C144 104 158 128 162 158 C166 194 150 216 120 216 C90 216 74 194 78 158 C82 128 96 104 120 104 Z" fill="${c.body}" stroke="${INK}" stroke-width="${SW}"/>
        <g fill="${c.body}" stroke="${INK}" stroke-width="${SW}"><ellipse cx="88" cy="190" rx="22" ry="27"/><ellipse cx="152" cy="190" rx="22" ry="27"/></g>
        <ellipse cx="120" cy="168" rx="25" ry="40" fill="${c.belly}"/>
        <g class="p-arm-l">${thick('M104 132 Q96 144 102 156', 9, c.body)}<ellipse cx="103" cy="158" rx="6" ry="5" fill="${c.dark}" stroke="${INK}" stroke-width="2.5"/></g>
        <g class="p-arm-r">${thick('M136 132 Q144 144 138 156', 9, c.body)}<ellipse cx="137" cy="158" rx="6" ry="5" fill="${c.dark}" stroke="${INK}" stroke-width="2.5"/></g>`;
    },
    head(c){
      return `<g class="p-ear-l" style="transform-origin:98px 50px"><path d="M100 52 C84 34 82 8 88 2 C100 6 108 28 108 48 Z" fill="${c.body}" stroke="${INK}" stroke-width="${SW}" stroke-linejoin="round"/><path d="M100 44 C90 32 89 16 92 10 C99 16 103 30 103 42 Z" fill="${c.ear}"/></g>
        <g class="p-ear-r" style="transform-origin:142px 50px"><path d="M140 52 C156 34 158 8 152 2 C140 6 132 28 132 48 Z" fill="${c.body}" stroke="${INK}" stroke-width="${SW}" stroke-linejoin="round"/><path d="M140 44 C150 32 151 16 148 10 C141 16 137 30 137 42 Z" fill="${c.ear}"/></g>
        <path d="M84 72 C84 50 100 40 120 40 C140 40 156 50 156 72 C156 92 142 112 120 112 C98 112 84 92 84 72 Z" fill="${c.body}" stroke="${INK}" stroke-width="${SW}"/>
        <ellipse cx="120" cy="94" rx="20" ry="15" fill="${c.belly}"/>
        <path d="M112 84 Q120 80 128 84 Q126 91 120 92 Q114 91 112 84 Z" fill="${c.nose}" stroke="${INK}" stroke-width="2.5" stroke-linejoin="round"/>
        ${eyeSvg(104, 66, 10)}${eyeSvg(136, 66, 10)}
        ${cheeks(92, 148, 86, 7, 5)}
        ${mouthSvg(120, 99, 16)}`;
    }
  }
};
const SPECIES_ORDER = ['trex', 'trike', 'stego', 'brachio', 'anky', 'elephant', 'lion', 'penguin', 'kangaroo'];

/* Hats and glasses, drawn around (0,0) = top of the head, about 60 units wide. */
const OUTFITS = {
  party: `<g><path d="M-22 2 L0 -52 L22 2 Z" fill="#ff5d8f" stroke="${INK}" stroke-width="${SW}" stroke-linejoin="round"/>
    <path d="M-14 -18 L14 -18 M-8 -34 L8 -34" stroke="#fff5e2" stroke-width="5" stroke-linecap="round"/>
    <path d="M-12 -6 L-2 -40" stroke="#fff" stroke-width="3" stroke-linecap="round" opacity=".45"/>
    <circle cy="-54" r="8" fill="#ffd35c" stroke="${INK}" stroke-width="3"/><circle cx="-2.5" cy="-56.5" r="2.5" fill="#fff" opacity=".8"/></g>`,
  crown: `<g><path d="M-30 4 L-30 -28 L-15 -12 L0 -36 L15 -12 L30 -28 L30 4 Z" fill="#ffc83d" stroke="${INK}" stroke-width="${SW}" stroke-linejoin="round"/>
    <path d="M-24 -4 L-24 -20 M-8 -10 L0 -26" stroke="#fff3c4" stroke-width="3" stroke-linecap="round" opacity=".8"/><circle cx="0" cy="-8" r="5" fill="#ff4b5c" stroke="${INK}" stroke-width="2"/><circle cx="-17" cy="-6" r="3.5" fill="#5cc3ff" stroke="${INK}" stroke-width="2"/><circle cx="17" cy="-6" r="3.5" fill="#5cc3ff" stroke="${INK}" stroke-width="2"/></g>`,
  explorer: `<g><ellipse cx="0" cy="2" rx="44" ry="9" fill="#d9c08a" stroke="${INK}" stroke-width="${SW}"/>
    <path d="M-30 2 Q-32 -40 0 -40 Q32 -40 30 2 Z" fill="#e8d29a" stroke="${INK}" stroke-width="${SW}" stroke-linejoin="round"/>
    <path d="M-30 -6 Q0 -2 30 -6 L30 2 Q0 6 -30 2 Z" fill="#8a6a3a"/><path d="M-20 -14 Q-20 -30 -6 -34" fill="none" stroke="#fff" stroke-width="4" stroke-linecap="round" opacity=".45"/><circle cy="-40" r="4" fill="#d9c08a" stroke="${INK}" stroke-width="2.5"/></g>`,
  cap: `<g><path d="M-28 2 Q-46 2 -56 10 Q-36 14 -8 6 Z" fill="#c9303f" stroke="${INK}" stroke-width="${SW}" stroke-linejoin="round"/>
    <path d="M-28 4 Q-30 -36 0 -36 Q30 -36 28 4 Z" fill="#ff4b5c" stroke="${INK}" stroke-width="${SW}" stroke-linejoin="round"/>
    <path d="M0 -36 V4" stroke="#c9303f" stroke-width="3"/><path d="M-20 -8 Q-20 -24 -8 -30" fill="none" stroke="#fff" stroke-width="4" stroke-linecap="round" opacity=".45"/><circle cy="-37" r="4.5" fill="#fff5e2" stroke="${INK}" stroke-width="2.5"/>
    <path d="M-12 -14 l6 -6 l6 6 l6 -6" fill="none" stroke="#fff5e2" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></g>`,
  flower: `<g transform="translate(22 -6)"><g fill="#ff9ec4" stroke="${INK}" stroke-width="3">${[0, 72, 144, 216, 288].map(a => `<ellipse cx="0" cy="-11" rx="8" ry="11" transform="rotate(${a})"/>`).join('')}</g>
    <circle r="7" fill="#ffd35c" stroke="${INK}" stroke-width="3"/></g>`,
  chef: `<g><path d="M-24 4 L-22 -18 L22 -18 L24 4 Z" fill="#fff" stroke="${INK}" stroke-width="${SW}" stroke-linejoin="round"/>
    <path d="M-24 -16 C-40 -22 -36 -46 -18 -42 C-14 -58 14 -58 18 -42 C36 -46 40 -22 24 -16 Z" fill="#fff" stroke="${INK}" stroke-width="${SW}" stroke-linejoin="round"/>
    <path d="M-8 -20 V-8 M8 -20 V-8" stroke="#d8dce6" stroke-width="3" stroke-linecap="round"/></g>`
};
const OUTFIT_ORDER = ['party', 'cap', 'explorer', 'crown', 'flower', 'chef', 'glasses'];
function glassesSvg(sp){
  const [[x1, y1], [x2, y2], r] = SPECIES[sp].eyes;
  const rr = r + 6;
  return `<g class="glasses"><circle cx="${x1}" cy="${y1}" r="${rr}" fill="rgba(140,210,255,.28)" stroke="${INK}" stroke-width="4.5"/>
    <circle cx="${x2}" cy="${y2}" r="${rr}" fill="rgba(140,210,255,.28)" stroke="${INK}" stroke-width="4.5"/>
    <path d="M${x1 + rr} ${y1 - 2} Q${(x1 + x2) / 2} ${y1 - 9} ${x2 - rr} ${y2 - 2}" fill="none" stroke="${INK}" stroke-width="4.5" stroke-linecap="round"/></g>`;
}

/* Color helpers for the shading. */
const hexRgb = h => { const n = parseInt(h.slice(1), 16); return [n >> 16 & 255, n >> 8 & 255, n & 255]; };
const mix = (h, to, t) => { const a = hexRgb(h), b = to === 'w' ? [255, 255, 255] : to === 'k' ? [20, 18, 40] : hexRgb(to); return '#' + a.map((v, i) => Math.round(v + (b[i] - v) * t).toString(16).padStart(2, '0')).join(''); };
const lit = (id, base, hi = 0.3, lo = 0.16) =>
  `<radialGradient id="${id}" cx=".38" cy=".3" r=".86" fx=".3" fy=".2">` +
  `<stop offset="0" stop-color="${mix(base, 'w', hi + 0.08)}"/><stop offset=".22" stop-color="${mix(base, 'w', hi * 0.45)}"/>` +
  `<stop offset=".55" stop-color="${base}"/><stop offset=".82" stop-color="${mix(base, 'k', lo * 0.85)}"/>` +
  `<stop offset=".95" stop-color="${mix(base, 'k', lo * 1.45)}"/><stop offset="1" stop-color="${mix(base, 'k', lo * 1.1)}"/></radialGradient>`;
let petCounter = 0;

/* The whole character. stage: 0 baby, 1 child, 2 grown. The baby has a bigger head, as real babies do. */
const STAGE_SCALE = [0.76, 0.88, 1];
function petSvg(sp, opts = {}){
  const s = SPECIES[sp];
  U = 'p' + (++petCounter);
  const raw = s.c;
  const c = { raw };
  const defs = [];
  for (const k of Object.keys(raw)){ c[k] = `url(#${U}-${k})`; defs.push(lit(`${U}-${k}`, raw[k], k === 'belly' || k === 'muzzle' ? 0.5 : 0.3)); }
  defs.push(`<linearGradient id="${U}-ew" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ffffff"/><stop offset=".65" stop-color="#f6f8fc"/><stop offset="1" stop-color="#dfe6f1"/></linearGradient>`);
  defs.push(`<radialGradient id="${U}-iris" cx=".5" cy=".62" r=".6"><stop offset="0" stop-color="${mix(s.iris, 'w', 0.45)}"/><stop offset=".7" stop-color="${s.iris}"/><stop offset="1" stop-color="${mix(s.iris, 'k', 0.45)}"/></radialGradient>`);
  defs.push(`<radialGradient id="${U}-cheek"><stop offset="0" stop-color="#ff6f86" stop-opacity=".62"/><stop offset=".6" stop-color="#ff7f8a" stop-opacity=".32"/><stop offset="1" stop-color="#ff7f8a" stop-opacity="0"/></radialGradient>`);
  defs.push(`<radialGradient id="${U}-mouth" cx=".5" cy=".2" r=".9"><stop offset="0" stop-color="#5a1c2a"/><stop offset="1" stop-color="#9a3a4c"/></radialGradient>`);
  defs.push(`<radialGradient id="${U}-gloss"><stop offset="0" stop-color="#fff" stop-opacity=".7"/><stop offset="1" stop-color="#fff" stop-opacity="0"/></radialGradient>`);
  defs.push(`<radialGradient id="${U}-ao"><stop offset="0" stop-color="#140f28" stop-opacity=".28"/><stop offset="1" stop-color="#140f28" stop-opacity="0"/></radialGradient>`);
  defs.push(`<radialGradient id="${U}-sh"><stop offset="0" stop-color="#1e1432" stop-opacity=".34"/><stop offset=".6" stop-color="#1e1432" stop-opacity=".16"/><stop offset="1" stop-color="#1e1432" stop-opacity="0"/></radialGradient>`);
  const stage = opts.stage == null ? 2 : opts.stage;
  const sc = STAGE_SCALE[stage];
  const headK = stage === 0 ? 1.14 : stage === 1 ? 1.06 : 1;
  const [px, py] = s.headPivot;
  let hat = '';
  if (opts.outfit && opts.outfit !== 'glasses' && Object.prototype.hasOwnProperty.call(OUTFITS, opts.outfit)){
    const [hx, hy, hs] = s.hat;
    hat = `<g class="outfit" transform="translate(${hx} ${hy + 5 * hs}) scale(${hs})">${OUTFITS[opts.outfit]}</g>`;
  } else if (opts.outfit === 'glasses') hat = glassesSvg(sp);
  const gloss = (list) => list.map(([x, y, rx, ry]) => `<ellipse cx="${x}" cy="${y}" rx="${rx}" ry="${ry}" fill="url(#${U}-gloss)" transform="rotate(-18 ${x} ${y})"/>`).join('');
  const headGloss = gloss(s.gloss.slice(0, 1)), bodyGloss = gloss(s.gloss.slice(1));
  const ao = s.ao ? `<ellipse cx="${s.ao[0]}" cy="${s.ao[1]}" rx="${s.ao[2]}" ry="${s.ao[3]}" fill="url(#${U}-ao)"/>` : '';
  const id = opts.id ? ` id="${opts.id}"` : '';
  const recolor = (m, col) => m
    .replace(/stroke="#1b2430" stroke-width="([\d.]+)"/g, (x, n) => `stroke="${col}" stroke-width="${+n < 7 ? (+n * 0.82).toFixed(2) : n}"`)
    .replace(/stroke="#1b2430"/g, `stroke="${col}"`)
    .replace(/fill="#1b2430"/g, `fill="${col}"`);
  const line = s.line || INK, hatLine = '#4a2c2a';
  const bodyM = recolor(s.body(c) + bodyGloss + ao, line);
  const headM = recolor(s.head(c) + headGloss, line) + recolor(hat, opts.outfit === 'glasses' ? line : hatLine);
  const out = `<svg${id} class="pet sp-${sp}" viewBox="-10 -40 260 280" aria-hidden="true" focusable="false">
    <defs>${defs.join('')}</defs>
    <ellipse class="p-shadow" cx="122" cy="228" rx="${Math.round(96 * sc)}" ry="${Math.round(13 * sc)}" fill="url(#${U}-sh)"/>
    <g class="p-scale" transform="translate(120 226) scale(${sc}) translate(-120 -226)">
      <g class="p-jump">
        <g class="p-body" style="transform-origin:120px 226px">${bodyM}</g>
        <g class="p-head" style="transform-origin:${px}px ${py}px"><g transform="translate(${px} ${py}) scale(${headK}) translate(${-px} ${-py})">${headM}</g></g>
      </g>
    </g>
  </svg>`;
  return out;
}

/* ---------- foods ---------- */
const FOOD_ART = {
  meat: `<svg viewBox="0 0 64 64"><path d="M38 10 C54 8 60 26 48 36 C40 44 28 42 22 36 C16 30 22 12 38 10 Z" fill="#d9573f" stroke="${INK}" stroke-width="3.5"/>
    <path d="M34 18 C42 16 48 22 46 28" fill="none" stroke="#f08a6c" stroke-width="4" stroke-linecap="round"/>
    <path d="M24 38 L12 50" stroke="${INK}" stroke-width="11" stroke-linecap="round"/><path d="M24 38 L12 50" stroke="#fff5e2" stroke-width="5" stroke-linecap="round"/>
    <g fill="#fff5e2" stroke="${INK}" stroke-width="3"><circle cx="8" cy="50" r="5"/><circle cx="13" cy="56" r="5"/></g></svg>`,
  fish: `<svg viewBox="0 0 64 64"><path d="M50 32 L62 20 L60 32 L62 44 Z" fill="#7ec8f0" stroke="${INK}" stroke-width="3.5" stroke-linejoin="round"/>
    <path d="M6 32 C14 16 40 14 52 32 C40 50 14 48 6 32 Z" fill="#9fdcff" stroke="${INK}" stroke-width="3.5"/>
    <path d="M24 22 Q30 32 24 42" fill="none" stroke="#5aaee0" stroke-width="3"/><circle cx="16" cy="29" r="3" fill="${INK}"/></svg>`,
  fern: `<svg viewBox="0 0 64 64"><path d="M32 60 Q30 34 40 6" fill="none" stroke="#2f7d3a" stroke-width="4" stroke-linecap="round"/>
    <g fill="#5cbf55" stroke="${INK}" stroke-width="2.5">${[14, 22, 30, 38, 46].map((y, i) => `<ellipse cx="${26 - i * 0.6}" cy="${y + 4}" rx="10" ry="4.5" transform="rotate(-25 ${26 - i * 0.6} ${y + 4})"/><ellipse cx="${42 - i * 0.8}" cy="${y}" rx="10" ry="4.5" transform="rotate(25 ${42 - i * 0.8} ${y})"/>`).join('')}</g></svg>`,
  leaves: `<svg viewBox="0 0 64 64"><path d="M10 54 Q30 40 56 12" fill="none" stroke="#8a5a2b" stroke-width="5" stroke-linecap="round"/>
    <g fill="#3fae5a" stroke="${INK}" stroke-width="3"><path d="M22 44 C10 40 8 28 14 24 C22 28 26 36 22 44 Z"/><path d="M34 34 C40 22 52 22 54 28 C48 34 42 38 34 34 Z"/><path d="M40 24 C34 14 38 4 44 4 C48 10 46 20 40 24 Z"/><path d="M28 40 C34 46 34 56 28 58 C22 54 22 46 28 40 Z"/></g></svg>`,
  fruit: `<svg viewBox="0 0 64 64"><path d="M32 16 C38 6 48 6 50 10 C44 12 38 14 32 16 Z" fill="#5cbf55" stroke="${INK}" stroke-width="3"/>
    <path d="M32 18 C20 10 6 18 8 36 C10 52 24 60 32 54 C40 60 54 52 56 36 C58 18 44 10 32 18 Z" fill="#ff4b5c" stroke="${INK}" stroke-width="3.5"/>
    <path d="M18 26 Q14 32 16 38" fill="none" stroke="#ff9aa4" stroke-width="4" stroke-linecap="round"/></svg>`,
  grass: `<svg viewBox="0 0 64 64"><g fill="#8fd16a" stroke="${INK}" stroke-width="3" stroke-linejoin="round">
    <path d="M10 58 Q12 34 20 14 Q20 36 22 58 Z"/><path d="M20 58 Q26 30 36 8 Q32 34 32 58 Z"/><path d="M30 58 Q38 34 52 18 Q44 40 42 58 Z"/><path d="M40 58 Q48 42 58 34 Q52 46 52 58 Z"/></g>
    <path d="M6 58 H58" stroke="${INK}" stroke-width="3.5" stroke-linecap="round"/></svg>`
};
const FOOD_ORDER = ['meat', 'fish', 'fern', 'leaves', 'fruit', 'grass'];

/* ---------- bathroom and bedroom tools ---------- */
const TOOL_ART = {
  sponge: `<svg viewBox="0 0 64 64"><rect x="8" y="16" width="48" height="34" rx="10" fill="#ffd35c" stroke="${INK}" stroke-width="3.5"/>
    <g fill="#e8b830"><circle cx="20" cy="28" r="3"/><circle cx="34" cy="24" r="2.5"/><circle cx="44" cy="34" r="3.5"/><circle cx="26" cy="40" r="2.5"/></g>
    <g fill="#fff" stroke="${INK}" stroke-width="2"><circle cx="50" cy="12" r="6"/><circle cx="40" cy="8" r="4"/></g></svg>`,
  shower: `<svg viewBox="0 0 64 64"><path d="M50 58 V20 Q50 8 38 8 H30" fill="none" stroke="${INK}" stroke-width="9" stroke-linecap="round"/>
    <path d="M50 58 V20 Q50 8 38 8 H30" fill="none" stroke="#c9d6e6" stroke-width="4" stroke-linecap="round"/>
    <path d="M14 10 Q30 2 34 18 Z" fill="#c9d6e6" stroke="${INK}" stroke-width="3.5" stroke-linejoin="round"/>
    <g fill="#5cc3ff">${[[16, 26], [24, 32], [12, 38], [22, 44], [30, 26]].map(p => `<ellipse cx="${p[0]}" cy="${p[1]}" rx="2.4" ry="4"/>`).join('')}</g></svg>`,
  towel: `<svg viewBox="0 0 64 64"><path d="M10 14 H54 V50 Q32 58 10 50 Z" fill="#7fd1c7" stroke="${INK}" stroke-width="3.5" stroke-linejoin="round"/>
    <path d="M10 40 Q32 48 54 40" fill="none" stroke="#fff5e2" stroke-width="4"/><path d="M10 22 H54" stroke="#5fb3a9" stroke-width="3"/></svg>`,
  brush: `<svg viewBox="0 0 64 64"><path d="M10 54 L42 22" stroke="${INK}" stroke-width="11" stroke-linecap="round"/><path d="M10 54 L42 22" stroke="#5cc3ff" stroke-width="5" stroke-linecap="round"/>
    <rect x="38" y="6" width="16" height="22" rx="4" transform="rotate(45 46 17)" fill="#fff" stroke="${INK}" stroke-width="3"/>
    <path d="M44 6 Q52 2 58 10" fill="none" stroke="#7fd1a0" stroke-width="6" stroke-linecap="round"/></svg>`,
  potty: `<svg viewBox="0 0 64 64"><path d="M10 26 H54 Q54 50 32 52 Q10 50 10 26 Z" fill="#fff" stroke="${INK}" stroke-width="3.5" stroke-linejoin="round"/>
    <ellipse cx="32" cy="26" rx="22" ry="6" fill="#ffd1dc" stroke="${INK}" stroke-width="3.5"/><path d="M22 52 L20 60 H44 L42 52" fill="#fff" stroke="${INK}" stroke-width="3.5" stroke-linejoin="round"/></svg>`,
  soap: `<svg viewBox="0 0 64 64"><rect x="10" y="26" width="44" height="26" rx="10" fill="#ff9ec4" stroke="${INK}" stroke-width="3.5"/>
    <path d="M20 34 Q32 30 44 34" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round"/>
    <g fill="#fff" stroke="${INK}" stroke-width="2"><circle cx="22" cy="16" r="7"/><circle cx="38" cy="12" r="5"/><circle cx="48" cy="20" r="4"/></g></svg>`,
  lamp: `<svg viewBox="0 0 64 64"><path d="M18 30 L24 8 H40 L46 30 Z" fill="#ffd35c" stroke="${INK}" stroke-width="3.5" stroke-linejoin="round"/>
    <path d="M32 30 V50" stroke="${INK}" stroke-width="4"/><path d="M18 56 Q32 48 46 56 Z" fill="#c98a4b" stroke="${INK}" stroke-width="3.5" stroke-linejoin="round"/></svg>`,
  book: `<svg viewBox="0 0 64 64"><path d="M32 16 Q20 8 6 12 V52 Q20 48 32 56 Q44 48 58 52 V12 Q44 8 32 16 Z" fill="#fff5e2" stroke="${INK}" stroke-width="3.5" stroke-linejoin="round"/>
    <path d="M32 16 V56" stroke="${INK}" stroke-width="3"/><path d="M12 22 Q20 20 26 24 M12 30 Q20 28 26 32 M38 24 Q44 20 52 22 M38 32 Q44 28 52 30" fill="none" stroke="#9aa3b5" stroke-width="2.5" stroke-linecap="round"/></svg>`,
  mic: `<svg viewBox="0 0 64 64"><path d="M20 30 C20 14 44 14 44 30 C44 38 40 42 36 44 L34 58 H30 L28 44 C24 42 20 38 20 30 Z" fill="#ffb3a7" stroke="${INK}" stroke-width="3.5" stroke-linejoin="round"/>
    <path d="M27 26 Q32 20 37 26 Q34 34 30 30" fill="none" stroke="${INK}" stroke-width="3" stroke-linecap="round"/>
    <path d="M50 18 Q56 26 50 36 M54 12 Q64 26 54 42" fill="none" stroke="#ff5d8f" stroke-width="3.5" stroke-linecap="round"/></svg>`,
  hanger: `<svg viewBox="0 0 64 64"><path d="M32 22 C32 18 36 16 36 12 C36 8 28 6 28 12" fill="none" stroke="${INK}" stroke-width="3.5" stroke-linecap="round"/>
    <path d="M32 22 L6 42 Q4 46 10 46 H54 Q60 46 58 42 Z" fill="none" stroke="${INK}" stroke-width="4" stroke-linejoin="round"/>
    <path d="M18 46 L22 60 H42 L46 46" fill="#ff5d8f" stroke="${INK}" stroke-width="3.5" stroke-linejoin="round"/></svg>`,
  ball: `<svg viewBox="0 0 64 64"><circle cx="32" cy="32" r="24" fill="#5cc3ff" stroke="${INK}" stroke-width="3.5"/>
    <path d="M8 32 Q32 22 56 32" fill="none" stroke="#fff5e2" stroke-width="6"/><path d="M14 46 Q32 38 50 46" fill="none" stroke="#ffd35c" stroke-width="6"/>
    <circle cx="32" cy="32" r="24" fill="none" stroke="${INK}" stroke-width="3.5"/></svg>`
};

/* Room icons for the bottom bar. */
const ROOM_ICON = {
  home: `<svg viewBox="0 0 48 48"><path d="M6 22 L24 8 L42 22 V40 H6 Z" fill="#ffb27a" stroke="${INK}" stroke-width="3.5" stroke-linejoin="round"/><rect x="19" y="26" width="10" height="14" rx="3" fill="#8a5a2b" stroke="${INK}" stroke-width="3"/><path d="M24 22 C20 17 14 21 18 25 L24 30 L30 25 C34 21 28 17 24 22 Z" fill="#ff5d8f" stroke="${INK}" stroke-width="2"/></svg>`,
  kitchen: `<svg viewBox="0 0 48 48"><path d="M8 22 H40 Q40 40 24 40 Q8 40 8 22 Z" fill="#7fd1c7" stroke="${INK}" stroke-width="3.5" stroke-linejoin="round"/><path d="M14 22 C14 14 20 10 24 16 C28 8 36 12 34 22" fill="#5cbf55" stroke="${INK}" stroke-width="3" stroke-linejoin="round"/><circle cx="20" cy="18" r="4" fill="#ff4b5c" stroke="${INK}" stroke-width="2.5"/></svg>`,
  bath: `<svg viewBox="0 0 48 48"><path d="M4 24 H44 Q44 40 24 40 Q4 40 4 24 Z" fill="#9fdcff" stroke="${INK}" stroke-width="3.5" stroke-linejoin="round"/><g fill="#fff" stroke="${INK}" stroke-width="2.5"><circle cx="14" cy="18" r="6"/><circle cx="26" cy="14" r="7"/><circle cx="36" cy="19" r="5"/></g></svg>`,
  bed: `<svg viewBox="0 0 48 48"><path d="M30 6 C22 8 18 18 22 26 C26 34 38 34 42 26 C34 28 26 20 30 6 Z" fill="#ffd35c" stroke="${INK}" stroke-width="3" stroke-linejoin="round"/><path d="M4 30 H44 V40 H4 Z" fill="#7d74e8" stroke="${INK}" stroke-width="3.5" stroke-linejoin="round"/><rect x="6" y="24" width="14" height="8" rx="4" fill="#fff" stroke="${INK}" stroke-width="3"/></svg>`,
  play: `<svg viewBox="0 0 48 48"><path d="M8 40 L16 10 Q24 6 32 10 L40 40 Z" fill="#e8c27a" stroke="${INK}" stroke-width="3.5" stroke-linejoin="round"/><path d="M14 26 Q24 22 34 26" fill="none" stroke="#fff5e2" stroke-width="3"/><path d="M20 30 h8 M18 34 a3 3 0 1 1 0 .1 M30 34 a3 3 0 1 1 0 .1" stroke="${INK}" stroke-width="3" stroke-linecap="round"/><path d="M28 16 a3 3 0 1 0 6 0 a3 3 0 1 0 -6 0 M26 20 l-4 4" fill="#fff" stroke="${INK}" stroke-width="2.5"/></svg>`,
  album: `<svg viewBox="0 0 48 48"><rect x="8" y="6" width="32" height="36" rx="5" fill="#ff8a5c" stroke="${INK}" stroke-width="3.5"/><rect x="14" y="12" width="20" height="14" rx="3" fill="#fff5e2" stroke="${INK}" stroke-width="2.5"/><path d="M24 30 l2 4 4 .5 -3 3 1 4 -4 -2 -4 2 1 -4 -3 -3 4 -.5 Z" fill="#ffd35c" stroke="${INK}" stroke-width="2" stroke-linejoin="round"/></svg>`
};

/* Need icons in the top bar. */
const NEED_ICON = {
  food: `<svg viewBox="0 0 40 40"><path d="M20 10 C14 4 4 8 6 20 C8 30 16 34 20 30 C24 34 32 30 34 20 C36 8 26 4 20 10 Z" fill="#ff4b5c" stroke="${INK}" stroke-width="3"/><path d="M20 10 C22 4 28 4 30 6" fill="none" stroke="#2f7d3a" stroke-width="3" stroke-linecap="round"/></svg>`,
  clean: `<svg viewBox="0 0 40 40"><g fill="#bfe9ff" stroke="${INK}" stroke-width="2.6"><circle cx="15" cy="22" r="9"/><circle cx="27" cy="15" r="7"/><circle cx="28" cy="29" r="5"/></g><path d="M11 19 a4 4 0 0 1 4 -3" fill="none" stroke="#fff" stroke-width="2.5" stroke-linecap="round"/></svg>`,
  energy: `<svg viewBox="0 0 40 40"><path d="M24 4 C14 6 10 18 14 26 C18 34 30 34 34 26 C26 28 18 20 24 4 Z" fill="#ffd35c" stroke="${INK}" stroke-width="3" stroke-linejoin="round"/><path d="M8 10 h6 l-6 6 h6" fill="none" stroke="${INK}" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  fun: `<svg viewBox="0 0 40 40"><circle cx="20" cy="20" r="15" fill="#5cc3ff" stroke="${INK}" stroke-width="3"/><path d="M5 20 Q20 12 35 20" fill="none" stroke="#fff5e2" stroke-width="4"/><path d="M8 28 Q20 22 32 28" fill="none" stroke="#ffd35c" stroke-width="4"/><circle cx="20" cy="20" r="15" fill="none" stroke="${INK}" stroke-width="3"/></svg>`
};

/* ---------- feelings: five faces, and small pictures of what happened ---------- */
const FACE_ART = (() => {
  const face = (fill, inner) => `<svg viewBox="0 0 100 100"><circle cx="50" cy="52" r="42" fill="${fill}" stroke="${INK}" stroke-width="4.5"/><path d="M26 36 Q32 26 42 26" fill="none" stroke="#fff" stroke-width="5" stroke-linecap="round" opacity=".55"/>${inner}</svg>`;
  const eyes = (r = 5, y = 46) => `<g fill="${INK}"><ellipse cx="36" cy="${y}" rx="${r}" ry="${r * 1.15}"/><ellipse cx="64" cy="${y}" rx="${r}" ry="${r * 1.15}"/></g>`;
  return {
    happy: face('#ffd35c', eyes() + `<path d="M30 60 Q50 82 70 60" fill="#7a2e3b" stroke="${INK}" stroke-width="4" stroke-linejoin="round"/><path d="M38 66 Q50 74 62 66" fill="#ff8fa3"/><g fill="#ff8a72" opacity=".55"><ellipse cx="24" cy="60" rx="7" ry="4.5"/><ellipse cx="76" cy="60" rx="7" ry="4.5"/></g>`),
    sad: face('#9fd0ff', eyes(5, 48) + `<path d="M28 38 L42 34 M72 38 L58 34" stroke="${INK}" stroke-width="4" stroke-linecap="round"/><path d="M34 74 Q50 60 66 74" fill="none" stroke="${INK}" stroke-width="4.5" stroke-linecap="round"/><path d="M66 56 Q72 66 66 70 Q60 66 66 56 Z" fill="#4fb8ff" stroke="${INK}" stroke-width="2.5"/>`),
    angry: face('#ff8a72', eyes(5, 50) + `<path d="M26 34 L44 42 M74 34 L56 42" stroke="${INK}" stroke-width="5" stroke-linecap="round"/><path d="M34 72 Q50 64 66 72" fill="none" stroke="${INK}" stroke-width="4.5" stroke-linecap="round"/><path d="M8 18 l6 8 M14 12 l3 9 M92 18 l-6 8 M86 12 l-3 9" stroke="#e04444" stroke-width="3.5" stroke-linecap="round"/>`),
    scared: face('#c9b8f5', `<g fill="#fff" stroke="${INK}" stroke-width="3"><circle cx="36" cy="46" r="9"/><circle cx="64" cy="46" r="9"/></g><g fill="${INK}"><circle cx="36" cy="47" r="3.5"/><circle cx="64" cy="47" r="3.5"/></g><path d="M28 30 Q36 24 44 30 M56 30 Q64 24 72 30" fill="none" stroke="${INK}" stroke-width="4" stroke-linecap="round"/><path d="M34 70 Q38 64 42 70 Q46 76 50 70 Q54 64 58 70 Q62 76 66 70" fill="none" stroke="${INK}" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>`),
    surprised: face('#9edc8a', `<g fill="#fff" stroke="${INK}" stroke-width="3"><circle cx="36" cy="44" r="8"/><circle cx="64" cy="44" r="8"/></g><g fill="${INK}"><circle cx="36" cy="44" r="4"/><circle cx="64" cy="44" r="4"/></g><path d="M26 26 Q36 18 44 26 M56 26 Q64 18 74 26" fill="none" stroke="${INK}" stroke-width="4" stroke-linecap="round"/><ellipse cx="50" cy="70" rx="9" ry="11" fill="#7a2e3b" stroke="${INK}" stroke-width="4"/>`)
  };
})();
const SCENE_ART = {
  ball: `<svg viewBox="0 0 100 100"><path d="M8 84 H92" stroke="#7cc85a" stroke-width="6" stroke-linecap="round"/><g transform="translate(70 66)"><circle r="16" fill="#5cc3ff" stroke="${INK}" stroke-width="4"/><path d="M-16 0 Q0 -7 16 0" fill="none" stroke="#fff5e2" stroke-width="5"/></g>
    <path d="M14 60 H42 M20 70 H46 M10 50 H36" stroke="#9aa3b5" stroke-width="4" stroke-linecap="round" opacity=".7"/><text x="30" y="34" text-anchor="middle" font-family="Fredoka, sans-serif" font-weight="700" font-size="34" fill="#ff5d8f" stroke="${INK}" stroke-width="1.5">?</text></svg>`,
  icecream: `<svg viewBox="0 0 100 100"><path d="M6 86 H94" stroke="#c9a37a" stroke-width="6" stroke-linecap="round"/><ellipse cx="44" cy="80" rx="26" ry="8" fill="#ffb3c8" stroke="${INK}" stroke-width="4"/><circle cx="40" cy="72" r="13" fill="#ffb3c8" stroke="${INK}" stroke-width="4"/>
    <path d="M60 46 L86 30 L84 58 Z" fill="#e8b46a" stroke="${INK}" stroke-width="4" stroke-linejoin="round"/><path d="M66 46 L82 38 M70 52 L84 46" stroke="#c98a4b" stroke-width="3"/><g fill="#7cc85a"><circle cx="30" cy="68" r="2.5"/><circle cx="46" cy="66" r="2.5"/></g></svg>`,
  tower: `<svg viewBox="0 0 100 100"><path d="M6 88 H94" stroke="#c9a37a" stroke-width="6" stroke-linecap="round"/><g stroke="${INK}" stroke-width="4" stroke-linejoin="round"><rect x="12" y="66" width="22" height="20" rx="3" fill="#ff5d8f"/><rect x="40" y="70" width="22" height="16" rx="3" fill="#4fb8ff" transform="rotate(18 51 78)"/>
    <rect x="62" y="40" width="20" height="18" rx="3" fill="#ffd35c" transform="rotate(-32 72 49)"/><rect x="30" y="34" width="20" height="18" rx="3" fill="#7cc85a" transform="rotate(40 40 43)"/></g><path d="M56 22 l4 8 M66 18 l1 9 M46 20 l5 7" stroke="#e04444" stroke-width="3.5" stroke-linecap="round"/></svg>`,
  grab: `<svg viewBox="0 0 100 100"><g transform="rotate(-12 50 56)"><circle cx="50" cy="40" r="14" fill="#d9a066" stroke="${INK}" stroke-width="4"/><circle cx="40" cy="28" r="6" fill="#d9a066" stroke="${INK}" stroke-width="3.5"/><circle cx="60" cy="28" r="6" fill="#d9a066" stroke="${INK}" stroke-width="3.5"/>
    <ellipse cx="50" cy="66" rx="16" ry="18" fill="#d9a066" stroke="${INK}" stroke-width="4"/><circle cx="45" cy="38" r="2.4" fill="${INK}"/><circle cx="55" cy="38" r="2.4" fill="${INK}"/></g>
    <path d="M78 52 C92 50 96 62 90 70 L74 66 Z" fill="#ffd1b0" stroke="${INK}" stroke-width="4" stroke-linejoin="round"/><path d="M80 60 L64 62" stroke="${INK}" stroke-width="4" stroke-linecap="round"/><path d="M14 40 h12 M10 52 h14" stroke="#9aa3b5" stroke-width="4" stroke-linecap="round"/></svg>`,
  thunder: `<svg viewBox="0 0 100 100"><path d="M24 52 C10 52 10 32 26 32 C28 18 50 14 56 26 C70 18 88 28 82 42 C94 46 90 60 78 60 L28 60 C26 60 25 56 24 52 Z" fill="#b8c2d6" stroke="${INK}" stroke-width="4" stroke-linejoin="round"/>
    <path d="M52 58 L40 78 L52 78 L44 96 L66 70 L54 70 L62 58 Z" fill="#ffd23a" stroke="${INK}" stroke-width="3.5" stroke-linejoin="round"/><path d="M22 70 l-4 8 M80 70 l-3 8" stroke="#4fb8ff" stroke-width="4" stroke-linecap="round"/></svg>`,
  butterfly: `<svg viewBox="0 0 100 100"><g stroke="${INK}" stroke-width="3.5" stroke-linejoin="round"><path d="M50 50 C30 20 8 26 14 46 C18 58 36 58 50 52 Z" fill="#ff9ec4"/><path d="M50 50 C70 20 92 26 86 46 C82 58 64 58 50 52 Z" fill="#ff9ec4"/>
    <path d="M50 54 C36 60 22 72 30 82 C38 88 48 72 50 58 Z" fill="#ffc6dc"/><path d="M50 54 C64 60 78 72 70 82 C62 88 52 72 50 58 Z" fill="#ffc6dc"/></g><rect x="46" y="34" width="8" height="46" rx="4" fill="#4a3a66"/><path d="M48 36 Q42 24 38 22 M52 36 Q58 24 62 22" fill="none" stroke="#4a3a66" stroke-width="3" stroke-linecap="round"/><g fill="#fff3a8"><circle cx="28" cy="40" r="5"/><circle cx="72" cy="40" r="5"/></g></svg>`,
  box: `<svg viewBox="0 0 100 100"><path d="M18 56 H82 V90 H18 Z" fill="#c98a4b" stroke="${INK}" stroke-width="4" stroke-linejoin="round"/><path d="M18 56 L6 42 M82 56 L94 42" stroke="${INK}" stroke-width="4" stroke-linecap="round"/>
    <path d="M50 56 C40 52 60 48 50 44 C40 40 60 36 50 32" fill="none" stroke="#9aa3b5" stroke-width="5" stroke-linecap="round"/><circle cx="50" cy="20" r="13" fill="#ff5d5d" stroke="${INK}" stroke-width="4"/><circle cx="45" cy="18" r="2.4" fill="${INK}"/><circle cx="55" cy="18" r="2.4" fill="${INK}"/><path d="M45 25 Q50 29 55 25" fill="none" stroke="${INK}" stroke-width="2.5" stroke-linecap="round"/>
    <path d="M24 30 l6 4 M76 30 l-6 4 M50 2 v5" stroke="#ffd23a" stroke-width="4" stroke-linecap="round"/></svg>`
};
/* breathing: a flower to smell, a candle to blow */
const CALM_ART = {
  flower: `<svg viewBox="0 0 100 100"><path d="M50 58 V94" stroke="#5fa846" stroke-width="6" stroke-linecap="round"/><ellipse cx="64" cy="80" rx="12" ry="6" fill="#7cc85a" transform="rotate(-30 64 80)"/><g fill="#ff9ec4" stroke="${INK}" stroke-width="3">${[0, 1, 2, 3, 4, 5].map(i => { const a = i * Math.PI / 3; return `<circle cx="${(50 + Math.cos(a) * 18).toFixed(1)}" cy="${(38 + Math.sin(a) * 18).toFixed(1)}" r="13"/>`; }).join('')}</g><circle cx="50" cy="38" r="11" fill="#ffd35c" stroke="${INK}" stroke-width="3"/></svg>`,
  candle: `<svg viewBox="0 0 100 100"><rect x="38" y="44" width="24" height="48" rx="6" fill="#9fd0ff" stroke="${INK}" stroke-width="4"/><path d="M44 52 V84" stroke="#fff" stroke-width="4" stroke-linecap="round" opacity=".6"/><path d="M50 44 V36" stroke="${INK}" stroke-width="3"/>
    <path class="flame" d="M50 8 C60 20 60 30 50 36 C40 30 40 20 50 8 Z" fill="#ffb020" stroke="${INK}" stroke-width="3" stroke-linejoin="round"/><path d="M50 18 C54 24 54 29 50 32 C46 29 46 24 50 18 Z" fill="#fff3a8"/></svg>`
};
