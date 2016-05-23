angular
.module('metadataApp')
.factory('Metadata',function(tastyResource) {
		return new tastyResource('metadata/:dataset/:oid', {paramDefaults: {dataset: '@dataset', oid: '@oid'}, page_size: 10});
});