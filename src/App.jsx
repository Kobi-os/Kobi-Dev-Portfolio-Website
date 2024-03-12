import React from 'react'
import Navbar from './components/Navbar'
import About from './components/About'
import Skills  from './components/Skills'
import Projects  from './components/Projects'
import Contact  from './components/Contact'
import './App.css'
import { Container } from '@mui/material'
import ScrollAnimation from './components/ScrollAnimation'




const App = () => {



  return (
  <Container  maxWidth='xl' sx={{ backgroundColor: 'black',}}>
    <ScrollAnimation />
    <Navbar />
    <About/>
    <Skills />
    <Projects />
    <Contact />
  </Container>
  )
}

export default App
