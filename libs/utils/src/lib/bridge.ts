import { OrderRequest, RouteDto } from '@bridge-portal/common';

export const buildRequestPayload = (
  route: RouteDto,
  amount: string,
  fromAddress: string,
  toAddress: string
): OrderRequest => {
  return {
    from: {
      address: fromAddress,
      platform: 'Bsc',
    },
    to: {
      address: toAddress,
      platform: 'Solana',
    },
    amount,
    segments: route.segments,
  };
};
