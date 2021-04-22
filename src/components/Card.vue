<template>
	<div class="flex space-x-3 text-white bg-gray-700 py-6 px-4 rounded-2xl bg-opacity-60 w-full md:w-96 mx-auto mb-8">
		<img class="h-6 w-6 rounded-full"  :src="item.actor.avatar_url" alt="">
		<div class="w-auto overflow-hidden">
			<div class="flex items-center justify-between">
				<h3 class="text-sm font-medium">{{ item.actor.display_login }}</h3>
				<p class="text-sm text-gray-400"> {{ formatDate(item.created_at) }}</p>
			</div>
			<a :href="url" target="_blank"><p class="text-sm text-gray-400">{{item.repo.name}}</p></a>
			<!-- {{item.payload.commits}} -->
			<div v-if="item.payload.commits">
				Commit: {{ item.payload.commits[0].message}}
			</div>
			<div v-if="item.payload.forkee">
				Fork Repo
			</div>
		</div>
	</div>
</template>

<script>
	import dateFormat from "dateformat";

	export default {
		props: {
			item: Object,
		},
		data () {
			return {
				url: this.item.repo.url,
			}
		},
		mounted: function () {
			this.repoURL()
		},
		methods: {
			formatDate(date) {
				return dateFormat(date, "mmmm d, yyyy");
			},
			repoURL(){
				this.url = this.url.replace('api.','').replace('repos/','');
				
			}
		},
		computed: {
			
		}

	}
</script>