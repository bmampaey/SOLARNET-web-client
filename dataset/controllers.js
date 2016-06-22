angular.module('datasetApp')
.controller('DatasetController', function($location, $state, $injector, $uibModal, parseQueryStringFilter, bsLoadingOverlayService, messagingService, loadMetadataConfig, Dataset, dataSelectionService, datasetConfig, queryDict) {
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
		
		// if we decide to have the url reflect the search, change this to true
		//$location.search(vm.page.search_params);
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
		var query_string = dataset.metadata.uri.indexOf('?') > -1 ? dataset.metadata.uri.substring(dataset.metadata.uri.indexOf('?')+1) : "";
		var query_dict = parseQueryStringFilter(query_string);
		// ugly little hack to have the dates input preset
		query_dict.date_end__gte = vm.page.search_params.date_end__gte;
		query_dict.date_beg__lte = vm.page.search_params.date_beg__lte;
		
		var current_view = angular.element(document.getElementById($state.current.name));
		console.log('Attaching metadata modal to', current_view);
		
		$uibModal.open({
			templateUrl: 'dataset/dataset_detail.html',
			size: 'xl',
			controller: 'MetadataController',
			controllerAs: 'ctrl',
			appendTo: current_view,
			resolve: {
				dataset: function () {
					return dataset;
				},
				queryDict: function () {
					return query_dict;
				},
				metadataConfig: function() {
					return loadMetadataConfig(dataset);
				}
			},
		});
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