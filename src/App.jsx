'use client';
import React from 'react'
import Navbar from './components/Navbar'
import About from './components/About'
import Skills  from './components/Skills'
import Projects  from './components/Projects'
import Contact  from './components/Contact'
import './App.css'
import { Container } from '@mui/material'
import ScrollAnimation from './components/ScrollAnimation'
import Footer from './components/Footer';
import './components/fonts.css'



const App = () => {
  return (
  <Container className='backgroundContainer' maxWidth="100%">
    <ScrollAnimation/>
    <Navbar/>
    <About/>
    <Skills/>
    <Projects/>
    <Contact/>
    <Footer/>
  </Container>
  )
}

export default App
