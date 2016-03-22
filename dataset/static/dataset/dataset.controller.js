var DatasetApp = angular.module('DatasetApp');

DatasetApp.controller('DatasetController',

function($scope, Dataset, Telescope, Characteristic, Tag, $uibModal, bsLoadingOverlayService) {
	
	// specify wavelength units in angstrom
	$scope.angstrom = true;
	
	// load instruments for the multi select
	$scope.instruments = [];
	Telescope.get(function(telescopes){
		angular.forEach(telescopes.objects, function(telescope) {
			// open select group with telescope name
			$scope.instruments.push({
				name: telescope.name,
				multiSelectGroup: true
			});
			// add individual instruments
			angular.forEach(telescope.instruments, function(instrument) {
				$scope.instruments.push({
					name: instrument.name,
					checked: false,
					value: instrument.name
				});
			});
			// close the group
			$scope.instruments.push({
				multiSelectGroup: false
			});
		});
	});
	// list of selected instruments, filled automatically  by the multi select
	$scope.selectedInstruments = [];
	
	// load characteristics for the multi select
	$scope.characteristics = [];
	Characteristic.get(function(characteristics){
		angular.forEach(characteristics.objects, function(characteristic) {
			// add characteristic
			$scope.characteristics.push({
				name: characteristic.name,
				checked: false,
				value: characteristic.name
			});
		});
	});
	
	// list of selected characteristics, filled automatically  by the multi select
	$scope.selectedCharacteristics = [];
	
	// load tags for the multi select
	$scope.tags = [];
	Tag.get(function(tags){
		angular.forEach(tags.objects, function(tag) {
			// add characteristic
			$scope.tags.push({
				name: tag.name,
				checked: false,
				value: tag.name
			});
		});
	});
	
	// list of selected tags, filled automatically  by the multi select
	$scope.selectedTags = [];
	
	// list of all datasets
	$scope.datasets = [];
	
	// search parameters
	var search_params = {};
	
	// function to parse search criteria and load the table
	$scope.search_datasets = function() {
		
		search_params = {};
		
		// check selected instruments
		if($scope.selectedInstruments.length != 0) {
			search_params.instrument__in = $scope.selectedInstruments.map(function(element) {
				return element.value;
			});
		}
		
		// check selected characteristics
		if($scope.selectedCharacteristics.length != 0) {
			search_params.characteristics__in = $scope.selectedCharacteristics.map(function(element) {
				return element.value;
			});
		}
		
		// check selected tags
		if($scope.selectedTags.length != 0) {
			search_params.tags__in = $scope.selectedTags.map(function(element) {
				return element.value;
			});
		}
		
		// check date range
		if($scope.start_date != null) {
			// date are in local timezone, so must be offset to UTC
			search_params.date_end__gt = new Date($scope.start_date.getTime() - (60000 * $scope.start_date.getTimezoneOffset()));
		}
		
		if($scope.end_date != null) {
			// date are in local timezone, so must be offset to UTC
			search_params.date_beg__lt = new Date($scope.end_date.getTime() - (60000 * $scope.end_date.getTimezoneOffset()));
		}
		
		// check wavelength range
		if($scope.wavelength_min != null) {
			search_params.wavemax__gt = $scope.angstrom ? $scope.wavelength_min / 10.0 : $scope.wavelength_min;
		}
		
		if($scope.wavelength_max != null) {
			search_params.wavemin__lt = $scope.angstrom ? $scope.wavelength_max  / 10.0 : $scope.wavelength_max;
		}
		
		console.log("Query params");
		console.log(search_params);
		
		// load the datasets
		$scope.load_datasets()
	};
	
	// function to load the table
	$scope.load_datasets = function(){
		console.log("Updating datasets");
		
		// set the loading overlay
		bsLoadingOverlayService.start({referenceId: 'dataset_table'});
		
		// get the datasets
		Dataset.get(search_params, function(datasets) {
			// update the dataset list
			$scope.datasets = datasets.objects;
			
			// stop the loading overlay
			bsLoadingOverlayService.stop({referenceId: 'dataset_table'});
		});
	};
	
	// load the dataset list
	$scope.search_datasets();
	
	// function to open dataset detail in modal
	$scope.open_dataset_detail = function(dataset) {
		$uibModal.open({
			templateUrl: 'dataset/dataset_detail.html',
			size: 'lg',
			controller: 'DatasetDetailController',
			resolve: {
				dataset: function () { return dataset }
			},
		});
	};
});

DatasetApp.controller('DatasetDetailController',
function($scope, $uibModalInstance, dataset) {
	$scope.dataset = dataset;
});

// TODO move to an app
DatasetApp.controller('MetadataController',
function($scope, Metadata, Tag, METADATA_SEARCH_PARAMS, bsLoadingOverlayService) {
	// TODO get this from search string
	$scope.start_date = $scope.$parent.start_date;
	$scope.end_date = $scope.$parent.end_date;
	$scope.wavelength_min = $scope.$parent.wavelength_min;
	$scope.wavelength_max = $scope.$parent.wavelength_max;
	
	
	// columns to display in table
	$scope.columns = [
		['date_beg', 'Date'],
		['wavemin', 'Wavelength'],
	];
	
	// load tags for the multi select
	$scope.tags = [];
	Tag.get({dataset: $scope.dataset.id}, function(tags){
		angular.forEach(tags.objects, function(tag) {
			// add characteristic
			$scope.tags.push({
				name: tag.name,
				checked: false,
				value: tag.name
			});
		});
		// set the list of selected tags from parent selected tags
		$scope.selectedTags = $scope.tags.filter(function(n) {return $scope.$parent.selectedTags.indexOf(n) != -1;});
	});
	
	// search parameters
	var search_params = {dataset: $scope.dataset.id + '_metadata'};
	
	// function to parse search criteria and load the table
	$scope.search_metadata = function() {
		
		// check date range
		if($scope.start_date != null) {
			// date are in local timezone, so must be offset to UTC
			search_params.date_end__gt = new Date($scope.start_date.getTime() - (60000 * $scope.start_date.getTimezoneOffset()));
		}
		
		if($scope.end_date != null) {
			// date are in local timezone, so must be offset to UTC
			search_params.date_beg__lt = new Date($scope.end_date.getTime() - (60000 * $scope.end_date.getTimezoneOffset()));
		}
		
		// check wavelength range
		if($scope.wavelength_min != null) {
			search_params.wavemax__gt = $scope.angstrom ? $scope.wavelength_min / 10.0 : $scope.wavelength_min;
		}
		
		if($scope.wavelength_max != null) {
			search_params.wavemin__lt = $scope.angstrom ? $scope.wavelength_max  / 10.0 : $scope.wavelength_max;
		}
		
		// check selected tags
		if($scope.selectedTags.length != 0) {
			search_params.tags__in = $scope.selectedTags.map(function(element) {
				return element.value;
			});
		}
		console.log("search params");
		console.log(search_params);
		
		//load the metadata
		$scope.load_metadata();
	};
	
	// page number of metadata list
	$scope.page_number = 1;
	
	// function to load the table
	$scope.load_metadata = function(page_number){
		console.log("Updating metadata");
		
		// default page number is 1
		$scope.page_number = page_number === undefined ? 1 : page_number;
		
		// set the loading overlay
		bsLoadingOverlayService.start({referenceId: 'metadata_table'});
		
		// update the search params
		search_params.offset = $scope.page_number * METADATA_SEARCH_PARAMS.limit;
		
		// update the table
		Metadata.get(search_params, function(metadata) {
			// update the metadata list
			$scope.metadata_list = metadata.objects;
			$scope.number_pages = Math.ceil(metadata.meta.total_count / METADATA_SEARCH_PARAMS.limit);
			// stop the loading overlay
			bsLoadingOverlayService.stop({referenceId: 'metadata_table'});
		});
	};
	
	// load the metadata list
	$scope.search_metadata();
});