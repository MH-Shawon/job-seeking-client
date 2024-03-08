// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAU5xC01upCYMbWQAHAoR6xvqbcJZ_4XZo",
  authDomain: "job-seeking-cb1ed.firebaseapp.com",
  projectId: "job-seeking-cb1ed",
  storageBucket: "job-seeking-cb1ed.appspot.com",
  messagingSenderId: "645822472545",
  appId: "1:645822472545:web:49f6e95b6a38dc3b096520",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;