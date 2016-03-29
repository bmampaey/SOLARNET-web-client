var EventApp = angular.module('EventApp');

EventApp.factory('Event', ['HEK_URL', 'HEK_SEARCH_PARAMS', '$resource',
	function(HEK_URL, HEK_SEARCH_PARAMS, $resource) {
		return $resource(HEK_URL, { callback: 'JSON_CALLBACK' }, {get: {method: 'JSONP', params: HEK_SEARCH_PARAMS}});
	}
]);