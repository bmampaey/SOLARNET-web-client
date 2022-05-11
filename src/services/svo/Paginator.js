/* The Paginator is the interface between the API, the bootstrap table displaying the items and the pagination buttons */

import { SVO_PAGINATION_OPTIONS } from '@/constants';

export default class Paginator {
	static #lastId = 0;
	#pageNumber = 1;
	#pageCount = 1;
	#pageSize = SVO_PAGINATION_OPTIONS.DEFAULT_PAGESIZE;
	#searchParams = null;
	#axios = null;
	#resourceUri = null;

	// Vue does not make private fields responsive, and the Bootsrap table and pagination components need the following
	items = [];
	loading = false;
	ariaControls = null;

	constructor(axios, resourceUri) {
		this.#axios = axios;
		this.#resourceUri = resourceUri;
		this.ariaControls = `__svo_paginator__${++Paginator.#lastId}`;
	}

	get pageNumber() {
		return this.#pageNumber;
	}

	set pageNumber(value) {
		this.loadPage(value);
	}

	get pageCount() {
		return this.#pageCount;
	}

	get pageSize() {
		return this.#pageSize;
	}

	set pageSize(value) {
		this.#pageSize = value;
		this.loadPage(1);
	}

	get searchParams() {
		return this.#searchParams;
	}

	set searchParams(value) {
		this.#searchParams = new URLSearchParams(value);
	}

	async loadPage(pageNumber) {
		this.loading = true;
		this.#searchParams.set('limit', this.#pageSize);
		this.#searchParams.set('offset', (pageNumber - 1) * this.#pageSize);
		let response = await this.#axios.get(this.#resourceUri, { params: this.#searchParams });
		this.items = response.data.objects;
		this.#pageSize = response.data.meta.limit;
		this.#pageNumber = this.#pageSize > 0 ? Math.floor(response.data.meta.offset / this.#pageSize) + 1 : 1;
		this.#pageCount = Math.ceil(response.data.meta.total_count / this.#pageSize);
		this.loading = false;
	}
}
