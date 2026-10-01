/* Offline support for "הדינו שלי": after the first visit, everything the game needs is kept on the device. */
const VERSION = 'dino-__HASH__';
const ASSETS = __ASSETS__;

self.addEventListener('install', event => {
  event.waitUntil(caches.open(VERSION).then(cache => cache.addAll(ASSETS)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k.startsWith('dino-') && k !== VERSION).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

function fromNetwork(request, ms){
  return new Promise((resolve, reject) => {
    const timer = setTimeout(() => reject(new Error('timeout')), ms);
    fetch(request).then(res => { clearTimeout(timer); resolve(res); }, err => { clearTimeout(timer); reject(err); });
  });
}

self.addEventListener('fetch', event => {
  const req = event.request;
  if (req.method !== 'GET' || new URL(req.url).origin !== self.location.origin) return;
  // Pages: try the network briefly so updates arrive, otherwise play from the device.
  if (req.mode === 'navigate'){
    event.respondWith(
      fromNetwork(req, 3500)
        .then(res => { if (res && res.ok){ const copy = res.clone(); caches.open(VERSION).then(c => c.put(req, copy)); } return res; })
        .catch(() => caches.match(req, { ignoreSearch: true }).then(hit => hit || caches.match('./play.html')))
    );
    return;
  }
  // Everything else (fonts, icons, pictures): from the device first.
  event.respondWith(
    caches.match(req).then(hit => hit || fetch(req).then(res => {
      if (res && res.ok){ const copy = res.clone(); caches.open(VERSION).then(c => c.put(req, copy)); }
      return res;
    }))
  );
});
