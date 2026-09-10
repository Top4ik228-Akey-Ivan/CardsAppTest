import React from 'react';
import { Avatar, Layout } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { NavLink, useNavigate } from 'react-router-dom';

import { useAppDispatch } from '../../store/hooks';
import { logout } from '../../store/slices/authSlice';

import './Header.css';

const { Header: AntHeader } = Layout;

interface HeaderProps {
  username?: string;
}

const Header: React.FC<HeaderProps> = ({ username }) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleLogout = () => {
    dispatch(logout());
    navigate('/login');
  };

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
        </nav>

        <div className="header-profile">
          <span className="header-username">
            {username}
          </span>

          <Avatar
            size={36}
            icon={<UserOutlined />}
          />

          <button
            className="header-logout"
            onClick={handleLogout}
          >
            Выйти
          </button>
        </div>
      </div>
    </AntHeader>
  );
};

export default Header;