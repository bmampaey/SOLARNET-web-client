angular
.module('dataSelectionApp')
.factory('dataSelectionService', function($uibModal, $state, authenticationService){
	
	return {
		saveDataSelection: saveDataSelection
	};
	
	/* DEFINITIONS */
	
	// open a modal to ask user for a data selection name
	// then save the data selection to that name
	function saveDataSelection(data_infos) {
		var current_view = angular.element(document.getElementById($state.current.name));
		console.log('Attaching data_selection modal to', current_view);

		return $uibModal.open({
			templateUrl: '/SVO/data_selection/save_data_selection.html',
			size: 'sm',
			controller: 'SaveDataSelectionController',
			controllerAs: 'ctrl',
			appendTo: current_view,
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