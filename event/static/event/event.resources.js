var EventApp = angular.module('EventApp');

EventApp.factory('Event', ['HEK_URL', '$resource',
	function(HEK_URL, $resource) {
		return $resource(HEK_URL + 'event');
	}
]);