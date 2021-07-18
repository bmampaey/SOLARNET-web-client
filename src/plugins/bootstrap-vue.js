import Vue from 'vue';
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue';
import './bootstrap-vue.scss';

Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);
// Add a plugin to display an error message as a Bootstrap modal
Vue.use(function(Vue) {
	Vue.prototype.$displayErrorMessage = function(message, title = 'Error') {
		this.$bvModal.msgBoxOk(message, {
			title: title,
			headerTextVariant: 'danger'
		});
	};
});
