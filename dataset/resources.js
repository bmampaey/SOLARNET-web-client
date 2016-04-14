angular
.module('datasetApp')
.factory('Dataset',function(tastyResource) {
		return new tastyResource('dataset/:id');
})
.factory('Telescope',function(tastyResource) {
		return new tastyResource('telescope/:name');
})
.factory('Characteristic',function(tastyResource) {
		return new tastyResource('characteristic/:name');
})
.factory('Tag',function(tastyResource) {
		return new tastyResource('tag/:name');
});
