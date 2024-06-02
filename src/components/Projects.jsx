import React, {useRef} from 'react'
import './projects.css'
import { Button, Typography } from '@mui/material'
import { color, motion, useScroll, useTransform } from 'framer-motion'

const projectImages = [
  {
    img: "/src/assets/project logo/photos/autoXpertWebsite.png",
    text: "My first project, in a freelancing journey, was a e-commerce shop on Shopify platform. I was responsible for the whole project, from design to implementation. I have created a theme, based on the client's needs. I have integrated shop with a provider app, that allows the client to manage the products in a more efficient way."
  },
  {
    img: "/src/assets/project logo/photos/dobrzykWebsite.png",
    text: "My second project was a website for a local construction company. I have created a website from scratch, using Wordpress. I have implemented a contact form, that sends an email to the company's email address. I have also implemented a gallery, that allows the client to add new projects to the website."
  },
  {
    img: "/src/assets/project logo/photos/baqushop.png",
    text: "My third project was also a e-commerce shop on Shopify platform. I have created a theme, based on the client's needs with a custom CSS for a unique components. The shop was created for mothers day It have fully working payments connected with Stripe."
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
              <p className='project-text'>
                {project.text}
              </p>
              <Button color='inherit' sx={{backgroundColor: 'black'}} className='visitButton' ba component={motion.button}
              initial={{ "--x": "100%", scale: 1 }}
              animate={{ "--x": "-100%"}}
              whileTap={{ scale: 0.97 }}
              whileHover={{ color: 'black'}}
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