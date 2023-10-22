
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

const Home=()=>{


  return (
    <ThemeProvider theme={theme}>
    <div  >
    <React.Fragment>
      <CssBaseline />
      <Container fixed>
        <Box sx={{ bgcolor: '#F6EFD4', height: '100vh' }} >
        <h2 style={{padding:'30px'}}>
        Basic App prototype to showcase functionality of the Smart Parking System. "P A R K T".
        It showscase two User Stories.</h2>
        <h3 style={{padding:'30px'}}>Technologies used for prototyping: Gatbsy/React/Nodejs , Netlify for deployment and CI/CD</h3>
         <List>
          <ListItem >
           
              <ListItemText primary="User Story 1: " secondary="User wants find free spot" />

          </ListItem>
          <ListItem >
          
              <ListItemText primary="User Story 2:" secondary="User wants estimated time for free spot" />
      
          </ListItem>
        </List>

        

      </Box></Container>
    </React.Fragment>

    </div>
    </ThemeProvider>
    )


}

export default Home;