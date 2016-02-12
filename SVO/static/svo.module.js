var SVOApp = angular.module('SVOApp', [
	'ngRoute',
	'ui.bootstrap',
	'DatasetApp',
	'DataSelectionApp',
]);

SVOApp.config(['$routeProvider',
	function($routeProvider) {
		$routeProvider
			.when('/', {
				redirectTo: '/dataset'
			})
			.when('/dataset', {
				templateUrl: '/static/dataset/dataset.html',
				controller: 'DatasetController'
			})
			.when('/data_selection', {
				templateUrl: '/static/data_selection/data_selection.html',
				controller: 'DataSelectionController'
			})
			.otherwise({
				redirectTo: '/dataset'
			});
	}
]);