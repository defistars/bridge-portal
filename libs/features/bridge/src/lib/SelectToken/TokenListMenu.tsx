import {
  ClickAwayListener,
  Grow,
  MenuItem,
  MenuList,
  Paper,
  Popper,
  Typography,
} from '@mui/material';
import React, { SyntheticEvent } from 'react';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import { Pair } from '@bridge-portal/shared';
import { NetworkType, platformList } from '@bridge-portal/common';

interface TokenListMenuProps {
  open: boolean;
  anchorRef: React.RefObject<HTMLButtonElement>;
  selectedPlatform: NetworkType | undefined;
  handleClose: (event: Event | SyntheticEvent) => void;
  handleToggle: () => void;
  handleSelect: (pair: Pair) => void;
}

const TokenListMenu: React.FC<TokenListMenuProps> = ({
  open,
  anchorRef,
  selectedPlatform,
  handleClose,
  handleToggle,
  handleSelect,
}) => {
  const tokenList = selectedPlatform ? platformList[selectedPlatform] : [];

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
                {tokenList.map((icon, index) => (
                  <MenuItem
                    onClick={(event) => {
                      handleSelect({
                        network: selectedPlatform,
                        token: icon.name,
                      });
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

export { TokenListMenu };
