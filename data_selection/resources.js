angular.module('dataSelectionApp')
.factory('DataSelectionGroup', function(tastyResource) {
	return new tastyResource('data_selection_group/:id', {paramDefaults: {id: '@id'}, cache: false});
})
.factory('DataSelection', function(tastyResource) {
	return new tastyResource('data_selection/:id', {paramDefaults: {id: '@id'}, cache: false});
});