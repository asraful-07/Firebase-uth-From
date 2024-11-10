// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDVisld9zclfijbqr6EZn-ttCBJ8nRRpDk",
  authDomain: "login-from-82738.firebaseapp.com",
  projectId: "login-from-82738",
  storageBucket: "login-from-82738.firebasestorage.app",
  messagingSenderId: "424113324660",
  appId: "1:424113324660:web:c52b105b274da9fe868721",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
export default auth;
