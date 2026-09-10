import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

import { useAppSelector } from '../../store/hooks';

const PrivateRoute: React.FC = () => {
  const isAuthenticated = useAppSelector(
    (state) => state.auth.isAuthenticated,
  );

  const location = useLocation();

  if (!isAuthenticated) {
    return (
      <Navigate
        to="/login"
        replace
        state={{ from: location }}
      />
    );
  }

  return <Outlet />;
};

export default PrivateRoute;