<template>
	<div>
		<b-form-row>
			<b-col>
				<b-form-group label="Add a filter for the attribute" :label-for="uniqueId('select-attribute')">
					<b-form-select :id="uniqueId('select-attribute')" v-model="selectedAttribute" :options="attributeOptions"></b-form-select>
				</b-form-group>
			</b-col>
			<b-col cols="auto" align-self="end" class="mb-3">
				<b-button variant="light" :title="selectedAttribute ? `Add filter for attribute ${selectedAttribute.name}` : 'Select a attribute to add a filter'" @click="addAttributeFilter"><b-icon icon="plus"></b-icon></b-button>
			</b-col>
		</b-form-row>
		<b-form-row v-for="attribute in attributeFilters" :key="attribute.name">
			<b-col>
				<b-form-group v-if="attribute.type == 'text'" :label="`${attribute.verbose_name} contains`" :label-for="uniqueId(attribute.name)" :description="attribute.description">
					<b-form-input :id="uniqueId(attribute.name)" v-model="filterValues[attribute.name]" type="text"></b-form-input>
				</b-form-group>
				<datetime-range v-else-if="attribute.type == 'time (ISO 8601)'" v-model="filterValues[attribute.name]" :label="`${attribute.verbose_name} is between`" :description="attribute.description"></datetime-range>
				<number-range v-else-if="attribute.type == 'integer'" v-model="filterValues[attribute.name]" :label="`${attribute.verbose_name} is between`" :unit="attribute.unit" :description="attribute.description" step="1"></number-range>
				<number-range v-else-if="attribute.type == 'real'" v-model="filterValues[attribute.name]" :label="`${attribute.verbose_name} is between`" :unit="attribute.unit" :description="attribute.description"></number-range>
				<b-form-group v-else-if="attribute.type == 'boolean'" v-slot="{ ariaDescribedby }" :label="`${attribute.verbose_name} is`" :description="attribute.description">
					<b-form-radio-group v-model="filterValues[attribute.name]" :options="[true, false]" :aria-describedby="ariaDescribedby" buttons button-variant="outline-dark"></b-form-radio-group>
				</b-form-group>
			</b-col>
			<b-col cols="auto" align-self="end" class="mb-3">
				<b-button variant="light" :title="`Remove filter for attribute ${attribute.name}`" @click="removeAttributeFilter(attribute)"><b-icon icon="x"></b-icon></b-button>
			</b-col>
		</b-form-row>
	</div>
</template>

<script>
export default {
	name: 'AttributeFilter',
	props: {
		value: {
			type: Array,
			required: true
		},
		attributes: {
			type: Array,
			required: true
		}
	},
	data() {
		return {
			uniqueIdMap: new Map(),
			selectedAttribute: null,
			selectedAttributes: Object.fromEntries(this.attributes.map(attribute => [attribute.name, false])),
			filterValues: Object.fromEntries(
				this.attributes.map(attribute => (attribute.type == 'integer' || attribute.type == 'real' || attribute.type == 'time (ISO 8601)' ? [attribute.name, { min: null, max: null }] : [attribute.name, null]))
			)
		};
	},
	computed: {
		attributeOptions() {
			return this.attributes
				.filter(attribute => !this.selectedAttributes[attribute.name])
				.map(attribute => ({
					text: attribute['verbose_name'],
					value: attribute
				}));
		},
		attributeFilters() {
			return this.attributes.filter(attribute => this.selectedAttributes[attribute.name]);
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
		addAttributeFilter() {
			if (this.selectedAttribute) {
				this.selectedAttributes[this.selectedAttribute.name] = true;
				this.selectedAttribute = null;
			}
		},
		removeAttributeFilter(attribute) {
			this.selectedAttributes[attribute.name] = false;
			this.selectedAttribute = attribute;
			this.updateModelValue();
		},
		updateModelValue() {
			let attributeFilters = [];
			for (const attribute of this.attributeFilters) {
				if (attribute.type == 'text') {
					if (this.filterValues[attribute.name]) {
						attributeFilters.push({ 'param': attribute.name, 'op': 'like', 'value': `%${this.filterValues[attribute.name]}%` });
					}
				} else if (attribute.type == 'integer' || attribute.type == 'real') {
					if (this.filterValues[attribute.name]?.min) {
						attributeFilters.push({ 'param': attribute.name, 'op': '>=', 'value': this.filterValues[attribute.name].min });
					}
					if (this.filterValues[attribute.name]?.max) {
						attributeFilters.push({ 'param': attribute.name, 'op': '<=', 'value': this.filterValues[attribute.name].max });
					}
				} else if (attribute.type == 'time (ISO 8601)') {
					if (this.filterValues[attribute.name]?.min) {
						attributeFilters.push({ 'param': attribute.name, 'op': '>=', 'value': this.filterValues[attribute.name].min.toISOString() });
					}
					if (this.filterValues[attribute.name]?.max) {
						attributeFilters.push({ 'param': attribute.name, 'op': '<=', 'value': this.filterValues[attribute.name].max.toISOString() });
					}
				} else if (attribute.type == 'boolean') {
					attributeFilters.push({ 'param': attribute.name, 'op': '=', 'value': this.filterValues[attribute.name] });
				}
			}
			this.$emit('input', attributeFilters);
		}
	}
};
</script>
