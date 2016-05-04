angular.module('metadataApp')
.factory('chrotel', function(getPropFilter){
	
	var wavelnth = [393.4, 656.2, 1083.0];
	
	return {
		columns: [
			['date_obs', 'Observation date'],
			['wavelnth', 'Wavelength (nm)']
		],
		form_template_url: '/SVO/metadata/chrotel.html',
		form_config: {
			wavelnth: wavelnth
		},
		parse_location_search: parse_location_search
	};
	
	// function to parse search criteria into search params for the Metadata resource
	function parse_location_search(search_criteria) {
		if(search_criteria.wavemin__lte != undefined || search_criteria.wavemax__gte != undefined)
		{
			search_criteria.wavelnth__in = wavelnth;
		}
		
		if(search_criteria.wavemin__lte != undefined) {
			search_criteria.wavelnth__in = search_criteria.wavelnth__in.filter(function(w){return w <= search_criteria.wavemin__lte});
		}
		
		if(search_criteria.wavemax__gte != undefined) {
			search_criteria.wavelnth__in = search_criteria.wavelnth__in.filter(function(w){return w >= search_criteria.wavemax__gte});
		}
		delete search_criteria.wavemax__gte;
		delete search_criteria.wavemin__lte;
		
		return search_criteria;
	}
});