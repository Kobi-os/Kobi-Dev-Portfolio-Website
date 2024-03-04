import React, { useRef } from 'react'
import './skills.css'
import { Card, Container, Grid } from '@mui/material'
import CardActions from '@mui/material/CardActions';
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
    description: 'Experience with C#, Node.js, and Python.'
  },

  {
    icon: <ContentPasteGoIcon />,
    title: 'Content Creation',
    description: 'Creating and editing digital content using'
  }
]
const Skills = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, {once: true})




  return (
    <Container className='skillsContainer' sx={{ display: 'flex', alignItems: 'center', justifyContent:'center'}} maxWidth='xl'>
      <Grid container spacing={4} component={motion.div} ref={ref} style={{ transform: isInView ? "none" : "translateY(200px)", opacity: isInView ? 1 : 0, transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
        }}>
        {content.map((skill) => (
        <Grid item key={skill} xs={12} sm={6} md={4} sx={}>
          <Card sx={{ height:'200px', display:'flex', alignItems:"center", alignContent:'center'}}>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div" align='center'>
                {skill.icon}
                {skill.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {skill.description}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        ))}
      </Grid>
    </Container>
  )
}

export default Skills