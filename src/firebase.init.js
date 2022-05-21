// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD3_5OqqYAINXHCXjqmz_NmJ4wXTLRFUxY",
    authDomain: "doctors-portal-b745e.firebaseapp.com",
    projectId: "doctors-portal-b745e",
    storageBucket: "doctors-portal-b745e.appspot.com",
    messagingSenderId: "296601016450",
    appId: "1:296601016450:web:45b9ae61eef4be12257c9b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;