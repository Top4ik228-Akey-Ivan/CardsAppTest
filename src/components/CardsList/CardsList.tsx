import React from 'react';
import { Col, Empty, Row, Spin } from 'antd';

import Card from '../Card/Card';
import type { Card as CardData } from '../../api/cardsApi';

interface CardListProps {
  cards: CardData[];
  isLoading?: boolean;
}

const CardList: React.FC<CardListProps> = ({
  cards,
  isLoading = false,
}) => {
  if (isLoading) {
    return <Spin size="large" />;
  }

  if (!cards.length) {
    return <Empty description="Карточки не найдены" />;
  }

  return (
    <Row gutter={[24, 24]}>
      {cards.map((card) => (
        <Col
          key={card.id}
          xs={24}
          sm={12}
          lg={8}
        >
          <Card card={card} />
        </Col>
      ))}
    </Row>
  );
};

export default CardList;