<template>
	<b-container fluid>
		<app-menu></app-menu>
		<b-card header="Delete Account" border-variant="danger" header-bg-variant="danger" header-text-variant="white" class="w-50 mx-auto mt-5">
			<b-card-text>Deleting your account will also delete all your data selections. This action cannot be undone.</b-card-text>
			<b-form @submit.prevent="deleteUser">
				<b-alert :show="!!formError" variant="danger" v-text="formError"></b-alert>
				<b-form-group label="Password" label-for="password" description="Your password is required to delete your account">
					<b-form-input id="password" v-model="password" type="password" autocomplete="current-password" required></b-form-input>
				</b-form-group>
				<b-button type="submit" variant="primary">Delete</b-button>
			</b-form>
		</b-card>
	</b-container>
</template>

<script>
export default {
	name: 'DeleteAccount',
	data: function() {
		return {
			password: null,
			formError: null
		};
	},
	methods: {
		deleteUser: async function() {
			this.formError = null;
			try {
				await this.$SVO.user.delete(this.password);
				this.$router.push({ name: 'Authentication' });
			} catch (error) {
				if (error.response.status == 401) {
					this.formError = 'The password is invalid. If you have forgotten your password, please contact the website administrator';
				} else {
					this.formError = this.$SVO.parseError(error);
				}
			}
		}
	}
};
</script>
