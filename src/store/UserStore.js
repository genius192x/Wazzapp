import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut} from 'firebase/auth'
import { defineStore } from 'pinia'
import { auth } from '../firebaseConfig'
import { db } from '@/firebaseConfig'
import { v4 as uuidv4 } from 'uuid'
import { useRouter } from 'vue-router';

import { getDoc, setDoc, doc ,getDocs, collection, updateDoc, arrayUnion} from 'firebase/firestore'

export const useUserStore = defineStore('userStore', {
    state: () => {
        return {
            user:{
                isLoggedIn: false,
                data: null,
            },
            allUsers: [],
            userChatData: []
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
                console.log('loggedOut'),
                this.user.data = null,
                this.user.isLoggedIn = false,
                this.userChatData = [],
                this.router.push('/register');

            }).catch((error) => {
                console.log(error);
            });
        },


        setUserData(data){
            this.user.data = data
        },


        register(email, password, name) {
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


        sendMessage(data) {
            try {
                if (data.chatId) {
                    updateDoc(doc(db, `chat/${data.chatId}`), {
                        userOneHasViewed: false,
                        userTwoHasViewed: false,
                        messages: arrayUnion({
                            user: this.user.data.uid,
                            message: data.massage
                        })
                    })
                } else {
                    let id = uuidv4()
                    setDoc(doc(db, `chat/${id}`), {
                        userOne: this.user.data.uid,
                        userTwo: data.uid,
                        userOneHasViewed: false,
                        userTwoHasViewed: false,
                        messages: [{
                            user: this.user.data.uid,
                            message: data.massage,
                            cratedAt: Date.now()
                        }]
                    })
                    this.userChatData[0].id = id
                }
            } catch {

            }
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
                        this.getAllUsers()
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
            getDocs(collection(db, "users")).then((querySnapshot) => {
                let result = [];
                querySnapshot.forEach((doc) => {
                    if (doc.id !== this.user.data.uid) {
                        result.push(doc.data())
                    }
                });
                if (result.length) {
                    this.allUsers = []
                    result.forEach((res) => {
                    this.allUsers.push(res)
                    })
                }
            });
        },


        saveUserDetails(user){
            console.log(user, 'saveUserDetails');
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