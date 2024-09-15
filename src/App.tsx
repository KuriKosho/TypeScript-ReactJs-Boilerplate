import React, { useEffect, useState, lazy, Fragment } from 'react';
import './App.css';
// import { Route, Routes, redirect } from 'react-router-dom';
import { Routes, Route, useLocation, useNavigate, Navigate } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';
import fake_route from './routes/FAKE_DATA.json';
import useRoutesConfig from './hooks/useRoutesConfig'; 
import { DefaultLayout } from './containers/layouts';
const LoadingPage = lazy(() => import('./containers/pages/Loading'));
const NotFoundPage = lazy(() => import('./containers/pages/NotFound'));
// Define a route type for better type safety
export interface RouteType {
  path: string;
  component: string;
  type: string;
  layout?: string | null;
}

function App() {
  const [serverData, setServerData] = useState<RouteType[]>([]);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    setServerData(fake_route);
    // axiosInstance.get('/api/routes')
      // .then(response => setRoutes(response.data.routes))
      // .catch(error => console.error('Error fetching routes:', error));
  }, []);
  const routes = useRoutesConfig(serverData);
  
  return (
    <div className="App">
    {serverData.length > 0 ? (
      <Routes>
        {routes.map((route, index) => {
          const { path, component: Component, type, layout:Layout } = route;
          const RouteWrapper = type === 'private' ? PrivateRoute : PublicRoute;
          const LayoutComponent = Layout || Fragment;
          return (
            <Route
              key={index}
              path={path}
              element={
                <RouteWrapper isAuthenticated={isAuthenticated}>
                  <LayoutComponent>
                    <Component />
                  </LayoutComponent>
                </RouteWrapper>
                }
            />
          );
        })}
        <Route path="/not-found" element={<NotFoundPage />} />
        <Route path="*" element={<Navigate to="/not-found" />} />
      </Routes>
    ) : (
      <LoadingPage />
    )}
  </div>
  );
}

export default App;
