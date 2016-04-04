angular.module('datasetApp')
.factory('datasetService',
	function($q, messagingService, Dataset, Telescope, Characteristic, Tag){
		return {
			parse_search_criteria: parse_search_criteria,
			get_datasets: get_datasets,
			instruments: get_instruments(),
			characteristics: get_characteristics(),
			tags: get_tags(),
		};
		
		// function to parse search criteria into search params for the Dataset resource
		function parse_search_criteria(search_criteria) {
			
			var search_params = {};
			
			// check selected instruments
			if(search_criteria.selected_instruments != null && search_criteria.selected_instruments.length > 0) {
				search_params.instrument__in = get_values(search_criteria.selected_instruments);
			}
			
			// check selected characteristics
			if(search_criteria.selected_characteristics != null && search_criteria.selected_characteristics.length > 0) {
				search_params.characteristics__in = get_values(search_criteria.selected_characteristics);
			}
			
			// check selected tags
			if(search_criteria.selected_tags != null && search_criteria.selected_tags.length > 0) {
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
			
			return search_params;
		};
		
		// function to get the datasets
		var request;
		function get_datasets(search_params, page_number){
			
			// cancel any previous request
			if(request !== undefined){
				console.log('Cancelling previous request', request);
				// canceling the request reject the promise
				request.$cancelRequest();
			}
			
			// add page number to search params
			page_number = page_number != undefined ? page_number - 1 : 0;
			//offset = page_number * DATASET_REQUEST_LIMIT;
			//search_params.offset = offset;
			//search_params.limit = DATASET_REQUEST_LIMIT;
			
			// get the datasets, and save the request for later
			request = Dataset.get(search_params);
			
			// return the dataset promise
			return request.$promise.then(get_datasets_success, get_datasets_error);
		}
		
		function get_datasets_success(data){
			return data.objects;
		}
		
		function get_datasets_error(response){
			// TODO How can we know the request was cancelled? For now check if response is undefined
			if (reason === undefined) {
				return $q.reject('cancelled');
			}
			else {
				// resource pass the full http response on failure
				var reason = response.status < 0 ? 'The server seems down' : response.statusText;
				// display some error message
				messagingService.error(['There was an error retrieving datasets', reason]);
				return $q.reject(reason);
			}
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