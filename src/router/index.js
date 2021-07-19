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
		path: '/base',
		name: 'Base',
		component: () => import('@/views/Base.vue'),
		children: [
			{
				path: '/datasets',
				name: 'Datasets',
				component: () => import(/* webpackChunkName: "Dataset" */ '@/components/dataset/Dataset')
			},
			{
				path: '/data_selections',
				name: 'DataSelections',
				component: () => import(/* webpackChunkName: "DataSelection" */ '@/components/data_selection/DataSelection')
			},
			{
				path: '/hek_events',
				name: 'HekEvents',
				component: () => import(/* webpackChunkName: "HekEvent" */ '@/components/hek_event/HekEvent')
			},
			{
				path: '/update_account',
				name: 'UpdateAccount',
				component: () => import(/* webpackChunkName: "UpdateAccount" */ '@/components/user/UpdateAccount.vue')
			},
			{
				path: '/delete_account',
				name: 'DeleteAccount',
				component: () => import(/* webpackChunkName: "DeleteAccount" */ '@/components/user/DeleteAccount.vue')
			}
		]
	},
	{
		path: '/authentication',
		name: 'Authentication',
		component: () => import(/* webpackChunkName: "Authentication" */ '@/views/Authentication.vue')
	},
	// Display a not found message for all other routes
	{
		path: '*',
		name: 'NotFound',
		component: () => import(/* webpackChunkName: "NotFound" */ '@/views/NotFound.vue')
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
