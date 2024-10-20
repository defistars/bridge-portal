import '../styles.scss';
import { Button, Box, Typography } from '@mui/material';
import { ICONS_MAP } from '@bridge-portal/svg-icons';
import { ConnectWalletWrapper } from '@bridge-portal/wallet';

const HomePage = () => {
  return (
    <div>
      <nav className="container flex justify-between">
        <a href="/" className="logo">
          {ICONS_MAP['defistars-logo']}
        </a>
        <ConnectWalletWrapper />
      </nav>

      <Box
        component="main"
        className="container flex flex-column justify-center items-center"
      >
        <Typography variant="h1">Bridging, at Lightspeed</Typography>
        <Typography variant="h1">Because DeFi doesn't wait.</Typography>
        <Typography variant="subtitle1">
          Blazingly fast bridging for anyone that likes to be one step ahead
        </Typography>
        <Button variant="outlined">Bridge Now</Button>
      </Box>

      <footer className="flex">
        <div>Logo1</div>
        <div>Logo2</div>
        <div>Logo3</div>
        <div>Logo4</div>
        <div>Logo5</div>
      </footer>
    </div>
  );
};

export { HomePage };
