<template>
	<b-container fluid>
		<app-menu></app-menu>
		<data-selection class="mt-3"></data-selection>
	</b-container>
</template>

<script>
import DataSelection from '@/components/data_selection/DataSelection';

export default {
	name: 'DataSelections',
	components: {
		DataSelection
	}
};
</script>
