'use client';
import React from 'react'
import './about.css'
import { motion } from 'framer-motion'
import getMousePosition from './getMousePosition';
import { useState } from 'react';



const About = () => {

  const [isHovered, setIsHovered] = useState(false);
  const {x, y} = getMousePosition();
  const size = isHovered ? 500 : 40;

  return (
    <div className='aboutContainer'>

    <div class="animated-text">
        I'm a  <span className='movingText'> </span>
    </div>

    <motion.div className="hoverMask" animate={{
      WebkitMaskPosition: `${x - size/2}px ${y - size/2 }px`,
      WebkitMaskSize: `${size}px`,
    }}
    transition={{type: "tween", ease: 'backOut'}}
    >
      <p align='center' variant='h3' className="maskContent" onMouseEnter={() => {setIsHovered(true)}} onMouseLeave={() => {setIsHovered(false)}}>
      Designer, czyli projektant, to osoba odpowiedzialna za tworzenie estetycznych, 
      funkcjonalnych i użytecznych rozwiązań w różnych dziedzinach, takich jak grafika, web design.
      </p>
      </motion.div>

    <div className="hoverBody">
        <p align='center'  variant='h3' className="hoverContent">
        Designer, czyli projektant, to osoba odpowiedzialna za tworzenie estetycznych, 
        funkcjonalnych i użytecznych rozwiązań w różnych dziedzinach, takich jak grafika, web design.
        </p>      
    </div>
 

    </div>
  )
}

export default About