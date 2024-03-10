// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { GoogleAuthProvider } from "firebase/auth";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBdT2aI6R-KU4TyTX4l9OHM9p7o3cr-l4w",
  authDomain: "shopfinity-69521.firebaseapp.com",
  projectId: "shopfinity-69521",
  storageBucket: "shopfinity-69521.appspot.com",
  messagingSenderId: "92276169862",
  appId: "1:92276169862:web:6fac14d24c0230d1494507",
  measurementId: "G-GZ6VMXRT9M"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export let db = getFirestore(app);
export const GoogleProvider = new GoogleAuthProvider();