import React, { useState } from 'react';
import { Card as AntCard, Typography } from 'antd';

import type { Card as CardData } from '../../api/cardsApi';

import './Card.css';
import { getRandomTitle } from '../../utils/randomTitle';

const { Title, Text, Paragraph } = Typography;

interface CardProps {
  card: CardData;
}

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