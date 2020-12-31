<template>
	<b-row>
		<b-col cols="4">
			<hek-event-form v-model="searchFilter"></hek-event-form>
		</b-col>
		<b-col cols="8">
			<hek-event-list :search-filter="searchFilter"></hek-event-list>
		</b-col>
	</b-row>
</template>

<script>
import HekEventForm from './HekEventForm';
import HekEventList from './HekEventList';
import HekEventSearchFilter from '@/services/hek/EventSearchFilter';

export default {
	name: 'HekEvent',
	components: {
		HekEventForm,
		HekEventList
	},
	props: {
		initialSearchFilter: { type: HekEventSearchFilter, required: false, default: null }
	},
	data: function() {
		return {
			searchFilter: new HekEventSearchFilter(this.initialSearchFilter)
		};
	}
};
</script>
