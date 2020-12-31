<template>
	<div>
		<b-card class="mb-2">
			<b-card-text v-html="dataset.description"></b-card-text>
			<b-button-toolbar key-nav>
				<b-button v-b-popover="telescopePopover" pill size="sm" variant="outline-info">{{ telescope.name }}</b-button>
				<b-button v-b-popover="instrumentPopover" pill size="sm" variant="outline-info">{{ instrument.name }}</b-button>
				<b-button pill size="sm" variant="outline-info" :href="dataset.archive_url" target="_blank">Archive webpage</b-button>
			</b-button-toolbar>
		</b-card>
		<component :is="metadataComponent" :dataset="dataset" :initial-search-filter="searchFilter" class="mt-3"></component>
	</div>
</template>

<script>
import metadataComponents from '@/components/metadata';

export default {
	name: 'DatasetDetail',
	props: {
		dataset: { type: Object, required: true },
		searchFilter: { type: Object, required: true }
	},
	data: function() {
		return {
			telescope: this.dataset.telescope,
			instrument: this.dataset.instrument
		};
	},
	computed: {
		/* Data for the popover directive when the user click on the telescope button */
		telescopePopover: function() {
			return {
				title: this.telescope.name,
				content: this.telescope.description,
				html: true,
				placement: 'bottom',
				trigger: 'focus',
				customClass: 'popover-lg'
			};
		},
		/* Data for the popover directive when the user click on the instrument button */
		instrumentPopover: function() {
			return {
				title: this.instrument.name,
				content: this.instrument.description,
				html: true,
				placement: 'bottom',
				trigger: 'focus',
				customClass: 'popover-lg'
			};
		},
		/* Component to display the Metadata for the displayed dataset */
		metadataComponent: function() {
			const component = metadataComponents[this.dataset.name] || metadataComponents['default'];
			return () => import(/* webpackChunkName: "[request]" */ '@/components/metadata/' + component);
		}
	}
};
</script>
