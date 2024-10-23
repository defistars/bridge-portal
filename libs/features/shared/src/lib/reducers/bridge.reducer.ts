import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store/store';
import { NetworkType } from '@bridge-portal/common';

export interface Pair {
  network?: NetworkType;
  token?: string;
}

export interface BridgeState {
  from: Pair | null;
  to: Pair | null;
}

const initialState: BridgeState = {
  from: null,
  to: null,
};

export const bridgeSlice = createSlice({
  name: 'bridge',
  initialState,
  reducers: {
    setFrom: (state, action: PayloadAction<Pair | null>) => {
      state.from = action.payload;
    },
    setTo: (state, action: PayloadAction<Pair | null>) => {
      state.to = action.payload;
    },
  },
});

export const selectFromNetwork = (state: RootState) =>
  state.bridge.from?.network;
export const selectFromToken = (state: RootState) => state.bridge.from?.token;

export const selectToNetwork = (state: RootState) => state.bridge.to?.network;
export const selectToToken = (state: RootState) => state.bridge.to?.token;

export const selectFromPair = (state: RootState) => state.bridge.from;
export const selectToPair = (state: RootState) => state.bridge.to;

export const { setFrom, setTo } = bridgeSlice.actions;

export default bridgeSlice.reducer;
