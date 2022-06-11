import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Deshboard from './components/Deshboard'
import Login from './components/Login'
import Signup from './components/Signup'

export default function App() {
  return (
    <div>
     <Routes>
    <Route path="/" element= {<Deshboard/>}/>
    <Route path="/signup" element= {<Signup/>}/>
    <Route path="/login" element= {<Login/>}/>



    </Routes>
    </div>
  )
}
