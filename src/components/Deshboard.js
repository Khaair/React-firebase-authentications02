import React from 'react'
import { getAuth,signOut ,onAuthStateChanged  } from "firebase/auth";
import { useNavigate } from 'react-router-dom'



export default function Deshboard() {
  const auth = getAuth();

 const navigate = useNavigate()


 const handlelogout=()=>{

  signOut(auth).then(() => {
    // Sign-out successful.
    navigate("/login")
    

  }).catch((error) => {
    // An error happened.
    console.log(error.code,"error")
  });

 

 }

 onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    const uid = user.uid;
    console.log(uid,"userrr")
    console.log(auth.currentUser,"auth")

    // ...
  } else {
    // User is signed out
    // ...
  navigate("/login")
    
    
  }
});
  return (
   <>
    <div>Deshboard</div>
    <button onClick={handlelogout}>Log Out</button>
   </>
  )
}
