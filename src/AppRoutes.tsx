import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Offers from './pages/Offers'
import Contact from './pages/Contact'
import Login from './pages/Login'
import Dashboard from './pages/member/Dashboard'

export default function AppRoutes(){
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/services' element={<Services/>} />
        <Route path='/offers' element={<Offers/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/dashboard/*' element={<Dashboard/>} />
      </Routes>
    </BrowserRouter>
  )
}