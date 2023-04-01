// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
   apiKey: "AIzaSyCnBJEeCiNqUnJCM8m5XsveODxjQn-2OOw",
   authDomain: "insta-reels-603b1.firebaseapp.com",
   projectId: "insta-reels-603b1",
   storageBucket: "insta-reels-603b1.appspot.com",
   messagingSenderId: "954208601233",
   appId: "1:954208601233:web:9a4468024cfbee081fab30",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Auth
export const auth = getAuth(app);
// Database -> firestore
export const db = getFirestore(app);
// Storage
export const storage = getStorage(app);
// Hosting
