<template>
	<div>
		<b-form-row class="align-items-end">
			<b-col>
				<b-form-group label="Add a filter for the keyword" :label-for="uniqueId('select-keyword')">
					<v-select :id="uniqueId('select-keyword')" v-model="selectedKeyword" :options="keywordOptions" label="verbose_name"></v-select>
				</b-form-group>
			</b-col>
			<b-col cols="auto" class="mb-3">
				<b-button variant="light" :disabled="!selectedKeyword" :title="selectedKeyword ? `Add filter for keyword ${selectedKeyword.verbose_name}` : 'Select a keyword to add a filter'" size="sm" @click="addKeywordFilter"><b-icon icon="plus"></b-icon></b-button>
			</b-col>
		</b-form-row>
		<b-form-row v-for="keyword in keywordFilters" :key="keyword.name" class="align-items-top">
			<b-col>
				<b-form-group v-if="keyword.type == 'text'" :label="`${keyword.verbose_name} contains`" :label-for="uniqueId(keyword.name)" :description="keyword.description">
					<b-form-input :id="uniqueId(keyword.name)" v-model="filterValues[keyword.name]" type="text"></b-form-input>
				</b-form-group>
				<datetime-range v-else-if="keyword.type == 'time (ISO 8601)'" v-model="filterValues[keyword.name]" :label="`${keyword.verbose_name} is between`" :description="keyword.description"></datetime-range>
				<number-range v-else-if="keyword.type == 'integer'" v-model="filterValues[keyword.name]" :label="`${keyword.verbose_name} is between`" :unit="keyword.unit" step="1" :description="keyword.description"></number-range>
				<number-range v-else-if="keyword.type == 'real'" v-model="filterValues[keyword.name]" :label="`${keyword.verbose_name} is between`" :unit="keyword.unit" :description="keyword.description"></number-range>
				<b-form-group v-else-if="keyword.type == 'boolean'" v-slot="{ ariaDescribedby }" :label="`${keyword.verbose_name} is`" :description="keyword.description">
					<b-form-radio-group v-model="filterValues[keyword.name]" :options="[true, false]" :aria-describedby="ariaDescribedby" buttons button-variant="outline-dark"></b-form-radio-group>
				</b-form-group>
			</b-col>
			<b-col cols="auto" class="mb-3">
				<b-button variant="light" :title="`Remove filter for keyword ${keyword.verbose_name}`" size="sm" @click="removeKeywordFilter(keyword)"><b-icon icon="x"></b-icon></b-button>
			</b-col>
		</b-form-row>
	</div>
</template>

<script>
export default {
	name: 'KeywordFilter',
	props: {
		value: {
			type: String,
			required: true
		},
		keywords: {
			type: Array,
			required: true
		}
	},
	data() {
		return {
			uniqueIdMap: new Map(),
			selectedKeyword: null,
			selectedKeywords: Object.fromEntries(this.keywords.map(keyword => [keyword.name, false])),
			filterValues: Object.fromEntries(
				this.keywords.map(keyword => (keyword.type == 'integer' || keyword.type == 'real' || keyword.type == 'time (ISO 8601)' ? [keyword.name, { min: null, max: null }] : [keyword.name, null]))
			)
		};
	},
	computed: {
		keywordOptions() {
			return this.keywords.filter(keyword => !this.selectedKeywords[keyword.name]);
		},
		keywordFilters() {
			return this.keywords.filter(keyword => this.selectedKeywords[keyword.name]);
		}
	},
	watch: {
		filterValues: {
			handler: 'updateModelValue',
			immediate: true,
			deep: true
		}
	},
	methods: {
		uniqueId(value) {
			if (!this.uniqueIdMap.has(value)) {
				this.uniqueIdMap.set(value, this.$utils.getUniqueId());
			}
			return this.uniqueIdMap.get(value);
		},
		addKeywordFilter() {
			if (this.selectedKeyword) {
				this.selectedKeywords[this.selectedKeyword.name] = true;
				// if (this.filterValues[this.selectedKeyword.name] == null) {
				// 	if (this.selectedKeyword.type == 'integer' || this.selectedKeyword.type == 'real' || this.selectedKeyword.type == 'time (ISO 8601)') {
				// 		this.filterValues[this.selectedKeyword.name] = { min: null, max: null };
				// 	} else {
				// 		this.filterValues[this.selectedKeyword.name] = null;
				// 	}
				// }
				this.selectedKeyword = null;
			}
		},
		removeKeywordFilter(keyword) {
			this.selectedKeywords[keyword.name] = false;
			this.selectedKeyword = keyword;
			this.updateModelValue();
		},
		updateModelValue() {
			let searchFilter = [];
			for (const keyword of this.keywordFilters) {
				if (keyword.type == 'text') {
					if (this.filterValues[keyword.name]) {
						searchFilter.push(`(${keyword.name}__icontains=${this.filterValues[keyword.name]})`);
					}
				} else if (keyword.type == 'integer' || keyword.type == 'real') {
					if (this.filterValues[keyword.name]?.min) {
						searchFilter.push(`(${keyword.name}__gte=${this.filterValues[keyword.name].min})`);
					}
					if (this.filterValues[keyword.name]?.max) {
						searchFilter.push(`(${keyword.name}__lte=${this.filterValues[keyword.name].max})`);
					}
				} else if (keyword.type == 'time (ISO 8601)') {
					if (this.filterValues[keyword.name]?.min) {
						searchFilter.push(`(${keyword.name}__gte=${this.filterValues[keyword.name].min.toISOString()})`);
					}
					if (this.filterValues[keyword.name]?.max) {
						searchFilter.push(`(${keyword.name}__lte=${this.filterValues[keyword.name].max.toISOString()})`);
					}
				} else if (keyword.type == 'boolean') {
					if (this.filterValues[keyword.name]) {
						searchFilter.push(`(${keyword.name}=${this.filterValues[keyword.name]})`);
					}
				}
			}
			this.$emit('input', searchFilter.join('and'));
		}
	}
};
</script>
