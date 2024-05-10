import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut} from 'firebase/auth'
import { defineStore } from 'pinia'
import { auth } from '../firebaseConfig'
import { db } from '@/firebaseConfig'
import {useRouter} from 'vue-router';
import { getDoc, setDoc, doc,getDocs, collection } from 'firebase/firestore'

export const useUserStore = defineStore('userStore', {
  state: () => {
    return {
    user:{
        isLoggedIn: false,
        data: null,
    },
    allUsers: []
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
        this.user.data = null
        this.user.isLoggedIn = false
        this.router.push('/register');

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
    getUserName(uid) {
      getDoc(doc(db, "users", uid)).then(docSnap => {
        if (docSnap.exists()) {
          this.user.data.displayName = docSnap.data().name
        } else {
          console.log("No such document!");
        }
      })
    },
    login(email, password) {
      signInWithEmailAndPassword (auth, email, password)
      .then((userCredential) => {
        // Signed up
        const userData = userCredential.user;
        getDoc(doc(db, "users", userData.uid)).then(docSnap => {
          if (docSnap.exists()) {
            userData.displayName = docSnap.data().name
            this.user.data = userData
            console.log(this.user.data);
          } else {
            console.log("No such document!");
          }
        })

      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
    },
    getAllUsers() {
      const usersArray = getDocs(collection(db, "users")).then((querySnapshot) => {
          let result = []
          querySnapshot.forEach((doc) => {
            result.push(doc.data())
          })
          if (result.length) {
            this.allUsers = []
            result.forEach((res) => {
              this.allUsers.push(res)
            })
          }
      });
    },
    saveUserDetails(user){
      console.log(user);
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