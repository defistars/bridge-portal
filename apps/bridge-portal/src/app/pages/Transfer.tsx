import { Box, Button, Typography, Collapse } from '@mui/material';
import { RouteTable, SelectPair } from '@bridge-portal/bridge';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import '../../styles.scss';
import { useRef, useState } from 'react';
import {
  OrderRequest,
  selectWalletAddressFrom,
  selectWalletAddressTo,
  useAppSelector,
} from '@bridge-portal/shared';
import { ConnectWalletToWrapper } from '@bridge-portal/wallet';
import { platform } from 'os';

const Transfer = () => {
  const [displayRouteTable, setDisplayRouteTable] = useState(false);
  const [open, setOpen] = useState(false);
  const [requestPayload, setRequestPayload] = useState({});
  const routeTableRef = useRef<HTMLElement | null>(null);
  const walletAddressFrom = useAppSelector(selectWalletAddressFrom);
  const walletAddressTo = useAppSelector(selectWalletAddressTo);

  const handleDisplayRouteTable = () => {
    if (walletAddressTo == null) {
      setOpen((prevState) => !prevState);
    } else {
      setDisplayRouteTable(true);
    }
  };

  const handleEntered = () => {
    if (routeTableRef.current) {
      routeTableRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  const buildOrderRequestPayload = () => {
    if (walletAddressFrom == null || walletAddressTo == null) {
      return null;
    }

    setRequestPayload({
      from: {
        address: walletAddressFrom,
        platform: 'Bsc',
      },
      to: {
        address: walletAddressTo,
        platform: 'Solana',
      },
      amount: '2',
      segments: [
        {
          from: 'Bsc',
          to: 'Solana',
        },
      ],
    });
  };

  console.log('requestPayload', requestPayload);

  return (
    <Box className="flex flex-column justify-center items-center">
      <Box
        sx={{
          borderRadius: '1rem',
          marginTop: '2rem',
          width: '40%',
        }}
      >
        <Box
          sx={{
            border: '1px solid #181818',
            padding: '2rem',
          }}
        >
          <Typography variant="h3">Bridge Swap</Typography>
          <SelectPair />
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <Button
            variant="outlined"
            sx={{
              backgroundColor: '#DDFF1F',
              color: '#0F1103',
              marginTop: '2rem',
              padding: '1rem 2rem 1rem 2rem',
              borderRadius: '0.75rem',
              borderColor: '#DDFF1F',
            }}
            onClick={handleDisplayRouteTable}
          >
            <Typography>Search Route</Typography>
            <ArrowOutwardIcon />
          </Button>
        </Box>
      </Box>
      <Collapse
        in={displayRouteTable}
        onEntered={handleEntered}
        sx={{
          marginBottom: '10rem',
        }}
      >
        <Box ref={routeTableRef} onClick={buildOrderRequestPayload}>
          <RouteTable />
          <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Button
              variant="outlined"
              sx={{
                backgroundColor: '#DDFF1F',
                color: '#0F1103',
                marginTop: '2rem',
                padding: '1rem 2rem 1rem 2rem',
                borderRadius: '0.75rem',
                borderColor: '#0F1103',
              }}
              onClick={handleDisplayRouteTable}
            >
              <Typography>Bridge</Typography>
            </Button>
          </Box>
        </Box>
      </Collapse>

      <ConnectWalletToWrapper open={open} handleClose={handleClose} />
    </Box>
  );
};

export { Transfer };
