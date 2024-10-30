import { useAccount } from 'wagmi';
import { useEffect, useState } from 'react';
import { ConnectWalletModal } from '../ConnectWallet/ConnectWalletModal';
import {
  selectWalletAddressFrom,
  selectWalletAddressTo,
  setWalletAddress,
  useAppDispatch,
  useAppSelector,
} from '@bridge-portal/shared';

interface ConnectWalletToWrapperProps {
  open: boolean;
  handleClose: () => void;
}

const ConnectWalletToWrapper: React.FC<ConnectWalletToWrapperProps> = ({
  open,
  handleClose,
}) => {
  const { address } = useAccount();
  const walletAddressFrom = useAppSelector(selectWalletAddressFrom);
  const walletAddressTo = useAppSelector(selectWalletAddressTo);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (
      address &&
      walletAddressFrom &&
      address !== walletAddressFrom &&
      walletAddressTo == null
    ) {
      dispatch(setWalletAddress({ addressTo: address }));
      handleClose();
    }
  }, [address, dispatch, walletAddressFrom, walletAddressTo, handleClose]);

  return <ConnectWalletModal open={open} handleClose={handleClose} />;
};

export { ConnectWalletToWrapper };
