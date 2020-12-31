<template>
	<b-container fluid>
		<b-card class="w-50 mx-auto mt-5" no-body>
			<b-tabs card justified>
				<b-tab title="Login" active>
					<login-form></login-form>
				</b-tab>
				<b-tab title="Register">
					<register-form></register-form>
				</b-tab>
			</b-tabs>

			<b-card-footer>
				The following documents and statements apply to this website and the services it provides. By logging in you signify that you agree with all of them.
				<b-link href="http://www.astro.oma.be/common/internet/en/terms-of-use.pdf" target="_blank">Terms of use</b-link>,
				<b-link href="http://www.astro.oma.be/common/internet/en/cookie-declaration.pdf" target="_blank">Cookie usage</b-link>,
				<b-link href="http://www.astro.oma.be/common/internet/en/data-policy-en.pdf" target="_blank">Data policy</b-link>,
				<b-link href="http://www.astro.oma.be/common/internet/en/privacy-policy-en.pdf" target="_blank">Privacy policy</b-link>,
				<b-link href="http://www.astro.oma.be/common/internet/en/disclaimer-en.pdf" target="_blank">Disclaimer</b-link>
			</b-card-footer>
		</b-card>
	</b-container>
</template>

<script>
import LoginForm from '@/components/authentication/LoginForm';
import RegisterForm from '@/components/authentication/RegisterForm';

export default {
	name: 'Login',
	components: {
		LoginForm,
		RegisterForm
	}
};
</script>
