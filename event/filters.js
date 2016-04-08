angular
.module('eventApp')
.filter('fullType', function(EVENT_TYPES) {
	return function(input) {
		return input in EVENT_TYPES ? EVENT_TYPES[input] : input;
	};
});
