import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBZvVla07_EU7eXQqBe0D_TY6hY_2olMJc",
  authDomain: "clone-b78a1.firebaseapp.com",
  projectId: "clone-b78a1",
  storageBucket: "clone-b78a1.appspot.com",
  messagingSenderId: "306538410363",
  appId: "1:306538410363:web:370f5da48460b5c66c0dde",
  measurementId: "G-N79N7QXW8W",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
