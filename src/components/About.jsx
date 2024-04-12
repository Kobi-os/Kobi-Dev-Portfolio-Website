'use client';
import React from 'react'
import './about.css'
import { motion } from 'framer-motion'
import getMousePosition from './getMousePosition';
import { useState } from 'react';
import { Typography } from '@mui/material';



const About = () => {

  const [isHovered, setIsHovered] = useState(false);
  const {x, y} = getMousePosition();
  const size = isHovered ? 500 : 40;

  return (
  <div className='aboutContainer' id='About'>
    
    {/* <div class="animated-text">
        I'm a  <span className='movingText'> </span>
    </div> */}

    {/* dodać kontener odróżniający animated-text od kursora i hoverMask (dwa divy na kontent w about container) */}
    <motion.div className="hoverMask" animate={{
      WebkitMaskPosition: `${x - size/2}px ${y - size/2 }px`,
      WebkitMaskSize: `${size}px`,
    }}
    transition={{type: "tween", ease: 'backOut'}}
    >
      <Typography align='center' variant='h3' className="maskContent" onMouseEnter={() => {setIsHovered(true)}} onMouseLeave={() => {setIsHovered(false)}}>
      Designer, czyli projektant, to osoba odpowiedzialna za tworzenie estetycznych, 
      funkcjonalnych i użytecznych rozwiązań w różnych dziedzinach, takich jak grafika, web design.
      </Typography>
    </motion.div>

    <div className="hoverBody">
        <Typography align='center' variant='h3' className="hoverContent" >
        csasdsa, czyli projektant, czyli projektant, czyli projektant, estetycznych, 
        czyli projektant, i czyli projektant, w różnych czyli projektant,akich jak grafika, web design.
        </Typography>      
    </div>
  </div>
  )
}

export default About