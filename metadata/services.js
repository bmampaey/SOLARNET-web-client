angular.module('metadataApp')
.factory('defaultMetadataService', function(){
	
	return {
		columns: [
			['date_beg', 'Begin obs. date'],
			['date_end', 'End obs. date'],
			['wavemin', 'Min. wavelength'],
			['wavemax', 'Max. wavelength'],
		],
		form_template_url :  '/SVO/metadata/form_template.html',
		form_config: {},
		parse_search_criteria: parse_search_criteria,
		parse_location_search: parse_location_search
	}
	
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
	
	function parse_location_search(search_criteria) {
		if(search_criteria.wavemin__lte != undefined && search_criteria.angstrom) {
			search_criteria.wavemin__lte *= 10.;
		}
		if(search_criteria.wavemax__gte != undefined && search_criteria.angstrom) {
			search_criteria.wavemax__gte *= 10.;
		}
		// '1990-12-01T00:00:00Z'.match(/\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d(?:\.\d+)?([+-][0-2]\d:[0-5]\d|Z)/)
		if(search_criteria.date_beg__lte != undefined){
			search_criteria.date_beg__lte = new Date(search_criteria.date_beg__lte);
		}
		if(search_criteria.date_end__gte != undefined){
			search_criteria.date_end__gte = new Date(search_criteria.date_end__gte);
		}
		
		if(typeof search_criteria.tags__in === "string"){
			search_criteria.tags__in = [search_criteria.tags__in];
		} else if (search_criteria.tags__in == undefined) {
			search_criteria.tags__in = [];
		}
		return search_criteria;
	}
});