import React from 'react';
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
} from 'react-router-dom';
import PublicRoute from '../Routes/PublicRoute';
import LoginPage from '../../pages/LoginPage/LoginPage';
import PrivateRoute from '../Routes/PrivateRoute';
import HomePage from '../../pages/HomePage/HomePage';
import CardsPage from '../../pages/CardsPage/CardsPage';
import ProfilePage from '../../pages/ProfilePage/ProfilePage';



const AppRouter: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Публичные маршруты */}
        <Route element={<PublicRoute />}>
          <Route
            path="/login"
            element={<LoginPage />}
          />
        </Route>

        {/* Приватные маршруты */}
        <Route element={<PrivateRoute />}>
          <Route
            path="/"
            element={<HomePage />}
          />

          <Route
            path="/cards"
            element={<CardsPage />}
          />

          <Route
            path="/profile"
            element={<ProfilePage />}
          />
        </Route>

        <Route
          path="*"
          element={<Navigate to="/" replace />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;