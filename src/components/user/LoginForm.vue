<template>
	<b-form @submit.prevent="logInUser">
		<b-alert :show="!!formError" variant="danger" v-text="formError"></b-alert>
		<b-form-group label="Email" label-for="email">
			<b-form-input id="email" v-model="email" type="email" autocomplete="email" required trim></b-form-input>
		</b-form-group>
		<b-form-group label="Password" label-for="password">
			<b-form-input id="password" v-model="password" type="password" autocomplete="current-password" required></b-form-input>
		</b-form-group>
		<b-button type="submit" variant="primary">Login</b-button>
	</b-form>
</template>

<script>
export default {
	name: 'LoginForm',
	data: function() {
		return {
			email: null,
			password: null,
			formError: null
		};
	},
	methods: {
		/* Try to log in the user into the SVO API with the email and password specified in the form
		If successfull redirect to the Root view */
		logInUser: async function() {
			this.formError = null;
			try {
				await this.$SVO.user.logIn(this.email, this.password);
				this.$router.push({ name: 'Root' });
			} catch (error) {
				if (error.response.status == 401) {
					this.formError = 'The email or password is invalid. If you have forgotten your password, please contact the website administrator';
				} else {
					this.formError = this.$SVO.parseError(error);
				}
			}
		}
	}
};
</script>
