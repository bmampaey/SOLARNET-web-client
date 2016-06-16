angular.module('metadataApp')
.factory('metadataConfig', function(){
	
	// basic metadata config that should be OK for all datasets
	return {
		columns: [
			['date_beg', 'Begin obs. date'],
			['date_end', 'End obs. date'],
			['wavemin', 'Min. wavelength'],
			['wavemax', 'Max. wavelength'],
		],
		form_template_url :  '/SVO/metadata/form_template.html',
		form_config: {},
		parse_search_criteria: parse_search_criteria,
		parse_query_dict: parse_query_dict
	}
	
	/* DEFINITIONS */
	
	// parse search criteria into search params for the Metadata resource
	function parse_search_criteria(search_criteria) {
		var search_params = angular.extend({}, search_criteria);
		// search params are the same as search criteria
		return search_params;
	}
	
	// parse query dict into search criteria
	function parse_query_dict(query_dict) {
		var search_criteria = angular.extend({}, query_dict);
		
		// some search criteria must be arrays for the multi select
		angular.forEach(['tags__in'], function(array){
			if(search_criteria[array] == undefined){
				search_criteria[array] = [];
			} else if(! (search_criteria[array] instanceof Array)) {
				search_criteria[array] = [search_criteria[array]];
			}
		});
		
		// date strings need to be converted to date objects
		if(typeof search_criteria.date_end__gte === "string") {
			search_criteria.date_end__gte = new Date(search_criteria.date_end__gte);
		}
		if(typeof search_criteria.date_beg__lte === "string") {
			search_criteria.date_beg__lte = new Date(search_criteria.date_beg__lte);
		}
		
		return search_criteria;
	}
})
.factory('cleanMetadataConfig', function(metadataConfig){

	return function (_config) {

		 // make sure we have a config object
		 var config = angular.extend({}, _config);

		 // form template url and config must be defined and non null
		 if (config.form_template_url == undefined)
			  config.form_template_url = metadataConfig.form_template_url;
		 if (config.form_config == undefined)
			  config.form_config = metadataConfig.form_config;

		 // columns must be defined and non null
		 if (config.columns == undefined)
			  config.columns = metadataConfig.columns;

		 // function to parse the search criteria is a composition of
		 // the default function and the config function
		 if (config.parse_search_criteria != undefined) {
			  config.parse_search_criteria = function(search_criteria){
				   return _config.parse_search_criteria(metadataConfig.parse_search_criteria(search_criteria));
			  };
		 } else {
			  config.parse_search_criteria = metadataConfig.parse_search_criteria;
		 }

		 // function to parse the query dict is a composition of
		 // the default function and the config function
		 if (config.parse_query_dict != undefined) {
			  config.parse_query_dict = function(query_dict){
				   return _config.parse_query_dict(metadataConfig.parse_query_dict(query_dict));
			  };
		 } else {
			  config.parse_query_dict = metadataConfig.parse_query_dict;
		 }
		 return config;
	};
 });
