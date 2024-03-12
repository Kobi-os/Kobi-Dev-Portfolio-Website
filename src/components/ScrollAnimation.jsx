import React from 'react'
import { motion, useScroll } from "framer-motion";


const ScrollAnimation = () => {
    const { scrollYProgress } = useScroll()


  return (
    <motion.div style={{
      scaleY: scrollYProgress, // Używamy scaleY zamiast scaleX
      position: 'fixed',
      top: 0, // Zmieniamy top na 0 aby rozpocząć od góry
      right: 0,
      left: 'auto',
      width: 10, // Szerokość paska przewijania
      height: '100vh', // Wysokość równa całej wysokości ekranu
      background: 'red',
      transformOrigin: '100% 0', // Początek transformacji w prawym górnym rogu
      zIndex: 999,
    }}>
        
    </motion.div>
  )
}

export default ScrollAnimation