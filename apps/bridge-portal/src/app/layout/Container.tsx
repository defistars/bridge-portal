import { styled } from '@mui/material';

const BaseDiv = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
  position: 'relative',
  overflow: 'hidden',
}));

const HomepageContainer = styled('main')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
  gap: '1rem',
  maxWidth: '1440px',
  margin: '260px auto auto',
}));

const MainContainer = styled('main')(({ theme }) => ({
  maxWidth: '1440px',
  margin: 'auto',
}));

export { BaseDiv, HomepageContainer, MainContainer };
