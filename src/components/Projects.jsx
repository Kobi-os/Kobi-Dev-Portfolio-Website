import React, {useRef} from 'react'
import './projects.css'
import { Typography } from '@mui/material'
import { motion, useScroll } from 'framer-motion'

const projectImages = [
  {
    img: "/src/assets/project logo/photos/autoXpertWebsite.png"
  },
  {
    img: "/src/assets/project logo/photos/dobrzykWebsite.png"
  },
  {
    img: "/src/assets/project logo/photos/baqushop.png"
  }
] 

const Projects = () => {
  const targetRef = useRef(null)
  const {scrollYProgress} = useScroll({
    target: targetRef,
    offset: ["start end", "start center"],
  })

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: i * 0.3, // Delay for each image
        duration: 0.5
      }
    })
  };

  return (
    <div className='projectsContainer' id='Projects'>
      {projectImages.map((project, key) => (
            <motion.div className='box' key={key} 
            ref={targetRef} 
            style={{
              transition: {
                type: "tween",
                ease: 'backOut',
                spring: 0.7
              },
              scaleX: scrollYProgress,
              scaleY: scrollYProgress,
            }}
            >
              <img className='project-img' src={project.img} alt="" />
              <motion.div className='placeholder'>
                <Typography className='project-text'>
                  placeholder text to have something to read
                </Typography>
                <button className='project-button'>click me</button>
              </motion.div>
            </motion.div>
      ))}

      {/* <div className='box'>
        <img className='project-img' src="/src/assets/project logo/photos/dobrzykWebsite.png" alt="" />
      </div>
      <div className='box'>
        <img className='project-img' src="/src/assets/project logo/photos/baqushop.png" alt="" />
      </div> */}
    </div>
  )
}

export default Projects