
import * as React from "react"
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import theme from './Theme'
import {ThemeProvider } from '@mui/material/styles';
import layout from '../images/layout_prototype.png';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';

import Paper from '@mui/material/Paper';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const Home=()=>{


  return (
    <ThemeProvider theme={theme}>
    <div  >
    <React.Fragment>
      <CssBaseline />
      <Container fixed>
        <Box sx={{ bgcolor: '#F6EFD4' }} >
        <h2 style={{padding:'30px'}}>
        Basic App prototype to showcase functionality of the Smart Parking System. "P A R K T".
        It showscase two User Stories.Technologies used for prototyping: Gatbsy/React/Nodejs , Netlify for deployment and CI/CD</h2>
   
    <h1 style={{padding:"20px"}}> Mockup Car Park layout</h1>
    <img src={layout} alt="no img" style={{width:'50vw',padding:'10px'}}/>
  
         <List>
          <ListItem >
           
              <ListItemText primary="User Story 1: " secondary="User wants find free spot" />
  
          </ListItem>
          <ListItem >
          
              <ListItemText primary="User Story 2:" secondary="User wants estimated time for free spot" />
      
          </ListItem>
        </List>

        
    <h1 style={{padding:"20px"}}>Work in progress...</h1>

      </Box></Container>
    </React.Fragment>

    </div>
    </ThemeProvider>
    )


}

export default Home;