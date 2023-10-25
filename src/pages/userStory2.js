
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
import layout from '../images/layout_prototype.png';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Button from '@material-ui/core/Button';

import Paper from '@mui/material/Paper';
import Navbar from '../components/Navbar.js'
import UserStory2 from '../components/UserStory2'

const UserStory2Page = () => {
  return (
   <main>

<Navbar/>
<UserStory2/>

    </main>
  )
}

export default UserStory2Page