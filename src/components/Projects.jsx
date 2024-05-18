import React from 'react'
import './projects.css'
import { Typography } from '@mui/material'

const Projects = () => {
  return (
    <div className='projectsContainer' id='Projects'>
      <div className='box'>
        <img className='project-img' src="/src/assets/project logo/photos/autoXpertWebsite.png" alt="" />
        <div className='placeholder'>
          <Typography className='project-text'>
            placeholder text to have something to read
          </Typography>
          <button className='project-button'>click me</button>
        </div>
      </div>
      <div className='box'>
        <img className='project-img' src="/src/assets/project logo/photos/dobrzykWebsite.png" alt="" />
      </div>
      <div className='box'>
        <img className='project-img' src="/src/assets/project logo/photos/baqushop.png" alt="" />
      </div>
    </div>
  )
}

export default Projects