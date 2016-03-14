var DatasetApp = angular.module('DatasetApp');

DatasetApp.controller('DatasetController',

function($scope, Dataset, Telescope, Characteristic, Tag) {
	
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
	
	// function to update dataset list using the search criteria
	$scope.update_datasets = function() {
		console.log("Updating datasets");
		// create set of query params
		var params = {};
		if($scope.selectedInstruments.length != 0) {
			params.instrument__in = $scope.selectedInstruments.map(function(element) {
				return element.value;
			});
		}
		if($scope.selectedCharacteristics.length != 0) {
			params.characteristics__in = $scope.selectedCharacteristics.map(function(element) {
				return element.value;
			});
		}
		console.log($scope.start_date);
		console.log("Query params");
		console.log(params);
		// update the datasets
		Dataset.get(params, function(datasets) {
			$scope.datasets = datasets.objects;
		});
	};
	
	// load the dataset list
	$scope.update_datasets();
	
	// list of opened datasets in the accordion
	$scope.opened_accordion = {};
	$scope.opened_datasets = [];
	
	// functions to open and close dataset detail in accordion
	$scope.open_dataset = function(dataset) {
		var index = $scope.opened_datasets.indexOf(dataset);
		if(index < 0)
		{
			$scope.opened_datasets.push(dataset);
		}
		$scope.opened_accordion[dataset.id] = true;
	};
	
	$scope.close_dataset = function(dataset) {
		var index = $scope.opened_datasets.indexOf(dataset);
		if(index >= 0)
		{
			$scope.opened_datasets.splice(index, 1);
		}
		$scope.opened_accordion[dataset.id]= false;
	};

	console.log("DatasetController scope", $scope);
});

DatasetApp.controller('MetadataController',
function($scope, Metadata, Tag) {
	$scope.start_date = $scope.$parent.start_date;
	$scope.end_date = $scope.$parent.end_date;
	$scope.wavelength_min = $scope.$parent.wavelength_min;
	$scope.wavelength_max = $scope.$parent.wavelength_max;
	$scope.selectedTags = $scope.$parent.selectedTags
	
	$scope.update_metadata = function() {
		console.log("Updating metadata for " + $scope.dataset.name);
		// create set of query params
		params = {dataset: $scope.dataset.id};
		Metadata.get(params, function(metadata) {
			$scope.metadata_list = metadata.objects;
			$scope.next_metadata = metadata.next;
			$scope.previous_metadata = metadata.previous;
		});
	};
	$scope.update_metadata();
});