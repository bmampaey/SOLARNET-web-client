angular
.module('metadataApp')
.factory('Metadata',function(tastyResource) {
		return new tastyResource(':metadata/:oid', {paramDefaults: {metadata: '@metadata', oid: '@oid'}, page_size: 10});
});