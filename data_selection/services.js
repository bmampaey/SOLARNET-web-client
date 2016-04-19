angular
.module('dataSelectionApp')
.factory('dataSelectionService', function($uibModal, authenticationService){
	
	return {
		saveDataSelection: saveDataSelection
	};
	
	/* DEFINITIONS */
	
	// open a modal to ask user for a data selection name
	// then save the data selection to that name
	function saveDataSelection(data_infos) {
		return $uibModal.open({
			templateUrl: '/SVO/data_selection/save_data_selection.html',
			size: 'sm',
			controller: 'SaveDataSelectionController',
			controllerAs: 'ctrl',
			resolve: {
				// data selection requires authentication
				authenticatedUser: function(){
					return authenticationService.authenticatedUser();
				},
				data_infos: function(){
					return data_infos;
				}
			}
		})
		.result;
	}
});