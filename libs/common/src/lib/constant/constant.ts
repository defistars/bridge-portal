import { ICONS_MAP } from '@bridge-portal/svg-icons';

export const SUPPORTED_NETWORKS = ['BNB', 'SOL'] as const;

export type NetworkType = (typeof SUPPORTED_NETWORKS)[number];

export interface NetworkIcon {
  name: NetworkType;
  icon: JSX.Element;
}

export const networks: NetworkIcon[] = [
  { name: 'BNB', icon: ICONS_MAP['icon-bnb-network'] },
  { name: 'SOL', icon: ICONS_MAP['icon-sol-network'] },
];

export const networkIconsMap: Record<NetworkType, JSX.Element> =
  networks.reduce((accumulator, currValue) => {
    accumulator[currValue.name] = currValue.icon;
    return accumulator;
  }, {} as Record<NetworkType, JSX.Element>);

export type BridgeDirection = 'from' | 'to';
