import { Box } from '@mui/material';
import { IconKeys, ICONS_MAP } from '@bridge-portal/svg-icons';
import React from 'react';

const AppFooter = () => {
  const logos: IconKeys[] = [
    'icon-bnb-chain',
    'icon-wallet',
    'icon-marginfi-full',
    'icon-birdeye',
    'icon-rockaway',
    'icon-bnb-chain-full',
    'icon-jupiter',
    'icon-solflare',
    'icon-marginfi',
  ];

  const footerIcons = logos.map((logo) => ICONS_MAP[logo]);

  return (
    <Box
      component="footer"
      sx={{
        display: 'flex',
        justifyContent: 'space-evenly',
        position: 'relative',
        gap: '10px',
        width: '100vw',
        left: '50%',
        transform: 'translateX(-50%)',
        flexWrap: 'wrap',
        marginBottom: '2rem',
      }}
    >
      {footerIcons.map((icon, index) => (
        <Box key={index}>{icon}</Box>
      ))}
    </Box>
  );
};

export default AppFooter;
