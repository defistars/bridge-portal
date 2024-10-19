import styles from './theme.module.scss';
import { colors, createTheme } from '@mui/material';

const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        outlined: {
          color: '#DDFF1F',
          borderColor: '#DDFF1F',
          '&:hover': {
            colors: '#3f3f3f',
            borderColor: '#3f3f3f',
          },
        },
      },
    },
  },
  typography: {
    h1: {
      fontSize: '4rem',
    },
    subtitle1: {
      fontSize: '1rem',
    },
  },
  palette: {
    background: {
      default: '#050505',
    },
    text: {
      primary: '#fff',
    },
  },
});

export default theme;
