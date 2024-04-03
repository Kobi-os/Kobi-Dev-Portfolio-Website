import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Slide from '@mui/material/Slide';
import './navbar.css'
import Stack from '@mui/material/Stack';
import { Button, Divider, Icon, Link } from '@mui/material';
import { motion } from 'framer-motion';
import ApiIcon from '@mui/icons-material/Api';

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
        <AppBar className="navbarGlassEffect" color="primary"           
          component={motion.div}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{duration: 0.8}}
          sx={{  backgroundColor: 'black', display: 'flex', alignItems: 'center'}}
          >
          <Toolbar sx={{width: 1300, }}>
            <Typography paddingLeft={2} variant="h6" component="div" className='navbarLogo' sx={{ flexGrow: 1 }} >
              <img src="/src/assets/1-removebg-preview.png" alt="" width={80}/>
            </Typography>
            <Stack className='linksContainer'
            direction="row" 
            divider={<Divider orientation='vertical' flexItem/>} 
            spacing={6}
            alignItems="center"
            fontFamily={'Inter'}
            fontSize={18}
            fontWeight={600}
            >
              <Link className='hoverEffect' href="#About" color="#ECF4E5" underline='none'>About Me</Link>
              <Link className='hoverEffect' href="#Skills" color="#ECF4E5" underline='none' >Skills</Link>
              <Link className='hoverEffect' href="#Projects" color="#ECF4E5" underline='none'>Projects</Link>
              <Link className='hoverEffect' href="#Contact" color="#ECF4E5" underline='none'>Contact</Link>
              <Button color="inherit" sx={{fontWeight: "bold", backgroundColor: "red", ":hover": {backgroundColor: "#F3F4E5 "}}} >Resume</Button>
            </Stack>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Toolbar />
    </React.Fragment>
  );
}