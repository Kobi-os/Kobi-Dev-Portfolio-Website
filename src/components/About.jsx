"use client";
import "./about.css";
import { clamp, motion } from "framer-motion";
import { Typography } from "@mui/material";
import './fonts.css'

const info = [
  {
    title: "Coding",
  },
  {
    title: "Bike",

  },
  {
    title: "MMA",
  },
  {
    title: "Gaming",
  },
  {
    title: "Chess",
  },
];

const About = () => {

  const handleSize = {
    fontSize: 'clamp(4.2rem, 7.2vw, 15rem)',
  }

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
            <Typography className="textInfo" variant="h3" style={handleSize} textTransform={"uppercase"} fontFamily={'GT-Sectra'}>
              {item.title} 
            </Typography>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default About;
