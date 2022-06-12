import React from 'react'
import { Link} from 'react-router-dom'


export default function Navbar({handlelogout}) {
  return (
    <div>
    <Link to="/home"><button>Post Job</button></Link>
    <Link to="/profile"><button>Profile</button></Link>
    <Link to="/showapply"><button>Submitted Applications</button></Link>
    <Link to="/publicpost"><button>All Job</button></Link>




   <button onClick={handlelogout}>Log Out</button>

    </div>
  )
}
