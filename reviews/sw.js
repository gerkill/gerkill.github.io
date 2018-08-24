/**
 * Cache details
 */
const cacheName = 'restaurant_reviews_1';

const filesToCache = [
  '/',
  '/index.html',
  '/restaurant.html',
  '/data/restaurants.json',
  '/img/1.jpg',
  '/img/2.jpg',
  '/img/3.jpg',
  '/img/4.jpg',
  '/img/5.jpg',
  '/img/6.jpg',
  '/img/7.jpg',
  '/img/8.jpg',
  '/img/9.jpg',
  '/img/10.jpg',
  '/public/css/styles.min.css',
  '/public/css/responsive.min.css',
  '/public/js/dbhelper.min.js',
  '/public/js/main.min.js',
  '/public/js/restaurant_info.min.js',
];

/**
 * Create cache when SW installs
 */
self.addEventListener('install', event => {
  console.log('[ServiceWorker] Install');
  event.waitUntil(
    caches.open(cacheName).then(cache => {
      console.log('[ServiceWorker] Caching app shell');
      return cache.addAll(filesToCache);
    }),
  );
});

/**
 *  Purge previous cache after activating the next cache
 */
self.addEventListener('activate', event => {
  console.log('[ServiceWorker] Activate');
  event.waitUntil(
    caches.keys().then(keyList =>
      Promise.all(
        keyList.map(key => {
          if (key !== cacheName) {
            return caches.delete(key);
          }
        }),
      ),
    ),
  );
});

/**
 * Respond with cached content if they are matched
 */
self.addEventListener('fetch', event => {
  // Handle query string on /restaurant url
  const request = event.request.url.includes('/restaurant.html')
    ? new Request('/restaurant.html')
    : event.request;

  event.respondWith(
    caches.match(request).then(response => response || fetch(request)),
  );
});
