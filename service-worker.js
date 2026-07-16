const CACHE_NAME = "dark-moon-rocks-v2";

const FILES_TO_CACHE = [
    "./",
    "./index.html",
    "./radio.html",
    "./podcasts.html",
    "./doorways.html",
    "./about.html",
    "./styles.css",
    "./manifest.json",
];

// Install the new service worker
self.addEventListener("install", event => {
    event.waitUntil(
        caches.open(CACHE_NAME).then(cache => {
            return cache.addAll(FILES_TO_CACHE);
        })
    );

    self.skipWaiting();
});

// Delete all older caches
self.addEventListener("activate", event => {
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames
                    .filter(cacheName => cacheName !== CACHE_NAME)
                    .map(cacheName => caches.delete(cacheName))
            );
        })
    );

    self.clients.claim();
});

// Use the network first for pages and files
self.addEventListener("fetch", event => {
    if (event.request.method !== "GET") {
        return;
    }

    event.respondWith(
        fetch(event.request)
            .then(networkResponse => {
                const responseCopy = networkResponse.clone();

                caches.open(CACHE_NAME).then(cache => {
                    cache.put(event.request, responseCopy);
                });

                return networkResponse;
            })
            .catch(() => {
                return caches.match(event.request);
            })
    );
});