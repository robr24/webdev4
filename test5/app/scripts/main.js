console.log('\'Allo \'Allo!');

$(document).on('ready', function(e) {
	'use strict';
	console.log(e);

	var items = ['red', 'blue', 'green'];

	var item = _.filter(items, function(val) {
		return val === 'green';
	});

	console.log(item);


});
