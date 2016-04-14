angular
.module('eventApp')
.factory('Event', function($http, $window, $resource, HEK_URL, HEK_GET_PARAMS, HEK_QUERY_PARAMS) {
	var Event = $resource(
		HEK_URL,
		{ callback: 'JSON_CALLBACK' },
		{
			get:{
				method: 'JSONP',
				params: HEK_GET_PARAMS,
				cache: true,
				transformRequest: transformRequest($http, $window),
			},
			query:{
				method: 'JSONP',
				params: HEK_QUERY_PARAMS,
				isArray: true,
				cache: true,
				transformRequest: transformRequest($http, $window),
				transformResponse: transformResponse($http),
			}
		},
		{ cancellable: true }
	);
	
	// hack the query method to add load page methods
	var query = Event.query;
	
	Event.query = function(parameters, succes, error){
		var result = query(parameters, succes, error);
		result.search_params = parameters;
		result.page_number = parameters.page || 1;
		result.load_page = load_page;
		result.load_next_page = load_next_page;
		result.load_previous_page = load_previous_page;
		return result;
	};
	
	return Event;
	
	// update query results with page results
	// and return the content of the page
	function load_page(page_number, succes, error) {
		var self = this;
		if (page_number <= 0){
			throw 'Invalid page number';
		}
		self.search_params.page = page_number;
		return Event.query(self.search_params, function(data, responseHeaders){
			// update self with the new data
			Array.prototype.splice.apply(self, [0, self.length].concat(data));
			self.page_number = page_number;
			
			// call original succes
			if (succes != undefined) {
				succes(data, responseHeaders);
			}
		}, error);
	}
	
	function load_next_page(){
		return this.load_page(this.page_number + 1);
	}
	
	function load_previous_page(){
		return this.load_page(this.page_number - 1);
	}
	
	// ugly hack because of HEK server bug on JSONP callback
	function transformRequest($http, $window) {
		return $http.defaults.transformRequest.concat([
				function (data, headersGetter) {
					// register temporarily a callback with the name the HEK actually returns
					var c = $window.angular.callbacks.counter.toString(36);
					$window['angularcallbacks_' + c] = function (data) {
						$window.angular.callbacks['_' + c](data);
						delete $window['angularcallbacks_' + c];
					};
					return data;
				}
		]);
	}
	// HEK return an object not an array
	function transformResponse($http){
		return $http.defaults.transformResponse.concat([
				function (data, headersGetter) {
					return data.result;
				}
		]);
	}
});
