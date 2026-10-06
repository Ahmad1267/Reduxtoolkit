import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router'
import Home from './pages/Home'
import About from './pages/About'
import Cards from './pages/Cards'
import Contact from './pages/Contact'


export default function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/cards' element={<Cards/>}/>
      <Route path='/contact' element={<Contact/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}
