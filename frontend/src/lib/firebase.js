// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDJ3y3SCicaRD_YuomZ-CHrbUFkh2Hl7m4",
  authDomain: "fir-ca84c.firebaseapp.com",
  projectId: "fir-ca84c",
  storageBucket: "fir-ca84c.firebasestorage.app",
  messagingSenderId: "103117242795",
  appId: "1:103117242795:web:0d3c1f4d1aa1008d20d2ee",
  measurementId: "G-J0WRGB5WCC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { auth, provider };