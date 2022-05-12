/* The Paginator makes the link between the API, the table and the pagination buttons */

import Event from './Event';
import { HEK_PAGINATION_OPTIONS } from '@/constants';

export default class Paginator {
	#pageCount = 1;
	#pageSize = HEK_PAGINATION_OPTIONS.DEFAULT_PAGESIZE;
	#ordering = null;
	#searchParams = null;
	#api;
	#resourceUri = null;

	// Vue does not make private fields responsive, and the Bootsrap table and pagination components need the following
	pageNumber = 1;
	items = [];
	loading = false;

	constructor(api, resourceUri) {
		this.#api = api;
		this.#resourceUri = resourceUri;
	}

	get pageCount() {
		return this.#pageCount;
	}

	get pageSize() {
		return this.#pageSize;
	}

	set pageSize(value) {
		if (this.#pageSize != value) {
			this.#pageSize = value;
			this.loadPage(1);
		}
	}

	get ordering() {
		return this.#ordering;
	}

	set ordering(value) {
		if (this.#ordering != value) {
			this.#ordering = value;
			this.loadPage(1);
		}
	}

	get searchParams() {
		return this.#searchParams;
	}

	set searchParams(value) {
		this.#searchParams = new URLSearchParams(value);
	}

	async loadPage(pageNumber) {
		this.loading = true;
		this.#searchParams.set('result_limit', this.pageSize);
		this.#searchParams.set('page', pageNumber);
		if (this.#ordering != null) {
			this.#searchParams.set('sort_by', this.#ordering);
		} else {
			this.#searchParams.delete('sort_by');
		}
		let url = new URL(this.#resourceUri);
		url.search = this.#searchParams.toString();
		let response = await this.#api.get(url.href);
		this.items = response.result.map(item => new Event(item));
		this.pageNumber = pageNumber;
		// We don't know how many events there is, so
		// if we received less events than requested, it is the last page
		// Else there is maybe 1 or more page left
		if (this.items.length < this.pageSize) {
			this.#pageCount = pageNumber;
		} else {
			this.#pageCount = pageNumber + 1;
		}
		this.loading = false;
	}
}
