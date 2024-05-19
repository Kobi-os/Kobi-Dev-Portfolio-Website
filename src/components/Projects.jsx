import React, {useRef} from 'react'
import './projects.css'
import { Typography } from '@mui/material'
import { motion, useScroll, useTransform } from 'framer-motion'

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
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["0.3 1", "0.6 0.7"]
  });

  return (
    <div className='projectsContainer' id='Projects' ref={targetRef}>
      {projectImages.map((project, key) => {
        const opacity = useTransform(
          scrollYProgress,
          [key / projectImages.length, (key + 1) / projectImages.length],
          [0, 1]
        );
        const scale = useTransform(
          scrollYProgress,
          [key / projectImages.length, (key + 1) / projectImages.length],
          [0.5, 1]
        );

        return (
          <motion.div
            className='box'
            key={key}
            style={{ opacity, scale }}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: key * 0.3, duration: 0.3 }}
          >
            <img className='project-img' src={project.img} alt="" />
            <motion.div className='placeholder'>
              <Typography className='project-text'>
                placeholder text to have something to read
              </Typography>
              <button className='project-button'>click me</button>
            </motion.div>
          </motion.div>
        );
      })}
    </div>
  );
};

export default Projects