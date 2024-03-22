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
import { orange } from '@mui/material/colors';

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
          sx={{  backgroundColor: 'black', display: 'flex', alignItems: 'center'}}
          >
          <Toolbar sx={{width: 1300, }}>
              <ApiIcon />
            <Typography paddingLeft={2} variant="h6" component="div" className='navbarLogo' sx={{ flexGrow: 1 }} >
              Kobi Dev
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
              <Link href="#about" color="inherit" underline='none'>About Me</Link>
              <Link href="#skills" color="inherit" underline='none'>Skills</Link>
              <Link href="#projects" color="inherit" underline='none'>Projects</Link>
              <Link href="#contact" color="inherit" underline='none'>Contact</Link>
              <Button color="inherit" sx={{fontWeight: "bold", backgroundColor: "red", ":hover": {backgroundColor: "orange"}}} >Resume</Button>
            </Stack>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Toolbar />
    </React.Fragment>
  );
}