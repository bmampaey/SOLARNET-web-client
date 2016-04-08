angular
.module('dataSelectionApp')
.controller('DataSelectionController', function(filterFilter, $uibModal, bsLoadingOverlayService, messagingService, UserDataSelection) {
	
	var vm = this;
	
	vm.data_selections = {};
	vm.search = search;
	vm.change_page = change_page;
	vm.open_detail = open_detail;
	vm.delete_object = delete_object;
	
	// load some data selections
	search();
	
	/* DEFINITIONS */
	
	var overlay_id = 'objects_overlay';
	
	function search(search_criteria) {
		// display loading overlay
		bsLoadingOverlayService.start({referenceId: overlay_id});
		// find the data selections
		UserDataSelection.objects.$find(search_criteria).then(
			function(result){
				console.log(result);
				// update the controller
				vm.data_selections = result;
				// stop the loading overlay
				bsLoadingOverlayService.stop({referenceId: overlay_id});
			},
			function(error){
				console.log(error);
				// display some error message
				messagingService.error(['There was an error retrieving objects', error.statusText]);
			}
		);
	}
	
	function change_page(page_number) {
		// display loading overlay
		bsLoadingOverlayService.start({referenceId: overlay_id});
		// find the data selections
		UserDataSelection.page.change(page_number).then(
			function(result){
				console.log(result);
				// stop the loading overlay
				bsLoadingOverlayService.stop({referenceId: overlay_id});
			},
			function(error){
				console.log(error);
				// display some error message
				messagingService.error(['There was an error retrieving objects', error.statusText]);
			}
		);
	}
	
	// function to delete data selection
	function delete_object(data_selection) {
		UserDataSelection.objects.$delete({id: data_selection.id}).then(
			function(result){
				console.log(result);
			},
			function(error){
				console.log(error);
				// display some error message
				messagingService.error(['There was an error deleting object', error.statusText]);
			}
		);
	}
	
	// function to open data selection detail in modal
	function open_detail(data_selection) {
		$uibModal.open({
			templateUrl: '/SVO/data_selection/data_selection_detail.html',
			size: 'lg',
			controller: 'DataSelectionDetailController',
			controllerAs: 'ctrl',
			resolve: {
				data_selection: function () { return data_selection }
			},
		});
	}
})
.controller('DataSelectionDetailController',
function($uibModalInstance, DataSelection, data_selection) {
	var vm = this;
	
	vm.parent = data_selection;
	// convert data selection objects to resource
	vm.data_selections = data_selection.data_selections.map(function(object){return DataSelection.objects.$create(object);});
});
