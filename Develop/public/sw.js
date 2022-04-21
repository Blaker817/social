const cacheName = "v1"
const files = ["index.html"]
self.addEventListener("install", function (e) {
    console.log("install")
    self.skipWaiting()



    caches.open(cacheName).then((cache) => {
        console.log("serviceworkercacheing")
        return cache.addAll(files)
    })







})
self.addEventListener("activate", function (e) {
    console.log("activate")
})
self.addEventListener("fetch", function (e) {
    console.log("fetch!!")
    e.respondWith(
        caches.match(e.request).then(function (request) {
          if (request) {
            // if cache is available, respond with cache
            console.log("responding with cache : " + e.request.url);
            return request;
          } else {
            // if there are no cache, try fetching request
            console.log("file is not cached, fetching : " + e.request.url);
            return fetch(e.request);
          }
        })
      );
})
