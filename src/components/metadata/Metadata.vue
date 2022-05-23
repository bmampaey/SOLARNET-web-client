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
								<base-datetime-range v-model="searchFilter.dateRange" label="Observation date" min-label="Start" max-label="End"></base-datetime-range>
								<tag-selector v-if="tags.length" v-model="searchFilter.tags" :tags="tags"></tag-selector>
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
import MetadataMixin from './MetadataMixin';

export default {
	name: 'Metadata',
	mixins: [MetadataMixin]
};
</script>
