angular
.module('eventApp')
.factory('eventService', function(getPropFilter){
	
	return {
		parse_search_criteria: parse_search_criteria,
		parse_location_search: parse_location_search,
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
		search_params.event_starttime = (search_criteria.start_date != null ? search_criteria.start_date : new Date(Date.UTC(1975, 09, 01))).toISOString();
		search_params.event_endtime = (search_criteria.end_date != null ? search_criteria.end_date : new Date()).toISOString();
		
		return search_params
	}
		
	// parse the location search values into search criteria
	function parse_location_search(search_criteria){
		return search_criteria;
	}
});