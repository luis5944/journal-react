import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCzulxPof5TtF9fFGlbt8l_0El1FRKlp_k",
  authDomain: "journal-react-curso.firebaseapp.com",
  databaseURL: "https://journal-react-curso.firebaseio.com",
  projectId: "journal-react-curso",
  storageBucket: "journal-react-curso.appspot.com",
  messagingSenderId: "125354998896",
  appId: "1:125354998896:web:e7140fe3276a2e258c88b5",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

//referencia a firestore
const db = firebase.firestore();
//autentificacion con
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { db, googleAuthProvider, firebase };
