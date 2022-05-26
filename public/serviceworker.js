var CACHE_NAME = "fly-cache1"; //cache name and what to fetch
var CACHED_URLS = [
  //offline pages
  "/start.html",
  "/search-offline.html",
  "/dateselect-offline.html",
  "/services-offline.html",
  "/offline.html",

  //manifest
  "/manifest.json",

  //css
  "/css/style.css",

  //fonts
  "/icons-images/fonts/Montserrat-VariableFont_wght.ttf",
  "/icons-images/fonts/Rubik-VariableFont_wght.ttf",

  //images
  "/icons-images/images/offline.png",
  "/favicon.ico",
  "/icons-images/images/flyone-logo.png",
  "/icons-images/svgs/start/flight-twoway-icon2.svg",
  "/icons-images/svgs/select flight/F1-133-01.svg",
  "/icons-images/svgs/select flight/F1-133-02.svg",
  "/icons-images/svgs/select flight/F1-133-03.svg",
  "/icons-images/apple-touch-icon.png",

  //js
  "/js/app.js"
];

self.addEventListener("install", function (event) {    //instalation of serviceworker

  event.waitUntil(
    caches.open(CACHE_NAME).then(function (cache) {
      return cache.addAll(CACHED_URLS);
    })
  );
});

self.addEventListener("fetch", function (event) {    // fetches offline pages if original fetch fails
  var url = new URL(event.request.url);

  event.respondWith(
    fetch(event.request).catch(function () {
      return caches.match(event.request).then(function (response) {
        if (response) {
          return response;
        } else if (url.pathname == "/start" || url.pathname == "/") {
          return caches.match("/start.html");
        } else if (url.pathname == "/search") {
          return caches.match("/search-offline.html");
        } else if (url.pathname === "/date") {
          return caches.match("/dateselect-offline.html");
        } else if (url.pathname == "/services") {
          return caches.match("/services-offline.html");
        } else if (event.request.headers.get("accept").includes("text/html")) {
          console.log();
          return caches.match("/offline.html");
        }
      });
    })
  );
});

self.addEventListener("activate", function (event) {   //clears redundant cache
  event.waitUntil(
    caches.keys().then(function (cacheNames) {
      return Promise.all(
        cacheNames.map(function (cacheName) {
          if (CACHE_NAME !== cacheName && cacheName.startsWith("fly-cache")) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

