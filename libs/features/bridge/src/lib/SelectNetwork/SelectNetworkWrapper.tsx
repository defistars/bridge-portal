import { Button, Typography, Box } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import React, { SyntheticEvent, useEffect, useRef, useState } from 'react';
import { NetworkListMenu, NetworkDisplay } from '@bridge-portal/bridge';
import { Pair } from '@bridge-portal/shared';
import { BridgeDirection } from '@bridge-portal/common';

interface NetworkWrapperProps {
  direction: BridgeDirection;
  pair: Pair | null;
  handleSelect: (pair: Pair, direction: BridgeDirection) => void;
}

const SelectNetworkWrapper: React.FC<NetworkWrapperProps> = ({
  direction,
  pair,
  handleSelect,
}) => {
  const [open, setOpen] = useState(false);
  const anchorRef = useRef<HTMLButtonElement>(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event: Event | SyntheticEvent) => {
    if (
      anchorRef.current &&
      anchorRef.current.contains(event.currentTarget as HTMLButtonElement)
    ) {
      return;
    }

    setOpen(false);
  };

  return (
    <>
      <Button onClick={handleToggle} ref={anchorRef}>
        {pair ? (
          <NetworkDisplay network={pair.network} />
        ) : (
          <Typography>Select network</Typography>
        )}

        {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
      </Button>
      <NetworkListMenu
        open={open}
        anchorRef={anchorRef}
        handleClose={handleClose}
        handleToggle={handleToggle}
        handleSelect={(selectedPair) => handleSelect(selectedPair, direction)}
      />
    </>
  );
};

export { SelectNetworkWrapper };
