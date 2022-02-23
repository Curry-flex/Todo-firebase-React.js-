import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBelaQvUxohrsc8z-w3I1znN4jObccW5Xc",
  authDomain: "to-do-7e529.firebaseapp.com",
  projectId: "to-do-7e529",
  storageBucket: "to-do-7e529.appspot.com",
  messagingSenderId: "71970102215",
  appId: "1:71970102215:web:c73f302cacee4a009697e2"
};

//Initialize Firebase

firebase.initializeApp(firebaseConfig)

const db =firebase.firestore()


export default db;