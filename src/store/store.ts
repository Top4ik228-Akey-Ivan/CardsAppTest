import { configureStore } from '@reduxjs/toolkit';

import authReducer from './slices/authSlice';
import profileReducer from './slices/profileSlice';
import { cardsApi } from '../api/cardsApi';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    profile: profileReducer,
    [cardsApi.reducerPath]: cardsApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(cardsApi.middleware),
});

store.subscribe(() => {
  console.log(
    'Redux profile state:',
    store.getState().profile,
  );
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;