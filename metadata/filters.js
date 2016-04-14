angular
.module('metadataApp')
.filter('wrapText', function() {
	return function(input, width) {
		var regex = new RegExp('(.{' + (width || 80) + '})', 'gm');
		return input.replace(regex,'$1<br>');
	};
})
.filter('splitText', function() {
	return function(input, width) {
		var regex = new RegExp('.{1,' + (width || 80) + '}', 'gm');
		return input.match(regex);
	};
});