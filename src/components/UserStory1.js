
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

const UserStory1 =()=>{
 return (
    <ThemeProvider theme={theme}>
    <div  >
    <React.Fragment>
      <CssBaseline />
      <Container fixed>
        <Box sx={{ bgcolor: '#F6EFD4' }} >
        <h2 style={{padding:'30px'}}>
       User Story 1</h2>
       <Button style={{border:'5px solid red'}}>Get my spot </Button>
  
      


      </Box></Container>
    </React.Fragment>

    </div>
    </ThemeProvider>
    )


}
export default UserStory1;