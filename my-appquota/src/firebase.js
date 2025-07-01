// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA4eSUKEnWl_oIXrLH7rF268KKudUkRN7o",
  authDomain: "quota-51db0.firebaseapp.com",
  projectId: "quota-51db0",
  storageBucket: "quota-51db0.firebasestorage.app",
  messagingSenderId: "1033854868147",
  appId: "1:1033854868147:web:d5e1ff438438cd208aaec6",
  measurementId: "G-9KHNCE3T1H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);    