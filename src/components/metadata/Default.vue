<template>
	<metadata :dataset="dataset" :search-filter="searchFilter" :default-columns="defaultColumns">
		<datetime-range v-model="searchFilter.dateRange" label="Observation date" min-label="Start" max-label="End"></datetime-range>
	</metadata>
</template>

<script>
import MetadataMixin from './MetadataMixin';

export default {
	name: 'Default',
	mixins: [MetadataMixin]
};
</script>
