import React from 'react'
import './projects.css'
import { projects } from '../Data.js'
import { Card } from '@mui/material'

const Projects = () => {
  return (
    <div className='projectsContainer'>
      {
        projects.map((project, index) => {
          <Card key={`p_${index}`} {...project} i={index}/>
        })
      }
    </div>
  )
}

export default Projects