import React, { useState } from 'react';
import {
  Alert,
  Button,
  Card,
  Form,
  Input,
  Typography,
} from 'antd';
import {
  LockOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

import { useAppDispatch } from '../../store/hooks';
import { login } from '../../store/slices/authSlice';

import './LoginPage.css';

const { Title, Paragraph } = Typography;

interface LoginFormValues {
  username: string;
  password: string;
}

const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (
    values: LoginFormValues,
  ) => {
    setError('');
    setIsLoading(true);

    await new Promise((resolve) =>
      setTimeout(resolve, 500),
    );

    if (
      values.username === 'admin' &&
      values.password === 'admin'
    ) {
      dispatch(
        login({
          id: 1,
          username: 'admin',
        }),
      );

      navigate('/', { replace: true });
    } else {
      setError(
        'Неправильный логин или пароль.',
      );
    }

    setIsLoading(false);
  };

  return (
    <div className="login-page">
      <Card className="login-card">
        <div className="login-header">
          <Title level={2} className="login-title">
            Добро пожаловать
          </Title>

          <Paragraph className="login-description">
            Войдите в свой аккаунт, чтобы продолжить
            изучение английского языка.
          </Paragraph>
        </div>

        {error && (
          <Alert
            className="login-error"
            title={error}
            type="error"
            showIcon
          />
        )}

        <Form<LoginFormValues>
          layout="vertical"
          size="large"
          onFinish={handleSubmit}
          autoComplete="off"
        >
          <Form.Item
            label="Логин"
            name="username"
            rules={[
              {
                required: true,
                message: 'Введите логин',
              },
            ]}
          >
            <Input
              prefix={<UserOutlined />}
              placeholder="Введите логин"
            />
          </Form.Item>

          <Form.Item
            label="Пароль"
            name="password"
            rules={[
              {
                required: true,
                message: 'Введите пароль',
              },
            ]}
          >
            <Input.Password
              prefix={<LockOutlined />}
              placeholder="Введите пароль"
            />
          </Form.Item>

          <Form.Item className="login-submit">
            <Button
              type="primary"
              htmlType="submit"
              block
              loading={isLoading}
            >
              Войти
            </Button>
          </Form.Item>
        </Form>

        <div className="login-hint">
          <span>Тестовые данные:</span>
          <strong> admin / admin</strong>
        </div>
      </Card>
    </div>
  );
};

export default LoginPage;