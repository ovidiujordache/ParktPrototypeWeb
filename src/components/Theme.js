
import * as React from 'react';
import { createTheme } from '@mui/material/styles';
const theme =()=> createTheme({
  palette: {
    primary: {
      light: '#618CBC',
      main: '#073364',
      dark: '#28244B',
      contrastText: '#fff',
    },
    secondary: {
      light: '#F6E9D4',
      main: '#A8926F',
      dark: '#6C522C',
      contrastText: '#000',
    },
    text:{
      primary:'#01060B',
      secondary:'#28244B'
    }
  },
  
});

export default theme