import { Box, Typography } from '@mui/material';
import { SelectPair } from '@bridge-portal/bridge';
import '../../styles.scss';

const Transfer = () => {
  return (
    <Box className="flex flex-column justify-center items-center">
      <Box
        sx={{
          border: '1px solid #181818',
          borderRadius: '1rem',
          marginTop: '2rem',
          padding: '2rem',
          width: '40%',
        }}
      >
        <Typography variant="h3">Bridge Swap</Typography>
        <SelectPair />
      </Box>
    </Box>
  );
};

export { Transfer };
