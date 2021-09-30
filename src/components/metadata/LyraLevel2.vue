<template>
	<b-row>
		<b-col cols="4">
			<b-form @submit.prevent="updateSearchParams">
				<base-datetime-range v-model="searchFilter.dateRange" label="Observation date" min-label="Start" max-label="End"></base-datetime-range>
				<b-overlay :show="showOverlay" rounded="sm">
					<b-form-group label="Tags" label-for="tags">
						<b-form-select id="tags" v-model="searchFilter.tags" :options="tagOptions" multiple></b-form-select>
					</b-form-group>
				</b-overlay>
				<b-button type="submit" variant="primary">Search</b-button>
			</b-form>
		</b-col>
		<b-col cols="8">
			<metadata-list :dataset="dataset" :search-params="searchParams" :columns="columns"></metadata-list>
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
			columns: [
				{ label: 'Observation start date', key: 'date_beg', formatter: this.$utils.formatDate },
				{ label: 'Observation end date', key: 'date_end', formatter: this.$utils.formatDate }
			]
		};
	}
};
</script>
