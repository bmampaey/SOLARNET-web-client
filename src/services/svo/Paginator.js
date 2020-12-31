/* The Paginator is the interface between the API, the bootstrap table displaying the items and the pagination buttons */

import { DEFAULT_PAGE_SIZE } from '@/constants';

export default class Paginator {
	static #lastId = 0;
	#axios = null;
	#resourceUri = null;
	#searchParams = null;
	#pageNumber = 1;
	// Vue does not make private fields responsive, and the Bootsrap table and pagination components need the following
	pageSize = DEFAULT_PAGE_SIZE;
	totalRows = 0;
	items = [];
	loading = false;
	ariaControl = null;

	constructor(axios, resourceUri) {
		this.#axios = axios;
		this.#resourceUri = resourceUri;
		this.ariaControl = `__svo_paginator__${++Paginator.#lastId}`;
	}

	get searchParams() {
		return this.#searchParams;
	}

	set searchParams(value) {
		this.#searchParams = new URLSearchParams(value);
	}

	get pageNumber() {
		return this.#pageNumber;
	}

	set pageNumber(value) {
		this.loadPage(value);
	}

	async loadPage(pageNumber) {
		this.loading = true;
		this.#searchParams.set('limit', this.pageSize);
		this.#searchParams.set('offset', (pageNumber - 1) * this.pageSize);
		let response = await this.#axios.get(this.#resourceUri, { params: this.#searchParams });
		this.items = response.data.objects;
		this.pageSize = response.data.meta.limit;
		this.totalRows = response.data.meta.total_count;
		this.#pageNumber = this.pageSize > 0 ? Math.floor(response.data.meta.offset / this.pageSize) + 1 : 1;
		this.loading = false;
	}
}
