import { createApi } from '@reduxjs/toolkit/query/react';
import { localMockBaseQuery } from '../utils/mockCards';

export interface Card {
  id: number;
  word: string;
  translation: string;
  example: string;
}

export const cardsApi = createApi({
  reducerPath: 'cardsApi',

  //   !!!  Сделал мок данных внутри проекта, потому что мок с mockApi работает нестабильно и иногда не отдает данные    !!!  Но если есть желаниие проверить, как работает, пожалуйста раскомментируйте код ниже   !!!

  // baseQuery: fetchBaseQuery({
  //   baseUrl: 'https://6aa2f888ccb3db9689a72e62.mockapi.io/api/',
  // }),

  baseQuery: localMockBaseQuery,

  endpoints: (builder) => ({
    getCards: builder.query<Card[], void>({
      query: () => 'cards',
    }),
  }),
});

export const { useGetCardsQuery } = cardsApi;