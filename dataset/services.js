angular.module('datasetApp')
.factory('datasetService', function($q, messagingService, DATASET_RESOURCE_LIMIT, Dataset, Telescope, Characteristic, Tag, getPropFilter){
	
	return {
		parse_search_criteria: parse_search_criteria,
		get_datasets: get_datasets,
		telescopes: get_telescopes(),
		characteristics: get_characteristics(),
		tags: get_tags(),
	};
	
	// function to parse search criteria into search params for the Dataset resource
	function parse_search_criteria(search_criteria) {
		
		var search_params = {};
		
		// check selected telescopes
		if(search_criteria.selected_telescopes != null && search_criteria.selected_telescopes.length > 0) {
			search_params.telescope__in = getPropFilter(search_criteria.selected_telescopes, 'name');
		}
		
		// check selected characteristics
		if(search_criteria.selected_characteristics != null && search_criteria.selected_characteristics.length > 0) {
			search_params.characteristics__in = getPropFilter(search_criteria.selected_characteristics, 'name');
		}
		
		// check selected tags
		if(search_criteria.selected_tags != null && search_criteria.selected_tags.length > 0) {
			search_params.tags__in = getPropFilter(search_criteria.selected_tags, 'name');
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
		
		// add offset to search params
		page_number = page_number != undefined ? page_number - 1 : 0;
		search_params.offset = page_number * DATASET_RESOURCE_LIMIT;
		
		// get the datasets, and save the request for later
		request = Dataset.get(search_params);
		
		// return the dataset promise
		return request.$promise.then(get_datasets_success, get_datasets_error);
	}
	
	function get_datasets_success(data){
		data.objects.meta = data.meta;
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
	
	// function to get the telescopes
	// return an empty list filled when the request completes
	function get_telescopes(){
		var results = [];
		Telescope.get(function(telescopes){
			 Array.prototype.push.apply(results, telescopes.objects);
		});
		return results;
	}
	
	
	// function to get the characteristics
	// return an empty list filled when the request completes
	function get_characteristics(){
		var results = [];
		Characteristic.get(function(characteristics){
			 Array.prototype.push.apply(results, characteristics.objects);
		});
		return results;
	}
	
	// function to get the tags
	// return an empty list filled when the request completes
	function get_tags(){
		var results = [];
		Tag.get(function(tags){
			 Array.prototype.push.apply(results, tags.objects);
		});
		return results;
	}
});