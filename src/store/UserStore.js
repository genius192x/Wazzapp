import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import { defineStore } from 'pinia'
import { auth } from '../firebaseConfig'

export const useUserStore = defineStore('userStore', {
  state: () => {
    return { 
		user:{
			isLoggedIn: false,
			data: null,
			test: 'test'
		}
	}
  },

  actions: {
	getUserData(){
		return this.user
	},
	setLoggedIn(value){
		this.user.isLoggedIn = true
	},
	setUserData(data){
		this.user.data = data
	},
	register(email, password, name){
		createUserWithEmailAndPassword(auth, email, password)
		.then((userCredential) => {
			// Signed up 
			const userData = userCredential.user;
			console.log(userCredential);
			console.log(userCredential.user);
			userData.providerData[0].displayName = name
			this.user = userData
			console.log(this.user);
			// ...
		})
		.catch((error) => {
			const errorCode = error.code;
			console.log(errorCode);
			const errorMessage = error.message;
			console.log(errorMessage);
			// ..
		});
	},
  },
})