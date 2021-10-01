import firebase from "firebase/app";
import "firebase/auth";

const app = firebase.initializeApp({
  apiKey: "AIzaSyB6rrtoTH0e3q4MPVNIjEYDZ9GY09hp8tc",
  authDomain: "digitus-auth-ta.firebaseapp.com",
  projectId: "digitus-auth-ta",
  storageBucket: "digitus-auth-ta.appspot.com",
  messagingSenderId: "637315522256",
  appId: "1:637315522256:web:ae6049d2c64a181d0d48d5"
});


export const auth = app.auth();
export default app;
