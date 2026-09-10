import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export interface Card {
  id: number;
  word: string;
  translation: string;
  example: string;
}

export const cardsApi = createApi({
  reducerPath: 'cardsApi',

  baseQuery: fetchBaseQuery({
    baseUrl: 'https://6aa2f888ccb3db9689a72e62.mockapi.io/api/',
  }),

  endpoints: (builder) => ({
    getCards: builder.query<Card[], void>({
      query: () => 'cards',
    }),
  }),
});

export const { useGetCardsQuery } = cardsApi;