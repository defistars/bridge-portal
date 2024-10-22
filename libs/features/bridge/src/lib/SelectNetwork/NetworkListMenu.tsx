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
import { ICONS_MAP } from '@bridge-portal/svg-icons';

interface NetworkListMenuProps {
  open: boolean;
  anchorRef: React.RefObject<HTMLButtonElement>;
  handleClose: (event: Event | SyntheticEvent) => void;
}

interface NetworkIcon {
  name: string;
  icon: JSX.Element;
}

const NetworkListMenu: React.FC<NetworkListMenuProps> = ({
  open,
  anchorRef,
  handleClose,
}) => {
  const networks: NetworkIcon[] = [
    { name: 'BNB', icon: ICONS_MAP['icon-bnb-network'] },
    { name: 'SOL', icon: ICONS_MAP['icon-sol-network'] },
  ];

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
                    onClick={handleClose}
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
