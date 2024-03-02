import React from 'react'
import './skills.css'
import { Card, Container, Grid } from '@mui/material'
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Skills = () => {
  return (
    <Container className='skillsContainer' sx={{ display: 'flex', alignItems: 'center', justifyContent:'center'}} maxWidth='xl'>
      <Grid container spacing={4} >
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