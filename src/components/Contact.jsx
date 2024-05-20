import React from "react";
import "./contact.css";
import { Icon, Typography, Button, linearProgressClasses } from "@mui/material";
import { motion } from "framer-motion";
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import MailIcon from '@mui/icons-material/Mail';
import PermPhoneMsgIcon from '@mui/icons-material/PermPhoneMsg';



const socials = [
  {
    title: "Facebook",
    icon: <FacebookIcon />,
    link: "https://www.facebook.com/wojtek.kobier.5"
  },
  {
    title: "LinkedIn",
    icon: <LinkedInIcon />,
    link: "https://www.linkedin.com/in/wojciech-kobier/"
  },
  {
    title: "Github",
    icon: <GitHubIcon />,
    link: "https://github.com/Kobi-os"
  },
  {
    title: "wojtek.kobier@wp.pl",
    icon: <MailIcon />,
  },
  {
    title: "696 366 110",
    icon: <PermPhoneMsgIcon />,
  },
  
];

const Contact = () => {
  return (
    <div className="contact" id="Contact">
      <ul className="contact-items">
          {socials.map((social, key) => (
            <motion.li
              key={key}
              className="social"
              animate="animate"
            >
              <a href={social.link} target="_blank" rel="noreferrer">
                <Typography variant="h6">{social.title}</Typography>
                <Icon>{social.icon}</Icon>
              </a>
            </motion.li>
          ))}
      </ul>
    </div>
  );
};

export default Contact;
