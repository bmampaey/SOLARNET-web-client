angular.module('dataSelectionApp')
.factory('DataSelectionGroup', function(tastyResource) {
	return new tastyResource('data_selection_group/:id', {paramDefaults: {id: '@id'}, cache: false, page_size: 0});
})
.factory('DataSelection', function(tastyResource) {
	return new tastyResource('data_selection/:id', {paramDefaults: {id: '@id'}, cache: false});
});