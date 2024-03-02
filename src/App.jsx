// Code: Main App component that renders all the components
import React from 'react'
import Navbar from './components/Navbar'
import About from './components/About'
import Skills  from './components/Skills'
import Projects  from './components/Projects'
import Contact  from './components/Contact'
import './App.css'
import { Container } from '@mui/material'

const App = () => {
  return (
  <Container maxWidth='xl'  sx={{  backgroundColor: 'black' }}>
    <Navbar />
    <About />
    <Skills />
    <Projects />
    <Contact />
  </Container>
  )
}

export default App
