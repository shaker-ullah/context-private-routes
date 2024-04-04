// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCULM9yejIqk0ZVNv0QtbF5_Nk4CcOmhEw",
  authDomain: "auth-mohamilon-a97bc.firebaseapp.com",
  projectId: "auth-mohamilon-a97bc",
  storageBucket: "auth-mohamilon-a97bc.appspot.com",
  messagingSenderId: "1062837376386",
  appId: "1:1062837376386:web:4af5a49b4c16a708552b9b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)