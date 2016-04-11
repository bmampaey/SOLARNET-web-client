angular
.module('metadataApp')
.factory('Metadata',function($tastypieResource, SDA_URL) {
		return new $tastypieResource(':metadata/:oid');
});