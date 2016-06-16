angular
.module('metadataApp')
.controller('MetadataController', function($location, $httpParamSerializer, $uibModal, bsLoadingOverlayService, messagingService, Metadata, Tag, defaultMetadataService, metadataService, getPropFilter, parseQueryStringFilter, dataSelectionService, dataset) {
	
	var vm = this;
	vm.dataset = dataset;
	
	// metadata paginator
	vm.page = {};
	
	// list of selected datasets
	vm.selected_metadata = [];
	
	// options for the multi selects
	vm.tags = Tag.query({dataset: dataset.id});
	
	// methods
	vm.search = search;
	vm.change_page = change_page;
	vm.open_detail = open_detail;
	vm.save_data_selection = save_data_selection;
	vm.search_datasets = search_datasets;
	
	// overlay id
	vm.overlay_id = 'metadata_overlay';
	
	//form template url and config
	vm.form_template_url = metadataService.form_template_url != undefined ? metadataService.form_template_url : defaultMetadataService.form_template_url;
	vm.form_config = metadataService.form_config;
	
	// columns to display in table
	vm.columns = metadataService.columns != undefined ? metadataService.columns : defaultMetadataService.columns;
	
	// config metadata resource
	Metadata.config.paramDefaults.dataset = dataset.id;
	
	// get search criteria from search params
	//var location_search = $location.search(); should be this when location is correctly set
	if(dataset.metadata.uri.indexOf('?') > -1) {
		var querystring = dataset.metadata.uri.substring(dataset.metadata.uri.indexOf('?')+1);
	 	vm.search_criteria = defaultMetadataService.parse_location_search(parseQueryStringFilter(querystring));
	} else {
		vm.search_criteria = defaultMetadataService.parse_location_search({});
	}
	
	if (metadataService.parse_location_search != undefined)
	{
		vm.search_criteria = metadataService.parse_location_search(vm.search_criteria);
	}
	
	// function to parse the search criteria
	var parse_search_criteria;
	if (metadataService.parse_search_criteria != undefined)
	{
		parse_search_criteria = function(search_criteria){
			return metadataService.parse_search_criteria(defaultMetadataService.parse_search_criteria(search_criteria));
		};
	} else {
		parse_search_criteria = function(search_criteria){
			return defaultMetadataService.parse_search_criteria(search_criteria);
		};
	}
	
	// load metadata with current search criteria
	search(vm.search_criteria);
	
	/* DEFINITIONS */
	function search(search_criteria){
		// display loading overlay
		bsLoadingOverlayService.start({referenceId: vm.overlay_id});
		// get the page
		vm.page = Metadata.paginator(parse_search_criteria(search_criteria), load_objects_success, load_objects_error);
	}
	
	function change_page(page_number) {
		// display loading overlay
		bsLoadingOverlayService.start({referenceId: vm.overlay_id});
		// get the page
		vm.page = vm.page.page(page_number, load_objects_success, load_objects_error);
	}
	
	function load_objects_success(result){
		console.log(result);
		// stop the overlay
		bsLoadingOverlayService.stop({referenceId: vm.overlay_id});
	}
	
	function load_objects_error(error){
		if (error != 'cancelled') {
			// stop the overlay
			bsLoadingOverlayService.stop({referenceId: vm.overlay_id});
		}
		// display some error message
		messagingService.error(['There was an error retrieving objects', error.statusText]);
	}
	
	// function to open metadata detail in modal
	function open_detail(metadata) {
		console.log('Opening metadata', metadata);
		
		$uibModal.open({
			templateUrl: 'metadata/metadata_detail.html',
			size: 'md',
			controller: 'MetadataDetailController',
			controllerAs: 'ctrl',
			resolve: {
				metadata: function () { return metadata; },
				dataset: function () { return dataset; },
			},
		});
	}
	
	// function to save a data selection
	function save_data_selection(selected_metadata)
	{
		console.log('Adding to data selection', selected_metadata);
		var query_dict = angular.extend({'oid__in' : getPropFilter(selected_metadata, 'oid')}, vm.page.search_params);
		delete query_dict.limit;
		delete query_dict.offset;
		delete query_dict.metadata;
		var data_info = {
				dataset: dataset.resource_uri,
				query_string: $httpParamSerializer(query_dict),
		};
		return dataSelectionService.saveDataSelection([data_info]);
	}
	
	// function to search for datasets
	function search_datasets(selected_metadata)
	{
		console.log('searching datasets for metadata', selected_metadata);
		var query_dict = {
			'search': selected_metadata.map(function(m){
				return '(date_beg__lt = ' + m.date_end + ' and date_end__gt = ' + m.date_beg + ')';
			}).join(' or '),
		};
		
		$uibModal.open({
			templateUrl: 'dataset/dataset_search.html',
			size: 'xl',
			controller: 'DatasetController',
			controllerAs: 'ctrl',
			resolve: {
				queryDict: function () {
					return query_dict;
				}
			}
		});
	}
})
.controller('MetadataDetailController', function(metadata, dataset) {
	var vm = this;
	vm.metadata = metadata;
	vm.dataset = dataset;
});