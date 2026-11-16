/* rngwillbake POS offline app: caches every file so the app opens with no internet. */
const CACHE = "rngwillbake-pos-e57e6d5f8c-1.12";
const FILES = [
 "./",
 "index.html",
 "manifest.webmanifest",
 "icon-192.png",
 "icon-512.png",
 "maskable-192.png",
 "maskable-512.png",
 "apple-touch-icon.png",
 "tesseract.min.js",
 "worker.min.js",
 "tesseract-core-lstm.wasm.js",
 "tesseract-core-simd-lstm.wasm.js",
 "eng.traineddata.gz"
];
self.addEventListener("install", e => { e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES)).then(() => self.skipWaiting())); });
self.addEventListener("activate", e => { e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim())); });
self.addEventListener("fetch", e => {
  const req = e.request, url = new URL(req.url);
  if (req.method !== "GET" || url.origin !== self.location.origin) return;
  /* The app page itself: newest copy when online (so uploads show up right away), saved copy when offline or slow */
  if (req.mode === "navigate" || /\/(index\.html)?$/.test(url.pathname)) {
    e.respondWith((async () => {
      const cache = await caches.open(CACHE);
      try {
        const res = await Promise.race([fetch(url.origin + url.pathname, {cache: "no-store", credentials: "same-origin"}), new Promise((_, rej) => setTimeout(() => rej(new Error("slow")), 4000))]);
        if (res && res.ok) { cache.put("index.html", res.clone()); return res; }
        throw new Error("bad");
      } catch (err) { return (await cache.match("index.html")) || (await caches.match("index.html")) || Response.error(); }
    })());
    return;
  }
  e.respondWith(caches.match(req, {ignoreSearch: true}).then(hit => hit || fetch(req).catch(() => Response.error())));
});
