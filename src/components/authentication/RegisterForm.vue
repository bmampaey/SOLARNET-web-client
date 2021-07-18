<template>
	<b-form @submit.prevent="registerUser">
		<b-alert :show="!!formError" variant="danger" v-text="formError"></b-alert>
		<b-form-group label="First Name" label-for="first-name" description="Optional">
			<b-form-input id="first-name" v-model="firstName" autocomplete="given-name" trim></b-form-input>
		</b-form-group>
		<b-form-group label="Last Name" label-for="last-name" description="Optional">
			<b-form-input id="last-name" v-model="lastName" autocomplete="family-name" trim></b-form-input>
		</b-form-group>
		<b-form-group label="Email" label-for="email">
			<b-form-input id="email" v-model="email" type="email" autocomplete="email" required trim></b-form-input>
		</b-form-group>
		<b-form-group label="Password" label-for="password">
			<b-form-input id="password" v-model="password" type="password" autocomplete="new-password" required></b-form-input>
		</b-form-group>
		<b-button type="submit" variant="primary">Register</b-button>
	</b-form>
</template>

<script>
export default {
	name: 'RegisterForm',
	data: function() {
		return {
			firstName: null,
			lastName: null,
			email: null,
			password: null,
			formError: null
		};
	},
	methods: {
		/* Try to register the user into the SVO API with the email and password specified in the form
		If successfull redirect to the Root view */
		registerUser: async function() {
			this.formError = null;
			try {
				await this.$SVO.user.register(this.firstName, this.lastName, this.email, this.password);
				this.$router.push({ name: 'Root' });
			} catch (error) {
				this.formError = this.$SVO.parseError(error);
			}
		}
	}
};
</script>
