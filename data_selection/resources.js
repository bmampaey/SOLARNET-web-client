angular.module('dataSelectionApp')
.factory('UserDataSelection', function(tastyResource) {
	return new tastyResource('user_data_selection/:id', {paramDefaults: {id: '@id'}, cache: false});
})
.factory('DataSelection', function(tastyResource) {
	return new tastyResource('data_selection/:id', {paramDefaults: {id: '@id'}, cache: false});
});