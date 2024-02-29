// Code: Main App component that renders all the components
import React from 'react'
import Navbar from './components/Navbar'
import About from './components/About'
import Skills  from './components/Skills'
import Projects  from './components/Projects'
import Contact  from './components/Contact'

const App = () => {
  return (
  <div className="container">
    <Navbar />
    <About />
    <Skills />
    <Projects />
    <Contact />
  </div>
  )
}

export default App
