"use client";
import React from "react";
import "./about.css";
import { motion } from "framer-motion";
import getMousePosition from "./getMousePosition";
import { useState } from "react";
import { Typography } from "@mui/material";

const About = () => {
  const [isHovered, setIsHovered] = useState(false);
  const { x, y } = getMousePosition();
  const size = isHovered ? 500 : 40;

  return (
    <div className="aboutContainer" id="About">


      <motion.div
        className="hoverMask"
        animate={{
          WebkitMaskPosition: `${x - size / 2}px ${y - size / 2}px`,
          WebkitMaskSize: `${size}px`,
        }}
        transition={{ type: "tween", ease: "backOut" }}
      >
        <Typography
          align="center"
          variant="h3"
          className="maskContent"
          fontSize={150}
          onMouseEnter={() => {
            setIsHovered(true);
          }}
          onMouseLeave={() => {
            setIsHovered(false);
          }}
        >
          Coding. Books. Good Food. Bike. MMA. Energy Drinks. Chess. 
        </Typography>
      </motion.div>


    </div>
  );
};

export default About;
