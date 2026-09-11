import { CARD_TITLES } from "../constants/cardTitles";

export const getRandomTitle = () => {
  const randomIndex = Math.floor(
    Math.random() * CARD_TITLES.length,
  );

  return CARD_TITLES[randomIndex];
};