// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
   apiKey: "AIzaSyDhf0OiBr0nBl7lSAk8i2ZvlpHLUj57kME",
   authDomain: "fir-demo-cb642.firebaseapp.com",
   projectId: "fir-demo-cb642",
   storageBucket: "fir-demo-cb642.appspot.com",
   messagingSenderId: "597877713824",
   appId: "1:597877713824:web:c672709fd1fa8aaaa492c5",
   measurementId: "G-Z72XWNJ2CL",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
