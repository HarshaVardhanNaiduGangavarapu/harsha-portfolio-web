import firebase from "firebase/compat/app";
import "firebase/compat/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDIT_bCki_USpPKsUr6-i54uu3XdmmTuvc",
  authDomain: "harsha-gangavarapu.firebaseapp.com",
  projectId: "harsha-gangavarapu",
  storageBucket: "harsha-gangavarapu.appspot.com",
  messagingSenderId: "159598293636",
  appId: "1:159598293636:web:2e91b3e6d109b55e9e48d1",
  measurementId: "G-K4X6KL0X2F",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const storage = firebase.storage(app);
