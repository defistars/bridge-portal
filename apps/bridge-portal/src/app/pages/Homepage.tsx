import { useNavigate } from 'react-router-dom';
import '../../styles.scss';
import { BaseDiv, HomepageContainer } from '../layout/Container';
import { Button, Typography } from '@mui/material';
import AppHeader from '../layout/AppHeader';
import AppFooter from '../layout/AppFooter';
import { HomepageBackground } from '../layout/Background';
import { LightningIcon } from '@bridge-portal/svg-icons';
import { BridgeBtn } from '@bridge-portal/theme';

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <BaseDiv>
      <AppHeader />
      <HomepageContainer>
        <Typography variant="h2">
          Bridging, at <LightningIcon className="lightning-icon" />{' '}
          <span className="title-highlight">Lightspeed</span> <br /> Because
          DeFi doesn't wait.
        </Typography>
        <Typography variant="subtitle1" className="subtitle">
          Ultra-fast bridging for anyone who likes to stay one step ahead.
        </Typography>
        <BridgeBtn onClick={() => navigate('/bridge')}>Bridge Now</BridgeBtn>
      </HomepageContainer>
      <AppFooter />
      <HomepageBackground />
    </BaseDiv>
  );
};

export { HomePage };
