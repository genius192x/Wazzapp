import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth'
import { defineStore } from 'pinia'
import { auth } from '../firebaseConfig'
import axios from 'axios'
import {v4 as uuid} from 'uuid'
import {db} from '@/firebaseConfig'
import { getDoc, setDoc, doc } from 'firebase/firestore'

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
		.then(async (userCredential) => {
			// Signed up 
			console.log('createUserWithEmailAndPassword');
			let userExists = await this.checkIfUserExist(userCredential.user.uid)
			console.log(userCredential.user);
			if(!userExists) await this.saveUserDetails(userCredential.user)
			const userData = userCredential.user;
			userData.displayName = name
			this.user = userData
			console.log(this.user);
		})
		.catch((error) => {
			const errorCode = error.code;
			const errorMessage = error.message;
		});
	},
	login(email, password){
		signInWithEmailAndPassword (auth, email, password)
		.then(async (userCredential) => {
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
	
	async checkIfUserExist(id){
		console.log('checkIfUserExist');
		const docRef = doc(db, "users", id)
		const docSnap = await getDoc(docRef)
		return docSnap.exists()
	},
	async saveUserDetails(user){
		console.log(user);
		debugger
		console.log('saveUserDetails', user.displayName, user.email);
		try{
			console.log(user.displayName);
			await setDoc(doc(db, "users", user.uid), {
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