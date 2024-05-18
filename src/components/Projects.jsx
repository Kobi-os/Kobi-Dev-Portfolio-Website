import React from 'react'
import './projects.css'

const Projects = () => {
  return (
    <div className='projectsContainer' id='Projects'>
      <div className='box'>
        <img className='project-img' src="/src/assets/project logo/photos/autoXpertWebsite.png" alt="" />
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