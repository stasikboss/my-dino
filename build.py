"""Builds play.html (the game) from src/: one self-contained page, as the app needs to work offline."""
import math, random, pathlib, re
root = pathlib.Path(__file__).parent
src = root / 'src'
random.seed(7)
rays = ''.join(f'<path d="M80 4 Q86 18 80 30 Q74 18 80 4 Z" transform="rotate({a} 80 80)"/>' for a in range(0, 360, 30))
foam_c = [(x, 52 + random.uniform(-8, 2), random.uniform(15, 26)) for x in range(36, 580, 28)]
foam = ''.join(f'<circle cx="{x}" cy="{y:.0f}" r="{r:.0f}"/>' for x, y, r in foam_c)
shine = ''.join(f'<ellipse cx="{x - r * 0.35:.0f}" cy="{y - r * 0.4:.0f}" rx="{r * 0.28:.1f}" ry="{r * 0.2:.1f}"/>' for x, y, r in foam_c)
fringe = ''.join(f'<path d="M{290 + 272 * math.cos(t):.1f} {55 + 44 * math.sin(t):.1f} L{290 + 282 * math.cos(t):.1f} {55 + 49 * math.sin(t):.1f}"/>' for t in [math.pi * (k / 26) for k in range(-1, 28)] if abs(math.cos(t)) > 0.55)
stars = []
while len(stars) < 16:
    x, y = random.uniform(46, 214), random.uniform(40, 150)
    if (x - 165) ** 2 + (y - 78) ** 2 < 46 ** 2: continue
    stars.append(f'<circle class="tw" cx="{x:.0f}" cy="{y:.0f}" r="{random.uniform(1.4, 2.8):.1f}" style="animation-delay:-{random.uniform(0, 3):.1f}s"/>')
quilt = ''.join(f'<circle cx="{x}" cy="{y}" r="7"/>' for x in range(60, 620, 120) for y in (120, 170)) + ''.join(f'<path d="M{x} {y - 8} l2.5 5 5.5 .8 -4 3.9 1 5.5 -5 -2.6 -5 2.6 1 -5.5 -4 -3.9 5.5 -.8 Z"/>' for x in range(120, 620, 120) for y in (146,))
def persp_floor(kind):
    """A floor seen from the front: seams that run toward a point far behind the room, and (for tiles)
    cross seams that get closer together with distance. Drawn on a 1000x300 box stretched to the floor."""
    W, H, vx, vy = 1000, 300, 500, -900
    out = []
    n = 13 if kind == 'wood' else 11
    for k in range(-n, n + 1):
        bx = vx + k * (W / (n * 0.9))
        t = (0 - vy) / (H - vy)
        tx = vx + (bx - vx) * t
        out.append(f'<path d="M{tx:.1f} 0 L{bx:.1f} {H}"/>')
    if kind == 'tile':
        z = 1.0
        while True:
            y = H - (H) * (1 - 1 / z) * 1.25
            if y < 2: break
            out.append(f'<path d="M0 {y:.1f} H{W}"/>')
            z += 0.55
    if kind == 'wood':
        random.seed(3)
        for k in range(-n, n):
            for j in range(3):
                y = random.uniform(30, H - 10)
                t = (y - vy) / (H - vy)
                x1 = vx + (vx + k * (W / (n * 0.9)) - vx) * t
                x2 = vx + (vx + (k + 1) * (W / (n * 0.9)) - vx) * t
                out.append(f'<path d="M{x1:.1f} {y:.1f} L{x2:.1f} {y + 1:.1f}"/>')
    return f'<svg class="floor-lines fl-{kind}" viewBox="0 0 {W} {H}" preserveAspectRatio="none" aria-hidden="true"><g fill="none" stroke-width="2.2" vector-effect="non-scaling-stroke">{"".join(out)}</g></svg>'
floors = persp_floor('wood') + persp_floor('tile')
room = (src / 'room.html').read_text().replace('${SUN_RAYS}', rays).replace('${RUG_FRINGE}', fringe).replace('${STARS}', ''.join(stars)).replace('${FLOORS}', floors)
body = (src / 'body.html').read_text().replace('${ROOM}', room).replace('${TUB_FOAM}', foam).replace('${TUB_SHINE}', shine).replace('${QUILT_DOTS}', quilt)
assert '${' not in body, body[body.index('${'):body.index('${') + 40]
js = '\n'.join((src / f).read_text() for f in ['art.js', 'content.js', 'core.js', 'pet.js', 'rooms.js', 'games.js', 'main.js'])
css = (src / 'style.css').read_text()
html = f"""<!doctype html>
<html lang="he" dir="rtl">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, viewport-fit=cover">
<title>הדינו שלי</title>
<meta name="description" content="משחק לגידול דינוזאורים וחיות לילדים בגילאי 3 עד 6: מאכילים, רוחצים, משכיבים לישון ולומדים. בעברית, ברוסית ובאנגלית, בלי פרסומות.">
<meta name="theme-color" content="#ffd5ac">
<link rel="manifest" href="manifest.webmanifest">
<link rel="icon" href="icons/favicon-32.png" sizes="32x32" type="image/png">
<link rel="apple-touch-icon" href="icons/apple-touch-icon.png">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-title" content="הדינו שלי">
<meta name="apple-mobile-web-app-status-bar-style" content="default">
<link rel="stylesheet" href="fonts/fonts.css">
<style>
{css}
</style>
</head>
<body>
{body}
<script>
(() => {{
'use strict';
{js}
}})();
</script>
<script>
if ('serviceWorker' in navigator) addEventListener('load', () => {{ navigator.serviceWorker.register('sw.js').catch(() => {{}}); }});
</script>
</body>
</html>
"""
(root / 'play.html').write_text(html)
print('play.html', len(html.encode()), 'bytes')

# offline list for the service worker, with a version that changes whenever a file changes
import hashlib, json
assets = ['./', 'index.html', 'play.html', 'manifest.webmanifest', 'qr.js', 'og.jpg']
assets += sorted('fonts/' + p.name for p in (root / 'fonts').glob('*') if p.suffix in ('.woff2', '.css'))
assets += sorted('icons/' + p.name for p in (root / 'icons').glob('*.png'))
assets += sorted('screens/' + p.name for p in (root / 'screens').glob('*.jpg'))
h = hashlib.sha1()
for a in assets:
    f = root / ('index.html' if a == './' else a)
    if f.exists(): h.update(f.read_bytes())
sw = (src / 'sw.template.js').read_text().replace('__HASH__', h.hexdigest()[:10]).replace('__ASSETS__', json.dumps([a if a == './' else './' + a for a in assets], indent=2))
(root / 'sw.js').write_text(sw)
print('sw.js', len(assets), 'files')
