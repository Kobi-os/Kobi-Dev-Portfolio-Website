"use client";
import "./about.css";
import { motion } from "framer-motion";
import { Typography } from "@mui/material";
import './fonts.css'

const info = [
  {
    title: "Coding",
    speed: 0.5,
    description:"this is life"
  },
  {
    title: "Bike with my GF",
    speed: 0.5,
    description:"this is life"

  },
  {
    title: "MMA",
    speed: 0.67,
    description:"this is life"

  },
  {
    title: "Philosophy",
    speed: 0.8,
    description:"this is life"
  },
  {
    title: "Chess",
    speed: 0.8,
    description:"this is life"
  },
];

const About = () => {
  return (
    <div className="aboutContainer" id="About">
      <motion.div className="hoverMask">
        {info.map((item, index) => (
          <motion.div
          key={index}
          layout
          layoutId={`info-item-${item.title}`}
          initial={{ backgroundSize: "0% 100%" }}
          whileHover={{
            backgroundSize: "100% 100%",
            color: "black",
            transition: { duration: 0.3, ease: "easeInOut"},
          }}
          style={{
            background: "linear-gradient(to right, #ec4e39 50%, #ec4e30 50%)",
            backgroundRepeat: "no-repeat",
            borderRadius: "5px",
            fontSize: "2rem",
          }}
            >
            <Typography className="textInfo" variant="h3" fontSize={130} textTransform={"uppercase"}  fontFamily={'GT-Sectra'}>
              {item.title} 
              <Typography>
              {item.description}
              </Typography>
            </Typography>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default About;
