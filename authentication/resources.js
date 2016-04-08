angular
.module('authenticationApp')
.factory('User', function($resource, $cookies, $tastypie, SDA_URL){
	var User = $resource(
		SDA_URL + 'user/:action/',
		null,
		{
			'login': {method: 'POST', params: {action: 'login'}},
			'logout': {method: 'GET', params: {action: 'logout'}}
		},
		{
			stripTrailingSlashes : false,
		}
	);
	
	User.prototype.login = function(credentials) {
		var self = this;
		self.email = credentials.email;
		self.api_key = undefined;
		self.username = undefined;
		
		return self.$login(function(){
			// email is not sent back by the server so we have to set it from the credentials
			self.email = credentials.email;
			self.set_tastypie_authentication();
			
			$cookies.putObject('user', {
				username: self.username,
				email: self.email,
				api_key: self.api_key,
			});
		});
	};
	
	User.prototype.logout = function() {
		var self = this;
		return self.$logout({email: self.email, api_key: self.api_key}, function(){
			self.email = undefined;
			self.api_key = undefined;
			self.username = undefined;
			$cookies.remove('user');
		});
	};
	
	User.prototype.is_authenticated = function() {
		var self = this;
		return self.email != undefined && self.api_key != undefined;
	};
	
	User.prototype.set_tastypie_authentication = function(){
		var self = this;
		$tastypie.setAuth(self.email, self.api_key);
	};
	
	User.get_session_user = function(){
		return new User($cookies.getObject('user'));
	};
	
	return User;
});