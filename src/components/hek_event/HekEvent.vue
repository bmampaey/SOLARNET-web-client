<template>
	<b-row>
		<b-col cols="12" lg="4">
			<b-card no-body class="mb-3">
				<b-card-header v-b-toggle="eventFilterId" header-tag="header" title="Click to show/hide the event filters">
					Filter events
					<b-button size="sm" class="hide-btn" :aria-controls="eventFilterId">Hide</b-button>
					<b-button size="sm" class="show-btn" :aria-controls="eventFilterId">Show</b-button>
				</b-card-header>
				<b-collapse :id="eventFilterId" visible>
					<b-card-body>
						<hek-event-form v-model="searchFilter"></hek-event-form>
					</b-card-body>
				</b-collapse>
			</b-card>
		</b-col>
		<b-col cols="12" lg="8">
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
	data() {
		return {
			searchFilter: new HekEventSearchFilter(this.initialSearchFilter),
			eventFilterId: this.$utils.getUniqueId()
		};
	}
};
</script>
