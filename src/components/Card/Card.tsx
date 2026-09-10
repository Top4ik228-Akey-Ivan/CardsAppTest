import React, { useState } from 'react';
import { Card as AntCard, Typography } from 'antd';

import type { Card as CardData } from '../../api/cardsApi';

import './Card.css';

const { Title, Text, Paragraph } = Typography;

interface CardProps {
  card: CardData;
}

const CARD_TITLES = [
  'Word of the Day',
  'Expand Your Vocabulary',
  'Learn Something New',
  'Your New Word',
  'English Discovery',
  'Boost Your Vocabulary',
];

const getRandomTitle = () => {
  const randomIndex = Math.floor(
    Math.random() * CARD_TITLES.length,
  );

  return CARD_TITLES[randomIndex];
};

const Card: React.FC<CardProps> = ({ card }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [title] = useState(getRandomTitle);

  const handleFlip = () => {
    setIsFlipped((previous) => !previous);
  };

  return (
    <div
      className={`word-card ${isFlipped ? 'flipped' : ''}`}
      onClick={handleFlip}
    >
      <div className="word-card-inner">
        <AntCard className="word-card-face word-card-front">
          <Text type="secondary">{title}</Text>

          <Title level={2}>{card.word}</Title>

          <Paragraph type="secondary">
            {card.example}
          </Paragraph>

          <Text className="word-card-hint">
            Нажмите, чтобы увидеть перевод
          </Text>
        </AntCard>

        <AntCard className="word-card-face word-card-back">
          <Text type="secondary">Translation</Text>

          <Title level={3}>{card.translation}</Title>

          <Text className="word-card-hint">
            Нажмите, чтобы вернуться
          </Text>
        </AntCard>
      </div>
    </div>
  );
};

export default Card;