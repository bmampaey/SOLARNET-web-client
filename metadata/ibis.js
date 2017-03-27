angular.module('metadataApp')
.factory('ibis', function(getPropFilter){
	
	var channel = [
		'Narrowband',
		'Whitelight'
	];
	var target = ['pore'];
	
	return {
		columns: [
			['date_obs', 'Observation date'],
			['wavelnth', 'Wavelength (Å)'],
			['channel', 'Channel'],
			['target', 'Observation target'],
		],
		form_template_url: '/SVO/metadata/ibis.html',
		form_config: {
			channel: channel,
			target: target,
		},
		parse_query_dict: parse_query_dict,
	};
	
	
	// parse query dict into search criteria
	function parse_query_dict(query_dict) {
		var search_criteria = angular.extend({}, query_dict);
		
		return search_criteria;
	}

});
