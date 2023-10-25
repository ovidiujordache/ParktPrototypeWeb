
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
import Button from '@material-ui/core/Button';

import Paper from '@mui/material/Paper';

const UserStory2 =()=>{
 return (
    <ThemeProvider theme={theme}>
    <div  >
    <React.Fragment>
      <CssBaseline />
      <Container fixed>
        <Box sx={{ bgcolor: '#F6EFD4' }} >
        <h2 style={{padding:'30px',border:'2px dashed black'}}>
      According to our smart AI next available space will be in 14 min.</h2>
           <h3  style={{padding:'30px',border:'2px dashed black'}}>There is 4 people who queried for next available space within last 5 minutes</h3>

      <h3  style={{padding:'30px',border:'2px dashed black'}}>Be mindful this is just an approximation</h3>

      <h3  style={{padding:'30px',border:'2px dashed black'}}>Make a reservation now</h3>
      <Button style={{padding:'30px',border:'2px dashed black',color:'blue'}}> Reserve now</Button>

  
      


      </Box></Container>
    </React.Fragment>

    </div>
    </ThemeProvider>
    )


}
export default UserStory2;