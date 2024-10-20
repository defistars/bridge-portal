import { Button, Modal, Typography, Box } from '@mui/material';
import { useAccount } from 'wagmi';
import { useEffect, useState } from 'react';
import { WalletOptions } from '@bridge-portal/wallet/WalletOptions/WalletOptions';
import './connect-wallet-wrapper.scss';
import {
  selectWalletAddress,
  setWalletAddress,
  useAppSelector,
  useAppDispatch,
} from '@bridge-portal/shared';
import { shortenAddress } from '@bridge-portal/utils';

const ConnectWalletWrapper: React.FC = () => {
  const [open, setOpen] = useState(false);
  const { address } = useAccount();
  const dispatch = useAppDispatch();
  const walletAddress = useAppSelector(selectWalletAddress);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    if (address) {
      dispatch(setWalletAddress(address));
      setOpen(false);
    }
  }, [address, dispatch]);

  const customBackdropStyle = {
    backdropFilter: 'blur(22.4px)',
  };

  return (
    <div>
      {walletAddress ? (
        <Typography variant="body1" className="yellow">
          {shortenAddress(walletAddress)}
        </Typography>
      ) : (
        <Button variant="outlined" onClick={handleClickOpen}>
          Connect Wallet
        </Button>
      )}
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
    </div>
  );
};

export { ConnectWalletWrapper };
