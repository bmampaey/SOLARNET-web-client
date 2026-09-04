<template>
	<div>
		<b-row>
			<b-col cols="12" lg="4">
				<b-card no-body class="mb-3">
					<b-card-header v-b-toggle="metadataFilterId" header-tag="header" title="Click to show/hide the metadata filters">
						Filter metadata
						<b-button size="sm" class="hide-btn" :aria-controls="metadataFilterId">Hide</b-button>
						<b-button size="sm" class="show-btn" :aria-controls="metadataFilterId">Show</b-button>
					</b-card-header>
					<b-collapse :id="metadataFilterId" visible>
						<b-card-body>
							<!-- eslint-disable vue/no-mutating-props -->
							<b-form @submit.prevent="updateSearchParams">
								<keyword-filter v-if="keywords.length" v-model="searchFilter.keywordFilter" :keywords="filteringKeywords"></keyword-filter>
								<b-button type="submit" variant="primary">Search</b-button>
							</b-form>
							<!-- eslint-enable vue/no-mutating-props -->
						</b-card-body>
					</b-collapse>
				</b-card>
			</b-col>
			<b-col cols="12" lg="8">
				<metadata-list :dataset="dataset" :search-params="searchParams" :tags="tags" :keywords="keywords" :default-columns="defaultColumns"></metadata-list>
			</b-col>
		</b-row>
	</div>
</template>

<script>
import MetadataMixin from './MetadataMixin';
import MetadataList from './MetadataList';
import KeywordFilter from './KeywordFilter';

export default {
	name: 'Co5BoldIrsol',
	mixins: [MetadataMixin],
	components: {
		KeywordFilter,
		MetadataList
	},
	props: {
		dataset: { type: Object, required: true }
	},
	data() {
		return {
			searchParams: new URLSearchParams(),
			tags: [],
			keywords: [],
			metadataFilterId: this.$utils.getUniqueId(),
			defaultColumns: [
				{ label: 'Simulation', key: 'smlation' },
				{ label: 'Snapshot number', key: 'snapshot' }
			]
		};
	},
	computed: {
		filteringKeywords() {
			return this.keywords.filter((keyword) => keyword['constant_value'] === null);
		},
	},
	created() {
		// Fetch and create the options of the form select
		this.loadTags();
		this.loadKeywords();
	},
	methods: {
		updateSearchParams() {
			this.searchParams = this.searchFilter.getSearchParams();
		},
		async loadTags() {
			try {
				this.tags = await this.$SVO.tag.getAll({ dataset: this.dataset.name });
			} catch (error) {
				this.$displayErrorMessage(this.$SVO.parseError(error));
			}
		},
		async loadKeywords() {
			try {
				this.keywords = await this.$SVO.keyword.getAll({ dataset__name: this.dataset.name });
			} catch (error) {
				this.$displayErrorMessage(this.$SVO.parseError(error));
			}
		}
	}
};
</script>
