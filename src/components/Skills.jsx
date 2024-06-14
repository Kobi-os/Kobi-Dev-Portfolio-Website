import "./skills.css";
import { Card, Container, Grid } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import {
  motion,
} from "framer-motion";
import frontendIcon from "../assets/icons/frontend.png"
import backendIcon from "../assets/icons/api.png"
import designIcon from "../assets/icons/web-design.png"
import "./fonts.css"
import typescriptIcon from "../assets/icons/typescript.png"
import htmlIcon from "../assets/icons/html.png"
import cssIcon from "../assets/icons/css-3.png"
import jsIcon from "../assets/icons/js.png"
import reactIcon from "../assets/icons/react.png"
import wordpressIcon from "../assets/icons/wordpress.png"
import cSharpIcon from "../assets/icons/c-sharp.png"
import gitIcon from "../assets/icons/Git.png"
import postgreIcon from "../assets/icons/postgre.png"

const icons = [
  {
    icon: htmlIcon,
  },
  {
    icon: cssIcon,
  },
  {
    icon: jsIcon,
  },
  {
    icon: typescriptIcon,
  },
  {
    icon: reactIcon,
  },
  {
    icon: wordpressIcon,
  },
  {
    icon: cSharpIcon,
  },
  {
    icon: gitIcon,
  },
  {
    icon: postgreIcon,
  },
];

const Skills = () => {


  return (
    <Container
      className="skillsContainer"
      maxWidth="100%"
      sx={{ margin: "100px 0 100px 0" }}
      id="Skills"
    >

      <Typography
        component={motion.div}
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.7 }}
        variant="h2"
        align="center"
        sx={{
          color: "#b7ab98",
          fontFamily: "GT-Sectra",
          fontWeight: 700,
          margin: "50px 0 50px 0",
        }}
      >
        What i do?
      </Typography>
      <Grid container spacing={3} justifyContent="center">
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Card
            className="card"
            elevation={10}
            sx={{
              background: "black",
              backgroundImage:
                "url(https://images.unsplash.com/photo-1607706189992-eae578626c86?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <CardContent align="center" className="cardText">
              <img
                className="cardIcon"
                src={frontendIcon}
                style={{ width: 100 }}
              />
              <Typography
                variant="h3"
                sx={{ color: "#b7ab98", fontFamily: "GT-Sectra", fontWeight: 700 }}
              >
                Frontend
              </Typography>
              <Typography
                variant="body1"
                sx={{ color: "white", fontFamily: "GT-CineType-Regular", fontWeight: 400 }}
              >
              Passionate about creating visually stunning and highly interactive user interfaces. With expertise JavaScript, and modern frameworks like React
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Card
            className="card"
            elevation={10}
            sx={{
              background: "black",
              backgroundImage:
                "url(https://images.unsplash.com/photo-1627398242454-45a1465c2479?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <CardContent align="center" className="cardText">
              <img
                className="cardIcon"
                src={backendIcon}
                style={{ width: 100 }}
              />
              <Typography
                variant="h3"
                sx={{ color: "#b7ab98", fontFamily: "GT-Sectra", fontWeight: 700 }}
              >
                Backend
              </Typography>
              <Typography
                variant="body1"
                sx={{ color: "white", fontFamily: "GT-CineType-Regular", fontWeight: 400 }}
              >
                Focused on building robust and scalable server-side applications, my skills ensure that your website performs efficiently under any load.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Card
            className="card"
            elevation={10}
            sx={{
              background: "black",
              backgroundImage:
                "url(https://images.unsplash.com/photo-1509343256512-d77a5cb3791b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <CardContent align="center" className="cardText">
              <img
                className="cardIcon"
                src={designIcon}
                style={{ width: 100 }}
              />
              <Typography
                variant="h3"
                sx={{ color: "#b7ab98", fontFamily: "GT-Sectra", fontWeight: 700 }}
              >
                Design
              </Typography>
              <Typography
                variant="body1"
                sx={{ color: "white", fontFamily: "GT-CineType-Regular", fontWeight: 400 }}
              >
                Combining creativity with technical skills, I excel in designing engaging and intuitive user experiences. 
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <Typography
        component={motion.div}
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.7 }}
        variant="h2"
        align="center"
        sx={{
          color: "#b7ab98",
          fontFamily: "GT-Sectra",
          fontWeight: 700,
          margin: "50px 0 50px 0",
          marginTop: 15,
          marginBottom: 5
        }}
      >
        Tech Stack
      </Typography>
      <div className="iconContainer">
        {icons.map((icons) => (
          <motion.div
            className="icon"
            key={icons.icon}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <img width={100} src={icons.icon} alt="icon" />
          </motion.div>
        ))}
      </div>
    </Container>
  );
};

export default Skills;
