import { configureStore } from '@reduxjs/toolkit';

import authReducer from './slices/authSlice';
import { cardsApi } from '../api/cardsApi';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    [cardsApi.reducerPath]: cardsApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(cardsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;