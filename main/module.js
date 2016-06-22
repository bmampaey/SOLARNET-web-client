var rootScope;
angular
.module('SVOApp', [
	'ui.router',
	'ct.ui.router.extras.sticky',
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
		views: {
			'dataset': {
				templateUrl: 'dataset/dataset.html',
				controller: 'DatasetController as ctrl',
				resolve: {
					queryDict: ['$location', function($location){
						return $location.search();
					}]
				}
			}
		},
		reloadOnSearch: false,
		sticky: true
	})
	.state('data_selection', {
		url: '/data_selection',
		views: {
			'data_selection': {
				templateUrl: 'data_selection/data_selection.html',
				controller: 'DataSelectionController as ctrl',
				resolve: {
					authenticatedUser: [
						'authenticationService',
						function(authenticationService){
							return authenticationService.authenticatedUser();
						}
					]
				}
			}
		},
		reloadOnSearch: false,
		sticky: false
	})
	.state('event', {
		url: '/event',
		views: {
			'event': {
				templateUrl: 'event/event.html',
				controller: 'EventController as ctrl',
			}
		},
		reloadOnSearch: false,
		sticky: true
	});
})
.run(function ($rootScope, $state) {
  $rootScope.$state = $state;
  rootScope = $rootScope;
});