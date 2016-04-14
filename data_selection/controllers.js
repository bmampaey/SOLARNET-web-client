angular
.module('dataSelectionApp')
.controller('DataSelectionController', function($uibModal, bsLoadingOverlayService, messagingService, UserDataSelection, authenticatedUser) {
	
	var vm = this;
	
	// data selection paginator
	vm.page = {};
	vm.search = search;
	vm.change_page = change_page;
	vm.open_detail = open_detail;
	vm.delete_data_selection = delete_data_selection;
	
	// overlay id
	vm.overlay_id = 'data_selection_overlay';
	
	// set auth
	UserDataSelection.setAuth({username: authenticatedUser.email, api_key: authenticatedUser.api_key});
	
	// load some data selections
	search();
	
	/* DEFINITIONS */
	
	function search(search_criteria) {
		// display loading overlay
		bsLoadingOverlayService.start({referenceId: vm.overlay_id});
		// get the page
		vm.page = UserDataSelection.paginator(search_criteria, load_objects_success, load_objects_error);
	}
	
	function change_page(page_number) {
		// display loading overlay
		bsLoadingOverlayService.start({referenceId: vm.overlay_id});
		// get the page
		vm.page = vm.page.page(page_number, load_objects_success, load_objects_error);
	}
	
	function load_objects_success(result){
		console.log(result);
		// stop the overlay
		bsLoadingOverlayService.stop({referenceId: vm.overlay_id});
	}
	
	function load_objects_error(error){
		if (error != 'cancelled') {
			// stop the overlay
			bsLoadingOverlayService.stop({referenceId: vm.overlay_id});
		}
		// display some error message
		messagingService.error(['There was an error retrieving objects', error.statusText]);
	}
	
	// function to delete data selection
	function delete_data_selection(data_selection) {
		data_selection.$delete(
			function(result){
				console.log(result);
				var index = vm.page.objects.indexOf(data_selection);
				if(index > -1){
					 vm.page.objects.splice(index, 1);
				}
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
	vm.data_selections = data_selection.data_selections.map(function(object){return new DataSelection(object);});
});
