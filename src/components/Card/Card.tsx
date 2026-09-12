import React, { useState } from 'react';
import { Button, Card as AntCard, Typography } from 'antd';

import type { Card as CardData } from '../../types/card';

import './Card.css';
import { getRandomTitle } from '../../utils/randomTitle';

const { Title, Text, Paragraph } = Typography;

interface CardProps {
  card: CardData;
}

const Card: React.FC<CardProps> = ({ card }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [title] = useState(getRandomTitle);

  const handleFlip = (
    event: React.MouseEvent<HTMLElement>,
  ) => {
    event.stopPropagation();
    setIsFlipped((previous) => !previous);
  };

  return (
    <div className={`word-card ${isFlipped ? 'flipped' : ''}`}>
      <div className="word-card-inner">
        <AntCard className="word-card-face word-card-front">
          <Text type="secondary">{title}</Text>

          <Title level={2}>{card.word}</Title>

          <Paragraph type="secondary">
            {card.example}
          </Paragraph>

          <Button
            type="primary"
            className="word-card-action"
            onClick={handleFlip}
          >
            LEARN MORE
          </Button>
        </AntCard>

        <AntCard className="word-card-face word-card-back">
          <Text type="secondary">Translation</Text>

          <Title level={3}>{card.translation}</Title>

          <Button
            className="word-card-action"
            onClick={handleFlip}
          >
            НАЗАД
          </Button>
        </AntCard>
      </div>
    </div>
  );
};

export default Card;