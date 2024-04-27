<template>
  <router-view />
</template>

<script>
import {mapState, mapActions} from 'pinia'
import {useUserStore} from '@/store/userStore'
import { useRouter } from 'vue-router'

export default {
	name: 'Register',
	data() {
		return {

		}
	},
	mounted() {
		this.getDataDB()
		if(!this.user.isLoggedIn){
			this.$router.push('/register');
		};
	},
	computed:{
		...mapState(useUserStore, ['user'])
	},
	methods: {
		...mapActions(useUserStore, {getUser: 'getUserData', setUser: 'setUserData'}),
		getDataDB(){
			const request = indexedDB.open("firebaseLocalStorageDb"); // подключаемся к бд firebaseLocalStorageDb

			// при открытии базы данных получаем все данные
			if (request) {
				request.onsuccess = (event) => {
					const db = event.target.result;  // получаем бд
					if (db) {
						const transaction = db.transaction(["firebaseLocalStorage"], "readwrite"); // создаем транзакцию
						const userStoreDb = transaction.objectStore("firebaseLocalStorage");   // получаем хранилище firebaseLocalStorage

						const getRequest = userStoreDb.getAll();   // получаем все объекты
						getRequest.onsuccess = (e) => {
							const userData = getRequest.result[0];
							if (userData) {
								this.setUser(userData.value)
								this.user.isLoggedIn = true
								this.$router.push('/');
							}
						}
						getRequest.onerror = (e) =>  console.log(e.target.error.message); // выводим сообщение об ошибке
					}
				};
			}
		}
	}
}
</script>
