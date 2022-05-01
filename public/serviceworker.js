var CACHE_NAME = "service-cache";
var CACHED_URLS = [
  "/services-offline.html",
  "/css/style.css"
];

self.addEventListener("install", function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function(cache) {
      return cache.addAll(CACHED_URLS);
    })
  );
});
self.addEventListener("fetch", function(event) {
  event.respondWith(
    fetch(event.request).catch(function() {
      return caches.match("./services-offline.html");
    })
  );
});