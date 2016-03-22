var DatasetApp = angular.module('DatasetApp', ['ngResource', 'ngAnimate', 'ui.bootstrap', 'ui.bootstrap.datetimepicker', 'multi-select']);

DatasetApp.constant('SDA_URL', 'http://solarnet.oma.be:8080/api/v1/');
DatasetApp.constant('SVO_URL', 'http://solarnet.oma.be:8000/api/v1/');

DatasetApp.constant('METADATA_SEARCH_PARAMS', {
	limit: 10, // limit the number of results
});

DatasetApp.filter('name_list', function() {
	return function(input) {
		return input.map(function(val){return val.name;}).join(', ');
	};
});
