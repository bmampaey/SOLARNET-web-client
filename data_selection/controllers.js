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
.controller('DataSelectionDetailController', function($uibModalInstance, DataSelection, data_selection) {
	var vm = this;
	
	vm.parent = data_selection;
	// convert data selection objects to resource
	vm.data_selections = data_selection.data_selections.map(function(object){return new DataSelection(object);});
})
.controller('SaveDataSelectionController', function($q, $timeout, UserDataSelection, DataSelection, $uibModalInstance, authenticatedUser, data_infos) {

	// set auth
	UserDataSelection.setAuth({username: authenticatedUser.email, api_key: authenticatedUser.api_key});
	DataSelection.setAuth({username: authenticatedUser.email, api_key: authenticatedUser.api_key});
	
	var vm = this;
	
	// set state of the modal
	vm.state = "default";
	
	// options for the multi selects
	vm.user_data_selections = UserDataSelection.query(); 
	
	// methods
	vm.saveDataSelection = saveDataSelection;
	vm.closeModal = closeModal;
	vm.addOption = addOption;
	
	// result of the modal
	vm.data_selections = undefined;
	vm.error_message = undefined;
	
	/* DEFINITIONS */
	
	
	
	function closeModal(){
		if (vm.state == 'success') {
			$uibModalInstance.close(vm.data_selections);
		} else {
			$uibModalInstance.dismiss(vm.error_message);
		}
	}
	
	// save the data selection
	function saveDataSelection(user_data_selection){
		return getUserDataSelection(user_data_selection).then(getUserDataSelectionSuccess, saveDataSelectionError);
	}
	
	// return a promise of a user data selection
	function getUserDataSelection(user_data_selection){
		// if the user data selection id is undefined it means it is to be created
		if(user_data_selection.id == undefined){
			return user_data_selection.$save();
		} else {
			return $q.resolve(user_data_selection);
		}
	}
	
	function getUserDataSelectionSuccess(result){
		
		// attach the user data selection to the data info
		angular.forEach(data_infos, function(data_info){
			data_info.user_data_selection = result.resource_uri;
		});
		
		// save the data selection
		// TODO update the tasty library to do this
		DataSelection.save_bulk({'objects': data_infos}, saveDataSelectionSuccess, saveDataSelectionError);
	}
	
	function saveDataSelectionSuccess(result){
		console.log('Successfully saved data selection', result);
		vm.data_selections = result;
		vm.state = 'success';
	}
	
	function saveDataSelectionError(reason){
		if(reason.status <= 0){
			vm.error_message = 'The server seems down, please contact the website admins.';
		} else if(reason.data){
			vm.error_message = reason.data;
		} else {
			vm.error_message = reason.statusText;
		}
		vm.state = 'error';
	}
	
	// method to allow adding option to ui select
	function addOption($select){
		// only add option if select is open 
		if ($select.open) {
			// remove the ones added by user
			// do it backward to do it in place
			for (var i = $select.items.length - 1; i >= 0; i--) {
				if($select.items[i].$added_by_user) {
					$select.items.splice(i, 1);
				}
			}
			// if there is a search term, then add an option
			var search = $select.search;
			if (search) {
				var user_data_selection = new UserDataSelection({
					'name': search,
					'$added_by_user': true
				});
				$select.items.unshift(user_data_selection);
				$select.selected = user_data_selection;
			}
		}
	}
});
