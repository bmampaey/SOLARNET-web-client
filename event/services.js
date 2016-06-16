angular
.module('eventApp')
.factory('eventConfig', function(EVENT_TYPES, getPropFilter){
	
	return {
		parse_search_criteria: parse_search_criteria,
		parse_query_dict: parse_query_dict,
		form_config: {
			event_types: Object.keys(EVENT_TYPES).map(function(key, index) {
				return {name: EVENT_TYPES[key], value: key};
			}),
		},
	};
	
	/* DEFINITIONS */
	
	// parse search criteria into search params for the Event resource
	function parse_search_criteria(search_criteria) {
		
		var search_params = angular.extend({}, search_criteria);
		// TODO check if correct normally event_type are separated by comma not a array
		// check selected event type
		if(search_params.selected_event_types != undefined && search_params.selected_event_types.length > 0) {
			search_params.event_type = getPropFilter(search_params.selected_event_types, 'value', ',')
		}
		else {
			search_params.event_type = '**';
		}
		
		delete search_params.selected_event_types;
		
		// HEK api requires dates to be specified
		search_params.event_starttime = (search_params.event_starttime != null ? search_params.event_starttime : new Date(Date.UTC(1975, 09, 01))).toISOString();
		search_params.event_endtime = (search_params.event_endtime != null ? search_params.event_endtime : new Date()).toISOString();
		
		return search_params
	}
	
	// parse query dict into search criteria
	function parse_query_dict(query_dict){
		var search_criteria = angular.extend({}, query_dict);
		
		// selected_event_types are for now an array of objects
		if (search_criteria.event_type == undefined || search_criteria.event_type == '**') {
			search_criteria.selected_event_types = [];
		} else {
			search_criteria.selected_event_types = search_criteria.event_type.split(',').map(function(key) {
					return {name: EVENT_TYPES[key], value: key};
			});
		}
		
		delete search_criteria.event_type;
		
		// date strings need to be converted to date objects
		if(typeof search_criteria.event_starttime === "string") {
			search_criteria.event_starttime = new Date(search_criteria.event_starttime);
		}
		if(typeof search_criteria.event_endtime === "string") {
			search_criteria.event_endtime = new Date(search_criteria.event_endtime);
		}
		
		return search_criteria;
	}
});