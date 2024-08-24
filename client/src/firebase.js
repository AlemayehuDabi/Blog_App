// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "blog-app-ce8fe.firebaseapp.com",
  projectId: "blog-app-ce8fe",
  storageBucket: "blog-app-ce8fe.appspot.com",
  messagingSenderId: "53918394992",
  appId: "1:53918394992:web:27ea87c5ca3ebb4110a2b5",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
