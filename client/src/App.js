import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Login from './components/Login'
import Signup from './components/Signup'
import Errorpage from './components/Errorpage'
import Logout from './components/Logout'
import "./App.css"

export default function App() {
  return (
    <>
    <Navbar/>

    <Routes>
      
        <Route exact path="/" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/signup" element={<Signup/>}></Route>
        <Route path="/logout" element={<Logout/>}></Route>

        <Route path="*" exact={true} element={<Errorpage/>} ></Route>
    </Routes>
        
    </>
  )
}
