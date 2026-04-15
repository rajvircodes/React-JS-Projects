import React from 'react'
import Header from './components/Header/Header'
import { Route, Routes } from 'react-router-dom'
import Footer from './components/Footer/Footer'
import Home from './components/Home/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Github from './pages/Github'
import NotFoundPage from './pages/NotFoundPage'

const App = () => {
  return (
    <>
    <Header/>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/github' element={<Github/>}/>
      <Route path='*' element={<NotFoundPage/>}/>
    </Routes>
    <Footer/>
    </>
  
  )
}

export default App