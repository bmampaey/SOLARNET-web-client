/* The API makes the requests to the HEK server */

import jsonp from 'jsonp-promise';
import { HEK_EVENT_LIST_SEARCH_PARAMS } from '@/constants';
import Event from './Event';

export default class Api {
	constructor(apiUrl, timeout = 15000) {
		this.apiUrl = apiUrl;
		this.timeout = timeout;
	}

	async getPaginated(searchParams = null, resultLimit = null, pageNumber = null) {
		searchParams = new URLSearchParams(searchParams);

		let fullSearchParams = new URLSearchParams(HEK_EVENT_LIST_SEARCH_PARAMS);

		for (const [key, value] of searchParams.entries()) {
			fullSearchParams.set(key, value);
		}

		if (resultLimit) {
			fullSearchParams.set('result_limit', resultLimit);
		}
		if (pageNumber) {
			fullSearchParams.set('page', pageNumber);
		}

		let url = new URL(this.apiUrl);
		url.search = fullSearchParams;

		let data = await jsonp(url.href, { timeout: this.timeout }).promise;

		if (data.result instanceof Array) {
			return data.result.map(item => new Event(item));
		} else {
			throw Error('Could not retrieve events');
		}
	}

	parseError(error) {
		if (error.response) {
			// The request was made and the server responded with a status code that falls out of the range of 2xx
			return error.response.data;
		} else {
			// The request was made but no response was received
			// or something happened in setting up the request that triggered an Error
			return 'An error happened, please retry or contact the site administrator';
		}
	}
}
