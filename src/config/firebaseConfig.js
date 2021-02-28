import firebase from "firebase/app";
import "firebase/auth";

const app = firebase.initializeApp({
  apiKey: "AIzaSyAkwiE8GBLph4bv4d9HfqRbJLxxeAPOsVk",
  authDomain: "payeazy-6d5ea.firebaseapp.com",
  projectId: "payeazy-6d5ea",
  storageBucket: "payeazy-6d5ea.appspot.com",
  messagingSenderId: "995630891684",
  appId: "1:995630891684:web:e03fb07031437e1ba3dc31",
  measurementId: "G-F3JN47PXRT",
});

export const auth = app.auth();
export default app;
