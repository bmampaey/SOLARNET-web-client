angular
.module('metadataApp')
.controller('MetadataController', function($location, bsLoadingOverlayService, Metadata, Tag, metadataService, DEFAULT_METADATA_SERVICE, dataset) {
	
	var parse_search_criteria = metadataService.parse_search_criteria || DEFAULT_METADATA_SERVICE.parse_search_criteria;
	
	console.log('metadataController', dataset);
	
	var vm = this;
	
	vm.dataset = dataset;
	
	// set search criteria from search params
	vm.search_criteria = (metadataService.parse_location_search || DEFAULT_METADATA_SERVICE.parse_location_search)($location.search());
	
	// columns to display in table
	vm.columns = metadataService.columns || DEFAULT_METADATA_SERVICE.columns;
	
	//form template url
	vm.form_template_url = metadataService.form_template_url || DEFAULT_METADATA_SERVICE.form_template_url;
	
	// datasets
	vm.metadata = {};
	
	// list of selected datasets
	vm.selected_metadata = [];
	
	// options for the multi selects
	vm.tags = [];
	
	// methods
	vm.search = search;
	vm.change_page = change_page;
	vm.open_detail = open_detail;
	vm.save_data_selection = save_data_selection;
	
	// load metadata with current search criteria
	search(vm.search_criteria);
	
	Tag.objects.$find({dataset: dataset.id}).then(
		function(result){
			vm.tags = result.objects;
		}
	);
	
	/* DEFINITIONS */
	
	var overlay_id = 'objects_overlay';
	
	
	function search(search_criteria){
		// display loading overlay
		bsLoadingOverlayService.start({referenceId: overlay_id});
		// find the data selections
		var search_params = parse_search_criteria(search_criteria);
		search_params.metadata = dataset.id + '_metadata';
		Metadata.objects.$find(search_params).then(
			function(result){
				console.log(result);
				// update the controller
				vm.metadata = result;
				// stop the loading overlay
				bsLoadingOverlayService.stop({referenceId: overlay_id});
			},
			function(error){
				console.log(error);
				// display some error message
				messagingService.error(['There was an error retrieving objects', error.statusText]);
			}
		);
	}
	
	function change_page(page_number) {
		// display loading overlay
		bsLoadingOverlayService.start({referenceId: overlay_id});
		// find the data selections
		Metadata.page.change(page_number).then(
			function(result){
				console.log(result);
				// stop the loading overlay
				bsLoadingOverlayService.stop({referenceId: overlay_id});
			},
			function(error){
				console.log(error);
				// display some error message
				messagingService.error(['There was an error retrieving objects', error.statusText]);
			}
		);
	}
	
	
	// function to open dataset detail in modal
	function open_detail(metadata) {
		console.log('Opening metadata', metadata);
	}
	
	// function to save a data selection
	function save_data_selection(selected_metadata)
	{
		console.log('Adding to data selection', selected_metadata);
	}
});