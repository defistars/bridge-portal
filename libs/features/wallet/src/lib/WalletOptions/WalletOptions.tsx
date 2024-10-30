import { useConnect } from 'wagmi';
import { buildWalletOptions, WalletOption } from './wallet-helper';
import { Box, Button, Typography } from '@mui/material';

export const WalletOptions = () => {
  const { connectors, connect } = useConnect();

  const options = buildWalletOptions(Array.from(connectors));

  return (
    <Box
      sx={{
        display: 'flex',
        marginTop: '2rem',
        gap: '1rem',
      }}
    >
      {options.map((el: WalletOption, _id) => (
        <Button
          key={_id}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            textTransform: 'none',
          }}
          onClick={() => connect({ connector: el.source })}
        >
          {el.logo}
          <Typography variant="body1">{el.name}</Typography>
        </Button>
      ))}
    </Box>
  );
};
