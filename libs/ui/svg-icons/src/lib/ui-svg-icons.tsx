import { SvgIcon, IconProps } from '@mui/material';
import DefiStarsLogoSvg from './brand/defistar-logo.svg?react';
import MetaMaskLogoSvg from './brand/metamask-icon.svg?react';
import CoinbaseLogoSvg from './brand/coinbase-icon.svg?react';
import PhantomLogoSvg from './brand/phantom-icon.svg?react';
import BnbChainSvg from './brand/bnb-chain.svg?react';
import WalletSvg from './brand/wallet.svg?react';
import MarginFiFullSvg from './brand/marginfi-full.svg?react';
import BirdEyeSvg from './brand/bird-eye.svg?react';
import RockawaySvg from './brand/rockaway.svg?react';
import BnbChainFullSvg from './brand/bnb-chain-full.svg?react';
import JupiterSvg from './brand/jupiter.svg?react';
import SolflareSvg from './brand/solflare.svg?react';
import MarginFiSvg from './brand/marginfi.svg?react';
import BnbNetworkSmallSvg from './small-icons/bnb-network-icon.svg?react';
import SolNetworkSmallSvg from './small-icons/sol-network-icon.svg?react';

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

export const BnbChainIcon = (props: IconProps) => (
  <SvgIcon
    component={BnbChainSvg}
    {...props}
    viewBox="0 0 147 28"
    sx={{
      width: 147,
      height: 28,
    }}
  />
);

export const WalletIcon = (props: IconProps) => (
  <SvgIcon
    component={WalletSvg}
    {...props}
    viewBox="0 0 133 28"
    sx={{
      width: 133,
      height: 28,
    }}
  />
);

export const MarginFiFullIcon = (props: IconProps) => (
  <SvgIcon
    component={MarginFiFullSvg}
    {...props}
    viewBox="0 0 135 28"
    sx={{
      width: 135,
      height: 28,
    }}
  />
);

export const BirdEyeIcon = (props: IconProps) => (
  <SvgIcon
    component={BirdEyeSvg}
    {...props}
    viewBox="0 0 115 28"
    sx={{
      width: 115,
      height: 28,
    }}
  />
);

export const RockAwayIcon = (props: IconProps) => (
  <SvgIcon
    component={RockawaySvg}
    {...props}
    viewBox="0 0 173 28"
    sx={{
      width: 173,
      height: 28,
    }}
  />
);

export const BnbChainFullIcon = (props: IconProps) => (
  <SvgIcon
    component={BnbChainFullSvg}
    {...props}
    viewBox="0 0 160 28"
    sx={{
      width: 160,
      height: 28,
    }}
  />
);

export const JupiterIcon = (props: IconProps) => (
  <SvgIcon
    component={JupiterSvg}
    {...props}
    viewBox="0 0 88 28"
    sx={{
      width: 88,
      height: 28,
    }}
  />
);

export const SolflareIcon = (props: IconProps) => (
  <SvgIcon
    component={SolflareSvg}
    {...props}
    viewBox="0 0 84 28"
    sx={{
      width: 84,
      height: 28,
    }}
  />
);

export const MarginFiIcon = (props: IconProps) => (
  <SvgIcon
    component={MarginFiSvg}
    {...props}
    viewBox="0 0 124 28"
    sx={{
      width: 124,
      height: 28,
    }}
  />
);

export const BnbNetworkSmallIcon = (props: IconProps) => (
  <SvgIcon
    component={BnbNetworkSmallSvg}
    {...props}
    viewBox="0 0 24 24"
    sx={{
      width: 24,
      height: 24,
    }}
  />
);

export const SolNetworkSmallIcon = (props: IconProps) => (
  <SvgIcon
    component={SolNetworkSmallSvg}
    {...props}
    viewBox="0 0 24 24"
    sx={{
      width: 24,
      height: 24,
    }}
  />
);

export const ICONS_MAP = {
  'defistars-logo': <DefiStarsIconLogo />,
  'icon-metamask': <MetaMaskIconLogo />,
  'icon-coinbase': <CoinbaseIconLogo />,
  'icon-phantom': <PhantomIconLogo />,
  'icon-bnb-chain': <BnbChainIcon />,
  'icon-wallet': <WalletIcon />,
  'icon-marginfi-full': <MarginFiFullIcon />,
  'icon-birdeye': <BirdEyeIcon />,
  'icon-rockaway': <RockAwayIcon />,
  'icon-bnb-chain-full': <BnbChainFullIcon />,
  'icon-jupiter': <JupiterIcon />,
  'icon-solflare': <SolflareIcon />,
  'icon-marginfi': <MarginFiIcon />,
  'icon-bnb-network': <BnbNetworkSmallIcon />,
  'icon-sol-network': <SolNetworkSmallIcon />,
};

export type IconKeys = keyof typeof ICONS_MAP;
