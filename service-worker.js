const CACHE_NAME = 'spirit-calc-v8';
const ASSETS = [
  './',
  './index.html',
  './styles.css?v=5',
  './app.js',
  './table2.js',
  './manifest.json'
];
const TABLE_ASSETS = [
  './tables/table 1 ცხრილი 1/table1_data.json',
  './tables/table 2 ცხრილი 2/table2_data.json',
  './tables/table 2 ცხრილი 2/table4_data.json',
  './tables/table 2 ცხრილი 2/alcohol_density_table_complete.json',
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(async cache => {
      await cache.addAll(ASSETS);
      await Promise.all(TABLE_ASSETS.map(url => cache.add(url).catch(() => {})));
    })
  );
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(cached => cached || fetch(event.request))
  );
});
