import React from 'react';
import { Avatar, Layout } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { NavLink } from 'react-router-dom';

import './Header.css';

const { Header: AntHeader } = Layout;

export interface HeaderProps {
  username?: string;
}

const Header: React.FC<HeaderProps> = ({
  username = 'Guest',
}) => {
  return (
    <AntHeader className="app-header">
      <div className="header-content">
        <NavLink to="/" className="header-logo">
          <span className="header-logo-main">
            Wordly
          </span>

          <span className="header-logo-sub">
            English learning
          </span>
        </NavLink>

        <nav className="header-navigation">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `header-link ${isActive ? 'active' : ''}`
            }
          >
            Главная
          </NavLink>

          <NavLink
            to="/cards"
            className={({ isActive }) =>
              `header-link ${isActive ? 'active' : ''}`
            }
          >
            Карточки
          </NavLink>

          <NavLink
            to="/profile"
            className={({ isActive }) =>
              `header-link ${isActive ? 'active' : ''}`
            }
          >
            Профиль
          </NavLink>

          <NavLink
            to="/login"
            className={({ isActive }) =>
              `header-link ${isActive ? 'active' : ''}`
            }
          >
            Войти
          </NavLink>
        </nav>

        <NavLink to="/profile" className="header-profile">
          <span className="header-username">
            {username}
          </span>

          <Avatar
            size={36}
            icon={<UserOutlined />}
          />
        </NavLink>
      </div>
    </AntHeader>
  );
};

export default Header;