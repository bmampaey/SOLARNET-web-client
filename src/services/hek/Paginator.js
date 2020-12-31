/* The Paginator makes the link between the API, the table and the pagination buttons */

export default class Paginator {
	static #lastId = 0;
	#pageNumber = 1;

	constructor(api, searchParams = null, pageSize = 10) {
		this.api = api;
		this.searchParams = searchParams;
		this.pageSize = pageSize;
		this.totalRows = 0;
		this.items = [];
		this.loading = false;
		this.ariaControl = `__hek_paginator__${++Paginator.#lastId}`;
	}

	get pageNumber() {
		return this.#pageNumber;
	}

	set pageNumber(pageNumber) {
		this.loadPage(pageNumber);
	}

	async loadPage(pageNumber) {
		this.loading = true;
		this.items = await this.api.getPaginated(this.searchParams, this.pageSize, pageNumber);
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
