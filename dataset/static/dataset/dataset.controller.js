angular.module('DatasetApp').controller('DatasetController',

function($scope, $timeout, $filter, Dataset, Telescope, Characteristic, Tag) {
	
	// load instruments for the multi select
	$scope.instruments = [];
	Telescope.get(function(telescopes){
		angular.forEach(telescopes.results, function(telescope) {
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
		angular.forEach(characteristics.results, function(characteristic) {
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
		angular.forEach(tags.results, function(tag) {
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
		// ajax request to api, put filter in the {}
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
		console.log("Query params");
		console.log(params);
		Dataset.get(params, function(datasets) {
			$scope.datasets = datasets.results;
		});
	};
	
	// load the dataset list
	$scope.update_datasets();
	
	// list of opened datasets in the accordion
	$scope.opened_accordion = null;
	$scope.opened_datasets = [];
	
	// functions to open and close dataset detail in accordion
	$scope.open_dataset = function(dataset) {
		var index = $scope.opened_datasets.indexOf(dataset);
		if(index < 0)
		{
			$scope.opened_datasets.push(dataset);
		}
		$scope.opened_accordion = dataset;
	};
	
	$scope.close_dataset = function(dataset) {
		var index = $scope.opened_datasets.indexOf(dataset);
		if(index >= 0)
		{
			$scope.opened_datasets.splice(index, 1);
		}
		$scope.opened_accordion = null;
	};
	
	console.log("DatasetController scope", $scope);
});
