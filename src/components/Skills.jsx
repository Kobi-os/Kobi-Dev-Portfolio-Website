import React, { useRef } from 'react'
import './skills.css'
import { Card, Container, Grid } from '@mui/material'
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion'

const Skills = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, {once: true})




  return (
    <Container className='skillsContainer' sx={{ display: 'flex', alignItems: 'center', justifyContent:'center'}} maxWidth='xl'>
      <Grid container spacing={4} component={motion.div} ref={ref} style={{ transform: isInView ? "none" : "translateY(200px)", opacity: isInView ? 1 : 0, transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
        }}>
        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ height:'200px', display:'flex', alignItems:"center", alignContent:'center'}}>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div" align='center'>
                Lizard
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over 6,000
                species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Skills