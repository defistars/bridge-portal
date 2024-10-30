import { Button } from '@mui/material';
import { useAccount } from 'wagmi';
import { useEffect, useState } from 'react';
import './connect-wallet-wrapper.scss';
import {
  selectWalletAddressFrom,
  setWalletAddress,
  useAppSelector,
  useAppDispatch,
} from '@bridge-portal/shared';
import { shortenAddress } from '@bridge-portal/utils';
import { ConnectWalletModal } from './ConnectWalletModal';

const ConnectWalletWrapper: React.FC = () => {
  const [open, setOpen] = useState(false);
  const { address } = useAccount();
  const dispatch = useAppDispatch();
  const walletAddressFrom = useAppSelector(selectWalletAddressFrom);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    if (address && walletAddressFrom == null) {
      dispatch(setWalletAddress({ addressFrom: address }));
      setOpen(false);
    }
  }, [address, dispatch, walletAddressFrom]);

  return (
    <div>
      {walletAddressFrom ? (
        <Button
          sx={{
            backgroundColor: '#141707',
            color: '#DDFF1F',
            marginTop: '2rem',
            padding: '0.625rem 1.25rem 0.625rem 1.25rem',
            borderRadius: '0.75rem',
            borderColor: '#000000',
          }}
        >
          {shortenAddress(walletAddressFrom)}
        </Button>
      ) : (
        <Button variant="outlined" onClick={handleClickOpen}>
          Connect Wallet
        </Button>
      )}
      <ConnectWalletModal open={open} handleClose={handleClose} />
    </div>
  );
};

export { ConnectWalletWrapper };
