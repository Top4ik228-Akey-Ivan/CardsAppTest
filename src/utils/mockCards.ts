import type { BaseQueryFn } from "@reduxjs/toolkit/query";
import type { Card } from "../api/cardsApi";
import { MOCK_CARDS } from "../constants/cards";

export const localMockBaseQuery: BaseQueryFn<string, Card[], unknown> = async (
  arg,
) => {
  await new Promise((resolve) => setTimeout(resolve, 600));

  if (arg === 'cards') {
    return { data: MOCK_CARDS };
  }

  return {
    error: {
      status: 404,
      data: `Неизвестный эндпоинт: ${arg}`,
    },
  };
};