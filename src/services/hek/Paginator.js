/* The Paginator makes the link between the API, the table and the pagination buttons */

import Event from './Event';
import { HEK_DEFAULT_PAGESIZE } from '@/constants';

export default class Paginator {
	static #lastId = 0;
	#api;
	#resourceUri = null;
	#searchParams = null;
	#pageNumber = 1;
	// Vue does not make private fields responsive, and the Bootsrap table and pagination components need the following
	pageSize = HEK_DEFAULT_PAGESIZE;
	totalRows = 0;
	items = [];
	loading = false;
	ariaControl = null;

	constructor(api, resourceUri) {
		this.#api = api;
		this.#resourceUri = resourceUri;
		this.ariaControl = `__hek_paginator__${++Paginator.#lastId}`;
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

	set pageNumber(pageNumber) {
		this.loadPage(pageNumber);
	}

	async loadPage(pageNumber) {
		this.loading = true;
		this.#searchParams.set('result_limit', this.pageSize);
		this.#searchParams.set('page', pageNumber);
		let url = new URL(this.#resourceUri);
		url.search = this.#searchParams.toString();
		let response = await this.#api.get(url.href);
		this.items = response.result.map(item => new Event(item));

		// We don't know how many events there is, so
		// if we received less events than requested, it is the last page
		// Else there is maybe 1 or more page left
		if (this.items.length < this.pageSize) {
			this.totalRows = pageNumber * this.pageSize - 1;
		} else {
			this.totalRows = pageNumber * this.pageSize + 1;
		}
		this.#pageNumber = pageNumber;
		this.loading = false;
	}
}
