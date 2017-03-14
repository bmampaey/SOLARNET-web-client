angular.module('metadataApp')
.factory('ibis', function(getPropFilter){
	
	var channel = [
		'Narrowband',
		'Whitelight'
	];
	return {
		columns: [
			['date_obs', 'Observation date'],
			['wavelnth', 'Wavelength (Å)'],
			['channel', 'Channel'],
		],
		form_template_url: '/SVO/metadata/ibis.html',
		form_config: {
			channel: channel
		},
		parse_query_dict: parse_query_dict,
	};
	
	
	// parse query dict into search criteria
	function parse_query_dict(query_dict) {
		var search_criteria = angular.extend({}, query_dict);
		
		return search_criteria;
	}

});
