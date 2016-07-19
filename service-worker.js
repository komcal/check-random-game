importScripts('node_modules/sw-toolbox/sw-toolbox.js');

toolbox.precache(['/','/index.html', '/bundle.js']);

toolbox.options.debug = true;

self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

toolbox.router.get('/index.html', toolbox.fastest);
toolbox.router.get('/', toolbox.fastest);
toolbox.router.get('/bundle.js', toolbox.fastest);
