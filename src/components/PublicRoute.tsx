import React, { ReactNode } from 'react';
import { Outlet } from 'react-router-dom';

interface PublicRouteProps {
  isAuthenticated: boolean;
  children: ReactNode;
}
const PublicRoute: React.FC<PublicRouteProps> = ({isAuthenticated,children}) => {
  return <>{children}</>;
};

export default PublicRoute;
