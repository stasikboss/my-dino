import sys, json, pathlib, time
from playwright.sync_api import sync_playwright
root = pathlib.Path('/home/claude/my-dino/engine/dev')
cases = json.loads(sys.argv[1])
vw, vh = (int(x) for x in (sys.argv[2] if len(sys.argv) > 2 else '390x844').split('x'))
dsf = float(sys.argv[3]) if len(sys.argv) > 3 else 1
with sync_playwright() as p:
    b = p.chromium.launch(args=['--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'])
    pg = b.new_page(viewport={'width': vw, 'height': vh}, device_scale_factor=dsf)
    errs = []
    pg.on('pageerror', lambda e: errs.append(str(e)))
    pg.on('console', lambda m: errs.append(m.text) if m.type in ('error',) else None)
    pg.goto('file://' + str(root / 'room.html')); pg.wait_for_timeout(500)
    for c in cases:
        t0 = time.time()
        pg.evaluate(f"show({json.dumps(c['room'])}, {json.dumps(c.get('sp','trex'))}, {json.dumps(c.get('o',{}))})")
        if c.get('js'): pg.evaluate(c['js'])
        pg.wait_for_timeout(c.get('wait', 1500))
        pg.screenshot(path=str(root / (c['name'] + '.png')), timeout=120000)
        print(c['name'], round(time.time() - t0, 1), 's')
    print('\n'.join(errs[:10]) or 'no errors')
    b.close()
