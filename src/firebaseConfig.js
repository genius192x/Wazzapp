// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyDE5JIbZKwK9CChrK1-mcI4mqsqW423ff0",
    authDomain: "wazzapp-47919.firebaseapp.com",
    projectId: "wazzapp-47919",
    storageBucket: "wazzapp-47919.appspot.com",
    messagingSenderId: "776528178638",
    appId: "1:776528178638:web:90d54c58776e369c140f9f",
    measurementId: "G-VNS9BFZ3FX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app)
//initialize firebase auth
const auth = getAuth()


export { app, auth, db }