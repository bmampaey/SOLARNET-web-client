/* The API makes the requests to the SVO apiUrl and manages authentication */

import axios from 'axios';
import Resource from './Resource';
import UserResource from './UserResource';
import Paginator from './Paginator';

export default class Api {
	#isSetup = false;

	constructor(apiUrl, timeout, apiSchemaUrl) {
		this.apiSchemaUrl = apiSchemaUrl;
		this.resourceUris = {};
		this.axios = axios.create({
			baseURL: apiUrl,
			timeout: timeout
		});
		this.authenticatedAxios = axios.create({
			baseURL: apiUrl,
			timeout: timeout
		});
		this.authenticatedAxios.interceptors.request.use(config => this.setAuthentication(config), null, { synchronous: true });
	}

	async setup() {
		if (!this.#isSetup) {
			// The api schema list all the resources and their URIs (or list endpoint)
			let response = await this.axios.get(this.apiSchemaUrl);
			// For each resource, add the URI and create a Resource object
			// passing an authenticated axios instance to it so that all request have the proper headers set
			for (const [name, value] of Object.entries(response.data)) {
				let resourceUri = value['list_endpoint'];
				this.resourceUris[name] = resourceUri;
				this[name] = this.getResource(resourceUri);
			}
			// Override the user resource with the adhoc UserResource, authentication is managed by the UserResource itself
			this.user = new UserResource(this.axios, this.resourceUris.user);
			this.#isSetup = true;
		}
	}

	getResource(resourceUri) {
		return new Resource(this.authenticatedAxios, resourceUri);
	}

	getPaginator(resourceUri) {
		return new Paginator(this.authenticatedAxios, resourceUri);
	}

	setAuthentication(config) {
		// If the user is authenticated, set the authorization header
		// else redirect th euser to the login page and warn that there was a problem
		if (this.user.isAuthenticated) {
			config.headers.common['Authorization'] = `ApiKey ${this.user.email}:${this.user.apiKey}`;
			return config;
		} else {
			window.vm.$router.push({ name: 'Authentication' });
			throw new Error('User is not authenticated');
		}
	}

	parseError(error) {
		if (error.response) {
			// TODO add better error parsing check notfound, authentication error, etc e.g. if error.response.status is 404, etc
			// The request was made and the server responded with a status code that falls out of the range of 2xx
			// Most of the time, the SVO api will return an error as JSON object with an error attribute
			if (error.response.data.error) {
				return error.response.data.error;
			} else {
				return error.response.data;
			}
		} else {
			// The request was made but no response was received
			// or something happened in setting up the request that triggered an Error
			return 'An error happened, please retry or contact the site administrator';
		}
	}
}
