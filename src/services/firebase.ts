// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCINU2jmkK4f4JVW6EP0kZxDc-sTY5ufz0",
  authDomain: "moveziny.firebaseapp.com",
  projectId: "moveziny",
  storageBucket: "moveziny.firebasestorage.app",
  messagingSenderId: "606855714552",
  appId: "1:606855714552:web:def3ceed22a76e98d14d0d",
  measurementId: "G-Y9DC7S1Q64"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);