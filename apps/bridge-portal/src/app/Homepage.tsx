import '../styles.scss';
import { Button, Box, Typography, SvgIcon } from '@mui/material';
import { ICONS_MAP } from '@bridge-portal/svg-icons';
import { ConnectWalletWrapper } from './ConnectWalletWrapper';

const HomePage = () => {
  return (
    <div>
      <nav className="container flex justify-between">
        <a href="/" className="logo">
          <SvgIcon>
            <svg
              width="37"
              height="32"
              viewBox="0 0 37 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M30.3125 13.7957C31.5299 15.0131 31.5299 16.9869 30.3125 18.2043L18.2043 30.3125C16.9869 31.5299 15.0131 31.5299 13.7957 30.3125L1.68748 18.2043C0.470103 16.9869 0.470105 15.0131 1.68748 13.7957L13.7957 1.68748C15.0131 0.470105 16.9869 0.470105 18.2043 1.68748L30.3125 13.7957Z"
                stroke="white"
                strokeWidth="1.5489"
              />
              <path
                d="M34.8867 13.7957C36.1041 15.0131 36.1041 16.9869 34.8867 18.2043L22.7785 30.3125C21.5611 31.5299 19.5873 31.5299 18.37 30.3125L6.2617 18.2043C5.04433 16.9869 5.04433 15.0131 6.2617 13.7957L18.37 1.68748C19.5873 0.470105 21.5611 0.470105 22.7785 1.68748L34.8867 13.7957Z"
                fill="white"
                stroke="white"
                strokeWidth="1.5489"
              />
              <path
                d="M29.4485 15.6218C29.8822 15.6859 29.8822 16.3115 29.4485 16.3756L22.9859 17.3301C22.8198 17.3546 22.6893 17.4851 22.6647 17.6513L21.7102 24.1138C21.6461 24.5476 21.0205 24.5476 20.9565 24.1138L20.0019 17.6513C19.9774 17.4851 19.8469 17.3546 19.6807 17.3301L13.2182 16.3756C12.7845 16.3115 12.7845 15.6859 13.2182 15.6218L19.6807 14.6673C19.8469 14.6428 19.9774 14.5123 20.0019 14.3461L20.9565 7.88355C21.0205 7.44983 21.6461 7.44983 21.7102 7.88355L22.6647 14.3461C22.6893 14.5123 22.8198 14.6428 22.9859 14.6673L29.4485 15.6218Z"
                fill="black"
              />
            </svg>
          </SvgIcon>
          <span>
            <span className="yellow">DEFI</span>
            <span>STARS</span>
          </span>
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