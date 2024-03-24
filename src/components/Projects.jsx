import React from 'react'
import './projects.css'
import { projects } from '../Data'
import ProjectsCard from './ProjectsCard'

const Projects = () => {
  return (
    <div className='projectsContainer'>
      {
        projects.map((project, index) => {
        return  <ProjectsCard key={index} {...project} index={index}/>
        })
      }
    </div>
  )
}

export default Projects