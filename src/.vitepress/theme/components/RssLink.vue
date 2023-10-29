<script setup lang="ts">
import { IconRssBox } from "@iconify-prerendered/vue-mdi"
</script>

<template>
	<a href="/feed.rss" class="rss" title="RSS лента для архива новостей">
		<IconRssBox />
		<span>RSS лента</span>
	</a>
</template>

<style lang="stylus" scoped>
.rss {
	& > * {
		vertical-align: middle
		position: relative
		bottom: 1px
	}

	svg {
		width: 1em
		height: 1em
		display: inline-block
		margin-right: 4px
	}
}
</style>