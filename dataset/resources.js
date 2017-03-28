angular
.module('datasetApp')
.factory('Dataset',function(tastyResource) {
		return new tastyResource('dataset/:id', {page_size: 0});
})
.factory('Telescope',function(tastyResource) {
		return new tastyResource('telescope/:name');
})
.factory('Instrument',function(tastyResource) {
		return new tastyResource('instrument/:name');
})
.factory('Characteristic',function(tastyResource) {
		return new tastyResource('characteristic/:name');
})
.factory('Tag',function(tastyResource) {
		return new tastyResource('tag/:name');
});
