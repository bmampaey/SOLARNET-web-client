/* The UserResource is different than the other SVO API resources :
- it uses the basic Authorization and not the ApiKey Authorization, with the email as username
- it only allow operations on the list end point
- the user information is saved in the local storage information to permit the user to stay logged in between sessions
*/

export default class UserResource {
	#axios = null;
	#resourceUri = null;
	#firstName = null;
	#lastName = null;
	#email = null;
	#apiKey = null;
	// Vue does not make private fields responsive, and the AppMenu component displays the fullName
	fullName = null;

	constructor(axios, resourceUri) {
		this.#axios = axios;
		this.#resourceUri = resourceUri;
	}

	get firstName() {
		if (!this.#firstName) {
			this.#firstName = window.localStorage.getItem('userFirstName');
		}
		return this.#firstName;
	}

	set firstName(value) {
		this.#firstName = value;
		window.localStorage.setItem('userFirstName', value);
		this.updateFullName();
	}

	get lastName() {
		if (!this.#lastName) {
			this.#lastName = window.localStorage.getItem('userLastName');
		}
		return this.#lastName;
	}

	set lastName(value) {
		this.#lastName = value;
		window.localStorage.setItem('userLastName', value);
		this.updateFullName();
	}

	get email() {
		if (!this.#email) {
			this.#email = window.localStorage.getItem('userEmail');
		}
		return this.#email;
	}

	set email(value) {
		this.#email = value;
		window.localStorage.setItem('userEmail', value);
	}

	get apiKey() {
		if (!this.#apiKey) {
			this.#apiKey = window.localStorage.getItem('userApiKey');
		}
		return this.#apiKey;
	}

	set apiKey(value) {
		this.#apiKey = value;
		window.localStorage.setItem('userApiKey', value);
	}

	get isAuthenticated() {
		return this.email && this.apiKey ? true : false;
	}

	async logIn(email, password) {
		let authentication = {
			username: email,
			password: password
		};
		let response = await this.#axios.get(this.#resourceUri, {
			auth: authentication
		});
		this.parseResponseData(response.data);
		this.email = email;
	}

	logOut() {
		this.firstName = null;
		this.lastName = null;
		this.email = null;
		this.apiKey = null;
	}

	async register(firstName, lastName, email, password) {
		let data = {
			email: email,
			first_name: firstName,
			last_name: lastName,
			password: password
		};
		let response = await this.#axios.post(this.#resourceUri, data);
		this.parseResponseData(response.data);
		this.email = email;
	}

	async update(firstName, lastName, newPassword, currentPassword) {
		// If password is left blank, then don't update it
		let data = {
			first_name: firstName || '',
			last_name: lastName || '',
			password: newPassword || undefined
		};
		let authentication = {
			username: this.email,
			password: currentPassword
		};
		let response = await this.#axios.patch(this.#resourceUri, data, {
			auth: authentication
		});
		this.parseResponseData(response.data);
	}

	async delete(password) {
		let authentication = {
			username: this.email,
			password: password
		};
		await this.#axios.delete(this.#resourceUri, {
			auth: authentication
		});
		this.logOut();
	}

	parseResponseData(data) {
		this.firstName = data.first_name;
		this.lastName = data.last_name;
		this.apiKey = data.api_key;
	}

	updateFullName() {
		this.fullName = `${this.firstName} ${this.lastName}`.trim();
	}
}
