const staticAssets = [
    './',
    './styles.css',
    './aces.js',
    './dass21.js',
    './gad7.js',
    './experiment.js',
    './olbi.js',
    './results.js'
]

self.addEventListener('install', async event => {
    const cache = await caches.open('qApp-static');
    cache.addAll(staticAssets);
});

self.addEventListener('fetch', event => {
    const req = event.request;
    event.respondWith(cacheFirst(req));
    console.log('fetch');
});

async function cacheFirst(req){
    const cachedResponse = await caches.match(req);
    return cachedResponse || fetch(req);
}