
import * as React from "react"
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import theme from '../components/Theme'
import {ThemeProvider } from '@mui/material/styles';
import logo_ball from '../images/logo_ball.jpg';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Button from '@material-ui/core/Button';
import Navbar from '../components/Navbar.js'
import Paper from '@mui/material/Paper';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const About=()=>{


  return (
    <ThemeProvider theme={theme}>
    <div  >
    <React.Fragment>
    <Navbar/>
      <CssBaseline />
      <Container fixed>
        <Box sx={{ bgcolor: '#F6EFD4' }} >
    <img src={logo_ball} alt="no img" style={{width:'100px',padding:'10px',border:'2px dashed black'}} /> <h1 style={{padding:"20px",border:'2px dashed black',float:'left'}}> LOGO</h1>
   
    <h1 style={{padding:"20px",border:'2px dashed black'}}> Project Overview</h1>


     <h5 style={{padding:"20px",border:'2px dashed black'}}>

Parkt System is a software which enables drivers to have more convenience while looking for a car park spot.

The Parkt System is using AI to determine which spots in car park will become free the earliest. It informs the users about the availability of the spots.

In case a user has forgotten where she/he parked Parkt System to the rescue. It shows user exactly where his/her car is parked.How CI/CD works
</h5>


        


      </Box></Container>
    </React.Fragment>

    </div>
    </ThemeProvider>
    )


}

export default About;