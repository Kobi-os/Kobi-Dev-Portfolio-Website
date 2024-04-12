import React, { useRef } from 'react'
import './skills.css'
import { Card, Container, Grid, Icon } from '@mui/material'
import CardContent from '@mui/material/CardContent';
import WebIcon from '@mui/icons-material/Web';
import StorageIcon from '@mui/icons-material/Storage';
import Typography from '@mui/material/Typography';
import ContentPasteGoIcon from '@mui/icons-material/ContentPasteGo';
import { motion, wrap } from 'framer-motion';
import { useInView } from 'framer-motion'


const content = [
  {
    icon: <WebIcon />,
    title: 'Web Development',
    description: 'Experience building '
  },

  {
    icon: <StorageIcon />,
    title: 'Backend',
    description: 'Experience with C#, '
  },

  {
    icon: <ContentPasteGoIcon />,
    title: 'Content Creation',
    description: 'Creating and editing '
  }
]




const Skills = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, {once: true})




  return (
    <Container className='skillsContainer'  maxWidth='100%' sx={{margin:'100px 0 100px 0'}} id="Skills">
      <Grid container spacing={3} component={motion.div} ref={ref}  sx={{
        flexWrap: 'wrap', 
        transform: isInView ? "none" : "translateY(200px)", opacity: isInView ? 1 : 0, transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}>
        {content.map((service) => (
        <Grid item key={service}  xs={12} sm={6} md={4}  sx={{  }}>

        </Grid>
        ))}
      </Grid>
    </Container>
  )
}

export default Skills