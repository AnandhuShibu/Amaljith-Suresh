import React from 'react'
import Home from './Pages/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Aboutme from './Pages/Aboutme'
import Skill from './Pages/Skill'
import Contact from './Pages/Contact'
import Projects from './Pages/Projects'

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<Aboutme/>}/>
        <Route path='/Skills' element={<Skill/>}/>
        <Route path='/Contact' element={<Contact/>}/>
        <Route path='/Projects' element={<Projects/>}/>
        <Route path="*" element={<Home />} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
