//self targets to the service worker in background
//addEventListener don't have dom events (on click) as it doesnt have access to the DOM
self.addEventListener('install', (event) => {
  console.log('installing ', event);
});

self.addEventListener('activate', (event) => {
  console.log('activating', event);
  return self.clients.claim(); //maynot be used but could create problems
});

self.addEventListener('fetch', (event) => {
  console.log('fetching', event);
  event.respondWith(fetch(event.request));
});
