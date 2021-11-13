import firebase from "firebase";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD5JOcocJ2_LTBRhS6EhA-zLUcv_rAPtB0",
  authDomain: "react-users-app-6ae30.firebaseapp.com",
  projectId: "react-users-app-6ae30",
  storageBucket: "react-users-app-6ae30.appspot.com",
  messagingSenderId: "917767951261",
  appId: "1:917767951261:web:c01e8b0c6098d65ea35574"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
