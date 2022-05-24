<template>
	<metadata :dataset="dataset" :search-filter="searchFilter" :default-columns="defaultColumns">
		<datetime-range v-model="searchFilter.dateRange" label="Observation date" min-label="Start" max-label="End"></datetime-range>
	</metadata>
</template>

<script>
import MetadataMixin from './MetadataMixin';

export default {
	name: 'LyraLevel2',
	mixins: [MetadataMixin],
	data() {
		return {
			defaultColumns: [
				{ label: 'Observation start date', key: 'date_beg', formatter: this.$utils.formatDate },
				{ label: 'Observation end date', key: 'date_end', formatter: this.$utils.formatDate }
			]
		};
	}
};
</script>
