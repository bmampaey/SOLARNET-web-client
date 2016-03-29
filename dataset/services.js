angular.module('DatasetApp')
.factory('datasetService',
	function(Dataset, Telescope, Characteristic, Tag, bsLoadingOverlayService){
		var datasets;
		return {
			datasets: datasets,
			search_datasets: search_datasets,
			get_datasets: get_datasets,
			get_instruments: get_instruments,
			get_characteristics: get_characteristics,
			get_tags: get_tags,
		};
		
		var query_params;
		// function to parse search criteria and load the table
		function search_datasets(search_params, overlay_id) {
			
			query_params = {};
			
			// check selected instruments
			if(search_params.selected_instruments.length != 0) {
				query_params.instrument__in = get_values(search_params.selected_instruments);
			}
			
			// check selected characteristics
			if(search_params.selected_characteristics.length != 0) {
				query_params.characteristics__in = get_values(search_params.selected_characteristics);
			}
			
			// check selected tags
			if(search_params.selected_tags.length != 0) {
				query_params.tags__in = get_values(search_params.selected_tags);
			}
			
			// check date range
			if(search_params.start_date != null) {
				// date are in local timezone, so must be offset to UTC
				query_params.date_end__gt = new Date(search_params.start_date.getTime() - (60000 * search_params.start_date.getTimezoneOffset()));
			}
			
			if(search_params.end_date != null) {
				// date are in local timezone, so must be offset to UTC
				query_params.date_beg__lt = new Date(search_params.end_date.getTime() - (60000 * search_params.end_date.getTimezoneOffset()));
			}
			
			// check wavelength range
			if(search_params.wavelength_min != null) {
				query_params.wavemax__gt = search_params.angstrom ? search_params.wavelength_min / 10.0 : search_params.wavelength_min;
			}
			
			if(search_params.wavelength_max != null) {
				query_params.wavemin__lt = search_params.angstrom ? search_params.wavelength_max  / 10.0 : search_params.wavelength_max;
			}
			
			console.log("Query params");
			console.log(query_params);
			
			// load the datasets
			load_datasets(overlay_id)
		};
		
		// function to get the datasets
		function get_datasets(overlay_id){
			console.log("Updating datasets");
			
			// set the loading overlay
			if(overlay_id){
				bsLoadingOverlayService.start({referenceId: overlay_id});
			}
			
			// get the datasets
			Dataset.get(query_params, function(datasets) {
				// update the dataset list
				datasets = datasets.objects;
				
				// stop the loading overlay
				if(overlay_id){
					bsLoadingOverlayService.stop({referenceId: overlay_id});
				}
			});
		}
		
		function get_values(array){
			return array.map(function(element) {
					return element.value;
				});
		}
		
		// function to get the instruments for a multi select
		function get_instruments(){
			var results = [];
			Telescope.get(function(telescopes){
				angular.forEach(telescopes.objects, function(telescope) {
					// open select group with telescope name
					results.push({
						name: telescope.name,
						multiSelectGroup: true
					});
					// add individual instruments
					angular.forEach(telescope.instruments, function(instrument) {
						results.push({
							name: instrument.name,
							checked: false,
							value: instrument.name
						});
					});
					// close the group
					results.push({
						multiSelectGroup: false
					});
				});
			});
			return results;
		}
		
		// function to get the characteristics for a multi select
		function get_characteristics(){
			var results = [];
			Characteristic.get(function(characteristics){
				angular.forEach(characteristics.objects, function(characteristic) {
					// add characteristic
					results.push({
						name: characteristic.name,
						checked: false,
						value: characteristic.name
					});
				});
			});
			return results;
		}
		
		// function to get the tags for a multi select
		function get_tags(){
			var results = [];
			Tag.get(function(tags){
				angular.forEach(tags.objects, function(tag) {
					// add tags
					results.push({
						name: tag.name,
						checked: false,
						value: tag.name
					});
				});
			});
			return results;
		}
	}
);