import {
  bridgeApi,
  bridgeReducer,
  orderReducer,
  orderRequestReducer,
  walletReducer,
} from '@bridge-portal/shared';
import type { Action, ThunkAction } from '@reduxjs/toolkit';
import { configureStore } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';

export const store = configureStore({
  reducer: {
    wallet: walletReducer,
    bridge: bridgeReducer,
    order: orderReducer,
    orderRequest: orderRequestReducer,
    [bridgeApi.reducerPath]: bridgeApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    const middlewares = getDefaultMiddleware().concat(bridgeApi.middleware);
    return middlewares;
  },
});

export type AppStore = typeof store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ThunkReturnType = void> = ThunkAction<
  ThunkReturnType,
  RootState,
  unknown,
  Action
>;

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
