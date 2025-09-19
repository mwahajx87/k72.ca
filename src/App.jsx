import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import Agence from './pages/Agence'
import Project from './pages/Project'
import Navbar from './Navbar/Navbar'
import FullScreenNav from './Navbar/FullScreenNav'
import Contact from './pages/Contact'
import FullNavBar from './Navbar/FullNavBar'


const App = () => {
  return (
    <div>
      <FullScreenNav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/agence' element={<Agence />} />
        <Route path='/projets' element={<Project />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </div>
  )
}

export default App