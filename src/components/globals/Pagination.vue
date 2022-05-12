<template>
	<nav role="navigation" aria-label="Pagination" :aria-controls="ariaControls">
		<b-button
			class="mr-1"
			:disabled="pageNumber == 1"
			:size="size"
			variant="outline-dark"
			:title="ariaLabel(jumpBackwardPage)"
			:aria-label="ariaLabel(jumpBackwardPage)"
			@click="selectPage(jumpBackwardPage)"
		>
			&laquo;
		</b-button>
		<b-button-group :size="size">
			<b-button
				v-for="page in pages"
				:key="page"
				:disabled="pageNumber == page"
				:variant="page == pageNumber ? 'primary' : 'outline-primary'"
				:title="ariaLabel(page)"
				:aria-label="ariaLabel(page)"
				:aria-current="page == pageNumber ? 'page' : 'false'"
				@click="selectPage(page)"
			>
				{{ page }}
			</b-button>
		</b-button-group>
		<b-button
			class="ml-1"
			:disabled="pageNumber == pageCount"
			:size="size"
			variant="outline-dark"
			:title="ariaLabel(jumpForwardPage)"
			:aria-label="ariaLabel(jumpForwardPage)"
			@click="selectPage(jumpForwardPage)"
		>
			&raquo;
		</b-button>
	</nav>
</template>

<script>
export default {
	name: 'Pagination',
	props: {
		pageNumber: {
			type: Number,
			required: true
		},
		pageCount: {
			type: Number,
			required: true
		},
		pageJump: {
			type: Number,
			default: 10
		},
		pageDisplayed: {
			type: Number,
			default: 5
		},
		ariaControls: {
			type: String,
			default: null
		},
		size: {
			type: String,
			default: 'md'
		}
	},
	computed: {
		jumpBackwardPage() {
			return Math.max(1, this.pageNumber - this.pageJump);
		},
		jumpForwardPage() {
			return Math.min(this.pageCount, this.pageNumber + this.pageJump);
		},
		firstPage() {
			let pagesBeforeCurrent = Math.ceil(this.pageDisplayed / 2);
			return Math.max(1, this.pageNumber - pagesBeforeCurrent + 1);
		},
		lastPage() {
			return Math.min(this.pageCount, this.firstPage + this.pageDisplayed - 1);
		},
		pages() {
			let pages = [];
			for (let i = this.firstPage; i <= this.lastPage; i++) {
				pages.push(i);
			}
			return pages;
		}
	},
	methods: {
		selectPage(pageNumber) {
			if (pageNumber != this.pageNumber) {
				this.pageNumber = pageNumber;
				this.$emit('change', this.pageNumber);
			}
		},
		ariaLabel(pageNumber) {
			if (pageNumber == this.pageNumber) {
				return null;
			} else {
				return `Go to Page ${pageNumber}`;
			}
		}
	}
};
</script>
