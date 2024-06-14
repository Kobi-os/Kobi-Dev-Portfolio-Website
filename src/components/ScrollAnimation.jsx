import React from 'react'
import { motion, useScroll } from "framer-motion";


const ScrollAnimation = () => {
    const { scrollYProgress } = useScroll()


  return (
    <motion.div style={{
      scaleY: scrollYProgress, 
      position: 'fixed',
      top: 0, 
      right: 0,
      left: 'auto',
      width: 10,
      height: '100vh', 
      transformOrigin: '100% 0', 
      zIndex: 999,
    }}>
        
    </motion.div>
  )
}

export default ScrollAnimation