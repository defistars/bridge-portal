import { styled } from '@mui/material';

const Gradient = styled('div')(({ theme }) => ({
  background:
    'linear-gradient(180deg, rgba(221, 255, 31, 0.4) -19.79%, rgba(133, 153, 19, 0) 79.39%)',
  filter: 'blur(193.5px)',
  width: '100vw',
  height: '600px',
  borderRadius: '50%',
  transform: 'translateY(70%)',
  position: 'absolute',
  bottom: '0',
  left: 0,
  zIndex: -1,
  pointerEvents: 'none',
}));

const Texture = styled('div')(({ theme }) => ({
  backgroundImage: `url('/texture.png')`,
  width: '100vw',
  height: '100vh',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  position: 'absolute',
  opacity: '5%',
  top: 0,
  left: 0,
  zIndex: -2,
}));

const BackgroundImage = styled('div')(({ theme }) => ({
  background: `linear-gradient(0deg, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url('/background-image.jpeg')`,
  width: '100vw',
  height: '100vh',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  position: 'absolute',
  top: 0,
  left: 0,
  zIndex: -3,
}));

const HomepageBackground = () => {
  return (
    <div>
      <Gradient />
      <Texture />
      <BackgroundImage />
    </div>
  );
};

export { HomepageBackground };
