import { ICONS_MAP } from '@bridge-portal/svg-icons';

export const SUPPORTED_NETWORKS = ['BSC', 'Solana'] as const;
export const SUPPORTED_TOKENS = ['USDT'] as const;

export type NetworkType = (typeof SUPPORTED_NETWORKS)[number];
export type TokenType = (typeof SUPPORTED_TOKENS)[number];

export type NetworkIcon = {
  name: NetworkType;
  icon: JSX.Element;
};

export type TokenIcon = {
  name: TokenType;
  icon: JSX.Element;
};

export type PlatformListType = {
  [key in NetworkType]: TokenIcon[];
};

export const networks: NetworkIcon[] = [
  { name: 'BSC', icon: ICONS_MAP['icon-bnb-network'] },
  { name: 'Solana', icon: ICONS_MAP['icon-sol-network'] },
];

export const tokenList: TokenIcon[] = [
  { name: 'USDT', icon: ICONS_MAP['icon-usdt-token'] },
];

export const platformList: PlatformListType = {
  BSC: [{ name: 'USDT', icon: ICONS_MAP['icon-usdt-token'] }],
  Solana: [{ name: 'USDT', icon: ICONS_MAP['icon-usdt-token'] }],
};

export const networkIconsMap: Record<NetworkType, JSX.Element> =
  networks.reduce((accumulator, currValue) => {
    accumulator[currValue.name] = currValue.icon;
    return accumulator;
  }, {} as Record<NetworkType, JSX.Element>);

export const tokenIconsMap: Record<TokenType, JSX.Element> = tokenList.reduce(
  (accumulator, currValue) => {
    accumulator[currValue.name] = currValue.icon;
    return accumulator;
  },
  {} as Record<TokenType, JSX.Element>
);

export type BridgeDirection = 'from' | 'to';
export const directions: BridgeDirection[] = ['from', 'to'] as const;

export interface Segment {
  from: string;
  to: string;
}

export interface SegmentResponse extends Segment {
  destTxLink: string;
  status: string;
  txLink: string;
}

export interface RouteDto {
  segments: Segment[];
  cost: string;
  time: string;
  tag: string;
}

export const routes: RouteDto[] = [
  {
    segments: [
      {
        from: 'BSC',
        to: 'Solana',
      },
    ],
    cost: '$1',
    time: '1 min',
    tag: 'Best Price',
  },
  {
    segments: [
      {
        from: 'BSC',
        to: 'Binance',
      },
      {
        from: 'Binance',
        to: 'Solana',
      },
    ],
    cost: '$2',
    time: '0.5 min',
    tag: 'Best Time',
  },
];

export interface AddressInfo {
  address: string;
  platform: string;
}

export interface OrderRequest {
  from: AddressInfo;
  to: AddressInfo;
  amount: string;
  segments: Segment[];
}

export interface OrderResponse extends OrderRequest {
  _id: string;
  status: string;
  segments: SegmentResponse[];
}
