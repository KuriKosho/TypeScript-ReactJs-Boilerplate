import React, { ReactNode } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

interface PrivateRouteProps {
  isAuthenticated: boolean;
  children: ReactNode;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({children, isAuthenticated }) => {
  return isAuthenticated ? <>{children}</>: <Navigate to="/auth" />;
};

export default PrivateRoute;
