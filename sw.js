const C='mv-app-v1';const A=['app.html','app-manifest.json','icon.svg'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(C).then(c=>c.addAll(A)).then(()=>self.skipWaiting()))});
self.addEventListener('activate',e=>{e.waitUntil(self.clients.claim())});
self.addEventListener('fetch',e=>{const u=new URL(e.request.url);if(u.pathname.endsWith('/functions/v1/saas')||u.pathname.endsWith('/functions/v1/ops'))return;e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request)).catch(()=>caches.match('app.html')))});
