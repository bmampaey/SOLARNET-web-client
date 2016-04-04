angular.module('datasetApp')
.controller('DatasetController',
	function($location, $uibModal, bsLoadingOverlayService, datasetService) {
		var vm = this;
		
		// set the search criteria from url
		vm.search_criteria = $location.search();
		/*
		{
			angstrom: true, // specify wavelength units in angstrom
			selected_instruments: [], // filled automatically  by the multi select
			selected_characteristics: [], // filled automatically  by the multi select
			selected_tags: [], // filled automatically  by the multi select
			
		}
		*/
		// datasets
		vm.datasets = [];
		
		// instruments for the multi select
		vm.instruments = datasetService.instruments;
		
		// characteristics for the multi select
		vm.characteristics = datasetService.characteristics;
		
		// tags for the multi select
		vm.tags = datasetService.tags;
		
		// function to search/filter datasets
		vm.search_datasets = search_datasets;
		
		// function to open dataset detail in modal
		vm.open_dataset_detail = open_dataset_detail;
		
		// function to save a data selection
		vm.save_data_selection = save_data_selection;
		
		// load datasets with current search criteria
		var search_params = datasetService.parse_search_criteria(vm.search_criteria);
		load_datasets(vm.search_criteria.page);
		
		///////////////////////////////////////////////////////////////////////////
		
		function search_datasets(){
			// set the search criteria into the url
			$location.search(vm.search_criteria);
			// upate the search params
			search_params = datasetService.parse_search_criteria(vm.search_criteria);
			// load the datasets
			load_datasets(1);
		}
		
		function load_datasets(page_number){
			// set the page number into the url
			$location.search('page', page_number);
			// start the overlay
			bsLoadingOverlayService.start({referenceId: 'dataset_overlay'});
			// get the datasets
			datasetService.get_datasets(search_params, page_number).then(load_datasets_success, load_datasets_error);
		}
		
		function load_datasets_success(datasets){
			vm.datasets = datasets;
			// stop the overlay
			bsLoadingOverlayService.stop({referenceId: 'dataset_overlay'});
		}
		
		function load_datasets_error(reason){
			if (reason != 'cancelled') {
				// stop the overlay
				bsLoadingOverlayService.stop({referenceId: 'dataset_overlay'});
			}
		}
		
		function open_dataset_detail(dataset) {
			$uibModal.open({
				templateUrl: 'dataset/metadata.html',
				size: 'lg',
				controller: 'MetadataController',
				resolve: {
					dataset: function () { return dataset }
				},
			});
		}
		
		function save_data_selection(selected_datasets)
		{
			console.log('Adding to data selection', selected_datasets);
		}
		
	}
)
.controller('MetadataController',
	function(Metadata, Tag, METADATA_SEARCH_PARAMS, bsLoadingOverlayService) {
		// TODO move to an app
		console.log("MetadataController scope", vm.$id);
	
		// TODO get this from search string
		vm.start_date = vm.$parent.start_date;
		vm.end_date = vm.$parent.end_date;
		vm.wavelength_min = vm.$parent.wavelength_min;
		vm.wavelength_max = vm.$parent.wavelength_max;
		
		
		// columns to display in table
		vm.columns = [
			['date_beg', 'Date'],
			['wavemin', 'Wavelength'],
		];
		
		// load tags for the multi select
		vm.tags = [];
		Tag.get({dataset: vm.dataset.id}, function(tags){
			angular.forEach(tags.objects, function(tag) {
				// add characteristic
				vm.tags.push({
					name: tag.name,
					checked: false,
					value: tag.name
				});
			});
			// set the list of selected tags from parent selected tags
			vm.selectedTags = vm.tags.filter(function(n) {return vm.$parent.selectedTags.indexOf(n) != -1;});
		});
		
		// search parameters
		var search_criteria = {dataset: vm.dataset.id + '_metadata'};
		
		// function to parse search criteria and load the table
		vm.search_metadata = function() {
			
			search_criteria = {dataset: vm.dataset.id + '_metadata'};
			
			// check date range
			if(vm.start_date != null) {
				// date are in local timezone, so must be offset to UTC
				search_criteria.date_end__gt = new Date(vm.start_date.getTime() - (60000 * vm.start_date.getTimezoneOffset()));
			}
			
			if(vm.end_date != null) {
				// date are in local timezone, so must be offset to UTC
				search_criteria.date_beg__lt = new Date(vm.end_date.getTime() - (60000 * vm.end_date.getTimezoneOffset()));
			}
			
			// check wavelength range
			if(vm.wavelength_min != null) {
				search_criteria.wavemax__gt = vm.angstrom ? vm.wavelength_min / 10.0 : vm.wavelength_min;
			}
			
			if(vm.wavelength_max != null) {
				search_criteria.wavemin__lt = vm.angstrom ? vm.wavelength_max  / 10.0 : vm.wavelength_max;
			}
			
			// check selected tags
			if(vm.selectedTags.length != 0) {
				search_criteria.tags__in = vm.selectedTags.map(function(element) {
					return element.value;
				});
			}
			console.log("search params");
			console.log(search_criteria);
			
			//load the metadata
			vm.load_metadata();
		};
		
		// page number of metadata list
		vm.page_number = 1;
		
		// function to load the table
		vm.load_metadata = function(page_number){
			console.log("Updating metadata");
			
			// default page number is 1
			vm.page_number = page_number === undefined ? 1 : page_number;
			
			// set the loading overlay
			bsLoadingOverlayService.start({referenceId: 'metadata_table'});
			
			// update the search params
			search_criteria.offset = vm.page_number * METADATA_SEARCH_PARAMS.limit;
			
			// update the table
			Metadata.get(search_criteria, function(metadata) {
				// update the metadata list
				vm.metadata_list = metadata.objects;
				vm.number_pages = Math.ceil(metadata.meta.total_count / METADATA_SEARCH_PARAMS.limit);
				// stop the loading overlay
				bsLoadingOverlayService.stop({referenceId: 'metadata_table'});
			});
		};
		
		// load the metadata list
		vm.search_metadata();
	}
);