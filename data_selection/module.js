var dataSelectionApp = angular.module('dataSelectionApp', ['ngResource', 'ui.bootstrap']);

dataSelectionApp.constant('SDA_URL', 'http://solarnet.oma.be:8080/api/v1/');
dataSelectionApp.constant('SVO_URL', 'http://solarnet.oma.be:8000/api/v1/');

dataSelectionApp.filter('field_list', function() {
	return function(input, field_name, separator) {
		var field_name = field_name !== undefined ? field_name : 'name';
		var separator = separator !== undefined ? separator : ', ';
		return input.map(function(val){return val[field_name];}).join(separator);
	};
});

