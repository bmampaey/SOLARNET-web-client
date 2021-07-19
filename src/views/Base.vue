<template>
	<b-container fluid>
		<app-menu></app-menu>
		<keep-alive>
			<router-view class="mt-3"></router-view>
		</keep-alive>
	</b-container>
</template>

<script>
import AppMenu from '@/components/globals/AppMenu';
export default {
	name: 'Base',
	components: {
		AppMenu
	}
};
</script>
