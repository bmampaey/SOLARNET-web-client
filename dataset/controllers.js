angular.module('datasetApp')
.controller('DatasetController', function($location, bsLoadingOverlayService, Dataset, Telescope, Characteristic, Tag, datasetService) {
	var vm = this;
	
	// set default search criteria
	vm.search_criteria = {
		angstrom: true, // specify wavelength units in angstrom
		selected_telescopes: [], // filled automatically  by the multi select
		selected_characteristics: [], // filled automatically  by the multi select
		selected_tags: [], // filled automatically  by the multi select
	};
	
	// datasets
	vm.page = {};
	
	// list of selected datasets
	vm.selected_datasets = [];
	
	// options for the multi selects
	vm.telescopes = [];
	vm.characteristics = [];
	vm.tags = [];
	
	// methods
	vm.search = search;
	vm.change_page = change_page;
	vm.open_detail = open_detail;
	vm.save_data_selection = save_data_selection;
	

	
	// load datasets with current search criteria
	search(vm.search_criteria);
	
	Telescope.objects.$find().then(
		function(result){
			vm.telescopes = result.objects;
		}
	);
	Characteristic.objects.$find().then(
		function(result){
			vm.characteristics = result.objects;
		}
	);
	Tag.objects.$find().then(
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
		Dataset.objects.$find(datasetService.parse_search_criteria(search_criteria)).then(
			function(result){
				console.log(result);
				// update the controller
				vm.datasets = result;
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
		Dataset.page.change(page_number).then(
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
	function open_detail(dataset) {
		console.log('Openin dataset', dataset);
	}
	
	// function to save a data selection
	function save_data_selection(selected_datasets)
	{
		console.log('Adding to data selection', selected_datasets);
	}
});