import { Box, Button, Typography } from '@mui/material';
import {
  RouteTableWrapper,
  SelectPair,
  SwapAmount,
} from '@bridge-portal/bridge';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import '../../styles.scss';
import { useRef, useState } from 'react';
import {
  selectOrder,
  selectWalletAddressTo,
  useAppSelector,
} from '@bridge-portal/shared';
import {
  BridgeConfirmation,
  ConnectWalletToWrapper,
} from '@bridge-portal/wallet';
import { OrderRequest, RouteDto } from '@bridge-portal/common';
import { routes as allRoutes } from '@bridge-portal/common';

const Transfer = () => {
  const [displayRouteTable, setDisplayRouteTable] = useState(false);
  const [openConnectWallet, setOpenConnectWallet] = useState(false);
  const [openBridgeConfirmation, setOpenBridgeConfirmation] = useState(false);
  const [requestPayload, setRequestPayload] = useState<OrderRequest | null>(
    null
  );
  const routeTableRef = useRef<HTMLElement | null>(null);
  const walletAddressTo = useAppSelector(selectWalletAddressTo);
  const [routes, setRoutes] = useState<Array<RouteDto>>(allRoutes);
  const [displayResult, setDisplayResult] = useState(false);
  const order = useAppSelector(selectOrder);
  const [selectedRouteIdx, setSelectedRouteIdx] = useState<number | null>(null);

  const handleDisplayRouteTable = () => {
    if (walletAddressTo == null) {
      setOpenConnectWallet((prevState) => !prevState);
    } else {
      setRoutes(allRoutes);
      setDisplayRouteTable(true);
      setDisplayResult(false);
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

  const handleCloseConnectWallet = () => {
    setOpenConnectWallet(false);
  };

  const handleCloseBridgeConfirmation = () => {
    setOpenBridgeConfirmation(false);

    if (selectedRouteIdx != null) {
      setRoutes(allRoutes.slice(selectedRouteIdx, selectedRouteIdx + 1));
      setDisplayResult(true);
    }
  };

  const handleBridge = (payload: OrderRequest, routeIdx: number) => {
    setRequestPayload(payload);
    setSelectedRouteIdx(routeIdx);
    setOpenBridgeConfirmation(true);
  };

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
          <SwapAmount />
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

      <RouteTableWrapper
        routes={routes}
        displayRouteTable={displayRouteTable}
        displayResult={displayResult}
        routeTableRef={routeTableRef}
        handleEntered={handleEntered}
        handleBridge={handleBridge}
      />

      <ConnectWalletToWrapper
        open={openConnectWallet}
        handleClose={handleCloseConnectWallet}
      />

      <BridgeConfirmation
        open={openBridgeConfirmation}
        handleClose={handleCloseBridgeConfirmation}
        data={requestPayload}
      />
    </Box>
  );
};

export { Transfer };
