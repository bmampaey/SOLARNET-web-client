// http://richardtier.com/2014/03/15/authenticate-using-django-rest-framework-endpoint-and-angularjs/
var authenticationApp = angular.module('authenticationApp', ['ui.bootstrap', 'ngResource', 'ngCookies']);

/*
authenticationApp.config(['$httpProvider', function($httpProvider){
	// django and angular both support csrf tokens. This tells
	// angular which cookie to add to what header.
	$httpProvider.defaults.xsrfCookieName = 'csrftoken';
	$httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken';
}])

*/