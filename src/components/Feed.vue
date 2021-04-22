<template>
    <div class="mx-auto container my-12 text-center">
		<label for="email" class="block text-sm font-medium text-white my-4">Search</label>
		<input class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full md:w-96 sm:text-sm border-gray-300 rounded-md mx-auto" type="text" v-model="query" v-on:keyup.enter.prevent="search">
		<button  @click="search" class="mt-10 inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Search</button>

		<div v-if="!users.length">
			<label for="email" class="block text-sm font-medium text-white my-4">or <br>Import multiple Users</label>
			<input class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full md:w-96 sm:text-sm border-gray-300 rounded-md mx-auto" type="text" v-model="users" placeholder="Paste JSON" >
			<a :href="`${publicPath}example.json`" target="_blank" class="text-white">JSON example</a>
		</div>
		<div v-if="users.length">
			<label for="email" class="block text-sm font-medium text-white my-4">Select</label>
			<select name="" id="" v-model="query" @change="fetchUser" class="mt-1 block w-full md:w-96 pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md mx-auto" >
				<option value="">Select a User</option>
				<option v-for="item in users" :key="item.name" :item="item" :value="item.username">{{ item.name }}</option>
			</select>
			<button  @click="users = []" class="mt-10 inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">Empty Users</button>
		</div>
    </div>
    <div  v-if="queries.length" class="container mx-auto gap-6 mb-12">
		<User :user="user" class=""/>
		<Card v-for="item in queries" :key="item.id" :item="item" />
    </div>
    <div v-else class="text-white text-center text-xs">
		waiting
    </div>

</template>
<script>
	import { getUserEvents, getUser } from "../api/github";
	import Card from './Card.vue';
	import User from './User.vue';
	/* eslint-disable */
	export default {
		name: 'Feed',
		components: {
			Card,
			User
		},
		data () {
			return {
				queries:[],
				query: '',
				user: {},
				users: localStorage.users ? JSON.parse(localStorage.users) : [],
				publicPath: process.env.BASE_URL
			}
		},
		methods: {
			async search(){
				this.users.push({ name: this.query, username: this.query })
				localStorage.users = JSON.stringify(this.users);
				this.fetchUser()
			},
			async fetchUser () {
				try {
					this.queries = await getUserEvents(this.query);
					this.user = await getUser(this.query);
				} catch (error) {
					console.error(error);
				}
			}
		},
		watch: {
			async users (users) {
				this.users = JSON.parse(users);
				localStorage.users = JSON.stringify(this.users);
			}
		}
	}
</script>
