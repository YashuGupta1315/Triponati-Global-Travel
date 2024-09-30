import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

// Replace with your Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyCNbFQbcnNqh65YhGU7x2ErT8KoIY1pRto",
    authDomain: "triponatiglobaltravel.firebaseapp.com",
    databaseURL: "https://triponatiglobaltravel-default-rtdb.firebaseio.com",
    projectId: "triponatiglobaltravel",
    storageBucket: "triponatiglobaltravel.appspot.com",
    messagingSenderId: "476095077107",
    appId: "1:476095077107:web:8d078a5202ed9c8b337586"
};

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

// Export Firebase services
const auth = firebase.auth();
const database = firebase.database();

export { auth, database };
