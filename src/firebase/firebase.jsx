// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCbivtBJmq0HjJHB5tOMqdo2fqYZ5qMNzc",
    authDomain: "mourra950-portfolio.firebaseapp.com",
    projectId: "mourra950-portfolio",
    storageBucket: "mourra950-portfolio.appspot.com",
    messagingSenderId: "843478755921",
    appId: "1:843478755921:web:0178729b56fbc91fe56670",
    measurementId: "G-TN7CNDV7WS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);