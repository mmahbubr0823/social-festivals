// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA8EsOzPceH6T9C70vExoBXIUYjT4MG8CE",
  authDomain: "social-festival-management.firebaseapp.com",
  projectId: "social-festival-management",
  storageBucket: "social-festival-management.appspot.com",
  messagingSenderId: "472017269980",
  appId: "1:472017269980:web:5ba45ac008b6c18ed1b019"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;