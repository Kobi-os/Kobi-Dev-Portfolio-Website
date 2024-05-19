import React, { useRef } from 'react'
import './skills.css'
import { Card, Container, Grid, Icon } from '@mui/material'
import CardContent from '@mui/material/CardContent';
import WebIcon from '@mui/icons-material/Web';
import StorageIcon from '@mui/icons-material/Storage';
import Typography from '@mui/material/Typography';
import ContentPasteGoIcon from '@mui/icons-material/ContentPasteGo';
import { motion, useScroll, useInView, useMotionValueEvent, useTransform } from 'framer-motion';

const icons = [
    {
      icon: "/src/assets/icons/html.png",
    },
    {
      icon: "/src/assets/icons/css-3.png",
    },
    {
      icon: "/src/assets/icons/js.png",
    },
    {
      icon: "/src/assets/icons/react.png",
    },
    {
      icon: "/src/assets/icons/wordpress.png",
    },
    {
      icon: "/src/assets/icons/c-sharp.png",
    },
    {
      icon: "/src/assets/icons/git.png",
    },
    {
      icon: "/src/assets/icons/postgre.png",
    },
]




const Skills = () => {
  // const isInView = useInView(ref, {once: true})
  const targetRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "center center"],
  });


  return (
    <Container className='skillsContainer' maxWidth='100%' sx={{margin:'100px 0 100px 0'}} id="Skills">
        {/* <motion.div ref={ref} initial={{opacity: 0}} animate={{opacity: isInView ? 1 : 0}} transition={{duration: 1}}> */}
        <Typography component={motion.div}
        ref={targetRef}
        style={{
        scaleX: scrollYProgress,
        scaleY: scrollYProgress,
        }} 
        transition={{type: "spring", ease: 'backOut'}}
        variant='h3'
        align='center' 
        sx={{margin:5,backgroundColor:"purple", color: 'white', fontFamily: 'Inter', fontWeight: 700, fontSize: 50}}>Here are some of the <b color='red'>skills</b> i have
        </Typography >
          <div className='iconContainer'>
              {icons.map((icons) => (
                <motion.div className='icon' key={icons.icon} whileHover={{scale: 1.1}} whileTap={{scale: 0.9}}>
                  <img width={100} src={icons.icon} alt='icon' />
                </motion.div>
              ))}
          </div>
        {/* <Typography variant='h3' align='center' sx={{color: 'white', fontFamily: 'Inter', fontWeight: 700, margin: '50px 0 50px 0'}}>Skills</Typography>
        <Grid container spacing={3} justifyContent='center'>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Card className='card' elevation={10}>
              <CardContent>
                <Icon className='icon' component={WebIcon} sx={{fontSize: 100}}/>
                <Typography variant='h6' align='center' sx={{color: 'black', fontFamily: 'Inter', fontWeight: 700}}>Frontend</Typography>
                <Typography variant='body1' align='center' sx={{color: 'black', fontFamily: 'Inter', fontWeight: 400}}>HTML, CSS, JavaScript, React, Material-UI, Framer Motion</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Card className='card' elevation={10}>
              <CardContent>
                <Icon className='icon' component={StorageIcon} sx={{fontSize: 100}}/>
                <Typography variant='h6' align='center' sx={{color: 'black', fontFamily: 'Inter', fontWeight: 700}}>Backend</Typography>
                <Typography variant='body1' align='center' sx={{color: 'black', fontFamily: 'Inter', fontWeight: 400}}>Node.js, Express, MongoDB, Mongoose, REST API</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Card className='card' elevation={10}>
              <CardContent>
                <Icon className='icon' component={ContentPasteGoIcon} sx={{fontSize: 100}}/>
                <Typography variant='h6' align='center' sx={{color: 'black', fontFamily: 'Inter', fontWeight: 700}}>Tools</Typography>
                <Typography variant='body1' align='center' sx={{color: 'blakc', fontFamily: 'Inter', fontWeight: 400}}>Git, GitHub, Heroku, Netlify, Postman, VS Code</Typography>    
              </CardContent>
            </Card>
          </Grid>
        </Grid> */}
      {/* </motion.div> */}
    </Container>
  )
}

export default Skills