import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store/store';

export interface OrderRequestState {
  amount?: string;
}

const initialState: OrderRequestState = {};

export const orderRequestSlice = createSlice({
  name: 'orderRequest',
  initialState,
  reducers: {
    setOrderRequest: (state, action: PayloadAction<OrderRequestState>) => {
      state.amount = action.payload.amount;
    },
  },
});

export default orderRequestSlice.reducer;

export const selectRequestAmount = (state: RootState) =>
  state.orderRequest.amount;

export const { setOrderRequest } = orderRequestSlice.actions;
