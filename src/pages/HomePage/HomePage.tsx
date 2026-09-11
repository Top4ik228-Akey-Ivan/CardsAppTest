import React from 'react';
import { Button, Card, Typography } from 'antd';
import {
  ArrowRightOutlined,
  BookOutlined,
  CheckCircleOutlined,
} from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

import Page from '../../components/Page/Page';

import './HomePage.css';

const { Title, Paragraph, Text } = Typography;

const HomePage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Page>
      <div className="home-page">
        <Card className="home-hero">
          <div className="home-content">
            <Text className="home-label">
              ENGLISH LEARNING
            </Text>

            <Title className="home-title">
              Учите английский
              <br />
              <span>легко и каждый день</span>
            </Title>

            <Paragraph className="home-description">
              Расширяйте словарный запас с помощью
              интерактивных карточек. Изучайте новые слова,
              запоминайте их значение и проверяйте свои знания.
            </Paragraph>

            <Button
              type="primary"
              size="large"
              icon={<BookOutlined />}
              iconPlacement="start"
              onClick={() => navigate('/cards')}
            >
              Перейти к карточкам
              <ArrowRightOutlined />
            </Button>
          </div>

          <div className="home-visual">
            <div className="home-word-card home-word-card-back">
              <Text>beautiful</Text>
            </div>

            <div className="home-word-card home-word-card-front">
              <BookOutlined className="home-book-icon" />

              <Title level={3}>Learn</Title>

              <Text type="secondary">
                every day
              </Text>

              <CheckCircleOutlined className="home-check-icon" />
            </div>
          </div>
        </Card>
      </div>
    </Page>
  );
};

export default HomePage;