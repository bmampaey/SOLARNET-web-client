<template>
	<b-container fluid>
		<app-menu></app-menu>
		<b-card header="Update Account" class="w-50 mx-auto mt-5">
			<b-form @submit.prevent="updateUser">
				<b-alert :show="!!formError" variant="danger" v-text="formError"></b-alert>
				<b-alert :show="!!formSuccess" variant="success" v-text="formSuccess"></b-alert>
				<b-form-group label="First Name" label-for="first-name">
					<b-form-input id="first-name" v-model="firstName" autocomplete="given-name" trim></b-form-input>
				</b-form-group>
				<b-form-group label="Last Name" label-for="last-name">
					<b-form-input id="last-name" v-model="lastName" autocomplete="family-name" trim></b-form-input>
				</b-form-group>
				<b-form-group label="New Password" label-for="new-password" description="Optional, fill in only if you want to change your password">
					<b-form-input id="new-password" v-model="newPassword" type="password" autocomplete="new-password"></b-form-input>
				</b-form-group>
				<b-form-group label="Current password" label-for="current-password" description="Your current password is required to update your account">
					<b-form-input id="current-password" v-model="currentPassword" type="password" autocomplete="current-password" required></b-form-input>
				</b-form-group>
				<b-button type="submit" variant="primary">Update</b-button>
			</b-form>
		</b-card>
	</b-container>
</template>

<script>
export default {
	name: 'UpdateAccount',
	data: function() {
		return {
			firstName: this.$SVO.user.firstName,
			lastName: this.$SVO.user.lastName,
			newPassword: null,
			currentPassword: null,
			formError: null,
			formSuccess: null
		};
	},
	activated: function() {
		// Reset the first and last name each time the user comes back to the UpdateAccount vue
		this.firstName = this.$SVO.user.firstName;
		this.lastName = this.$SVO.user.lastName;
	},
	methods: {
		updateUser: async function() {
			this.formError = null;
			try {
				await this.$SVO.user.update(this.firstName, this.lastName, this.newPassword, this.currentPassword);
				this.newPassword = null;
				this.currentPassword = null;
				this.formSuccess = 'Your account was updated successfully';
			} catch (error) {
				if (error.response.status == 401) {
					this.formError = 'The current password is invalid. If you have forgotten your password, please contact the website administrator';
				} else {
					this.formError = this.$SVO.parseError(error);
				}
			}
		}
	}
};
</script>
