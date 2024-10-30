import { Button, Typography } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import React, { SyntheticEvent, useRef, useState } from 'react';
import { TokenListMenu, TokenDisplay } from '@bridge-portal/bridge';
import { Pair } from '@bridge-portal/shared';
import { BridgeDirection } from '@bridge-portal/common';

interface TokenWrapperProps {
  direction: BridgeDirection;
  pair: Pair | null;
  handleSelect: (pair: Pair, direction: BridgeDirection) => void;
}

const SelectTokenWrapper: React.FC<TokenWrapperProps> = ({
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
        {pair?.token ? (
          <TokenDisplay token={pair.token} />
        ) : (
          <Typography>Select token</Typography>
        )}

        {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
      </Button>
      <TokenListMenu
        open={open}
        anchorRef={anchorRef}
        selectedPlatform={pair?.network}
        handleClose={handleClose}
        handleToggle={handleToggle}
        handleSelect={(selectedPair) => handleSelect(selectedPair, direction)}
      />
    </>
  );
};

export { SelectTokenWrapper };
