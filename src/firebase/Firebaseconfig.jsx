// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBPL0IAsba0-5f8WYNlgssXGVqHauf1YRw",
    authDomain: "buzzbuy-896d0.firebaseapp.com",
    projectId: "buzzbuy-896d0",
    storageBucket: "buzzbuy-896d0.appspot.com",
    messagingSenderId: "982701656646",
    appId: "1:982701656646:web:68f790d89d68b1097dd847"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const auth = getAuth(app)
export {fireDB,auth } ;