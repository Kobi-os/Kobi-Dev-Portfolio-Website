import React from "react";
import "./contact.css";
import { Icon, Typography, Button, linearProgressClasses } from "@mui/material";
import { motion } from "framer-motion";
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const variants = {
  inital: {
    y: 500,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
};

const contactVariants = [
  {
    icon: "Email: ",
    title: "wojtek.kobier@wp.pl",
  },
  {
    icon: "Phone: ",
    title: "+48 696 366 110",
  },
];

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
];

const Contact = () => {
  return (
    <div className="contact" id="Contact">
      <div className="textContainer">
        {contactVariants.map((item) => (
          <div className="contactItem">
            <Typography variant="h4">{item.icon}</Typography>
            <Typography variant="h5">{item.title}</Typography>
          </div>
        ))}
        <Typography variant="h4" className="contactIntroduction">
          Where u can find me
        </Typography>
      </div>
      <div className="footerContainer">
        
        {socials.map((item) => (
          <Button
            color="inherit"
            className="resumeButton"
            component={motion.button}
            initial={{ "--x": "100%", scale: 1 }}
            animate={{ "--x": "-100%" }}
            transition={{
              repeat: Infinity,
              repeatType: "loop",
              repeatDelay: 0.1,
              type: "spring",
              stiffness: 20,
              damping: 15,
              mass: 2,
              scale: {
                type: "spring",
                stiffness: 10,
                damping: 5,
                mass: 0.5,
              },
            }}
          >
            <span className="buttonSpan">{item.icon}</span>
            <span className="buttonSpan">{item.title}</span>
            <span className="buttonOverlay" />
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Contact;
