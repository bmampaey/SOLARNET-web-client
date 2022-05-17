/* The Paginator is the interface between the API, the bootstrap table displaying the items and the pagination buttons */

import { SVO_PAGINATION_OPTIONS } from '@/constants';

export default class Paginator {
	// WARNING: Vue does not make private fields responsive
	#pageCount = 1;
	#searchParams = null;
	#axios = null;
	#resourceUri = null;

	pageNumber = 1;
	pageSize = SVO_PAGINATION_OPTIONS.DEFAULT_PAGESIZE;
	ordering = null;
	items = [];
	loading = false;

	constructor(axios, resourceUri) {
		this.#axios = axios;
		this.#resourceUri = resourceUri;
	}

	get pageCount() {
		return this.#pageCount;
	}

	get searchParams() {
		return this.#searchParams;
	}

	set searchParams(value) {
		this.#searchParams = new URLSearchParams(value);
	}

	async loadPage(pageNumber) {
		this.loading = true;
		this.#searchParams.set('limit', this.pageSize);
		this.#searchParams.set('offset', (pageNumber - 1) * this.pageSize);
		if (this.ordering != null) {
			this.#searchParams.set('order_by', this.ordering);
		} else {
			this.#searchParams.delete('order_by');
		}
		let response = await this.#axios.get(this.#resourceUri, { params: this.#searchParams });
		this.items = response.data.objects;
		this.pageSize = response.data.meta.limit;
		this.pageNumber = this.pageSize > 0 ? Math.floor(response.data.meta.offset / this.pageSize) + 1 : 1;
		this.#pageCount = Math.ceil(response.data.meta.total_count / this.pageSize);
		this.loading = false;
	}
}
