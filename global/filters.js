angular
.module('global')
.filter('getProp', function() {
	// return a list of the properties of a list of object OR a string if a separator is given
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
})
.filter('parseQueryString', function() {
	// parse a query string into a query dict
	return function (query_string){
		if(query_string == undefined || query_string.length == 0){
			return {};
		}		
		var couples = query_string.split("&");
		var parts, query_dict = {}, key, value;
		for(var i = 0; i < couples.length; i++) {
			parts = couples[i].split("=");
			key = decodeURIComponent(parts[0]);
			if(key.length == 0){
				continue;
			}
			value = decodeURIComponent(parts[1].replace(/\+/g, '%20'));
			if(value.length == 0){
				value = null;
			}
			if(query_dict[key] === undefined){
				query_dict[key] = value;
			} else if(query_dict[key] instanceof Array){
				query_dict[key].push(value);
			} else {
				query_dict[key] = [query_dict[key], value];
			}
		}
		return query_dict;
	};
});



