import { Box, Button, Modal, Typography } from '@mui/material';
import React from 'react';
import './bridge-confirmation.scss';
import {
  OrderRequest,
  OrderState,
  setOrder,
  useAppDispatch,
} from '@bridge-portal/shared';
import { useCreateOrderMutation } from '@bridge-portal/shared';

interface BridgeConfirmationProps {
  open: boolean;
  handleClose: () => void;
  data: OrderRequest | null;
}

const BridgeConfirmation: React.FC<BridgeConfirmationProps> = ({
  open,
  handleClose,
  data,
}) => {
  const [createOrder] = useCreateOrderMutation();
  const dispatch = useAppDispatch();

  const handleCreateOrder = async () => {
    if (data == null) return;

    const result = await createOrder(data);

    if ('data' in result) {
      dispatch(setOrder(result.data as OrderState));
    }

    handleClose();
  };

  const customBackdropStyle = {
    backdropFilter: 'blur(22.4px)',
  };

  const routes = data?.segments
    .map((segment) => `${segment.from} to ${segment.to}`)
    .join(', ');

  return (
    <Modal
      open={open}
      onClose={handleClose}
      slotProps={{
        backdrop: {
          sx: customBackdropStyle,
        },
      }}
    >
      <Box className="bridge-confirmation-container">
        <Typography variant="h3">Bridge Confirmation</Typography>
        <Typography variant="body1" sx={{ marginTop: '1rem' }}>
          Please check carefully your information before proceed!
        </Typography>
        <Box
          sx={{
            marginTop: '2rem',
          }}
        >
          <Typography>From platform: {data?.from.platform}</Typography>
          <Typography>
            From address:{' '}
            <span style={{ color: 'red' }}>{data?.from.address}</span>
          </Typography>
          <Typography>To platform: {data?.to.platform}</Typography>
          <Typography>
            To address: <span style={{ color: 'red' }}>{data?.to.address}</span>
          </Typography>
          <Typography>Amount: ${data?.amount}</Typography>
          <Typography>Route: {routes}</Typography>
        </Box>

        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
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
            onClick={handleCreateOrder}
          >
            Confirm
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export { BridgeConfirmation };
