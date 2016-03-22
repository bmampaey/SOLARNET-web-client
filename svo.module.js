var SVOApp = angular.module('SVOApp', [
	'ngRoute',
	'ui.bootstrap',
	'bsLoadingOverlay',
	'DatasetApp',
	'DataSelectionApp',
	'EventApp',
]);

SVOApp.config(['$routeProvider',
	function($routeProvider) {
		$routeProvider
			.when('/', {
				redirectTo: '/dataset'
			})
			.when('/dataset', {
				templateUrl: 'dataset/dataset.html',
				controller: 'DatasetController'
			})
			.when('/data_selection', {
				templateUrl: 'data_selection/data_selection.html',
				controller: 'UserDataSelectionController'
			})
			.when('/event', {
				templateUrl: 'event/event.html',
				controller: 'EventController'
			})
			.otherwise({
				redirectTo: '/dataset'
			});
	}
]);


SVOApp.run(function (bsLoadingOverlayService) {
	bsLoadingOverlayService.setGlobalConfig({
		delay: 100, // Minimal delay to hide loading overlay in ms.
		activeClass: undefined, // Class that is added to the element where bs-loading-overlay is applied when the overlay is active.
		templateUrl: "libs/angular-loading-overlay/angular-loading-overlay.html" // Template url for overlay element. If not specified - no overlay element is created.
	});
});