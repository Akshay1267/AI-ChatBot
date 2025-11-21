// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyALXGmbN8J8KwzuBs2zHKbeplHqASu9HSE",
  authDomain: "akshay-ai-app.firebaseapp.com",
  projectId: "akshay-ai-app",
  storageBucket: "akshay-ai-app.firebasestorage.app",
  messagingSenderId: "470600366457",
  appId: "1:470600366457:web:ee87334695ad9c80bdd7a8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {app, auth};