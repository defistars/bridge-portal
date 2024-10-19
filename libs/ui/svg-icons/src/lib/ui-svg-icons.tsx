import styles from './svg-icons.module.scss';
import DefiStarsLogoSvg from './brand/defistar-logo.svg';
import { SvgIcon, SvgIconProps } from '@mui/material';

export const DefiStarsIconLogo = (props: SvgIconProps) => (
  <SvgIcon component={DefiStarsLogoSvg} {...props} viewBox="0 0 24 24" />
);

export const ICONS_MAP = {
  'defistars-logo': <DefiStarsIconLogo />,
};
