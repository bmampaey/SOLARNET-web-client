angular.module('metadataApp')
.factory('swap_lev1', function(getPropFilter){
	
	return {
		columns: [
			['date_obs', 'Observation date'],
			['obs_mode', 'Observation mode']
		],
		form_template_url: '/SVO/metadata/swap_lev1.html',
		form_config: {
			obs_mode: ['Fixed off-pointing', 'Variable off-pointing', 'Sun centered']
		}
	};

});