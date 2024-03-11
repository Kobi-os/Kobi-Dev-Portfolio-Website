import React, { useRef } from 'react'
import './skills.css'
import { Card, Container, Grid, Icon } from '@mui/material'
import CardContent from '@mui/material/CardContent';
import WebIcon from '@mui/icons-material/Web';
import StorageIcon from '@mui/icons-material/Storage';
import Typography from '@mui/material/Typography';
import ContentPasteGoIcon from '@mui/icons-material/ContentPasteGo';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion'


const content = [
  {
    icon: <WebIcon />,
    title: 'Web Development',
    description: 'Experience building websites using JavaScript, React, HTML/CSS and Wordpress.'
  },

  {
    icon: <StorageIcon />,
    title: 'Backend',
    description: 'Experience with C#, Node.js, and Python using using using using using using'
  },

  {
    icon: <ContentPasteGoIcon />,
    title: 'Content Creation',
    description: 'Creating and editing digital content using usingusing using using using using'
  }
]

const skills = [
  {
    technology: 'HTML/CSS',
  },
  {
    technology: 'JavaScript',
  },
  {
    technology: 'React',
  },
  {
    technology: 'SCSS/Tailwind',
  },
  {
    technology: 'Material-UI',
  },
  {
    technology: 'C#/ASP.NET',
  },
  {
    technology: 'Git/GitHub',
  },
]


const Skills = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, {once: true})




  return (
    <Container className='skillsContainer'  maxWidth='xl' sx={{margin:'100px 0 100px 0'}}>
      <Grid container spacing={3} component={motion.div} ref={ref}  style={{ transform: isInView ? "none" : "translateY(200px)", opacity: isInView ? 1 : 0, transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
        }}>
        {content.map((service) => (
        <Grid item key={service} xs={12} sm={6} md={4} >
          <Card className='card'>
            <div className='blob'></div>
            <CardContent className='bg' sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
              <Icon className='icon'>
                {service.icon}
              </Icon>
              <Typography color='white' gutterBottom variant="h5" component="div" align='center' sx={{fontSize: 25, fontWeight: 600, fontFamily: "Inter",}}>
                {service.title}
              </Typography>
              <Typography variant="body2"  component="div" align='center' sx={{fontSize: 17, fontWeight: 600, fontFamily: "Inter"}}>
                {service.description}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        ))}
      </Grid>
      <Typography color='white' align='center' fontSize={20} margin={10} display={'inline-block'}>
        <h2>Tech Stack</h2>
          {skills.map((skill) => (
            <button className='button'>
              {skill.technology}
            </button>
          ))}
      </Typography>
    </Container>
  )
}

export default Skills