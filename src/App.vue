<template>
    <div class="wrapper" v-if="!isLoading">
        <router-view />
    </div>
    <div class="loader" v-if="isLoading">
        <div class="loader__image">
        <img src="@/assets/pedro-racoon.gif" alt="">
        </div>
    </div>
</template>

<script>
import {mapState, mapActions} from 'pinia'
import { useUserStore } from '@/store/UserStore'
import { useGlobalStore } from '@/store/GlobalStore'
import { useRouter } from 'vue-router'

export default {
    name: 'Register',
    data() {
        return {

        }
    },
    mounted() {
        this.getDataDB()
        this.getUsers()
    },
    computed:{
    ...mapState(useUserStore, ['user']),
    ...mapState(useGlobalStore, ['isLoading'])
    },
    methods: {
    ...mapActions(useUserStore, { getUser: 'getUserData', setUser: 'setUserData', getName: 'getUserName', getUsers: 'getAllUsers' }),
    ...mapActions(useGlobalStore, { toggleLoading: 'toggleLoading' }),
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
                                this.setUser(userData.value);
                                this.user.isLoggedIn = true;
                                this.toggleLoading();
                                this.getName(userData.value.uid);
                                console.log(this.user);
                                this.$router.push('/');
                            } else {
                                this.$router.push('/register');
                                this.toggleLoading();
                            };
                        }
                        getRequest.onerror = (e) =>  console.log(e.target.error.message); // выводим сообщение об ошибке
                    }
                };
            }
        }
    }
}
</script>

<style>
.loader{
    position: relative;
    z-index: 100;
    background: #fff;
    width: 100dvw;
    height: 100dvh;
}
.loader__image{
    position: absolute;
    z-index: 101;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
</style>