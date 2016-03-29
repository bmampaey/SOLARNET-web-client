angular.module('DataSelectionApp')
.factory('UserDataSelection', ['SDA_URL', '$resource',
	function(SDA_URL, $resource) {
		return $resource(SDA_URL + 'user_data_selection/:id');
	}
])
.factory('DataSelection', ['SDA_URL', '$resource',
	function(SDA_URL, $resource) {
		return $resource(SDA_URL + 'user_data_selection/:id');
	}
]);