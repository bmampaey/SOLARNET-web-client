<template>
	<b-row>
		<b-col cols="4">
			<dataset-form v-model="searchFilter"></dataset-form>
		</b-col>
		<b-col cols="8">
			<dataset-list :search-filter="searchFilter"></dataset-list>
		</b-col>
	</b-row>
</template>

<script>
import DatasetSearchFilter from '@/services/svo/DatasetSearchFilter';
import DatasetForm from './DatasetForm';
import DatasetList from './DatasetList';

export default {
	name: 'Dataset',
	components: {
		DatasetForm,
		DatasetList
	},
	props: {
		initialSearchFilter: { type: DatasetSearchFilter, required: false, default: null }
	},
	data: function() {
		return {
			searchFilter: new DatasetSearchFilter(this.initialSearchFilter)
		};
	}
};
</script>
