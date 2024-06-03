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
      <motion.div className="hoverMask">
        <Typography variant="h1" className="maskContent" fontSize={150}>
          Coding <br />
          Bike <br />
          MMA <br />
          Philosophy <br />
          Chess
        </Typography>
      </motion.div>
    </div>
  );
};

export default About;
