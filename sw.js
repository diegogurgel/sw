var CACHE_NAME = 'sw-v1';

var urls = [
	'/',
	'scripts/main.js',
	'styles/main.css'
]
self.addEventListener('install',event=>{
	event.waitUntil(caches.open(CACHE_NAME).then(cache=>{
			return cache.addAll(urls);
		})
	);
});