angular.module('eventApp');
.factory('eventService',
	function($location, $q, $window, messagingService, Event, EVENT_TYPES){
		var events = [];
		return {
			events: events,
			search_events: search_events,
			load_events: load_events,
			event_types: get_event_types(),
		};
		
		// function to parse search criteria and load the url query params
		function search_events(search_criteria) {
			
			var search_params = {};
			
			// check selected event type
			if($scope.selectedEventTypes.length != 0) {
				search_params.event_type = get_values(search_criteria.selected_event_types)
			}
			else {
				search_params.event_type = '**';
			}
			
			// check date range
			search_params.event_starttime = search_criteria.start_date != null ? search_criteria.start_date : new Date(Date.UTC(1975, 09, 01));
			search_params.event_endtime = search_criteria.end_date != null ? search_criteria.end_date : new Date();
			
			console.log("Search params");
			console.log(search_params);
			
			// load the query params in the url
			$location.search(search_params);
			
			// load the events
			return load_events(1);
		}
		
		// function to load the datasets
		var event_request;
		function load_events(page_number){
			console.log("Updating events");
			
			// cancel any previous request
			if(event_request !== undefined){
				console.log('Cancel previous dataset request', event_request);
				// TODO HUHO canceling the request reject the promise
				//event_request.$cancelRequest();
			}
			
			// set page number
			page_number = page_number != undefined ? page_number : 1; 
			$location.search('page', page_number);
			
			// ugly hack because of HEK server bug on JSONP callback
			var c = $window.angular.callbacks.counter.toString(36);
			$window['angularcallbacks_' + c] = function (data) {
				$window.angular.callbacks['_' + c](data);
				delete $window['angularcallbacks_' + c];
			};
			
			// get the events, and save the request for later
			event_request = Event.get($location.search());
			
			// return the event promise
			return event_request.$promise.then(load_events_success, load_events_error);
		}
		
		function load_events_success(data){
			// do not just assign events, modify it
			Array.prototype.splice.apply(events, [0, events.length].concat(data.result));
			return data;
		}
		
		function load_events_error(response){
			// resource pass the full http response on failure
			var reason = response.status < 0 ? 'The server seems down' : response.statusText;
			messagingService.error(['There was an error retrieving events', reason]);
			return $q.reject(reason);
		}
		
		function get_values(array){
			return array.map(function(element) {
					return element.value;
				});
		}
		
		// function to get the event types for a multi select
		function get_event_types(){
			var results = [];
			angular.forEach(EVENT_TYPES, function(value, key) {
				results.push({
					name: value,
					checked: false,
					value: key
				});
			});
			return results;
		}
);