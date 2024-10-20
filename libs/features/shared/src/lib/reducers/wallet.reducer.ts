import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '@bridge-portal/shared';

export interface WalletState {
  address: string | null;
}

const initialState: WalletState = {
  address: null,
};

export const walletSlice = createSlice({
  name: 'wallet',
  initialState,
  reducers: {
    setWalletAddress: (state, action: PayloadAction<string>) => {
      state.address = action.payload;
    },
    clearWalletAddress: (state) => {
      state.address = null;
    },
  },
});

export const selectWalletAddress = (state: RootState) => state.wallet.address;

export const { setWalletAddress, clearWalletAddress } = walletSlice.actions;

export default walletSlice.reducer;
