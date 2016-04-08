angular.module('dataSelectionApp')
.factory('UserDataSelection', function($tastypieResource, SDA_URL) {
	var UserDataSelection = new $tastypieResource('user_data_selection', {limit:0});
	return UserDataSelection;
})
.factory('DataSelection', function($tastypieResource, SDA_URL) {
	var DataSelection = new $tastypieResource('data_selection', {limit:0});
	return DataSelection;
});