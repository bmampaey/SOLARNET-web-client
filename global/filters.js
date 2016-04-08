angular
.module('global')
.filter('getProp', function() {
	return function(input, prop, separator) {
		if (input instanceof Array){
			var list = input.map(function(val){return val[prop];});
			if (separator != undefined){
				return list.join(separator);
			}
			else {
				return list
			}
		}
		else {
			return input[prop];
		}
	};
});

