angular.module('datasetApp')
.factory('datasetService', function(getPropFilter){
	
	return {
		parse_search_criteria: parse_search_criteria,
		parse_location_search: parse_location_search,
	};
	
	// function to parse search criteria into search params for the Dataset resource
	function parse_search_criteria(search_criteria) {
		
		var search_params = {};
		
		// check selected telescopes
		if(search_criteria.selected_telescopes != null && search_criteria.selected_telescopes.length > 0) {
			search_params.telescope__in = getPropFilter(search_criteria.selected_telescopes, 'name');
		}
		
		// check selected characteristics
		if(search_criteria.selected_characteristics != null && search_criteria.selected_characteristics.length > 0) {
			search_params.characteristics__in = getPropFilter(search_criteria.selected_characteristics, 'name');
		}
		
		// check selected tags
		if(search_criteria.selected_tags != null && search_criteria.selected_tags.length > 0) {
			search_params.tags__in = getPropFilter(search_criteria.selected_tags, 'name');
		}
		
		// check date range
		if(search_criteria.start_date != null) {
			search_params.date_end__gt = search_criteria.start_date.toISOString();
		}
		
		if(search_criteria.end_date != null) {
			search_params.date_beg__lt = search_criteria.end_date.toISOString();
		}
		
		// check wavelength range
		if(search_criteria.wavelength_min != null) {
			search_params.wavemax__gt = search_criteria.angstrom ? search_criteria.wavelength_min / 10.0 : search_criteria.wavelength_min;
		}
		
		if(search_criteria.wavelength_max != null) {
			search_params.wavemin__lt = search_criteria.angstrom ? search_criteria.wavelength_max  / 10.0 : search_criteria.wavelength_max;
		}
		
		return search_params;
	};
	
	// parse the location search values into search criteria
	// usefull if we want to prefill the form inputs from the url
	function parse_location_search(search_criteria){
		// some search criteria must be arrays for the multi select
		angular.forEach(['selected_telescopes', 'selected_characteristics', 'selected_tags'], function(array){
			if(search_criteria[array] == undefined){
				search_criteria[array] = [];
			} else if(! (search_criteria[array] instanceof Array)) {
				search_criteria[array] = [search_criteria[array]]
			}
		});
		// dates need to be converted to Date objects
		if(search_criteria.start_date != undefined) {
			search_criteria.start_date = new Date(search_criteria.start_date);
		}
		if(search_criteria.end_date != undefined) {
			search_criteria.end_date = new Date(search_criteria.end_date);
		}
		return search_criteria;
	}
});