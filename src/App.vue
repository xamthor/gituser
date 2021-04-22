<template>
	<div id="top" class="relative md:fixed top-0 right-0  md:right-10 text-white bg-gray-600 p-2 md:p-4 text-center">
		<a href="https://github.com/xamthor/gituser" target="_blank">GitHub Repo</a>
	</div>
	<h1 class="text-center text-lg my-4 text-white">GitHub User Activity Feed</h1>
	<div class="mx-2">
		<Feed/>
	</div>
	<div class="fixed text-white bottom-2 right-4 md:hidden block z-10 h-6 w-6">
		<a href="#top">
		<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
			<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 11l3-3m0 0l3 3m-3-3v8m0-13a9 9 0 110 18 9 9 0 010-18z" />
		</svg>
		</a>

	</div>
</template>

<script>
	import Feed from './components/Feed.vue'

	export default {
		name: 'App',
		components: {
			Feed
		}
	}
</script>
<style>
	html{
		@apply bg-gray-900
	}
</style>