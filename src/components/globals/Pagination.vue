<template>
	<nav role="navigation" aria-label="Pagination" :aria-controls="ariaControls">
		<b-button
			class="mr-1"
			:disabled="currentPage == 1"
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
				:disabled="currentPage == page"
				:variant="page == currentPage ? 'primary' : 'outline-primary'"
				:title="ariaLabel(page)"
				:aria-label="ariaLabel(page)"
				:aria-current="page == currentPage ? 'page' : 'false'"
				@click="selectPage(page)"
			>
				{{ page }}
			</b-button>
		</b-button-group>
		<b-button
			class="ml-1"
			:disabled="currentPage == pageCount"
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
	data: function() {
		return {
			currentPage: this.pageNumber
		};
	},
	computed: {
		jumpBackwardPage() {
			return Math.max(1, this.currentPage - this.pageJump);
		},
		jumpForwardPage() {
			return Math.min(this.pageCount, this.currentPage + this.pageJump);
		},
		firstPage() {
			let pagesBeforeCurrent = Math.ceil(this.pageDisplayed / 2);
			return Math.max(1, this.currentPage - pagesBeforeCurrent + 1);
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
	watch: {
		pageNumber: function(pageNumber) {
			this.currentPage = pageNumber;
		}
	},
	methods: {
		selectPage(pageNumber) {
			if (pageNumber != this.currentPage) {
				this.currentPage = pageNumber;
				this.$emit('change', this.currentPage);
			}
		},
		ariaLabel(pageNumber) {
			if (pageNumber == this.currentPage) {
				return null;
			} else {
				return `Go to Page ${pageNumber}`;
			}
		}
	}
};
</script>
