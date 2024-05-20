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
        <ul className="social-bar">
          <li>
            <a href="https://www.facebook.com/wojtek.kobier.5" aria-label="">
              <i className="fab fa-facebook"></i>
            </a>
          </li>
          <li>
            <a href="#" aria-label="">
              <i className="fab fa-linkedin"></i>
            </a>
          </li>
          <li>
            <a href="https://github.com/Kobi-os" aria-label="">
              <i className="fab fa-github"></i>
            </a>
          </li>
          <li>
            <a href="#" aria-label="">
            <i className="fa fa-envelope" aria-hidden="true"></i>
            </a>
          </li>
          <li>
            <a href="#" aria-label="">
              <i className="fas fa-phone"></i>
            </a>
          </li>
        </ul>
    </div>
  );
};

export default Contact;
