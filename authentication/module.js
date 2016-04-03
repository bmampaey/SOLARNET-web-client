// http://richardtier.com/2014/03/15/authenticate-using-django-rest-framework-endpoint-and-angularjs/
angular
.module('authenticationApp', ['ui.bootstrap', 'ngResource', 'ngCookies'])
.config(function($httpProvider){
	// django and angular both support csrf tokens. This tells
	// angular which cookie to add to what header.
	$httpProvider.defaults.xsrfCookieName = 'csrftoken';
	$httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken';
	$httpProvider.defaults.withCredentials = true;
});

