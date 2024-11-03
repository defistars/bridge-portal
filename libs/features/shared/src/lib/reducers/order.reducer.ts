import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Segment } from '@bridge-portal/common';
import { RootState } from '../store/store';

interface Pair {
  platform: string;
  address: string;
}

export interface OrderState {
  status?: string;
  _id?: string;
  segments?: Segment[];
  amount?: string;
  from?: Pair;
  to?: Pair;
}

const initialState: OrderState = {};

export const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    setOrder: (state, action: PayloadAction<OrderState>) => {
      state._id = action.payload._id;
      state.amount = action.payload.amount;
      state.from = action.payload.from;
      state.to = action.payload.to;
      state.segments = action.payload.segments;
      state.status = action.payload.status;
    },
  },
});

export const selectOrder = (state: RootState) => state.order;

export const { setOrder } = orderSlice.actions;

export default orderSlice.reducer;
