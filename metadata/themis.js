angular.module('metadataApp')
.factory('themis', function(getPropFilter){
	
	var wavelnth = [5890, 6563, 10830];
	var obs_mode = ['RDARK', 'RFLAT', 'SCAN'];

	return {
		columns: [
			['date_beg', 'Observation date'],
			['wavelnth', 'Wavelength (Å)'],
			['obs_mode', 'Observation mode']
		],
		form_template_url: '/SVO/metadata/themis.html',
		form_config: {
			wavelnth: wavelnth,
			obs_mode: obs_mode,
		}
	};

});