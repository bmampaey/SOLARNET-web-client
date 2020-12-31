<template>
	<b-form @submit.prevent="updateSearchFilter">
		<b-form-group label="Event types" label-for="event-type">
			<b-form-select id="event-type" v-model="searchFilter.eventType" :options="searchFilter.eventTypeOptions" multiple></b-form-select>
		</b-form-group>
		<base-datetime-range v-model="searchFilter.dateRange" label="Event time" min-label="Start" max-label="End"></base-datetime-range>
		<b-button type="submit" variant="primary">Search</b-button>
	</b-form>
</template>

<script>
import HekEventSearchFilter from '@/services/hek/EventSearchFilter';

export default {
	name: 'HekEventForm',
	props: {
		value: { type: HekEventSearchFilter, required: true }
	},
	data: function() {
		return {
			searchFilter: new HekEventSearchFilter(this.value)
		};
	},
	methods: {
		updateSearchFilter: function() {
			// Send a copy of the searchFilter so that local modifications are not visible outside until the form is submitted
			this.$emit('input', new HekEventSearchFilter(this.searchFilter));
		}
	}
};
</script>
