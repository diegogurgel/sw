if('serviceWorker' in navigator){
	navigator.serviceWorker.register('sw.js').then(function(registration){
		console.log('OK!', registration);
	}).catch(function(registration){
		console.log('Fail :(', registration);
	});
}