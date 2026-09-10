import React from 'react';
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
} from 'react-router-dom';

import LoginPage from '../../pages/LoginPage/LoginPage';
import ProfilePage from '../../pages/ProfilePage/ProfilePage';
import HomePage from '../../pages/HomePage/HomePage';
import CardsPage from '../../pages/CardsPage/CardsPage';

const AppRouter: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/cards" element={<CardsPage />} />
        <Route path="/profile" element={<ProfilePage />} />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;