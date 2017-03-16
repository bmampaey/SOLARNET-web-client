angular.module('metadataApp')
.factory('gris_lev1', function(getPropFilter){
	
	var filestat = [
		'aborted',
		'complete',
		'error'
	];
	var waveleng = [
		1083,
		1175,
		1564,
		1565
	];
	return {
		columns: [
			['date_beg', 'Observation start'],
			['date_end', 'Observation end'],
			['waveleng', 'Wavelength (nm)'],
			['filestat', 'Final status'],
		],
		form_template_url: '/SVO/metadata/gris_lev1.html',
		form_config: {
			filestat: filestat,
			waveleng: waveleng
		},
		parse_query_dict: parse_query_dict,
	};
	
	
	// parse query dict into search criteria
	function parse_query_dict(query_dict) {
		var search_criteria = angular.extend({}, query_dict);
		
		return search_criteria;
	}

});
