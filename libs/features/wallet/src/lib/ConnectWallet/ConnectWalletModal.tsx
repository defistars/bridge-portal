import { Modal, Typography, Box } from '@mui/material';
import { WalletOptions } from '@bridge-portal/wallet/WalletOptions/WalletOptions';
import React from 'react';

interface ConnectWalletModalProps {
  open: boolean;
  handleClose: () => void;
}

const ConnectWalletModal: React.FC<ConnectWalletModalProps> = ({
  open,
  handleClose,
}) => {
  const customBackdropStyle = {
    backdropFilter: 'blur(22.4px)',
  };

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
      <Box className="connect-wallet-container">
        <Typography variant="h2">Connect Wallet</Typography>
        <Typography variant="body1">
          Start by connecting with one of the wallets below. Be sure to store
          your private keys or seed phrase securely. Never share them with
          anyone.
        </Typography>
        <WalletOptions />
      </Box>
    </Modal>
  );
};

export { ConnectWalletModal };
