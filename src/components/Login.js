import React,{useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import firebaseConfig from '../firebaseConfig'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";





export default function Login() {
  const auth = getAuth();
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [err,setErr] = useState('')
  

  const navigate = useNavigate()


  const handlesubmit=(e)=>{
    e.preventDefault();

    if(!email && !password){

      setErr("Every field must required")
    }

    
    else if(!email){
      setErr("Email field must required")

    }
    else if(!password){
      setErr("Password field must required")

    }
    else{
      signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        // ...
        navigate('/')
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        if(errorCode =="auth/wrong-password"){
          setErr("Wrong Password")
        
        }

        if(errorCode =="auth/user-not-found"){
          setErr("Wrong Email")
        
        }
        
        console.log(errorCode,"error")
      });
    }

  }



  return (
   <>
    <div className="formcontainer">

        <h3>Login</h3>
     <form>
     


  <div className="form-group col-7">
    <label htmlFor="exampleInputEmail1">Email address</label>
    <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)}  className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
  </div>
  <div className="form-group col-7">
    <label htmlFor="exampleInputPassword1">Password</label>
    <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)}  className="form-control" id="exampleInputPassword1" placeholder="Password" />
  </div>
  <p>{err}</p>
 
  <button type="submit" onClick={handlesubmit} className="btn btn-primary">Login</button>

  <h4>All ready have an account?<Link to="/signup">Sign up</Link></h4>
</form>


    </div>
   </>
  )
}
