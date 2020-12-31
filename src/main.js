import '@babel/polyfill';
import 'mutationobserver-shim';
import '@/plugins/bootstrap-vue';
import '@/utils';
import '@/components/globals';
import '@/services/hek';
import '@/services/svo';
import router from '@/router';
import App from '@/App.vue';
import Vue from 'vue';

Vue.config.productionTip = false;

window.vm = new Vue({
	router,
	render: h => h(App)
}).$mount('#app');
