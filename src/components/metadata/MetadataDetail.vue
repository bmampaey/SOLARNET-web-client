<template>
	<div>
		<b-img :src="imageURL" center fluid-grow alt="Data thumbnail"></b-img>
		<b-form-group class="my-2" label="Filter metadata" :label-for="metadataFilterId" label-sr-only>
			<b-input-group>
				<b-form-input
					:id="metadataFilterId"
					v-model="metadataFilter"
					type="search"
					placeholder="Filter metadata"
					title="Type anything to filter the metadata on keyword or value"
					debounce="250"
				></b-form-input>
				<b-input-group-append>
					<b-button :disabled="!metadataFilter" title="Clear the metadata filter" @click="clearMetadataFilter">Clear</b-button>
				</b-input-group-append>
			</b-input-group>
		</b-form-group>
		<b-tabs content-class="mt-3">
			<b-tab title="Metadata" active>
				<b-table :items="metadataItems" :fields="fields" :filter="metadataFilter" :filter-included-fields="filterIncludedFields" primary-key="id" thead-class="d-none" responsive show-empty small>
				</b-table>
			</b-tab>
			<b-tab v-if="fitsHeader" title="FITS header">
				<b-table :items="fitsHeaderItems" :fields="fields" :filter="metadataFilter" :filter-included-fields="filterIncludedFields" primary-key="id" thead-class="d-none" responsive show-empty small>
				</b-table>
			</b-tab>
		</b-tabs>
	</div>
</template>

<script>
export default {
	name: 'MetadataDetail',
	props: {
		metadata: { type: Object, required: true }
	},
	data() {
		return {
			metadataFilter: '',
			metadataFilterId: this.$utils.getUniqueId(),
			fields: ['text'],
			filterIncludedFields: ['text'],
			forbiddenMetadataKeys: ['fits_header', 'resource_uri', 'data_location', 'tags']
		};
	},
	computed: {
		imageURL() {
			return this.metadata.data_location.thumbnail_url ? this.metadata.data_location.thumbnail_url : require('@/assets/no_preview_available.jpg');
		},
		fitsHeader() {
			return this.metadata.fits_header ? this.metadata.fits_header.trimEnd() : '';
		},
		metadataItems() {
			return Object.entries(this.metadata)
				.filter(([key]) => !this.forbiddenMetadataKeys.includes(key))
				.map(([key, value], id) => ({ id: id, text: `${key} = ${value}` }));
		},
		fitsHeaderItems() {
			return this.fitsHeader.match(/[^]{1,80}/g).map((text, id) => ({ id, text }));
		}
	},
	methods: {
		clearMetadataFilter() {
			this.metadataFilter = '';
		}
	}
};
</script>
