/* Resource makes the requests to the SVO api for a particular resource */

export default class Resource {
	#axios = null;
	#resourceUri = null;

	constructor(axios, resourceUri) {
		this.#axios = axios;
		this.#resourceUri = resourceUri;
	}

	async getAll(searchParams = null) {
		searchParams = new URLSearchParams(searchParams);
		searchParams.set('limit', 0);
		let response = await this.#axios.get(this.#resourceUri, { params: searchParams });
		return response.data.objects;
	}

	async create(data) {
		let response = await this.#axios.post(this.#resourceUri, data);
		return response.data;
	}

	async update(resourceUri, data) {
		let response = await this.#axios.patch(resourceUri, data);
		return response.data;
	}

	async delete(resourceUri) {
		return await this.#axios.delete(resourceUri);
	}
}
