import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import SignIn from './pages/Signin'
import Signup from './pages/Signup'
import About from './pages/About'
import Profile from './pages/Profile'

function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>}/>    
            <Route path='/SignIn' element={<SignIn/>}/>    
            <Route path='/Signup' element={<Signup/>}/>    
            <Route path='/About' element={<About/>}/>    
            <Route path='/Profile' element={<Profile/>}/>    
        
        </Routes>
    
    
    </BrowserRouter>
  )
}

export default App