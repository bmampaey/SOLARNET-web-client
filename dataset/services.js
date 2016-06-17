angular.module('datasetApp')
.factory('datasetConfig', function(Telescope, Characteristic, Tag){
	
	return {
		parse_search_criteria: parse_search_criteria,
		parse_query_dict: parse_query_dict,
		form_config: {
			telescopes: Telescope.query(),
			characteristics: Characteristic.query(),
			tags: Tag.query(),
		},
	};
	
	/* DEFINITIONS */
	
	// parse search criteria into search params for the Dataset resource
	function parse_search_criteria(search_criteria) {
		var search_params = angular.extend({}, search_criteria);
		// search params are the same as search criteria
		return search_params;
	}
	
	// parse query dict into search criteria
	function parse_query_dict(query_dict){
		var search_criteria = angular.extend({}, query_dict);
		
		// some search criteria must be arrays for the multi select
		angular.forEach(['telescope__in', 'characteristics__in', 'tags__in'], function(array){
			if(search_criteria[array] == undefined){
				search_criteria[array] = [];
			} else if(! (search_criteria[array] instanceof Array)) {
				search_criteria[array] = [search_criteria[array]];
			}
		});
		// date strings need to be converted to date objects
		if(typeof search_criteria.date_end__gte === "string") {
			search_criteria.date_end__gte = new Date(search_criteria.date_end__gte);
		}
		if(typeof search_criteria.date_beg__lte === "string") {
			search_criteria.date_beg__lte = new Date(search_criteria.date_beg__lte);
		}
		return search_criteria;
	}
});