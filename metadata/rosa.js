angular.module('metadataApp')
.factory('rosa', function(getPropFilter){
	
	var wavelnth = [3500, 4170, 4300];
	var target = ['AR 12192'];
	
	return {
		columns: [
			['date_beg', 'Observation date'],
			['wavelnth', 'Wavelength (Å)'],
			['target', 'Observation target']
		],
		form_template_url: '/SVO/metadata/rosa.html',
		form_config: {
			wavelnth: wavelnth,
			target: target,
		}
	};

});