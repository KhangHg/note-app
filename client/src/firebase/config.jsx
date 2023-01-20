// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCtj33MMrbq_ODoJuIi0VLQRL-THMWoE0U",
    authDomain: "note-app-8b11f.firebaseapp.com",
    projectId: "note-app-8b11f",
    storageBucket: "note-app-8b11f.appspot.com",
    messagingSenderId: "870153347385",
    appId: "1:870153347385:web:64e6eeab05fe51ec6fc8e8",
    measurementId: "G-YYWYSMEPEN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);