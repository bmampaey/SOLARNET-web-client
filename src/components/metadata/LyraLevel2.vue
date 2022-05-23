<template>
	<b-row>
		<b-col cols="12" lg="4">
			<b-form @submit.prevent="updateSearchParams">
				<base-datetime-range v-model="searchFilter.dateRange" label="Observation date" min-label="Start" max-label="End"></base-datetime-range>
				<tag-selector v-if="tags.length" v-model="searchFilter.tags" :tags="tags"></tag-selector>
				<keyword-filter v-if="keywords.length" v-model="searchFilter.keywordFilter" :keywords="keywords"></keyword-filter>
				<b-button type="submit" variant="primary">Search</b-button>
			</b-form>
		</b-col>
		<b-col cols="12" lg="8">
			<metadata-list :dataset="dataset" :search-params="searchParams" :tags="tags" :keywords="keywords" :default-columns="defaultColumns"></metadata-list>
		</b-col>
	</b-row>
</template>

<script>
import MetadataMixin from './MetadataMixin';

export default {
	name: 'LyraLevel2',
	mixins: [MetadataMixin],
	data: function() {
		return {
			defaultColumns: [
				{ label: 'Observation start date', key: 'date_beg', formatter: this.$utils.formatDate },
				{ label: 'Observation end date', key: 'date_end', formatter: this.$utils.formatDate }
			]
		};
	}
};
</script>
