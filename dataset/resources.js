angular
.module('datasetApp')
.factory('Dataset',function($tastypieResource, SDA_URL) {
		return new $tastypieResource('dataset');
})
.factory('Telescope',function($tastypieResource, SDA_URL) {
		return new $tastypieResource('telescope');
})
.factory('Characteristic',function($tastypieResource, SDA_URL) {
		return new $tastypieResource('characteristic');
})
.factory('Tag',function($tastypieResource, SDA_URL) {
		return new $tastypieResource('tag');
});
