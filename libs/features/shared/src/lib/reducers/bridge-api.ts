import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { OrderRequest, OrderResponse } from '@bridge-portal/common';

const HOST = 'http://localhost:3000';

export const bridgeApi = createApi({
  reducerPath: 'bridge-api',
  baseQuery: fetchBaseQuery({ baseUrl: `${HOST}/api/v1/` }),
  endpoints: (builder) => ({
    getOrderDetails: builder.query({
      query: (orderId) => `orders/${orderId}`,
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
