angular.module('datasetApp')
.controller('DatasetController', function($location, $injector, $uibModal, $ocLazyLoad, bsLoadingOverlayService, messagingService, Dataset, dataSelectionService, datasetConfig, queryDict) {
	var vm = this;
	
	// set default search criteria
	vm.search_criteria = datasetConfig.parse_query_dict(queryDict);
	
	// form config
	vm.form_config = datasetConfig.form_config;
	
	// dataset paginator
	vm.page = {};
	
	// list of selected datasets
	vm.selected_datasets = [];
	
	// methods
	vm.search = search;
	vm.change_page = change_page;
	vm.open_detail = open_detail;
	vm.save_data_selection = save_data_selection;
	
	// overlay id
	vm.overlay_id = 'dataset_overlay';
	
	// load datasets with current search criteria
	search(vm.search_criteria);
	
	/* DEFINITIONS */
	
	function search(search_criteria){
		// display loading overlay
		bsLoadingOverlayService.start({referenceId: vm.overlay_id});
		// get the page
		vm.page = Dataset.paginator(datasetConfig.parse_search_criteria(search_criteria), load_objects_success, load_objects_error);
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
	
	
	// function to open dataset detail in modal
	function open_detail(dataset) {
		$uibModal.open({
			templateUrl: 'dataset/dataset_detail.html',
			size: 'xl',
			controller: 'MetadataController',
			controllerAs: 'ctrl',
			resolve: {
				 // pass the dataset
				dataset: function () {
					return dataset;
				},
				// load the metadata specific service
				metadataService: function() {
					if($injector.has(dataset.id)){
						return $injector.get(dataset.id);
					} else {
						console.log('Loading specific service for ', dataset.id);
						return $ocLazyLoad.load('/SVO/metadata/'+dataset.id+'.js')
							.then(load_metadata_service_succes, load_metadata_service_error);
					}
				}
			},
		});
		
		function load_metadata_service_succes(result){
			console.log('Loaded specific service for ', dataset.id);
			if($injector.has(dataset.id)){
				return $injector.get(dataset.id);
			} else {
				console.log('Specific service for ', dataset.id, 'probably misnommed');
				console.log('Loaded modules :', $ocLazyLoad.getModules());
				return {};
			}
		}
		function load_metadata_service_error(error){
			console.log('Error loading specific service for ', dataset.id, ': ', error);
			return {};
		}
	}
	
	// function to save a data selection
	function save_data_selection(selected_datasets)
	{
		console.log('Adding to data selection', selected_datasets);
		var data_infos = selected_datasets.map(function(dataset){
			return {
				dataset: dataset.resource_uri,
				query_string: dataset.metadata.uri.split("?", 2)[1],
				number_items: dataset.metadata.number_items
			};
		});
		return dataSelectionService.saveDataSelection(data_infos);
	}
});