const cacheName = "v1"
const files = ["index.html","css/styles.css","js/index.js","js/init.js","js/indexeddb.js"]
self.addEventListener("install", function (e) {
    e.waitUntil(
        caches.open(cacheName).then((cache) => {
            console.log("serviceworkercacheing")
            return cache.addAll(files)
        })
    )
})
self.addEventListener("fetch", function (e) {
    e.respondWith(
        caches.match(e.request).then((resource) => {
            if (resource) {
                return (resource)


            }
            else {
                return fetch (e.request)
            }
        })
    )
})
// self.addEventListener("activate", function (e) {
//     console.log("activate")
// })
// self.addEventListener("fetch", function (e) {
//     console.log("fetch!!")
//     e.respondWith(
//         caches.match(e.request).then(function (request) {
//           if (request) {
//             // if cache is available, respond with cache
//             console.log("responding with cache : " + e.request.url);
//             return request;
//           } else {
//             // if there are no cache, try fetching request
//             console.log("file is not cached, fetching : " + e.request.url);
//             return fetch(e.request);
//           }
//         })
//       );
// })
