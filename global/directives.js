angular
.module('global')
.directive('inAngstrom', function() {
	// directive that allow to have input with angstrom or nano meters (default) 
	return {
		scope: {
			inAngstrom: '=',
			toAngstrom: '=',
			ngModel: '='
		},
		require: 'ngModel',
		link: function(scope, element, attributes, ngModelCtrl) {
			ngModelCtrl.$formatters.push(formatter);
			ngModelCtrl.$parsers.push(parser);
		
			scope.$watch('inAngstrom + toAngstrom', function(value) {
				scope.ngModel = parseFloat(parser(ngModelCtrl.$viewValue));
			});
		
			function formatter(modelValue) {
				var viewValue;
				if (scope.inAngstrom && !scope.toAngstrom)
					viewValue = modelValue * 10;
				else if (!scope.inAngstrom && scope.toAngstrom)
					viewValue = modelValue / 10.0;
				else
					viewValue = modelValue;
				return viewValue;
			}
		
			function parser(viewValue) {
				var modelValue;
				if (scope.inAngstrom && !scope.toAngstrom)
					modelValue = viewValue / 10.0;
				else if (!scope.inAngstrom && scope.toAngstrom)
					modelValue = viewValue * 10;
				else modelValue = viewValue;
				
				return modelValue;
			}
		}
	};
})
.directive('bootstrapInputWavelength', function() {
	// directive that allow to have bootsrap input with angstrom or nano meters (default) 
	return {
		restrict : 'E',
		scope: {
			label: '@',
			ngModel: '=',
			toAngstrom: '=' // should be <
		},
		template : template,
		link: function(scope, element, attributes) {
		  element.removeAttr('id');
		}
	};
	
	function template(elem, attrs){
		var id = attrs.id || 'id_' + Date.now();
		var toAngstrom = attrs.toAngstrom ? 'toAngstrom' : 'false';
		return '<div class="form-group">'
			+ (attrs.label ? labelTemplate(id) : '')
			+ inputTemplate(id, toAngstrom)
			+ '</div>';
	}
	
	function labelTemplate(id){
		return '<label for="' + id + '" class="control-label">{{ label }}</label>';
	}
	
	function inputTemplate(id, toAngstrom){
		return ''
		+ '<div class="input-group">'
		+ '	<input type="number" id="' + id + '" class="form-control" ng-model="ngModel" in-angstrom="angstrom" to-angstrom="' + toAngstrom +'">'
		+ '	<span class="input-group-btn">'
		+ '		<button type="button" class="btn btn-default" ng-click="angstrom = !angstrom" title="Click to change from Ångström to nano meters">'
		+ '			{{angstrom ? "&Aring;" : "nm"}}'
		+ '		</button>'
		+ '	</span>'
		+ '</div>';
	}
})
.directive('bootstrapInputWavelengthRange', function() {
	// directive that allow to have bootsrap input range with angstrom or nano meters (default) 
	return {
		restrict : 'E',
		scope: {
			label: '@',
			minLabel: '@',
			maxLabel: '@',
			minValue: '=',
			maxValue: '=',
			toAngstrom: '=' // should be <
		},
		template : template,
		link: function(scope, element, attributes) {
		  element.removeAttr('id');
		 scope.minLabel = scope.minLabel === undefined ? 'min' : scope.minLabel;
		 scope.maxLabel = scope.maxLabel === undefined ? 'max' : scope.maxLabel;
		}
	};
	
	function template(elem, attrs){
		var id = attrs.id || 'id_' + Date.now();
		var toAngstrom = attrs.toAngstrom ? 'toAngstrom' : 'false';
		
		return '<div class="row" ng-class="{\'has-error\': maxValue != null && maxValue < minValue}">'
			+ (attrs.label ? '<label class="control-label col-lg-12">{{label}}</label>' : '')
			+ colTemplate(id + '_min', 'minLabel', 'minValue', toAngstrom)
			+ colTemplate(id + '_max', 'maxLabel', 'maxValue', toAngstrom)
			+ '<div  class="col-md-12"><p class="help-block" ng-show="maxValue != null && maxValue < minValue">{{minLabel}} value must be smaller than {{maxLabel}} value</p></div>'
			+ '</div>';
	}
	
	function colTemplate(id, label, ngModel, toAngstrom){
  	return '<div class="form-group col-md-6">'
		+ labelTemplate(id, label)
		+ inputTemplate(id, ngModel, toAngstrom)
		+ '</div>';
	}
	
	function labelTemplate(id, label){
		return '<label for="' + id + '" class="control-label small">{{ '+ label +' }}</label>';
	}
	
	function inputTemplate(id, ngModel, toAngstrom){
		return ''
		+ '<div class="input-group">'
		+ '	<input type="number" id="' + id + '" class="form-control" ng-model="'+ ngModel +'" in-angstrom="angstrom" to-angstrom="' + toAngstrom +'">'
		+ '	<span class="input-group-btn">'
		+ '		<button type="button" class="btn btn-default" ng-click="angstrom = !angstrom" title="Click to change from Ångström to nano meters">'
		+ '			{{angstrom ? "&Aring;" : "nm"}}'
		+ '		</button>'
		+ '	</span>'
		+ '</div>';
	}
})
.directive('bootstrapInputDatetimeRange', function() {
	// directive that allow to have bootsrap datetime picker input range 
	return {
		restrict : 'E',
		scope: {
			label: '@',
			minLabel: '@',
			maxLabel: '@',
			minValue: '=',
			maxValue: '=',
		},
		template : template,
		controller: function($scope){
			console.log('directive scope :', $scope);
			angular.extend(this, $scope);
		},
		controllerAs: 'vm',
		link: function(scope, element, attributes) {
		  element.removeAttr('id');
		 scope.minLabel = scope.minLabel === undefined ? 'min' : scope.minLabel;
		 scope.maxLabel = scope.maxLabel === undefined ? 'max' : scope.maxLabel;
		}
	};
	
	function template(elem, attrs){
		var id = attrs.id || 'id_' + Date.now();
		
		return '<div class="row" ng-class="{\'has-error\': maxValue < minValue}">'
			+ (attrs.label ? '<label class="control-label col-lg-12">{{label}}</label>' : '')
			+ colTemplate(id + '_min', 'minLabel', 'vm.minValue')
			+ colTemplate(id + '_max', 'maxLabel', 'vm.maxValue')
			+ '<p class="help-block" ng-show="maxValue < minValue">{{minLabel}} value must be smaller than {{maxLabel}} value</p>'
			+ '</div>';
	}
	
	function colTemplate(id, label, ngModel){
  	return '<div class="form-group col-md-6">'
		+ labelTemplate(id, label)
		+ inputTemplate(id, ngModel)
		+ '</div>';
	}
	
	function labelTemplate(id, label){
		return '<label for="' + id + '" class="control-label small">{{ '+ label +' }}</label>';
	}
	
	function inputTemplate(id, ngModel){
		return ''
		+ '<div class="input-group">'
    + '	<input type="text" id="'+ id +'" class="form-control" datetime-picker ng-model-options="{timezone: \'UTC\'}" ng-model="'+ ngModel +'" is-open="'+ id +'_date_picker" pattern="\d{4}-\d{2}-\d{2} \d{2}:\d{2}"/>'
    + '	<span class="input-group-btn">'
    + '		<button type="button" class="btn btn-default" ng-click="'+ id +'_date_picker = true" title="Click to open date picker">'
    + '			<span class="glyphicon glyphicon-calendar"></span>'
    + '		</button>'
    + '	</span>'
    + '</div>';
	}
});