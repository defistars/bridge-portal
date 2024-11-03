import { Box } from '@mui/material';
import { RouteLine } from './RouteLine';

const RouteTable = () => {
  return (
    <Box sx={{ width: '50rem', margin: '5rem 0rem 0rem' }}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-around',
        }}
      >
        <div>Route</div>
        <div>Cost</div>
        <div>Time</div>
        <div>Result</div>
      </Box>
      <Box
        sx={{
          marginTop: '2rem',
        }}
      >
        <RouteLine />
      </Box>
    </Box>
  );
};

export { RouteTable };
