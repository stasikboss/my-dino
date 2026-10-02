import sys, json, pathlib
from playwright.sync_api import sync_playwright
root = pathlib.Path('/home/claude/my-dino/engine/dev')
opts = json.loads(sys.argv[1]) if len(sys.argv) > 1 else {}
out = sys.argv[2] if len(sys.argv) > 2 else 'grid.png'
with sync_playwright() as p:
    b = p.chromium.launch(args=['--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'])
    pg = b.new_page(viewport={'width': opts.get('w', 1800), 'height': opts.get('h', 760)})
    errs = []
    pg.on('pageerror', lambda e: errs.append(str(e)))
    pg.on('console', lambda m: errs.append(m.text) if m.type in ('error', 'warning') else None)
    pg.goto('file://' + str(root / 'preview.html'))
    pg.wait_for_timeout(300)
    print(pg.evaluate(f'renderGrid({json.dumps(opts)})'))
    pg.wait_for_timeout(200)
    pg.locator('#c').screenshot(path=str(root / out))
    print('\n'.join(errs[:10]) or 'no errors')
    b.close()
