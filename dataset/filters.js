angular
.module('datasetApp')
.filter('noEmptyDataset', function() {
	return function(datasets) {
		return datasets.filter(function(dataset){
			return dataset.metadata && dataset.metadata.number_items > 0;
		});
	};
});
