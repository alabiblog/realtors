// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
import {getStorage} from "firebase/storage"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "realtornija.firebaseapp.com",
  projectId: "realtornija",
  storageBucket: "realtornija.firebasestorage.app",
  messagingSenderId: "66030538435",
  appId: "1:66030538435:web:a437c72032fa6fa0781c76"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
const storage = getStorage(app)

export {db,storage}