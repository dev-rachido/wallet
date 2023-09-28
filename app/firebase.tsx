// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB42rg0WNgwxDAvxh4req0RZyJTVuiXr_Q",
  authDomain: "next-todo-app-d98fc.firebaseapp.com",
  databaseURL: "https://next-todo-app-d98fc-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "next-todo-app-d98fc",
  storageBucket: "next-todo-app-d98fc.appspot.com",
  messagingSenderId: "839829504834",
  appId: "1:839829504834:web:66aaae08c3038a4eb17edb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const data = getFirestore(app)