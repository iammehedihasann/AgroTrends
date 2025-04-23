// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; // ✅ Correct package
// import { auth } from "/firebase/firebaseConfig";


// Your web app's Firebase configuration
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
 const auth = getAuth(app);
export { auth };