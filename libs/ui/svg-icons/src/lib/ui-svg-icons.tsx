import { SvgIcon, IconProps, SvgIconProps } from '@mui/material';
import DefiStarsLogoSvg from './brand/defistar-logo.svg?react';
import MetaMaskLogoSvg from './brand/metamask-icon.svg?react';
import CoinbaseLogoSvg from './brand/coinbase-icon.svg?react';
import PhantomLogoSvg from './brand/phantom-icon.svg?react';

export const DefiStarsIconLogo = (props: IconProps) => (
  <SvgIcon
    component={DefiStarsLogoSvg}
    {...props}
    viewBox="0 0 168 32"
    sx={{
      width: 168,
      height: 32,
    }}
  />
);

export const MetaMaskIconLogo = (props: IconProps) => (
  <SvgIcon
    component={MetaMaskLogoSvg}
    {...props}
    viewBox="0 0 64 65"
    sx={{
      width: 64,
      height: 65,
    }}
  />
);

export const CoinbaseIconLogo = (props: IconProps) => (
  <SvgIcon
    component={CoinbaseLogoSvg}
    {...props}
    viewBox="0 0 64 65"
    sx={{
      width: 64,
      height: 65,
    }}
  />
);

export const PhantomIconLogo = (props: IconProps) => (
  <SvgIcon
    component={PhantomLogoSvg}
    {...props}
    viewBox="0 0 64 64"
    sx={{
      width: 64,
      height: 64,
    }}
  />
);

export const ICONS_MAP = {
  'defistars-logo': <DefiStarsIconLogo />,
  'icon-metamask': <MetaMaskIconLogo />,
  'icon-coinbase': <CoinbaseIconLogo />,
  'icon-phantom': <PhantomIconLogo />,
};
