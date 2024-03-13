import React from 'react'
import './contact.css'
import { Typography } from '@mui/material'

const credentials = []

const Contact = () => {
  return (
    <div className='contact'>
      <div className="textContainer">
        <Typography variant='h2'>Nice to meet you</Typography>

        <div className='item'>
          <Typography variant='h4'>Email</Typography>
          <Typography variant='h5'>wojtek.kobier@wp.pl</Typography>
        </div>
        <div className='item'>
          <Typography variant='h4'>Phone</Typography>
          <Typography variant='h5'>696 366 110</Typography>
        </div>
      </div>
      
      <div className="formContainer">
        <form>
          <input type="text" required placeholder="Name" />
          <input type="email" required placeholder="Email" />
          <textarea rows={8} placeholder="Message"/>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Contact