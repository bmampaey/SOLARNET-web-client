angular.module('datasetApp')
.factory('datasetService',
	function($location, $q, messagingService, Dataset, Telescope, Characteristic, Tag){
		var datasets = [];
		return {
			datasets: datasets,
			search_datasets: search_datasets,
			load_datasets: load_datasets,
			instruments: get_instruments(),
			characteristics: get_characteristics(),
			tags: get_tags(),
		};
		
		// function to parse search criteria and load the url query params
		function search_datasets(search_criteria) {
			
			var search_params = {};
			
			// check selected instruments
			if(search_criteria.selected_instruments.length != 0) {
				search_params.instrument__in = get_values(search_criteria.selected_instruments);
			}
			
			// check selected characteristics
			if(search_criteria.selected_characteristics.length != 0) {
				search_params.characteristics__in = get_values(search_criteria.selected_characteristics);
			}
			
			// check selected tags
			if(search_criteria.selected_tags.length != 0) {
				search_params.tags__in = get_values(search_criteria.selected_tags);
			}
			
			// check date range
			if(search_criteria.start_date != null) {
				search_params.date_end__gt = search_criteria.start_date.toISOString();
			}
			
			if(search_criteria.end_date != null) {
				search_params.date_beg__lt = search_criteria.end_date.toISOString();
			}
			
			// check wavelength range
			if(search_criteria.wavelength_min != null) {
				search_params.wavemax__gt = search_criteria.angstrom ? search_criteria.wavelength_min / 10.0 : search_criteria.wavelength_min;
			}
			
			if(search_criteria.wavelength_max != null) {
				search_params.wavemin__lt = search_criteria.angstrom ? search_criteria.wavelength_max  / 10.0 : search_criteria.wavelength_max;
			}
			
			console.log("Search params");
			console.log(search_params);
			
			// load the query params in the url
			$location.search(search_params);
			
			// load the datasets
			return load_datasets();
		};
		
		// function to load the datasets
		var dataset_request;
		function load_datasets(page_number){
			console.log("Updating datasets");
			
			// cancel any previous request
			if(dataset_request !== undefined){
				console.log('Cancel previous dataset request', dataset_request);
				// TODO HUHO canceling the request reject the promise
				//dataset_request.$cancelRequest();
			}
			
			
			// set page number
			//offset = page_number * 0;
			//$location.search('offset', page_number);
			
			// get the datasets, and save the request for later
			dataset_request = Dataset.get($location.search());
			
			// return the dataset promise
			return dataset_request.$promise.then(load_datasets_success, load_datasets_error);
		}
		
		function load_datasets_success(data){
			// do not just assign datasets, modify it
			Array.prototype.splice.apply(datasets, [0, datasets.length].concat(data.objects));
			return data;
		}
		
		function load_datasets_error(response){
			// resource pass the full http response on failure
			var reason = response.status < 0 ? 'The server seems down' : response.statusText;
			messagingService.error(['There was an error retrieving datasest', reason]);
			return $q.reject(reason);
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