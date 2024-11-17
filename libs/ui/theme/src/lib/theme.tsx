import { createTheme } from '@mui/material';
import './index.scss';

const theme = createTheme({
  typography: {
    fontFamily: 'var(--font-family)',
    h1: {
      fontSize: '4rem',
    },
    h2: {
      fontSize: '4rem',
      lineHeight: '4.5rem',
      fontWeight: 700,
    },
    subtitle1: {
      fontSize: '1rem',
      fontWeight: 400,
      lineHeight: '1.5rem',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          color: '#FFFFFF',
          fontWeight: 600,
          borderRadius: '0.75rem',
        },
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
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: 'transparent',
          boxShadow: 'none',
        },
      },
    },
  },
  palette: {
    background: {
      default: '#050505',
    },
    text: {
      primary: '#FFFFFF',
    },
  },
});

export default theme;
