angular
.module('datasetApp')
.factory('Dataset', ['$resource', 'SDA_URL', 'DATASET_RESOURCE_LIMIT',
	function($resource, SDA_URL, DATASET_RESOURCE_LIMIT) {
		return $resource(SDA_URL + '/dataset/:name', {limit: DATASET_RESOURCE_LIMIT});
	}
])
.factory('Telescope', ['$resource', 'SDA_URL', 'TELESCOPE_RESOURCE_LIMIT',
	function($resource, SDA_URL, TELESCOPE_RESOURCE_LIMIT) {
		return $resource(SDA_URL + '/telescope/:name', {limit: TELESCOPE_RESOURCE_LIMIT});
	}
])
.factory('Characteristic', ['$resource', 'SDA_URL', 'CHARACTERISTIC_RESOURCE_LIMIT',
	function($resource, SDA_URL, CHARACTERISTIC_RESOURCE_LIMIT) {
		return $resource(SDA_URL + '/characteristic/:name', {limit: CHARACTERISTIC_RESOURCE_LIMIT});
	}
])
.factory('Tag', ['$resource', 'SDA_URL', 'TAG_RESOURCE_LIMIT',
	function($resource, SDA_URL, TAG_RESOURCE_LIMIT) {
		return $resource(SDA_URL + '/tag/:name', {limit: TAG_RESOURCE_LIMIT});
	}
])
.factory('Metadata', ['$resource', 'SDA_URL', 'METADATA_RESOURCE_LIMIT',
	function($resource, SDA_URL, METADATA_RESOURCE_LIMIT) {
		return $resource(SDA_URL + '/:metadata/:oid', {limit: METADATA_RESOURCE_LIMIT});
	}
]);