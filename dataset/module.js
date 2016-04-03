angular
.module('datasetApp', ['ngResource', 'ngAnimate', 'ui.bootstrap', 'ui.bootstrap.datetimepicker', 'multi-select', 'checklist-model', 'messagingApp'])
.constant('SDA_URL', 'http://solarnet.oma.be:8080/api/v1/')
.constant('METADATA_SEARCH_PARAMS', {
	limit: 10, // limit the number of results
})
.config(function($resourceProvider) {
	// make by default all resource requests cancellable
	$resourceProvider.defaults.cancellable = true;
})
.filter('name_list', function() {
	return function(input) {
		return input.map(function(val){return val.name;}).join(', ');
	};
});
