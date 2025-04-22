// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAbgTAL7LEAXX0lTbeTjcT9jfr_S1-dKa0",
  authDomain: "agriblogauth.firebaseapp.com",
  projectId: "agriblogauth",
  storageBucket: "agriblogauth.firebasestorage.app",
  messagingSenderId: "419912900003",
  appId: "1:419912900003:web:2c3fe02e7269f4cd4c8e16",
  measurementId: "G-ZH3CLRXV0T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 export const analytics = getAnalytics(app);