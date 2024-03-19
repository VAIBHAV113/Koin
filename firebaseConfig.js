// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { Firestore, getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC22Chkd8A4JJWEM9t0gL-wcEuV6SPZW6c",
  authDomain: "koinbx-bd137.firebaseapp.com",
  projectId: "koinbx-bd137",
  storageBucket: "koinbx-bd137.appspot.com",
  messagingSenderId: "1089420854200",
  appId: "1:1089420854200:web:f75c3e78671a75e059c54d",
  measurementId: "G-KQYZW9PZKE",
  databaseURL: "https://koinbx-bd137-default-rtdb.firebaseio.com/",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database };
export default firebaseConfig;
