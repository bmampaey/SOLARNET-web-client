angular
.module('eventApp')
.factory('Event', function(HEK_URL, HEK_SEARCH_PARAMS, $resource) {
	return $resource(
		HEK_URL,
		{ callback: 'JSON_CALLBACK' },
		{get: {method: 'JSONP', params: HEK_SEARCH_PARAMS, cache: true}},
		{cancellable: true}
	);
});