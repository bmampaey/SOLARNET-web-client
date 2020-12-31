<template>
	<b-container fluid>
		<app-menu></app-menu>
		<hek-event class="mt-3"></hek-event>
	</b-container>
</template>

<script>
import HekEvent from '@/components/hek_event/HekEvent';

export default {
	name: 'HekEvents',
	components: {
		HekEvent
	}
};
</script>
