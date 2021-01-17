const VERSION = "v1"
self.addEventListener("install", (event) => {
    event.waitUntil(precache())
})

self.addEventListener("fetch", (event) => {
    const request = event.request
    // Only for get
    if (request.method != "GET") return

    event.respondWith(cachedResponse(request))

    event.waitUntil(updateCache(request))
})

async function precache() {
    const cache = await caches.open(VERSION)
    return cache.addAll([
        // "/",
        // "/index.html",
        // "/assets/index.css",
        // "/assets/InYourEyes.mp4",
        // "/js/index.js",
        // "/js/MediaPlayer.js",
        // "/js/plugins/Autopause.js",
        // "/js/plugins/Autoplay.js",
    ])
}

async function cachedResponse(request) {
    const cache = await caches.open(VERSION)
    const response = await cache.match(request)
    return response || fetch(request)
}
async function updateCache(request) {
    const cache = await caches.open(VERSION)
    const response = await fetch(request)
    return cache.put(request, response)
}
