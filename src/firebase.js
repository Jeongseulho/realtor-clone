// Import the functions you need from the SDKs you need
import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDAgn_TSMc3cQI9mqx-71DAU46BQm_pyFs",
  authDomain: "clone-5fcac.firebaseapp.com",
  projectId: "clone-5fcac",
  storageBucket: "clone-5fcac.appspot.com",
  messagingSenderId: "159360965313",
  appId: "1:159360965313:web:d6b59c044d816b3359d240",
  measurementId: "G-K148BD688D",
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
