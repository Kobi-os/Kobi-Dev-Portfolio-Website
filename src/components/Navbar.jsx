import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Slide from '@mui/material/Slide';
import './navbar.css'
import Stack from '@mui/material/Stack';
import { Button, Divider, Icon } from '@mui/material';
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
        <AppBar color="primary"           
          component={motion.div}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{duration: 0.8}}
          sx={{  backgroundColor: 'black', display: 'flex', alignItems: 'center',}}
          >
          <Toolbar sx={{width: 1200}}>
              <ApiIcon />
            <Typography paddingLeft={2} variant="h6" component="div" className='navbarLogo' sx={{ flexGrow: 1 }} >
              Kobi Dev
            </Typography>
            <Stack
            direction="row" 
            divider={<Divider orientation='vertical' flexItem/>} 
            spacing={6}>
              <Button color="inherit" href="#about">About Me</Button>
              <Button color="inherit" href="#about">Skills</Button>
              <Button color="inherit" href="#about">Projects</Button>
              <Button color="inherit" href="#about">Contact</Button>
            </Stack>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Toolbar />
    </React.Fragment>
  );
}