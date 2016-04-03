angular
.module('datasetApp')
.factory('Dataset', ['SDA_URL', '$resource',
	function(SDA_URL, $resource) {
		return $resource(SDA_URL + 'dataset');
	}
])
.factory('Telescope', ['SDA_URL', '$resource',
	function(SDA_URL, $resource) {
		return $resource(SDA_URL + 'telescope');
	}
])
.factory('Characteristic', ['SDA_URL', '$resource',
	function(SDA_URL, $resource) {
		return $resource(SDA_URL + 'characteristic');
	}
])
.factory('Tag', ['SDA_URL', '$resource',
	function(SDA_URL, $resource) {
		return $resource(SDA_URL + 'tag');
	}
])
.factory('Metadata', ['SDA_URL', '$resource', 'METADATA_SEARCH_PARAMS',
	function(SDA_URL, $resource, METADATA_SEARCH_PARAMS) {
		return $resource(SDA_URL + ':dataset', METADATA_SEARCH_PARAMS);
	}
]);