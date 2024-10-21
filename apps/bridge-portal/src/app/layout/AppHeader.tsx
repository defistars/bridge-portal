import { AppBar, Box, Button, Container, Toolbar } from '@mui/material';
import { ConnectWalletWrapper } from '@bridge-portal/wallet';
import { ICONS_MAP } from '@bridge-portal/svg-icons';
import '../../styles.scss';

const AppHeader = () => {
  return (
    <AppBar position="static" sx={{ mt: '1rem' }}>
      <Container>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Button href="/" className="logo">
            {ICONS_MAP['defistars-logo']}
          </Button>
          <Box>
            <ConnectWalletWrapper />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default AppHeader;
