import React, {useRef} from 'react'
import './projects.css'
import { Button, Typography } from '@mui/material'
import { color, motion, useScroll, useTransform } from 'framer-motion'
import './fonts.css'


const projectImages = [
  {
    img: "/src/components/autoxpertwebsite.png",
    link: "https://www.autoxpert.pl/"
  },
  {
    img: "/src/assets/project logo/photos/dobrzykWebsite.png",
    link: "https://dobrzyk.pl/"
  },
  {
    img: "/src/assets/project logo/photos/baqushop.png",
    link: "https://baqushop.pl/"
  },
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
            <img className='project-img' src={project.img} alt="project Images" />
            <motion.div className='info-box'>
              <Button  color='inherit' sx={{backgroundColor: 'black'}} className='visitButton'  component={motion.button} 
              initial={{ "--x": "100%", scale: 1 }}
              animate={{ "--x": "-100%"}}
              whileTap={{ scale: 0.97 }}
              onClick={() => window.open(project.link, "_blank")}
              whileHover={{ color: 'white', backgroundColor: 'black', scale: 1.1, transition: { duration: 0.3 }}}
              transition={{
                repeat: Infinity,
                repeatType: "loop",
                repeatDelay: 1,
                type: "spring",
                stiffness: 20,
                damping: 15,
                mass: 2,
                scale: {
                  type: "spring",
                  stiffness: 10, 
                  damping: 5,
                  mass: 0.5
                }
              }} >
                <span className='buttonSpan'>
                  Visit Website
                </span>
                <span  className='buttonOverlay'/>
              </Button>
            </motion.div>
          </motion.div>
        );
      })}
    </div>
  );
};

export default Projects