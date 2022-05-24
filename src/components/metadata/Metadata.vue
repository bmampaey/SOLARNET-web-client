<template>
	<div>
		<b-row>
			<b-col cols="12" lg="4">
				<b-card no-body class="mb-3">
					<b-card-header v-b-toggle="metadataFilterId" header-tag="header" title="Click to show/hide the metadata filters">
						Filter metadata
					</b-card-header>
					<b-collapse :id="metadataFilterId" visible>
						<b-card-body>
							<b-form @submit.prevent="updateSearchParams">
								<slot>
									<datetime-range v-model="searchFilter.dateRange" label="Observation date" min-label="Start" max-label="End"></datetime-range>
								</slot>
								<tag-filter v-if="tags.length" v-model="searchFilter.tags" :tags="tags"></tag-filter>
								<keyword-filter v-if="keywords.length" v-model="searchFilter.keywordFilter" :keywords="keywords"></keyword-filter>
								<b-button type="submit" variant="primary">Search</b-button>
							</b-form>
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
import TagFilter from './TagFilter';
import KeywordFilter from './KeywordFilter';
import MetadataList from './MetadataList';

export default {
	name: 'Metadata',
	components: {
		TagFilter,
		KeywordFilter,
		MetadataList
	},
	props: {
		dataset: { type: Object, required: true },
		searchFilter: { type: Object, required: true },
		defaultColumns: { type: Array, required: true }
	},
	data() {
		return {
			searchParams: new URLSearchParams(),
			tags: [],
			keywords: [],
			metadataFilterId: this.$utils.getUniqueId()
		};
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
