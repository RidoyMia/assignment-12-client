// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAoGg7GUQ6WhxRYSnpOBYOJTiYEEsmXgkI",
  authDomain: "tools-59d36.firebaseapp.com",
  projectId: "tools-59d36",
  storageBucket: "tools-59d36.appspot.com",
  messagingSenderId: "644022167583",
  appId: "1:644022167583:web:bb5a61172c6b70c3708d2a",
  measurementId: "G-MWPQTT9244"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app)
export default auth;