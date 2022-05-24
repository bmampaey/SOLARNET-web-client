<template>
	<div>
		<b-card no-body class="mb-3">
			<b-card-header v-b-toggle="datasetDescriptionId" header-tag="header" title="Click to show/hide the dataset description">
				Dataset description
			</b-card-header>
			<b-collapse :id="datasetDescriptionId" visible>
				<b-card-body>
					<b-card-text>
						<vue-markdown :source="dataset.description" :html="false" :anchor-attributes="{ target: '_blank' }"></vue-markdown>
					</b-card-text>
					<b-button-toolbar>
						<b-button v-b-popover="telescopePopover" pill size="sm" variant="outline-info">{{ telescope.name }}</b-button>
						<b-button v-b-popover="instrumentPopover" pill size="sm" variant="outline-info">{{ instrument.name }}</b-button>
						<b-button pill size="sm" variant="outline-info" :href="dataset.archive_url" target="_blank">Archive webpage</b-button>
					</b-button-toolbar>
				</b-card-body>
			</b-collapse>
		</b-card>
		<component :is="metadataComponent" :dataset="dataset" :initial-search-filter="searchFilter"></component>
	</div>
</template>

<script>
import VueMarkdown from '@adapttive/vue-markdown';
import metadataComponents from '@/components/metadata';

export default {
	name: 'DatasetDetail',
	components: {
		VueMarkdown
	},
	props: {
		dataset: { type: Object, required: true },
		searchFilter: { type: Object, required: true }
	},
	data() {
		return {
			telescope: this.dataset.telescope,
			instrument: this.dataset.instrument,
			datasetDescriptionId: this.$utils.getUniqueId()
		};
	},
	computed: {
		/* Data for the popover directive when the user click on the telescope button */
		telescopePopover() {
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
		instrumentPopover() {
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
		metadataComponent() {
			const component = metadataComponents[this.dataset.name] || metadataComponents['default'];
			return () => import(/* webpackChunkName: "[request]" */ '@/components/metadata/' + component);
		}
	}
};
</script>

<style scoped>
/* Limit the height of the column selector */
.column-selector {
	max-height: 10rem;
	overflow: auto;
}
</style>
