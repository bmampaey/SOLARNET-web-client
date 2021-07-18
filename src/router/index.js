import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		name: 'Root',
		redirect: { name: 'Datasets' }
	},
	{
		path: '/datasets',
		name: 'Datasets',
		component: () => import('@/views/Datasets.vue')
	},
	{
		path: '/data_selections',
		name: 'DataSelections',
		component: () => import('@/views/DataSelections.vue')
	},
	{
		path: '/hek_events',
		name: 'HekEvents',
		component: () => import('@/views/HekEvents.vue')
	},
	{
		path: '/authentication',
		name: 'Authentication',
		component: () => import('@/views/Authentication.vue')
	},
	{
		path: '/update_account',
		name: 'UpdateAccount',
		component: () => import('@/views/UpdateAccount.vue')
	},
	{
		path: '/delete_account',
		name: 'DeleteAccount',
		component: () => import('@/views/DeleteAccount.vue')
	},
	// Display a not found message for all other routes
	{
		path: '*',
		name: 'NotFound',
		component: () => import('@/views/NotFound.vue')
	}
];

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
});

router.beforeEach((to, from, next) => {
	router.app.$SVO
		.setup()
		.then(function() {
			if (to.name == 'Authentication' || router.app.$SVO.user.isAuthenticated) {
				next();
			} else {
				next({ name: 'Authentication' });
			}
		})
		.catch(function() {
			alert('Error contacting the server, please refresh the page or contact the administrator of the website');
		});
});

export default router;
