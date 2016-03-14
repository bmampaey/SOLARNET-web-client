var DatasetApp = angular.module('DatasetApp');

DatasetApp.factory('Dataset', ['SDA_URL', '$resource',
	function(SDA_URL, $resource) {
		return $resource(SDA_URL + 'dataset');
	}
]);

DatasetApp.factory('Telescope', ['SDA_URL', '$resource',
	function(SDA_URL, $resource) {
		return $resource(SDA_URL + 'telescope');
	}
]);

DatasetApp.factory('Characteristic', ['SDA_URL', '$resource',
	function(SDA_URL, $resource) {
		return $resource(SDA_URL + 'characteristic');
	}
]);

DatasetApp.factory('Tag', ['SDA_URL', '$resource',
	function(SDA_URL, $resource) {
		return $resource(SDA_URL + 'tag');
	}
]);

DatasetApp.factory('Metadata', ['SDA_URL', '$resource',
	function(SDA_URL, $resource) {
		return $resource(SDA_URL + ':dataset');
	}
]);