// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAXtcFAgDXzrvw5xhrhGHlyO5NbnnIwsZo",
    authDomain: "two-nextjs-netflix.firebaseapp.com",
    projectId: "two-nextjs-netflix",
    storageBucket: "two-nextjs-netflix.appspot.com",
    messagingSenderId: "649725936345",
    appId: "1:649725936345:web:404a6156ae02ecbd7034c8"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }