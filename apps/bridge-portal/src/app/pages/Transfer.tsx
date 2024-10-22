import {
  Box,
  Grid2,
  Stack,
  Typography,
  ListItem,
  styled,
  Paper,
  Button,
  Card,
} from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import '../../styles.scss';
import { SelectNetworkWrapper } from '@bridge-portal/bridge';

const Transfer = () => {
  const selectTokenStyle = {
    backgroundColor: '#0E0F0E',
    height: '150px',
    borderRadius: '1rem',
    padding: '1.5rem',
  };

  const TokenSelector = styled(Paper)(({ theme }) => ({
    backgroundColor: '#0E0F0E',
    height: '150px',
    borderRadius: '1rem',
    padding: '1.5rem',
  }));

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
        <Stack spacing={'0.2rem'}>
          <TokenSelector>
            <Typography variant="subtitle2">From:</Typography>
            <Grid2 container rowSpacing={4}>
              <Grid2 size={6}>Network:</Grid2>
              <Grid2
                size={6}
                sx={{
                  display: 'flex',
                  justifyContent: 'end',
                }}
              >
                <SelectNetworkWrapper />
              </Grid2>
              <Grid2 size={6}>Token:</Grid2>
              <Grid2
                size={6}
                sx={{
                  display: 'flex',
                  justifyContent: 'end',
                }}
              >
                <Typography>Select token</Typography>
                <KeyboardArrowDownIcon />
              </Grid2>
            </Grid2>
          </TokenSelector>
          <TokenSelector>
            <Typography variant="subtitle2">To:</Typography>
            <Grid2 container rowSpacing={4}>
              <Grid2 size={6}>Network:</Grid2>
              <Grid2
                size={6}
                sx={{
                  display: 'flex',
                  justifyContent: 'end',
                }}
              >
                <Typography>Select network</Typography>
                <KeyboardArrowDownIcon />
              </Grid2>
              <Grid2 size={6}>Token:</Grid2>
              <Grid2
                size={6}
                sx={{
                  display: 'flex',
                  justifyContent: 'end',
                }}
              >
                <Typography>Select token</Typography>
                <KeyboardArrowDownIcon />
              </Grid2>
            </Grid2>
          </TokenSelector>
        </Stack>
      </Box>
    </Box>
  );
};

export { Transfer };
