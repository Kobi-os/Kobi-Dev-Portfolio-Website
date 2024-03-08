import React from 'react'
import { motion, useScroll } from "framer-motion";


const ScrollAnimation = () => {
    const { scrollYProgress } = useScroll()


  return (
    <motion.div style={{
        scaleX: scrollYProgress,
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 'auto',
        width: '100%',
        height: 8,
        background: 'red',
        transformOrigin: '0% 100% ',
        zIndex: 999,
    }}>
        
    </motion.div>
  )
}

export default ScrollAnimation