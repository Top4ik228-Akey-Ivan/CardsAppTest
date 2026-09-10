import React from 'react';
import { Typography } from 'antd';
import Page from '../../components/Page/Page';


const { Title, Paragraph } = Typography;

const HomePage: React.FC = () => {
  return (
    <Page>
      <Title>Wordly</Title>

      <Paragraph>
        Wordly — приложение для изучения английских слов.
        Изучайте новые слова, проверяйте свои знания и
        постепенно расширяйте словарный запас.
      </Paragraph>
    </Page>
  );
};

export default HomePage;