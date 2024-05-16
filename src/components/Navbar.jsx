import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Slide from '@mui/material/Slide';
import './navbar.css'
import Stack from '@mui/material/Stack';
import { Button, Divider, Box, Link, IconButton } from '@mui/material';
import { motion } from 'framer-motion';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';

function HideOnScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}



export default function Navbar(props) {
  return (
    <React.Fragment alignItems='center'>
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar color="primary"           
          component={motion.div}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{duration: 0.8}}
          sx={{backgroundColor: 'black', display: 'flex'}}
          >
          <Toolbar sx={{borderBottom:"1px solid white"}}>
            <Typography paddingRight={10} variant="h6" component="div" className='navbarLogo' sx={{ flexGrow: 1,  display:{xs: 'none', md: 'flex'}}} >
              <img className="logoImage" src="/src/assets/kobi-dev-logo.png" alt="KobiDev Logo"  />
            </Typography>
            <Stack className='linksContainer'
            direction="row" 
            divider={<Divider orientation='vertical' flexItem/>} 
            spacing={6}
            alignItems={"center"}
            fontFamily={'Inter'}
            fontSize={18}
            fontWeight={600}
            sx={{display:{xs: 'none', md: 'flex'}}}
            >
              <Link className='hoverEffect' href="#About" color="#ECF4E5" underline='none'>About Me</Link>
              <Link className='hoverEffect' href="#Skills" color="#ECF4E5" underline='none' >Skills</Link>
              <Link className='hoverEffect' href="#Projects" color="#ECF4E5" underline='none'>Projects</Link>
              <Link className='hoverEffect' href="#Contact" color="#ECF4E5" underline='none'>Contact</Link>
              <a href='Wojciech Kobier CV English.pdf' download='Wojciech Kobier CV English.pdf'>
              <Button color='inherit' className='resumeButton'  component={motion.button}
              initial={{ "--x": "100%", scale: 1 }}
              animate={{ "--x": "-100%"}}
              whileTap={{ scale: 0.97 }}
              transition={{
                repeat: Infinity,
                repeatType: "loop",
                repeatDelay: 1,
                type: "spring",
                stiffness: 20,
                damping: 15,
                mass: 2,
                scale: {
                  type: "spring",
                  stiffness: 10,
                  damping: 5,
                  mass: 0.5
                }
              }} >
                <span className='buttonSpan'>
                  Resume
                </span>
                <span  className='buttonOverlay'/>
              </Button>
              </a>
            </Stack>
            <Box className='mobilebox' sx={{display:{xs: 'flex', md: 'none'}}} edge='start'>
              <IconButton size='large' edge='start' color='inherit'>
                <MenuOpenIcon sx={{color: '#ECF4E5'}}/>
              </IconButton>
              <Typography align='center' className='navbarLogo' sx={{ flexGrow: 1,  display:{xs: 'flex', md: 'none'}}} >
                <img className="logoImage" src="/src/assets/1-removebg-preview.png" alt="KobiDev Logo"  />
              </Typography>
            </Box>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Toolbar />
    </React.Fragment>
  );
}