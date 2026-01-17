// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAGyYDk1hQXzMBvnEB1_szY-TLa55OFd-8",
  authDomain: "halaal-marketplace.firebaseapp.com",
  projectId: "halaal-marketplace",
  storageBucket: "halaal-marketplace.firebasestorage.app",
  messagingSenderId: "418140164362",
  appId: "1:418140164362:web:51257ec5e668501f702af3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// --- PASTE THIS AT THE BOTTOM OF THE FILE ---
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Initialize the Database and Auth so we can use them
export const db = getFirestore(app);
export const auth = getAuth(app);