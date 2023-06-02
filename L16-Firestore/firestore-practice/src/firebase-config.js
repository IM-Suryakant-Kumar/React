import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// import { getFirestore } from "@firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyD6KsOURLSOwWAWkYyLKhNMvCkyd9Oi5cQ",
    authDomain: "fir-crud-e2c47.firebaseapp.com",
    projectId: "fir-crud-e2c47",
    storageBucket: "fir-crud-e2c47.appspot.com",
    messagingSenderId: "1032660638779",
    appId: "1:1032660638779:web:3bd1297e7b556cc083101e"
};

const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)