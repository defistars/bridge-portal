import { Box, Container } from '@mui/material';
import AppHeader from './AppHeader';
import AppFooter from './AppFooter';
import { useLocation } from 'react-router-dom';

const MainLayout = ({ children }: { children?: any }) => {
  const location = useLocation();

  const isHomePage = location.pathname === '/';

  return (
    <Container
      disableGutters
      maxWidth={false}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        backgroundImage: isHomePage ? "url('/background-image.jpeg')" : 'none',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    >
      <AppHeader />
      <Box component="main" sx={{ flexGrow: 1 }}>
        {children}
      </Box>
      {isHomePage && <AppFooter />}
    </Container>
  );
};

export default MainLayout;
