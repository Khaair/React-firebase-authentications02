// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
const analytics = getAnalytics(app);

export default firebaseConfig;


// import firebase from "firebase/app"
// import "firebase/auth"

// const app = firebase.initializeApp({
//   apiKey:"AIzaSyDzZSXESNhLGyWA23O-tZ1y9I5VzBsAZ-E",
//   authDomain: "react-auth02.firebaseapp.com",
//   projectId: "react-auth02",
//   storageBucket: "react-auth02.appspot.com",
//   messagingSenderId: "996733619533",
//   appId: "1:996733619533:web:9bb446bd7f58c36939fb04"
// })

// export const auth = app.auth()
// export default app

