// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "...",
    authDomain: "netflix-gptfire.firebaseapp.com",
    projectId: "netflix-gptfire",
    storageBucket: "netflix-gptfire.firebasestorage.app",
    messagingSenderId: "826133569345",
    appId: "1:826133569345:web:9ebab63597a8675f614bc0",
    measurementId: "G-4HEVZ88JDY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
