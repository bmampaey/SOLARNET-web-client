var DatasetApp = angular.module('DatasetApp');

DatasetApp.factory('Dataset', ['SDA_URL', '$resource',
	function(SDA_URL, $resource) {
		return $resource(SDA_URL + 'api/dataset');
	}
]);

DatasetApp.factory('Telescope', ['SDA_URL', '$resource',
	function(SDA_URL, $resource) {
		return $resource(SDA_URL + 'api/telescope');
	}
]);

DatasetApp.factory('Characteristic', ['SDA_URL', '$resource',
	function(SDA_URL, $resource) {
		return $resource(SDA_URL + 'api/characteristic');
	}
]);

DatasetApp.factory('Tag', ['SDA_URL', '$resource',
	function(SDA_URL, $resource) {
		return $resource(SDA_URL + 'api/tag');
	}
]);

