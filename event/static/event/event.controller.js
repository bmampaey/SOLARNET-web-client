var EventApp = angular.module('EventApp');

EventApp.controller('EventController',

function($scope, Event, EVENT_TYPES) {
	
	// set the list of event types for the multi select
	$scope.eventTypes = [];
	angular.forEach(EVENT_TYPES, function(value, key) {
		$scope.eventTypes.push({
			name: key,
			checked: true,
			value: value
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
		if($scope.selectedInstruments.length != 0) {
			params.instrument__in = $scope.selectedInstruments.map(function(element) {
				return element.value;
			});
		}
		if($scope.selectedCharacteristics.length != 0) {
			params.characteristics__in = $scope.selectedCharacteristics.map(function(element) {
				return element.value;
			});
		}
		console.log($scope.start_date);
		console.log("Query params");
		console.log(params);
		// update the events
		Event.get(params, function(events) {
			$scope.events = events.objects;
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

	console.log("EventController scope", $scope);
});

EventApp.controller('MetadataController',
function($scope, Metadata, Tag) {
	$scope.start_date = $scope.$parent.start_date;
	$scope.end_date = $scope.$parent.end_date;
	$scope.wavelength_min = $scope.$parent.wavelength_min;
	$scope.wavelength_max = $scope.$parent.wavelength_max;
	$scope.selectedTags = $scope.$parent.selectedTags
	
	$scope.update_metadata = function() {
		console.log("Updating metadata for " + $scope.event.name);
		// create set of query params
		params = {event: $scope.event.id};
		Metadata.get(params, function(metadata) {
			$scope.metadata_list = metadata.objects;
			$scope.next_metadata = metadata.next;
			$scope.previous_metadata = metadata.previous;
		});
	};
	$scope.update_metadata();
});