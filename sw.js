/* rngwillbake POS offline app: caches every file so the app opens with no internet. */
const CACHE = "rngwillbake-pos-417daa5776";
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
  if (e.request.method !== "GET" || new URL(e.request.url).origin !== self.location.origin) return;
  e.respondWith(caches.match(e.request, {ignoreSearch: true}).then(hit => hit || fetch(e.request).catch(() => e.request.mode === "navigate" ? caches.match("index.html") : Response.error())));
});
