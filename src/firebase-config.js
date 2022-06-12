import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey:"AIzaSyDzZSXESNhLGyWA23O-tZ1y9I5VzBsAZ-E",
  authDomain: "react-auth02.firebaseapp.com",
  projectId: "react-auth02",
  storageBucket: "react-auth02.appspot.com",
  messagingSenderId: "996733619533",
  appId: "1:996733619533:web:9bb446bd7f58c36939fb04"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);