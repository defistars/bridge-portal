import { Box, Typography } from '@mui/material';
import '../styles.scss';

const Transfer = () => {
  return (
    <Box className="flex flex-column justify-center items-center">
      <Box
        sx={{
          border: '1px solid #181818',
          borderRadius: '1rem',
          padding: '5rem',
        }}
      >
        <Typography variant="h3">Bridge Swap</Typography>
      </Box>
    </Box>
  );
};

export { Transfer };
