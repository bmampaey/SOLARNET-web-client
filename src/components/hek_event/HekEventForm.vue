<template>
	<b-form @submit.prevent="updateSearchFilter">
		<b-form-group label="Event types" label-for="event-type">
			<b-form-select id="event-type" v-model="searchFilter.eventTypes" :options="searchFilter.eventTypeOptions" multiple></b-form-select>
		</b-form-group>
		<datetime-range v-model="searchFilter.dateRange" label="Event time" min-label="Start" max-label="End"></datetime-range>
		<b-form-group label="Detection method" label-for="detection-method">
			<b-form-select id="detection-method" v-model="searchFilter.detectionMethod" :options="searchFilter.detectionMethodOptions"></b-form-select>
		</b-form-group>
		<attribute-filter v-model="searchFilter.attributeFilters" :attributes="searchFilter.eventAttributeOptions"></attribute-filter>
		<b-button type="submit" variant="primary">Search</b-button>
	</b-form>
</template>

<script>
import HekEventSearchFilter from '@/services/hek/EventSearchFilter';
import AttributeFilter from './AttributeFilter';

export default {
	name: 'HekEventForm',
	components: {
		AttributeFilter
	},
	props: {
		value: { type: HekEventSearchFilter, required: true }
	},
	data() {
		return {
			searchFilter: new HekEventSearchFilter(this.value)
		};
	},
	methods: {
		updateSearchFilter() {
			// Send a copy of the searchFilter so that local modifications are not visible outside until the form is submitted
			this.$emit('input', new HekEventSearchFilter(this.searchFilter));
		}
	}
};
</script>
