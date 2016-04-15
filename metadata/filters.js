angular
.module('metadataApp')
.filter('wrapText', function() {
	return function(input, width) {
		var regex = new RegExp('(.{' + (width || 80) + '})', 'g');
		return input.replace(regex,'$1<br>');
	};
})
.filter('splitText', function() {
	return function(input, width) {
		var regex = new RegExp('.{1,' + (width || 80) + '}', 'g');
		return input.match(regex);
	};
})
.filter('regex', function() {
	return function(input, pattern) {
		var regex = RegExp(pattern);
		return input.filter(function(element){
			return regex.test(element);
		});
	};
});