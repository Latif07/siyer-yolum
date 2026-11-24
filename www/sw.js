/* Siyer Yolum: çevrimdışı önbellek. Dosyalar önce ağdan, ağ yoksa önbellekten gelir. */
const SURUM = 'siyer-SURUM_YER';
const KABUK = ['./', 'index.html', 'manifest.webmanifest', 'css/app.css', 'js/surum.js', 'js/data.js', 'js/data-ek.js', 'js/content-en.js', 'js/content-en-2.js', 'js/app.js', 'icons/icon-192.png', 'icons/apple-touch-icon.png'];
self.addEventListener('install', e => { e.waitUntil(caches.open(SURUM).then(c => c.addAll(KABUK)).then(() => self.skipWaiting())); });
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(k => Promise.all(k.filter(x => x !== SURUM).map(x => caches.delete(x)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', e => {
  const u = new URL(e.request.url);
  if (e.request.method !== 'GET' || u.origin !== location.origin) return;
  e.respondWith((async () => {
    const c = await caches.open(SURUM);
    try { const r = await fetch(e.request); if (r.ok) c.put(e.request, r.clone()); return r; }
    catch (x) { const v = await c.match(e.request, { ignoreSearch: true }) || (e.request.mode === 'navigate' ? await c.match('index.html') : null); if (v) return v; throw x; }
  })());
});
