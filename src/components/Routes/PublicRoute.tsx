import React from 'react';

import {
  Navigate,
  Outlet,
  useLocation,
} from 'react-router-dom';

import { useAppSelector } from '../../store/hooks';

interface LocationState {
  from?: Location;
}

const PublicRoute: React.FC = () => {
  const isAuthenticated = useAppSelector(
    (state) => state.auth.isAuthenticated,
  );

  const location = useLocation();

  if (isAuthenticated) {
    const state = location.state as LocationState | null;

    return (
      <Navigate
        to={state?.from || '/'}
        replace
      />
    );

  }

  return <Outlet />;
};

export default PublicRoute;