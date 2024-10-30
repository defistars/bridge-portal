import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export interface AddressInfo {
  address: string;
  platform: string;
}

export interface Segment {
  from: string;
  to: string;
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
}

const HOST = 'http://localhost:3000';

export const bridgeApi = createApi({
  reducerPath: 'bridge-api',
  baseQuery: fetchBaseQuery({ baseUrl: `${HOST}//api/v1/` }),
  endpoints: (builder) => ({
    getOrderDetails: builder.query({
      query: ({ orderId }) => `orders/${orderId}`,
    }),
    createOrder: builder.mutation<OrderResponse, OrderRequest>({
      query: (OrderRequest) => ({
        url: `orders`,
        method: 'POST',
        body: OrderRequest,
      }),
    }),
  }),
});

export const { useGetOrderDetailsQuery, useCreateOrderMutation } = bridgeApi;
