<template>
	<div>
		<b-card v-if="dataSelection.description" class="mb-2">
			<b-card-text v-text="dataSelection.description"></b-card-text>
		</b-card>
		<component :is="metadataComponent" :dataset="dataset" :initial-search-filter="searchFilter" class="mt-3"></component>
	</div>
</template>

<script>
import metadataComponents from '@/components/metadata';

export default {
	name: 'DataSelectionDetail',
	props: {
		dataSelection: { type: Object, required: true }
	},
	data: function() {
		return {
			dataset: {
				...this.dataSelection.dataset,
				metadata: this.dataSelection.metadata
			},
			searchFilter: null
		};
	},
	computed: {
		/* Component to display the Metadata for the displayed dataset */
		metadataComponent: function() {
			const component = metadataComponents[this.dataset.name] || metadataComponents['default'];
			return () => import('@/components/metadata/' + component);
		}
	}
};
</script>
