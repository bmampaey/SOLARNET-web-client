angular
.module('eventApp')
.factory('eventService',
	function($location, $q, $window, messagingService, Event, EVENT_TYPES, getPropFilter){
		var request;
		
		return {
			parse_search_criteria: parse_search_criteria,
			get_events: get_events,
			event_types: get_event_types(),
		};
		
		// function to parse search criteria into search params for the Event resource
		function parse_search_criteria(search_criteria) {
			
			var search_params = {};
			
			// check selected event type
			if(search_criteria.selected_event_types != null && search_criteria.selected_event_types.length > 0) {
				search_params.event_type = getPropFilter(search_criteria.selected_event_types, 'value')
			}
			else {
				search_params.event_type = '**';
			}
			
			// check date range
			search_params.event_starttime = search_criteria.start_date != null ? search_criteria.start_date : new Date(Date.UTC(1975, 09, 01));
			search_params.event_endtime = search_criteria.end_date != null ? search_criteria.end_date : new Date();
			
			return search_params
		}
		
		// function to get the events
		var request;
		function get_events(search_params, page_number){
			
			// cancel any previous request
			if(request !== undefined){
				console.log('Cancelling previous request', request);
				// canceling the request reject the promise
				request.$cancelRequest();
			}
			
			// add page number to search params
			page_number = page_number != undefined ? page_number - 1 : 0;
			search_params.page = page_number;
			
			// ugly hack because of HEK server bug on JSONP callback
			var c = $window.angular.callbacks.counter.toString(36);
			$window['angularcallbacks_' + c] = function (data) {
				$window.angular.callbacks['_' + c](data);
				delete $window['angularcallbacks_' + c];
			};
			
			// get the events, and save the request for later
			request = Event.get(search_params);
			
			// return the event promise
			return request.$promise.then(get_events_success, get_events_error);
		}
		
		function get_events_success(data){
			return data.result;
		}
		
		function get_events_error(response){
			// TODO How can we know the request was cancelled? For now check if response is undefined
			if (reason === undefined) {
				return $q.reject('cancelled');
			}
			else {
				// resource pass the full http response on failure
				var reason = response.status < 0 ? 'The server seems down' : response.statusText;
				// display some error message
				messagingService.error(['There was an error retrieving events', reason]);
				return $q.reject(reason);
			}
		}
		
		// function to get the event types for a multi select
		function get_event_types(){
			var results = [];
			angular.forEach(EVENT_TYPES, function(value, key) {
				results.push({
					name: value,
					value: key
				});
			});
			return results;
		}
	}
);