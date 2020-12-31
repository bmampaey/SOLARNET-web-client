<template>
	<div>
		<b-img :src="imageURL" center fluid-grow alt="Data thumbnail"></b-img>
		<b-form-group class="my-2">
			<b-input-group>
				<b-form-input v-model="searchFilter" type="search" placeholder="Filter metadata" debounce="250"></b-form-input>
				<b-input-group-append>
					<b-button :disabled="!searchFilter" @click="clearSearchFilter">Clear</b-button>
				</b-input-group-append>
			</b-input-group>
		</b-form-group>
		<b-table :items="cards" :fields="fields" :filter="searchFilter" :filter-included-fields="filterIncludedFields" primary-key="id" sticky-header show-empty small> </b-table>
	</div>
</template>

<script>
export default {
	name: 'MetadataDetail',
	props: {
		metadata: { type: Object, required: true }
	},
	data: function() {
		return {
			searchFilter: ''
		};
	},
	computed: {
		imageURL: function() {
			return this.metadata.data_location.thumbnail_url ? this.metadata.data_location.thumbnail_url : require('@/assets/no_preview_available.jpg');
		},
		fitsHeader: function() {
			return this.metadata.fits_header ? this.metadata.fits_header.trimEnd() : '';
		},
		fields: function() {
			return [
				{
					key: 'text',
					label: this.fitsHeader.length > 0 ? 'FITS header' : 'Metadata'
				}
			];
		},
		filterIncludedFields: function() {
			return ['text'];
		},
		cards: function() {
			if (this.fitsHeader.length > 0) {
				return this.fitsHeader.match(/[^]{1,80}/g).map((text, id) => ({ id, text }));
			} else {
				return Object.entries(this.metadata)
					.filter(([, value]) => !(value instanceof Object))
					.map(([key, value], id) => ({ id, text: `${key} = ${value}` }));
			}
		}
	},
	methods: {
		clearSearchFilter: function() {
			this.searchFilter = '';
		}
	}
};
</script>
