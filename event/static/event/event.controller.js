var EventApp = angular.module('EventApp');

EventApp.controller('EventController',

function($scope, $window, Event, EVENT_TYPES, $uibModal, bsLoadingOverlayService) {
	
	// set the list of event types for the multi select
	$scope.eventTypes = [];
	angular.forEach(EVENT_TYPES, function(value, key) {
		$scope.eventTypes.push({
			name: value,
			checked: false,
			value: key
		});
	});
	
	// list of selected event types, filled automatically  by the multi select
	$scope.selectedEventTypes = [];
	
	// list of all events
	$scope.events = [];
	
	// search parameters
	var search_params = {};
	
	// function to parse search criteria and load the table
	$scope.search_events = function() {
		
		search_params = {};
		
		// check selected event type
		if($scope.selectedEventTypes.length != 0) {
			search_params.event_type = $scope.selectedEventTypes.map(function(element) {
				return element.value;
			}).join(',');
		}
		else {
			search_params.event_type = '**';
		}
		
		// check date range
		if($scope.start_date == null) {
			$scope.start_date = new Date(1975, 09, 01);
		}
		// date are in local timezone, so must be offset to UTC
		search_params.event_starttime = new Date($scope.start_date.getTime() - (60000 * $scope.start_date.getTimezoneOffset()));
		
		if($scope.end_date == null) {
			$scope.end_date = new Date();
		}
		// date are in local timezone, so must be offset to UTC
		search_params.event_endtime = new Date($scope.end_date.getTime() - (60000 * $scope.end_date.getTimezoneOffset()));
		
		console.log("search params");
		console.log(search_params);
		
		//load the events
		$scope.load_events();
	};
	
	// page number of event list
	$scope.page_number = 1;
	
	// function to load the table
	$scope.load_events = function(page_number){
		console.log("Updating events");
		
		// default page number is 1
		$scope.page_number = page_number === undefined ? 1 : page_number;
		
		// set the loading overlay
		bsLoadingOverlayService.start({referenceId: 'event_table'});
		
		// update the search params
		search_params.page = $scope.page_number;
		
		// ugly hack because of HEK server bug on JSONP callback
		var c = $window.angular.callbacks.counter.toString(36);
		$window['angularcallbacks_' + c] = function (data) {
			$window.angular.callbacks['_' + c](data);
			delete $window['angularcallbacks_' + c];
		};
		
		// update the table
		Event.get(search_params, function(events) {
			// update the event list
			$scope.events = events.result;
			// stop the loading overlay
			bsLoadingOverlayService.stop({referenceId: 'event_table'});
		});
	};
	
	// load the event list
	$scope.search_events();
	
	// function to open event detail in modal
	$scope.open_event_detail = function(event) {
		$uibModal.open({
			templateUrl: 'event/event_detail.html',
			size: 'md',
			controller: 'EventDetailController',
			resolve: {
				event: function () { return event }
			},
		});
	};
});

EventApp.controller('EventDetailController',
function($scope, $uibModalInstance, event) {
	$scope.event = event;
});