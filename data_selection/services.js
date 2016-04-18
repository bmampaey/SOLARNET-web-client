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
				// create a list of data selection promises
				var data_selection_promises = data_infos.map(function (data_info) {
					// create the data selection from the data info
					var data_selection = new DataSelection(data_info);
					// add the user data selection to the data selection
					data_selection.user_data_selection = user_data_selection.resource_uri;
					// save and return the promise
					return data_selection.$save().$promise;
				});
				// return a combined promise
				return $q.all(promises);
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