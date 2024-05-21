import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <div className='footerContainer'>
        <div className='footerContent'>
            <div className='contentFinal'>
                <div className='navbarContent'>
                    <div className='links'>
                        <h3 className='h3Content'>About</h3>
                        <p>Home</p>
                        <p>Projects</p>
                        <p>Our Mission</p>
                        <p>Contact Us</p>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <h3 className='h3Content'>Socials</h3>
                        <p>News</p>
                        <p>Learn</p>
                        <p>Certification</p>
                        <p>Publications</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer