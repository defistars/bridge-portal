import { Box, Button } from '@mui/material';
import EastIcon from '@mui/icons-material/East';
import Checkbox from '@mui/material/Checkbox';
import { useEffect, useState } from 'react';
import {
  selectOrder,
  useAppSelector,
  useGetOrderDetailsQuery,
} from '@bridge-portal/shared';

const ProposedRouteLine = () => {
  const [orderId, setOrderId] = useState<string | null>(null);
  const order = useAppSelector(selectOrder);
  const { data: orderDetails } = useGetOrderDetailsQuery(orderId, {
    skip: !orderId,
    pollingInterval: 500,
  });

  useEffect(() => {
    if (order && order._id) {
      setOrderId(order._id);
    }
  }, [order]);

  useEffect(() => {
    if (orderDetails?.status === 'Completed') {
      setOrderId(null);
    }
  }, [orderDetails]);

  return (
    <Box
      sx={{
        backgroundColor: '#060705',
        border: '1px #181818',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '0.3rem',
        }}
      >
        <Checkbox sx={{ color: '#808080', marginRight: '0.5rem' }} />
        <span>BSC</span>
        <EastIcon fontSize="small" />
        <span>Solana</span>
      </Box>
      <div>$2</div>
      <Box
        sx={{
          display: 'flex',
          gap: '2rem',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div>~ 3 mins</div>
        <Button
          variant="outlined"
          sx={{
            color: '#1FFF26',
            backgroundColor: '#051103',
            borderColor: '#1FFF26',
            borderWidth: '1px',
            borderRadius: '0.75rem',
            padding: '0.625rem 1.25rem 0.625rem 1.25rem',
            '&:hover': {
              backgroundColor: '#1FFF26',
              color: '#ffffff',
            },
          }}
        >
          Best Price
        </Button>
      </Box>
      <Box>
        <span>{orderDetails?.segments[0]?.status}</span>
        <span>{orderDetails?.segments[0]?.destTxLink}</span>
        <span>{orderDetails?.segments[0]?.txLink}</span>
      </Box>
    </Box>
  );
};

export { ProposedRouteLine };
