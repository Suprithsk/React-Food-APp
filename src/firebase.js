// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA89TVbmAk7WXMpeFg3ZZvpH6YLLhs9rlo",
  authDomain: "react-food-app-ae14e.firebaseapp.com",
  projectId: "react-food-app-ae14e",
  storageBucket: "react-food-app-ae14e.appspot.com",
  messagingSenderId: "513968599095",
  appId: "1:513968599095:web:52129df0ed2c163fd50fb2",
  databaseURL: "https://react-food-app-ae14e-default-rtdb.firebaseio.com/"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);