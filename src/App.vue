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
		console.log(window.indexedDB.databases);
		this.dataBase()
		if(!this.user.isLoggedIn){
			this.$router.push('/register');
		};
	},
	computed:{
		...mapState(useUserStore, ['user'])
	},
	methods: {
		dataBase(){
			const request = indexedDB.open("firebaseLocalStorageDb"); // подключаемся к бд firebaseLocalStorageDb

			// при открытии базы данных получаем все данные
			request.onsuccess = (event) => { 
				const db = event.target.result;  // получаем бд
				const transaction = db.transaction(["firebaseLocalStorage"], "readwrite"); // создаем транзакцию
				const userStoreDb = transaction.objectStore("firebaseLocalStorage");   // получаем хранилище firebaseLocalStorage
			
				const getRequest = userStoreDb.getAll();   // получаем все объекты
				getRequest.onsuccess = (e) => {
					const user = getRequest.result[0];
					console.log(user.value.uid);
				}
				getRequest.onerror = (e) =>  console.log(e.target.error.message); // выводим сообщение об ошибке
			};
		}
	}
}
</script>
