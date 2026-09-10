import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

import { useAppSelector } from '../../store/hooks';

const PublicRoute: React.FC = () => {
  const isAuthenticated = useAppSelector(
    (state) => state.auth.isAuthenticated,
  );

  if (isAuthenticated) {
    return <Navigate to="/home" replace />;
  }

  return <Outlet />;
};

export default PublicRoute;