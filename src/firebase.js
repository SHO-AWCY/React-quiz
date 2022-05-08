// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";

import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCThsvj_9LAYG8DNxENh2XwOtKVKlmK4hA",
  authDomain: "react-quiz-72e74.firebaseapp.com",
  projectId: "react-quiz-72e74",
  storageBucket: "react-quiz-72e74.appspot.com",
  messagingSenderId: "870869219973",
  appId: "1:870869219973:web:5911eb1d6ac1a41b92c7ec",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export const auth = getAuth(app);
export default db;
