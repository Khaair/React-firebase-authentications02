import React,{useState,useEffect} from 'react'
import { getAuth,signOut ,onAuthStateChanged  } from "firebase/auth";
import { Route, Routes, useNavigate } from 'react-router-dom'
import Home from './Home';
import Navbar from './Navbar';
import Profile from './Profile';
import ShowApply from './ShowApply';
import AdminSidebar from './AdminSidebar';
import "./Deshboard.css";





export default function Deshboard({easyapplydeleteHandler,applydata}) {

  const [currentuser,setCurrentuser] = useState('')

  console.log(currentuser,"currentuserrrrrr")

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
    // console.log(uid,"userrr")
    console.log(user.auth.currentUser.displayName,"userrr")


    console.log(auth.currentUser,"auth")

    // setCurrentuser(user.auth.currentUser.displayName)
   

    // ...
  } else {
    // User is signed out
    // ...
  navigate("/login")
    
    
  }
});
  return ( 
   <>
   <div className="headingandlogoutdiv">
   <h1  style={{color:'#00156A',fontWeight:'bold'}}>Admin Deshboard</h1>
   <button className="Logoutbtn" onClick={handlelogout}>Log Out</button>
   </div>


   <AdminSidebar/>
     
  
    <Routes>
    <Route path="home" element={<Home/>} />
    <Route path="profile" element={<Profile currentuser={currentuser}/>} />
    <Route  path="showapply" element= {<ShowApply easyapplydeleteHandler={easyapplydeleteHandler} applydata={applydata} />}/>
    


    </Routes>
   </>
  )
}
