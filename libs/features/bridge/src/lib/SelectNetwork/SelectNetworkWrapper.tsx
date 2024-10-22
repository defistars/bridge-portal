import { Button, Typography, Box } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import React, { SyntheticEvent, useRef, useState } from 'react';
import { NetworkListMenu } from './NetworkListMenu';

const SelectNetworkWrapper = () => {
  const [open, setOpen] = useState(false);
  const anchorRef = useRef<HTMLButtonElement>(null);

  const handleClick = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event: Event | SyntheticEvent) => {
    if (
      anchorRef.current &&
      anchorRef.current.contains(event.target as HTMLElement)
    ) {
      return;
    }

    setOpen(false);
  };

  return (
    <>
      <Button onClick={handleClick} ref={anchorRef}>
        <Typography>Select network</Typography>
        <KeyboardArrowDownIcon />
      </Button>
      <NetworkListMenu
        open={open}
        anchorRef={anchorRef}
        handleClose={handleClose}
      />
    </>
  );
};

export { SelectNetworkWrapper };
