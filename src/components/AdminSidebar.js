import React from 'react'
import { Link } from 'react-router-dom'
import "./AdminSidebar.css";



export default function AdminSidebar() {
  return (
    <>
    <div className="sidenav">
    
    <Link to="/home">Post Job</Link>
    <Link to="/showapply">All Apply</Link>
    <Link to="/publicpost">All Job Post</Link>




</div>

    </>

  )
}