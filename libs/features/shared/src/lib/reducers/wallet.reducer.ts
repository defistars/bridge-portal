import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '@bridge-portal/shared';

export interface WalletState {
  addressFrom?: string | null;
  addressTo?: string | null;
}

const initialState: WalletState = {
  addressFrom: null,
  addressTo: null,
};

export const walletSlice = createSlice({
  name: 'wallet',
  initialState,
  reducers: {
    setWalletAddress: (state, action: PayloadAction<WalletState>) => {
      if (action.payload.addressFrom) {
        state.addressFrom = action.payload.addressFrom;
      }

      if (action.payload.addressTo) {
        state.addressTo = action.payload.addressTo;
      }
    },
    clearWalletAddress: (state) => {
      state.addressFrom = null;
      state.addressTo = null;
    },
  },
});

export const selectWalletAddressFrom = (state: RootState) =>
  state.wallet.addressFrom;
export const selectWalletAddressTo = (state: RootState) =>
  state.wallet.addressTo;

export const { setWalletAddress, clearWalletAddress } = walletSlice.actions;

export default walletSlice.reducer;
