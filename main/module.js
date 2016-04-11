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
		reloadOnSearch: false,
	})
	.state('data_selection', {
		url: '/data_selection',
		templateUrl: 'data_selection/data_selection.html',
		controller: 'DataSelectionController as ctrl',
		resolve: {
			// data selection require authentication
			authenticate: [
				'$authenticationService',
				function(authenticationService){
					return authenticationService.require_authentication();
				}
			]
		},
		reloadOnSearch: false,
	})
	.state('event', {
		url: '/event',
		templateUrl: 'event/event.html',
		controller: 'EventController as event_ctrl',
		reloadOnSearch: false,
	})
	.state('dataset.metadata', {
		url: '/metadata/:dataset_id',
		reloadOnSearch: false,
		params: {dataset: null},
		onEnter: ['$stateParams', '$uibModal', '$ocLazyLoad', function($stateParams, $uibModal, $ocLazyLoad) {
			console.log('Opening modal for ',$stateParams.dataset);
			$uibModal.open({
				templateUrl: 'metadata/metadata.html',
				size: 'xl',
				controller: 'MetadataController',
				controllerAs: 'ctrl',
				resolve: {
					 // pass the dataset id (TODO check how to pass the full dataset)
					dataset: function () {
						return $stateParams.dataset;
					},
					loadMetadataService: function() {
						console.log('Loading service for ', $stateParams.dataset_id);
						return $ocLazyLoad.load('/SVO/metadata/'+$stateParams.dataset_id+'.js');
					}
				},
			}).result.finally(function() {
				$state.go('^');
			});
		}]
	});
});