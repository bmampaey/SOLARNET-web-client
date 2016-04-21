angular
.module('metadataApp', [
	'ngSanitize',
	'ui.bootstrap',
	'ngTastyResource',
	'ui.select',
	'ui.bootstrap.datetimepicker',
	'checklist-model',
	'global',
	'messagingApp',
	'datasetApp'
])
// default behavior for metadata service
.constant('defaultMetadataConfig',{
	columns: [
		['date_beg', 'Begin obs. date'],
		['date_end', 'End obs. date'],
		['wavemin', 'Min. wavelength'],
		['wavemax', 'Max. wavelength'],
	],
	form_template_url :  '/SVO/metadata/form_template.html',
	parse_search_criteria: function (search_criteria) {
		return search_criteria;
	},
	parse_location_search: function (search_criteria) {
		return search_criteria;
	},
});
