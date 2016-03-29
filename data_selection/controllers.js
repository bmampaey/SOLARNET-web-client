angular.module('DataSelectionApp')
.controller('UserDataSelectionController', function($scope, UserDataSelection, DataSelection, $uibModal, bsLoadingOverlayService) {
	
	console.log("UserDataSelectionController scope", $scope.$id);
	
	$scope.data_selections = [];
	
	// function to load the table
	$scope.load_user_data_selections = function(){
		console.log("Updating user data selections");
		
		// set the loading overlay
		bsLoadingOverlayService.start({referenceId: 'user_data_selection_table'});
		
		// get the user data selections
		UserDataSelection.get({}, function(user_data_selections) {
			// update the data selections list
			$scope.user_data_selections = user_data_selections.objects;
			
			// stop the loading overlay
			bsLoadingOverlayService.stop({referenceId: 'user_data_selection_table'});
		});
	};
	
	// function to delete a specific user data selection
	$scope.delete_user_data_selection = function(user_data_selection){
		console.log("Deleting user data selection", user_data_selection);
		
		// get the user data selections
		UserDataSelection.delete({id: user_data_selection.id}, function() {
			// update the data selections list
			var index = $scope.user_data_selections.indexOf(user_data_selection);
			if (index > -1) {
				$scope.user_data_selections.splice(index, 1);
			}
			else {
				console.log("Data selection not found in list", user_data_selection);
			}
		});
	};
	
	// load the data selection list
	$scope.load_user_data_selections();
	
	// function to open data selection detail in modal
	$scope.open_user_data_selection_detail = function(user_data_selection) {
		$uibModal.open({
			templateUrl: 'data_selection/data_selection_detail.html',
			size: 'lg',
			controller: 'UserDataSelectionDetailController',
			resolve: {
				user_data_selection: function () { return user_data_selection }
			},
		});
	};
})
.controller('UserDataSelectionDetailController',
function($scope, $uibModalInstance, user_data_selection) {
	console.log("UserDataSelectionDetailController scope", $scope.$id);
	$scope.user_data_selection = user_data_selection;
	$scope.data_selections = user_data_selection.data_selections;
});