import React from 'react'
import './contact.css'
import { Icon, Typography } from '@mui/material'
import { motion } from 'framer-motion'
import EmailIcon from '@mui/icons-material/Email';
import PermPhoneMsgIcon from '@mui/icons-material/PermPhoneMsg';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';

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

const contactVariants = [
  {
    icon: <EmailIcon />,
    title: 'wojtek.kobier@wp.pl',
  },
  {
    icon: <PermPhoneMsgIcon />,
    title: '+48 696 366 110',
  },
]


const Contact = () => {
  return (
    <motion.div className='contact' id='Contact' variants={variants} initial="inital" whileInView="animate">
      <motion.div className="textContainer" variants={variants}>
        {contactVariants.map((item) => (
          <div className='contactItem'>
            <Icon>{item.icon}</Icon>
            <Typography variant='h5'>{item.title}</Typography>
          </div>
        ))}
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