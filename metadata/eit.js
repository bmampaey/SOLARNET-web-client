angular.module('metadataApp')
.factory('eit', function(getPropFilter){
	
	var wavelnth = [171, 195, 284, 304];
	var sci_obj = [
		'171 BINNED TEST', 
		'CALIBRATION LAMP', 
		'CHARGE TRANSFER', 
		'CHARGE TRANSFER 171', 
		'CME WATCH 171', 
		'CME WATCH 195',
		'CME WATCH 195 (SM5)', 
		'CONTINUOUS RO 304', 
		'DARK FRONTSIDE A', 
		'DARK FRONTSIDE B', 
		'DARK FRONTSIDE C', 
		'DARK FRONTSIDE D', 
		'DARK IMAGE', 
		'DARK IMAGE HTR ON', 
		'FULL SUN 171', 
		'FULL SUN 171/284/195/304', 
		'FULL SUN 195', 
		'FULL SUN 284', 
		'FULL SUN 304', 
		'HIGH CADENCE 195', 
		'HIGH CADENCE 304', 
		'SECTOR HANG', 
		'SHUTTERLESS', 
		'SUBFIELD 171', 
		'TEST'
	];
	
	return {
		columns: [
			['date_obs', 'Observation date'],
			['wavelnth', 'Wavelength (Å)'],
			['sci_obj', 'Science objective'],
		],
		form_template_url: '/SVO/metadata/eit.html',
		form_config: {
			wavelnth: wavelnth,
			sci_obj: sci_obj
		},
		parse_location_search: parse_location_search
	};
	
	
	// parse the location search values into search criteria
	function parse_location_search(search_criteria) {
		if(search_criteria.wavemin__lte != undefined || search_criteria.wavemax__gte != undefined)
		{
			search_criteria.wavelnth__in = wavelnth;
		}
		
		if(search_criteria.wavemin__lte != undefined) {
			search_criteria.wavelnth__in = search_criteria.wavelnth__in.filter(function(w){return w/10. <= search_criteria.wavemin__lte});
		}
		
		if(search_criteria.wavemax__gte != undefined) {
			search_criteria.wavelnth__in = search_criteria.wavelnth__in.filter(function(w){return w/10. >= search_criteria.wavemax__gte});
		}
		delete search_criteria.wavemax__gte;
		delete search_criteria.wavemin__lte;
		
		return search_criteria;
	}

});
