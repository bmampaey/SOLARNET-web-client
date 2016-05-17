angular
.module('SVOApp', [
	'ui.router',
	'ui.bootstrap',
	'oc.lazyLoad',
	'authenticationApp',
	'datasetApp',
	'metadataApp',
	'dataSelectionApp',
	'eventApp',
])
.config(function($stateProvider, $urlRouterProvider) {
	// For any unmatched url, redirect to dataset
	$urlRouterProvider.otherwise('/dataset');
	//
	// Now set up the states
	$stateProvider
	.state('dataset', {
		url: '/dataset',
		templateUrl: 'dataset/dataset.html',
		controller: 'DatasetController as ctrl',
		resolve: {
			search_criteria: function(){
				return undefined;
			}
		},
		reloadOnSearch: false,
	})
	.state('data_selection', {
		url: '/data_selection',
		templateUrl: 'data_selection/data_selection.html',
		controller: 'DataSelectionController as ctrl',
		resolve: {
			// data selection requires authentication
			authenticatedUser: [
				'authenticationService',
				function(authenticationService){
					return authenticationService.authenticatedUser();
				}
			]
		},
		reloadOnSearch: false,
	})
	.state('event', {
		url: '/event',
		templateUrl: 'event/event.html',
		controller: 'EventController as ctrl',
		reloadOnSearch: false,
	})
	.state('metadata', {
		url: '/metadata/:dataset_id',
		templateUrl: 'metadata/metadata.html',
		controller: 'MetadataController as ctrl',
		resolve: {
			// metadata requires a dataset, TODO this is not correct, must return a promise resolved when we have the dataset
			dataset: [
				'Dataset',
				function(Dataset){
					return Dataset.get({id: dataset_id});
				}
			]
		},
		reloadOnSearch: false,
	});
});