import React from "react";
import "./contact.css";
import { motion } from "framer-motion";



const Contact = () => {
  return (
    <motion.div className="contact" id="Contact">
        <ul className="social-bar">
          <li>
            <a href="https://www.facebook.com/wojtek.kobier.5" aria-label="">
              <i className="fab fa-facebook facebookIcon"></i>
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/wojciech-kobier/" aria-label="">
              <i className="fab fa-linkedin linkedinIcon"></i>
            </a>
          </li>
          <li>
            <a href="https://github.com/Kobi-os" aria-label="">
              <i className="fab fa-github githubIcon"></i>
            </a>
          </li>
        </ul>
    </motion.div>
  );
};

export default Contact;
