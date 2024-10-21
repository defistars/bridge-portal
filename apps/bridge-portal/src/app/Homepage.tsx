import { useNavigate } from 'react-router-dom';
import '../styles.scss';
import { Button, Box, Typography } from '@mui/material';

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <Box
      component="main"
      className="container flex flex-column justify-center items-center"
    >
      <Typography variant="h1">Bridging, at Lightspeed</Typography>
      <Typography variant="h1">Because DeFi doesn't wait.</Typography>
      <Typography variant="subtitle1" sx={{ mt: '2rem', mb: '3rem' }}>
        Blazingly fast bridging for anyone that likes to be one step ahead
      </Typography>
      <Button variant="outlined" onClick={() => navigate('/bridge')}>
        Bridge Now
      </Button>
    </Box>
  );
};

export { HomePage };
