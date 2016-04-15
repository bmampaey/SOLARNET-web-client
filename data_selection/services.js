angular
.module('dataSelectionApp')
.factory('dataSelectionService', function($uibModal, messagingService, UserDataSelection, DataSelection, authenticationService){
	
	return {
		createDataSelection: createDataSelection,
	};
	
	
	function logout(){
		return user.logout().finally(function(){
			$location.url('/');
		});
	}
	
	function getUserDataSelection(){
		return $uibModal.open({
			templateUrl: '/SVO/data_selection/get_data_selection.html',
			size: 'sm',
			controller: 'GetDataSelectionController',
			controllerAs: 'ctrl',
			resolve: {
			// data selection requires authentication
				authenticatedUser: function(){ return authenticationService.authenticatedUser(); }
			}
		});
	};
	
	function createDataSelection(data_infos) {
		// return a user data selection
		var user_data_selection = getUserDataSelection().result;
		user_data_selection.then(
			function(result){
				angular.forEach(data_infos, function(data_info){
					// create the new data selection
					var data_selection = new DataSelection(data_info);
					// attach the data selection to the user data selection
					data_selection.user_data_selection = result;
					// save the data selection
					// TODO manage errors
					data_selection.$save();
				});
			},
			function(reason){
				// ignore if backdrop was clicked
				if (reason != 'backdrop click')
				{
					messagingService.error(['There was an error saving data selection', reason]);
				}
				return reason;
			});
		return user_data_selection;
	};
});