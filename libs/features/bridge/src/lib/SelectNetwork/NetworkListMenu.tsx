import { ContentCut } from '@mui/icons-material';
import {
  ClickAwayListener,
  Grow,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  MenuList,
  Paper,
  Popper,
  Typography,
} from '@mui/material';
import React, { SyntheticEvent } from 'react';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import { Pair } from '@bridge-portal/shared';
import { networks } from '@bridge-portal/common';

interface NetworkListMenuProps {
  open: boolean;
  anchorRef: React.RefObject<HTMLButtonElement>;
  handleClose: (event: Event | SyntheticEvent) => void;
  handleToggle: () => void;
  handleSelect: (pair: Pair) => void;
}

const NetworkListMenu: React.FC<NetworkListMenuProps> = ({
  open,
  anchorRef,
  handleClose,
  handleToggle,
  handleSelect,
}) => {
  return (
    <Popper
      open={open}
      anchorEl={anchorRef.current}
      placement="bottom-start"
      transition
      disablePortal
    >
      {({ TransitionProps, placement }) => (
        <Grow
          {...TransitionProps}
          style={{
            transformOrigin:
              placement === 'bottom-start' ? 'left top' : 'left bottom',
          }}
        >
          <Paper
            sx={{
              backgroundColor: '#060705',
            }}
          >
            <ClickAwayListener onClickAway={handleClose}>
              <MenuList
                sx={{
                  maxHeight: '10rem',
                  width: '10rem',
                  overflow: 'auto',
                }}
              >
                {networks.map((icon, index) => (
                  <MenuItem
                    onClick={(event) => {
                      handleSelect({ network: icon.name });
                      handleClose(event);
                    }}
                    key={index}
                    sx={{ display: 'flex', gap: '10px' }}
                  >
                    <RadioButtonUncheckedIcon
                      sx={{
                        fontSize: '1rem',
                      }}
                    />
                    {icon.icon}
                    <Typography>{icon.name}</Typography>
                  </MenuItem>
                ))}
              </MenuList>
            </ClickAwayListener>
          </Paper>
        </Grow>
      )}
    </Popper>
  );
};

export { NetworkListMenu };
