import React from 'react'
import './contact.css'
import { Typography } from '@mui/material'
import { motion } from 'framer-motion'

const variants = {
  inital: {
    y: 500,
    opacity: 0
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
    }
  }
}



const Contact = () => {
  return (
    <motion.div className='contact' variants={variants} initial="inital" whileInView="animate">
      <motion.div className="textContainer" variants={variants}>
        <Typography variant='h2' fontSize={100} variants={variants}>Nice to meet you</Typography>

        <motion.div className='item' variants={variants}>
          <Typography variant='h4' variants={variants}>Email</Typography>
          <Typography className='info' variant='h5' variants={variants}>wojtek.kobier@wp.pl</Typography>
        </motion.div>
        <motion.div className='item' variants={variants}>
          <Typography variant='h4' variants={variants}>Phone</Typography>
          <Typography className='info' variant='h5'>696 366 110</Typography>
        </motion.div>
      </motion.div>
      
      <div className="formContainer">
        <form>
          <input type="text" required placeholder="Name" />
          <input type="email" required placeholder="Email" />
          <textarea rows={8} placeholder="Message"/>
          <button className='submitButton' type="submit">Submit</button>
        </form>
      </div>
    </motion.div>
  )
}

export default Contact