var CACHE_NAME = "fly-cache1"; //cache name and what to fetch
var CACHED_URLS = [
  "/offline.html",
  "/dateselect-offline.html",
  "/services-offline.html",

  "/css/style.css",

  "/icons-images/fonts/Montserrat-VariableFont_wght.ttf",
  "/icons-images/fonts/Rubik-VariableFont_wght.ttf",
  "/favicon.ico",
  "/icons-images/images/offline.png",
  "/manifest.json"
];

self.addEventListener("install", function(event) {    //instalation of serviceworker
  event.waitUntil(
    caches.open(CACHE_NAME).then(function(cache) {
      return cache.addAll(CACHED_URLS);
    })
  );
});

self.addEventListener("fetch", function(event) {    // fetches offline pages if original fetch fails
  var url= new URL(event.request.url);
  
  event.respondWith(
    fetch(event.request).catch(function() {
      return caches.match(event.request).then(function(response) {
        if (response) {
          return response;
        } else if(url.pathname === "/date"){
          return caches.match("/dateselect-offline.html");
        } else if(url.pathname == "/services"){
          return caches.match("/services-offline.html");
        } else if(event.request.headers.get("accept").includes("text/html")) {
          console.log();
          return caches.match("/offline.html");}
      });
    })
  );
});

self.addEventListener("activate", function(event) {   //clears redundant cache
  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.map(function(cacheName) {
          if (CACHE_NAME !== cacheName &&  cacheName.startsWith("fly-cache")) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});