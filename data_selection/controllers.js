angular
.module('dataSelectionApp')
.controller('DataSelectionController', function($uibModal, data_selections) {
	
	var vm = this;
	
	vm.data_selections = data_selections;
	vm.open_detail = open_detail;
	
	/* DEFINITIONS */
	
	// function to open data selection detail in modal
	function open_detail(data_selection) {
		$uibModal.open({
			templateUrl: 'data_selection/data_selection_detail.html',
			size: 'lg',
			controller: 'DataSelectionDetailController',
			controllerAs: 'data_selection_ctrl',
			resolve: {
				data_selection: function () { return data_selection }
			},
		});
	};
})
.controller('DataSelectionDetailController',
function($uibModalInstance, data_selection) {
	var vm = this;
	
	vm.parent_data_selection = data_selection;
	vm.data_selections = data_selection.data_selections;
});