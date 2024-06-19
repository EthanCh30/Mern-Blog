// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-d5447.firebaseapp.com",
  projectId: "mern-blog-d5447",
  storageBucket: "mern-blog-d5447.appspot.com",
  messagingSenderId: "960442222673",
  appId: "1:960442222673:web:540d248879f0da937ed070"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export { app };