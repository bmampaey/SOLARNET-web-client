angular.module('metadataApp')
.factory('xrt', function(getPropFilter){
	
	return {
		columns: [
			["date_obs", "Observation date"],
			["noaa_num", "NOAA A.R. number"],
			['target', 'Observation target']
		],
		form_template_url: '/SVO/metadata/xrt.html',
		form_config: {
			targets: ['AR', 'CH', 'FS', 'QR']
		}
	};

});