angular.module('datasetApp')
.factory('datasetService', function(getPropFilter){
	
	return {
		parse_search_criteria: parse_search_criteria,
		parse_location_search: parse_location_search,
	};
	
	// function to parse search criteria into search params for the Dataset resource
	function parse_search_criteria(search_criteria) {
		
		var search_params = angular.copy(search_criteria);
		
		// check wavelength unit
		if(search_params.wavemin__lt != undefined && search_params.angstrom) {
			search_params.wavemin__lt /= 10.;
		}
		if(search_params.wavemax__gt != undefined && search_params.angstrom) {
			search_params.wavemax__gt /= 10.;
		}
		
		delete search_params.angstrom;
		
		return search_params;
	}
	
	// parse the location search values into search criteria
	function parse_location_search(search_criteria){
		// some search criteria must be arrays for the multi select
		angular.forEach(['selected_telescopes', 'selected_characteristics', 'selected_tags'], function(array){
			if(search_criteria[array] == undefined){
				search_criteria[array] = [];
			} else if(! (search_criteria[array] instanceof Array)) {
				search_criteria[array] = [search_criteria[array]];
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