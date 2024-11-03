import {
  Box,
  Button,
  Typography,
  Collapse,
  Grid2,
  Link,
  Fab,
  CircularProgress,
  Paper,
} from '@mui/material';
import { RouteTable } from '@bridge-portal/bridge';
import Checkbox from '@mui/material/Checkbox';
import CheckIcon from '@mui/icons-material/Check';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import CloseIcon from '@mui/icons-material/Close';
import { OrderRequest, OrderResponse, RouteDto } from '@bridge-portal/common';
import { getButtonTagColor, buildRequestPayload } from '@bridge-portal/utils';
import {
  buildRouteFromSegments,
  useAppSelector,
  selectWalletAddressFrom,
  selectOrder,
  useGetOrderDetailsQuery,
  selectRequestAmount,
} from '@bridge-portal/shared';
import { useEffect, useState } from 'react';
import { bridgeApi } from '@bridge-portal/shared';

const HARDCODED_TO_ADDRESS = '8FZEQSSXeuHQoT2MKaSAJyFCysP6hSXLYhiijmfP7jjE';

interface RouteTableWrapperProps {
  routes: RouteDto[];
  displayRouteTable: boolean;
  displayResult: boolean;
  routeTableRef: React.MutableRefObject<HTMLElement | null>;
  handleEntered: () => void;
  handleBridge: (payload: OrderRequest, idx: number) => void;
}

const RouteTableWrapper: React.FC<RouteTableWrapperProps> = ({
  routes,
  displayRouteTable,
  displayResult,
  routeTableRef,
  handleEntered,
  handleBridge,
}) => {
  const walletAddressFrom = useAppSelector(selectWalletAddressFrom);
  const [selectedRouteIdx, setSelectedRouteIdx] = useState<number | null>(null);

  const handleCheckboxChange = (index: number, isChecked: boolean) => {
    isChecked && setSelectedRouteIdx(index);
  };

  const [orderId, setOrderId] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const order = useAppSelector(selectOrder);
  const requestAmount = useAppSelector(selectRequestAmount) || '';
  const { data: orderDetails } = useGetOrderDetailsQuery(orderId, {
    skip: !orderId,
    pollingInterval: 5000,
  });

  useEffect(() => {
    if (order && order._id) {
      setOrderId(order._id);
      setLoading(true);
    }
  }, [order]);

  useEffect(() => {
    if (orderDetails?.status === 'Completed') {
      setOrderId(null);
      setSuccess(true);
      setLoading(false);
    } else if (orderDetails?.status === 'Failed') {
      setOrderId(null);
      setSuccess(false);
      setLoading(false);
    }
  }, [orderDetails]);

  return (
    <Collapse
      in={displayRouteTable}
      onEntered={handleEntered}
      sx={{
        marginTop: '5rem',
        marginBottom: '10rem',
        width: '60rem',
      }}
    >
      <Box
        ref={routeTableRef}
        sx={{
          maxHeight: '50rem',
          overflowY: 'auto',
        }}
      >
        {/* Header */}
        <Grid2 container spacing={2}>
          <Grid2 size={4}>
            <Typography variant="body1" align="left" fontWeight={700}>
              Route
            </Typography>
          </Grid2>
          <Grid2 size={4}>
            <Typography variant="body1" align="center" fontWeight={700}>
              Cost
            </Typography>
          </Grid2>
          <Grid2 size={4}>
            <Typography variant="body1" align="right" fontWeight={700}>
              Time
            </Typography>
          </Grid2>
        </Grid2>

        {/* Rows */}
        <Grid2 container direction="column" gap={1} sx={{ mt: '2rem' }}>
          {routes.map((route, idx) => (
            <Grid2
              key={idx}
              container
              spacing={2}
              flexGrow={1}
              sx={{
                border: '1px solid #181818',
                borderRadius: '2px',
                display: 'flex',
                alignItems: 'center',
                padding: '10px',
              }}
            >
              <Grid2 size={4}>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  <Checkbox
                    sx={{ color: '#808080', marginRight: '0.5rem' }}
                    onChange={(event) =>
                      handleCheckboxChange(idx, event.target.checked)
                    }
                  />
                  {buildRouteFromSegments(route.segments)}
                </Box>
              </Grid2>
              <Grid2 size={4}>
                <Typography align="center">{route.cost}</Typography>
              </Grid2>
              <Grid2
                container
                size={4}
                sx={{
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Grid2 size={4}>
                  <Typography align="right" sx={{ pr: '0.5rem' }}>
                    {route.time}
                  </Typography>
                </Grid2>
                <Grid2 size={8}>
                  <Box
                    sx={{
                      display: 'inline-block',
                      border: '1px solid #ccc',
                      borderRadius: '0.75rem',
                      borderColor: getButtonTagColor(route.tag),
                      color: getButtonTagColor(route.tag),
                      padding: '8px 16px',
                    }}
                  >
                    <Typography align="center">{route.tag}</Typography>
                  </Box>
                </Grid2>
              </Grid2>
            </Grid2>
          ))}
        </Grid2>
        {displayResult ? (
          <Paper
            sx={{
              backgroundColor: '#060705',
              marginTop: '2rem',
            }}
          >
            <Typography variant="h5" align="center" sx={{ mb: '1rem' }}>
              Result
            </Typography>

            <Box>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
              >
                {loading && (
                  <>
                    <CircularProgress
                      size={48}
                      sx={{
                        color: '#DDFF1F',
                        zIndex: 1,
                      }}
                    />
                    <Typography variant="body1">Processing...</Typography>
                  </>
                )}
                {!loading && !success && (
                  <>
                    <Fab sx={{ bgcolor: 'red', color: '#FFFFFF' }}>
                      <CloseIcon />
                    </Fab>
                    <Typography variant="body1">
                      Transaction status: {orderDetails?.status}
                    </Typography>
                  </>
                )}
                {!loading && success && (
                  <>
                    <Fab sx={{ bgcolor: 'green', color: '#FFFFFF' }}>
                      <CheckIcon />
                    </Fab>
                    <Typography variant="body1">
                      Transaction status: {orderDetails?.status}
                    </Typography>
                  </>
                )}
              </Box>

              <Typography variant="h6">Details</Typography>
              {orderDetails?.segments.map((segment, idx) => (
                <Box key={idx} sx={{ mb: '1rem' }}>
                  <Typography variant="body1">
                    {`${segment.from} to ${segment.to}: ${
                      segment.status ? segment.status : 'Not start'
                    }`}
                  </Typography>
                  {segment.status === 'Completed' && (
                    <>
                      <Link
                        href={orderDetails?.segments[0]?.destTxLink}
                        underline="none"
                        target="_blank"
                        rel="noopener"
                      >
                        <Button
                          variant="outlined"
                          sx={{
                            backgroundColor: 'green',
                            color: '#FFFFFF',
                            padding: '0.3rem 1rem',
                            mr: '1rem',
                            borderRadius: '0.75rem',
                            borderColor: 'green',
                          }}
                        >
                          Destination Transaction
                        </Button>
                      </Link>
                      <Link
                        href={orderDetails?.segments[0]?.txLink}
                        underline="none"
                        target="_blank"
                        rel="noopener"
                      >
                        <Button
                          variant="outlined"
                          sx={{
                            backgroundColor: 'green',
                            color: '#FFFFFF',
                            padding: '0.3rem 1rem',
                            borderRadius: '0.75rem',
                            borderColor: 'green',
                          }}
                        >
                          Transaction
                        </Button>
                      </Link>
                    </>
                  )}
                </Box>
              ))}
            </Box>
          </Paper>
        ) : (
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
              onClick={() => {
                if (selectedRouteIdx == null) {
                  console.log('select route!');
                  return;
                }

                if (!walletAddressFrom) {
                  console.log('select walletAddressFrom!');
                  return;
                }

                handleBridge(
                  buildRequestPayload(
                    routes[selectedRouteIdx],
                    requestAmount,
                    walletAddressFrom,
                    HARDCODED_TO_ADDRESS
                  ),
                  selectedRouteIdx
                );
              }}
            >
              <Typography>Bridge</Typography>
            </Button>
          </Box>
        )}
      </Box>
    </Collapse>
  );
};

export { RouteTableWrapper };
