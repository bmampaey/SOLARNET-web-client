angular
.module('SVOApp', [
	'ui.router',
	'ui.bootstrap',
	'authenticationApp',
	'datasetApp',
	'dataSelectionApp',
	'eventApp',
])
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
		controller: "DataSelectionController as ctrl",
		reloadOnSearch: false,
	})
	.state('event', {
		url: "/event",
		templateUrl: "event/event.html",
		controller: "EventController as event_ctrl",
		reloadOnSearch: false,
	});
});