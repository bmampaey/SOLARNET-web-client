angular.module('SVOApp', [
	'ui.router',
	'ui.bootstrap',
	'bsLoadingOverlay',
	'authenticationApp',
	'datasetApp',
	'dataSelectionApp',
	'eventApp',
]);

angular
.module('SVOApp')
.config(function($stateProvider, $urlRouterProvider) {
	// For any unmatched url, redirect to dataset
	$urlRouterProvider.otherwise("/dataset");
	//
	// Now set up the states
	$stateProvider
	.state('dataset', {
		url: "/dataset",
		templateUrl: "dataset/dataset.html",
		controller: "DatasetController as dataset_ctrl",
		reloadOnSearch: false,
	})
	.state('data_selection', {
		url: "/data_selection",
		templateUrl: "data_selection/data_selection.html",
		controller: "UserDataSelectionController as user_data_selection_ctrl",
		reloadOnSearch: false,
	})
	.state('event', {
		url: "/event",
		templateUrl: "event/event.html",
		controller: "EventController as event_ctrl",
		reloadOnSearch: false,
	});
})
.run(function (bsLoadingOverlayService) {
	bsLoadingOverlayService.setGlobalConfig({
		delay: 100, // Minimal delay to hide loading overlay in ms.
		activeClass: null, // Class that is added to the element where bs-loading-overlay is applied when the overlay is active.
		templateUrl: "libs/angular-loading-overlay/angular-loading-overlay.html" // Template url for overlay element. If not specified - no overlay element is created.
	});
});