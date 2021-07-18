/* The API makes the requests to the HEK server */

import jsonp from 'jsonp-promise';
import Paginator from './Paginator';

export default class Api {
	constructor(apiUrl, timeout) {
		this.apiUrl = apiUrl;
		this.timeout = timeout;
	}

	getPaginator() {
		return new Paginator(this, this.apiUrl);
	}

	/* eslint-disable no-unused-vars */

	async get(url) {
		/* the jsonp interface of the HEK is broken, if there is an error in the request
		the error message will not be sent as a jsonp response, resulting in invalif JS code
		so the promise will timeout */
		try {
			return await jsonp(url, { timeout: this.timeout }).promise;
		} catch (error) {
			throw new Error('Unknown error in request');
		}
	}

	/* There is not mutch info in HEK errors at the time*/
	parseError(error) {
		return 'An error happened, please retry or contact the site administrator';
	}

	/* eslint-enable no-unused-vars */
}
