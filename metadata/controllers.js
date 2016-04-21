angular
.module('metadataApp')
.controller('MetadataController', function($location, $httpParamSerializer, $uibModal, bsLoadingOverlayService, messagingService, Metadata, Tag, defaultMetadataConfig, metadataConfig, getPropFilter, dataSelectionService, dataset) {
	
	// merge metadata service and defaults
	var config = {};
	angular.forEach(defaultMetadataConfig, function(value, key){
		config[key] = metadataConfig[key] != undefined ? metadataConfig[key]: value;
	});
	
	var vm = this;
	
	vm.dataset = dataset;
	
	// metadata paginator
	vm.page = {};
	
	// set search criteria from search params
	vm.search_criteria = config.parse_location_search($location.search());
	
	// columns to display in table
	vm.columns = config.columns;
	
	//form template url
	vm.form_template_url = config.form_template_url;
	
	// list of selected datasets
	vm.selected_metadata = [];
	
	// options for the multi selects
	vm.tags = Tag.query({dataset: dataset.id});
	
	// methods
	vm.search = search;
	vm.change_page = change_page;
	vm.open_detail = open_detail;
	vm.save_data_selection = save_data_selection;
	
	// overlay id
	vm.overlay_id = 'metadata_overlay';
	
	// load metadata with current search criteria
	search(vm.search_criteria);
	
	/* DEFINITIONS */
	function search(search_criteria){
		// display loading overlay
		bsLoadingOverlayService.start({referenceId: vm.overlay_id});
		// filter the search criteria
		var search_params = config.parse_search_criteria(search_criteria);
		search_params.metadata = dataset.id + '_metadata';
		// get the page
		vm.page = Metadata.paginator(search_params, load_objects_success, load_objects_error);
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
		var data_info = {
				dataset: dataset.resource_uri,
				query_string: $httpParamSerializer(vm.page.search_params),
				metadata_oids : getPropFilter(selected_metadata, 'oid'),
		};
		return dataSelectionService.saveDataSelection([data_info]);
	}
})
.controller('MetadataDetailController', function(metadata, dataset) {
	var vm = this;
	vm.metadata = metadata;
	vm.dataset = dataset;
});