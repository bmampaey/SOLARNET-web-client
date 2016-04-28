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
})
.filter('parseQuery', function() {
	return function (querystring){
		if(querystring == undefined || querystring.length == 0){
			return {};
		}		
		var couples = querystring.split("&");
		var parts, query = {}, key, value;
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
			if(query[key] === undefined){
				query[key] = value;
			} else if(query[key] instanceof Array){
				query[key].push(value);
			} else {
				query[key] = [query[key], value];
			}
		}
		return query;
	};
});



