angular.module('metadataApp')
.factory('hmi_magnetogram', function(getPropFilter){
	
	return {
		columns: [
			['date_obs', 'Observation date'],
			['quality', 'Quality'],
		],
		form_template_url: '/SVO/metadata/hmi_magnetogram.html',
	};

});