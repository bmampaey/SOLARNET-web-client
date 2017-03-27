angular.module('metadataApp')
.factory('xrt', function(getPropFilter){
	
	var target = [
		{'value': 'AR', 'name': 'Active Region'},
		{'value': 'CH', 'name': 'Coronal Hole'},
		{'value': 'FS', 'name': 'Flare'},
		{'value': 'QR', 'name': 'Quiet Region'},
	];
	
	return {
		columns: [
			['date_obs', 'Observation date'],
			['noaa_num', 'NOAA A.R. number'],
			['target', 'Observation target']
		],
		form_template_url: '/SVO/metadata/xrt.html',
		form_config: {
			target: target
		},
		parse_search_criteria: parse_search_criteria,
	};
	
	// parse search criteria into search params for the Metadata resource
	function parse_search_criteria(search_criteria) {
		var search_params = angular.extend({}, search_criteria);
		// convert target object to target value
		console.log('search_params', search_params);
		if(search_criteria.target__in != undefined)
		{
			search_params.target__in = search_params.target__in.map(function(target){return target.value;});
		}
		console.log('search_params', search_params);
		return search_params;
	}

});