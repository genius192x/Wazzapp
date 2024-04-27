import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut} from 'firebase/auth'
import { defineStore } from 'pinia'
import { auth } from '../firebaseConfig'
import {db} from '@/firebaseConfig'
import { getDoc, setDoc, doc } from 'firebase/firestore'

export const useUserStore = defineStore('userStore', {
  state: () => {
    return {
		user:{
			isLoggedIn: false,
			data: null,
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
		logOut(){
			signOut(auth).then(() => {
				console.log('loggedOut');
				this.user.data = null,
				this.user.isLoggedIn = false
			}).catch((error) => {
				console.log(error);
			});
		},
		setUserData(data){
			this.user.data = data
		},
		register(email, password, name){
			createUserWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				// Signed up
				console.log('createUserWithEmailAndPassword');
				const userData = userCredential.user;
				userData.displayName = name;
				console.log(userData.displayName);
				this.user = userData;
				this.saveUserDetails(userCredential.user);
				console.log(this.user);
			})
			.catch((error) => {
				const errorCode = error.code;
				console.log(errorCode);
				const errorMessage = error.message;
				console.log(errorMessage);
			});
		},
		login(email, password){
			signInWithEmailAndPassword (auth, email, password)
			.then((userCredential) => {
				// Signed up
				const userData = userCredential.user;
				console.log(userData);
				userData.displayName = name
				this.user = userData
			})
			.catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;
			});
		},

		saveUserDetails(user){
			console.log(user);
			debugger
			try{
				console.log(user.displayName);
				setDoc(doc(db, "users", user.uid), {
					uid: user.uid,
					email: user.email,
					name: user.displayName,
				})
			}
			catch(error){
				console.log(error);
			}
		}
  },
})