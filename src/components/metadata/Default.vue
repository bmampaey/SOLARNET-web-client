<template>
	<metadata :dataset="dataset" :search-filter="searchFilter" :default-columns="defaultColumns">
		<base-datetime-range v-model="searchFilter.dateRange" label="Observation date" min-label="Start" max-label="End"></base-datetime-range>
	</metadata>
</template>

<script>
import MetadataMixin from './MetadataMixin';

export default {
	name: 'Default',
	mixins: [MetadataMixin]
};
</script>
