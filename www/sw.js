const CACHE='chindami-privacy-v16';
const ASSETS=['./','./index.html','./manifest.webmanifest','./icon.svg','./icon-192.png','./icon-512.png','./reference-samples.js'];
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS.map(path=>new Request(path,{cache:"reload"})))).then(()=>self.skipWaiting())));
self.addEventListener('activate',e=>e.waitUntil(Promise.all(['chindami-icon-v15','chindami-finished-v14','chindami-horizontal-v13','chindami-spacing-v12','chindami-compact-v11','chindami-hold-v10','chindami-readout-v9','chindami-recorded-v2','chindami-clean-v3','chindami-clean-v4','chindami-label-v5','chindami-manual-v6','chindami-pitch-v7','chindami-nearest-v8'].map(key=>caches.delete(key))).then(()=>self.clients.claim())));
self.addEventListener('fetch',e=>e.respondWith(caches.match(e.request,{cacheName:CACHE}).then(r=>r||fetch(e.request))));
