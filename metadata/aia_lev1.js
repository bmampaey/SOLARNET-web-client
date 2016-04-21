angular.module('metadataApp')
.factory('aia_lev1', function(getPropFilter){
	
	return {
		parse_search_criteria: parse_search_criteria,
		parse_location_search: parse_location_search,
		form_template_url: '/SVO/metadata/form_template.html',
		columns: [
			['date_obs', 'Observation date'],
			['wavelnth', 'Wavelength [Å]'],
			['quality', 'Quality'],
		],
	};
	
	// function to parse search criteria into search params for the Metadata resource
	function parse_search_criteria(search_criteria) {
		
		var search_params = {};
		
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
		
		// check selected tags
		if(search_criteria.selectedTags != null && search_criteria.selectedTags.length != 0) {
			search_params.tags__in = getPropFilter(search_criteria.selected_tags, 'name');
		}
		console.log("search params");
		console.log(search_params);
		
		return search_params;
	};
	
	// parse the location search values into search criteria
	function parse_location_search(search_criteria){
		return search_criteria;
	}

});