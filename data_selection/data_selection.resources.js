var DataSelectionApp = angular.module('DataSelectionApp');

DataSelectionApp.factory('UserDataSelection', ['SDA_URL', '$resource',
	function(SDA_URL, $resource) {
		return $resource(SDA_URL + 'user_data_selection/:id');
	}
]);

DataSelectionApp.factory('DataSelection', ['SDA_URL', '$resource',
	function(SDA_URL, $resource) {
		return $resource(SDA_URL + 'user_data_selection/:id');
	}
]);