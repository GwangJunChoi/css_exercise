self.addEventListener('install', function(e) {
 console.log('[Service Worker] Install');
 e.waitUntil(
   caches.open('teset').then(function(cache) {
     return cache.addAll([]);
   })
 );
});

self.addEventListener('fetch', function(e) {
  console.log(e.request.url);
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});
