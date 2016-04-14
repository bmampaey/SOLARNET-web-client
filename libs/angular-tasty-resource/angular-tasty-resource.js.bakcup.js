angular
.module('ngTastyResource', ['ngResource'])
.provider("tastyResource", function(){
	var provider = this;
	
	// provider config
	provider.config = {
		// base url of the api
		api_url : '',
		
		// authentication values
		auth : {
			username : '',
			api_key : ''
		},
		
		// value for the authentication header
		authHeader : function(config){
			return 'ApiKey '+ config.auth.username + ':' + config.auth.api_key;
		},
		
		// cache request
		cache : true,
		
		// by default do not limit the queries
		query_limit : 0,
	}
	
	this.$get = function($http, $resource) {
		
		// tastypie return an object instead of an array on query
		function transformResponse($http){
			return $http.defaults.transformResponse.concat([
				function (data, headersGetter) {
					return data.objects;
				}
			]);
		}
		
		function resourceFactory(url, config){
			// merge the default config with the resource config
			config = angular.extend({}, provider.config, config)
			
			// if url is local, append it after the api url
			if (url[0] != '/'){
				if (config.api_url.charAt(config.api_url.length - 1) != '/'){
					url = config.api_url + '/' + url;
				}
				else {
					url = config.api_url + url;
				}
			}
			// tastypie url must always end by slash
			if (url.charAt(url.length - 1) != '/'){
				url += '/';
			}
			
			var auth = angular.extend({}, config.auth);
			
			// redefine all actions with auth, headers and cache
			var default_actions = {
				get: {
					method: 'GET',
					cache: config.cache,
					headers: {
						'Authorization': config.authHeader,
					},
					auth: auth
				},
				query: {
					method: 'GET',
					isArray: true,
					cache: config.cache,
					transformResponse: transformResponse($http),
					headers: {
						'Authorization': config.authHeader,
					},
					auth: auth
				},
				save: {
					method: 'POST',
					headers: {
						'Authorization': config.authHeader,
					},
					auth: auth
				},
				delete: {
					method: 'DELETE',
					headers: {
						'Authorization': config.authHeader,
					},
					auth: auth
				}
			};
			
			var actions = angular.extend(default_actions, config.actions);
			
			// create a regular resource and improve query for tastypie
			var resource = $resource(
				url,
				config.paramDefaults,
				actions,
				{
					stripTrailingSlashes: false,
					cancellable: config.cancellable || true,
				}
			);
			
			// set the resource auth
			resource.auth = config.auth;
			resource.authHeader = config.authHeader;
			resource.setAuth = function(_auth){
				angular.copy(_auth, auth);
			};
			
			// hack the query method to add load page methods to result
			var query = resource.query;
			
			resource.query = function(parameters, succes, error){
				var search_params = angular.extend({}, parameters);
				search_params.limit = search_params.limit > 0 ? search_params.limit : config.query_limit;
				search_params.offset = search_params.offset > 0 ? search_params.offset : 0;
				
				var result = query(search_params, succes, error);
				result.search_params = search_params;
				result.page_number = search_params.limit > 0 ? Math.floor(search_params.offset / search_params.limit) : 1;
				result.load_page = load_page;
				result.load_next_page = load_next_page;
				result.load_previous_page = load_previous_page;
				return result;
			};
			
			return resource;
		}
		
		return resourceFactory;
	};
	
	function load_page(page_number, success, error) {
		var self = this;
		if (page_number <= 0){
			throw 'Invalid page number';
		}
		// set the offset
		self.search_params.offset = (page_number - 1) * self.search_params.limit;
		
		return Event.query(self.search_params, function(data, responseHeaders){
			// update self with the new data
			Array.prototype.splice.apply(self, [0, self.length].concat(data));
			// update page number
			self.page_number = page_number;
			// update meta
			self.meta = data.meta;
			// call original succes
			if (sucess != undefined) {
				sucess(data, responseHeaders);
			}
		}, error);
	}
	
	function load_next_page(){
		return this.load_page(this.page_number + 1);
	}
	
	function load_previous_page(){
		return this.load_page(this.page_number - 1);
	}
});