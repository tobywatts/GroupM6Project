// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCvOw4s-l2YxwuwibKFNIPL61zvx_4ncig",
  authDomain: "planner-70878.firebaseapp.com",
  projectId: "planner-70878",
  storageBucket: "planner-70878.appspot.com",
  messagingSenderId: "711464302865",
  appId: "1:711464302865:web:398053e77ddc43198df4b0",
  measurementId: "G-8DCPR1DESW",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
