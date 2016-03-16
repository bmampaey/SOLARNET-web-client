var EventApp = angular.module('EventApp');

EventApp.controller('EventController',

function($scope, $window, Event, EVENT_TYPES) {
	
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
	
	// function to update event list using the search criteria
	$scope.update_events = function() {
		console.log("Updating events");
		// create set of query params
		var params = {};
		if($scope.selectedEventTypes.length != 0) {
			params.event_type = $scope.selectedEventTypes.map(function(element) {
				return element.value;
			}).join(',');
		}
		else {
			params.event_type = '**';
		}
		
		if($scope.start_date == null) {
			$scope.start_date = new Date(1975, 09, 01);
		}
		// date are in local timezone, so must be offset to UTC
		params.event_starttime = new Date($scope.start_date.getTime() - (60000 * $scope.start_date.getTimezoneOffset()));
		
		if($scope.end_date == null) {
			$scope.end_date = new Date();
		}
		// date are in local timezone, so must be offset to UTC
		params.event_endtime = new Date($scope.end_date.getTime() - (60000 * $scope.end_date.getTimezoneOffset()));
		
		console.log("Query params");
		console.log(params);
		
		// ugly hack because of HEK server bug on JSONP callback
		var c = $window.angular.callbacks.counter.toString(36);
		$window['angularcallbacks_' + c] = function (data) {
			$window.angular.callbacks['_' + c](data);
			delete $window['angularcallbacks_' + c];
		};
		
		// update the events
		Event.get(params, function(events) {
			$scope.events = events.result;
		});
	};
	
	// load the event list
	$scope.update_events();
	
	// list of opened events in the accordion
	$scope.opened_accordion = {};
	$scope.opened_events = [];
	
	// functions to open and close event detail in accordion
	$scope.open_event = function(event) {
		var index = $scope.opened_events.indexOf(event);
		if(index < 0)
		{
			$scope.opened_events.push(event);
		}
		$scope.opened_accordion[event.id] = true;
	};
	
	$scope.close_event = function(event) {
		var index = $scope.opened_events.indexOf(event);
		if(index >= 0)
		{
			$scope.opened_events.splice(index, 1);
		}
		$scope.opened_accordion[event.id]= false;
	};
});
