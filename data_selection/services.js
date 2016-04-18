angular
.module('dataSelectionApp')
.factory('dataSelectionService', function($q, $uibModal, messagingService, UserDataSelection, DataSelection, authenticationService){
	
	return {
		createDataSelection: createDataSelection,
		getUserDataSelection: getUserDataSelection
	};
	
	/* DEFINITIONS */
	
	// open a modal to ask user for a user data selection and return a promise for it
	function getUserDataSelection(){
		return $uibModal.open({
			templateUrl: '/SVO/data_selection/get_data_selection.html',
			size: 'sm',
			controller: 'GetDataSelectionController',
			controllerAs: 'ctrl',
			resolve: {
				// data selection requires authentication
				authenticatedUser: function(){
					return authenticationService.authenticatedUser();
				}
			}
		}).result;
	};
	
	// return a promise for data selections
	function createDataSelection(data_infos) {
		// get a user data selection promise and when resolved create the data selections
		return getUserDataSelection().then(
			function(user_data_selection){
				// attach the user data selection to the data info
				angular.forEach(data_infos, function(data_info){
					data_info.user_data_selection = user_data_selection.resource_uri;
				});
				// save the data selection
				// TODO update the tasty library to do this
				return DataSelection.save_bulk({'objects': data_infos},
					function(result){
						console.log(result);
					},
					function(reason){
						messagingService.error(['There was an error saving data selection', reason.statusText]);
					})
					.$promise;
			},
			function(reason){
				// ignore if backdrop was clicked
				if (reason != 'backdrop click')
				{
					messagingService.error(['There was an error saving data selection', reason]);
				}
				return $q.reject(reason);
			}
		);
	}
});