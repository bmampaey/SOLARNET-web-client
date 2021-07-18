<template>
	<b-container fluid>
		<app-menu></app-menu>
		<dataset class="mt-3"></dataset>
	</b-container>
</template>

<script>
import Dataset from '@/components/dataset/Dataset';

export default {
	name: 'Datasets',
	components: {
		Dataset
	}
};
</script>
