<template>
	<div class="w-full">
		<div class="bg-teal-600 z-[-1] w-full h-[225px] fixed top-0"></div>
		<div class="bg-black z-[-1] w-full h-[calc(100vh-225px)] fixed bottom-0"></div>
		<div class="max-w-xl mx-auto">
			<div class="mt-10 flex items-center w-full">
				<img width="40" class="m-0" src="/whatsapp-logo.png" alt="">
				<div class="font-semibold text-gray-100 ml-6">WhatsApp Clone</div>
			</div>
			<div class="bg-white z-10 p-24 m-6">
				<div class="text-center text-4xl text-gray-700 font-light pb-10">
					WhatsApp Clone
				</div>
				<div id="container" class="w-full flex justify-center  p-3 rounded-md">
					<div v-if="error" class="alert alert-danger">{{error}}</div>
					<form action="#" @submit.prevent="authentication">

					<div class="form-group row mt-4">
						<label for="email" class="col-md-4 col-form-label text-md-right">Email</label>

						<div class="col-md-6">
						<input
							id="email"
							type="email"
							class="form-control border-2 border-teal-600 h-6 p-4 px-2 rounded-md"
							name="email"
							value
							required
							autofocus
							v-model="email"
						/>
						</div>
					</div>

					<div class="form-group row mt-4">
						<label for="password" class="col-md-4 col-form-label text-md-right">Password</label>

						<div class="col-md-6">
						<input
							id="password"
							type="password"
							class="form-control border-2 border-teal-600 h-6 p-4 px-2 rounded-md"
							name="password"
							required
							v-model="password"
						/>
						</div>
					</div>

					<div class="form-group row mb-0">
						<div class="col-md-8 offset-md-4">
							<button type="submit" class="w-full mt-10 bg-black text-white py-2 rounded-md">Sign in</button>
						</div>
						<router-link to="/register">
							<div class="col-md-8 offset-md-4">
								<button type="submit" class="w-full mt-2 text-black py-2 rounded-md">Register</button>
							</div>
						</router-link>
					</div>
					</form>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import {mapState, mapActions} from 'pinia'
import {useUserStore} from '@/store/UserStore'
import { useRouter } from 'vue-router'

export default {
	name: 'Login',
	data() {
		return {
			name: '',
			email: '',
			password: '',
			error: null,
		}
	},
	mounted() {
		console.log(this.getUser);
	},
	computed:{
		...mapState(useUserStore, ['user'])
	},
	methods: {
		...mapActions(useUserStore, {signInUser: 'login',}),
		authentication(){
			this.signInUser(
				this.email,
				this.password,
			),
			this.$router.push('/');
		},
	}
}
</script>