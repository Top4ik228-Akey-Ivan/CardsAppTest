import React from 'react';
import { Alert, Typography } from 'antd';

import Page from '../../components/Page/Page';

import CardList from '../../components/CardsList/CardsList';
import { useGetCardsQuery } from '../../api/cardsApi';

const { Title, Paragraph } = Typography;

const CardsPage: React.FC = () => {
  const {
    data: cards = [],
    isLoading,
    isError,
  } = useGetCardsQuery();

  return (
    <Page>
      <Title level={1}>Карточки</Title>

      <Paragraph type="secondary">
        Изучайте новые английские слова и проверяйте
        их перевод.
      </Paragraph>

      {isError ? (
        <Alert
          type="error"
          showIcon
          title="Не удалось загрузить карточки"
          description="Попробуйте обновить страницу."
        />
      ) : (
        <CardList
          cards={cards}
          isLoading={isLoading}
        />
      )}
    </Page>
  );
};

export default CardsPage;