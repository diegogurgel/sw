var CACHE_NAME = 'sw-v1';

var urls = [
	'index.html',
	'scripts/main.js',
	'styles/main.css'
]
self.addEventListener('install',event=>{
	event.waitUntil(caches.open(CACHE_NAME).then(cache=>{
			return cache.addAll(urls);
		})
	);
});

self.addEventListener('fetch',event=>{
	event.respondWith(caches.match(event.request).then(response=>{
		if(response){
			return response;
		}
		return fetch(event.request);
	}));
});