import React,{useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import firebaseConfig from '../firebaseConfig'
import { getAuth, createUserWithEmailAndPassword,updateProfile  } from "firebase/auth";





export default function Signup() {
  const auth = getAuth();
  const [name,setName] = useState('')
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [err,setErr] = useState('')
  

  const navigate = useNavigate()


  const handlesubmit=(e)=>{
    e.preventDefault();

    if(!name && !email && !password){

      setErr("Every field must required")
    }

    else if(!name){
      setErr("Name field must required")

    }

    else if(!email){
      setErr("Email field must required")

    }
    else if(!password){
      setErr("Password field must required")

    }
    else{
      createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        updateProfile(auth.currentUser, {
          displayName: name, photoURL: "https://example.com/jane-q-user/profile.jpg"
        }).then(() => {
          // Profile updated!
          // ...
          const user = userCredential.user;
          console.log(user,"user")
          navigate("/")
        })
      

        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        console.log(error.code,"error code")
        // ..
      });
    }

  }



  return (
   <>
    <div className="formcontainer">

        <h3>Sign UP</h3>
     <form>
     <div className="form-group col-7">
    <label htmlFor="exampleInputEmail1">Name</label>
    <input type="text" value={name} onChange={(e)=>setName(e.target.value)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter name" />
    </div>


  <div className="form-group col-7">
    <label htmlFor="exampleInputEmail1">Email address</label>
    <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)}  className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
  </div>
  <div className="form-group col-7">
    <label htmlFor="exampleInputPassword1">Password</label>
    <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)}  className="form-control" id="exampleInputPassword1" placeholder="Password" />
  </div>
  <p>{err}</p>
 
  <button type="submit" onClick={handlesubmit} className="btn btn-primary">Sign Up</button>

  <h4>All ready have an account?<Link to="/login">Sign in</Link></h4>
</form>


    </div>
   </>
  )
}
