import React, { useEffect, useState, lazy } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';
import fake_route from './api/FAKE_DATA.json'
const HomePage = lazy(() => import('./containers/pages/HomePage'));
const AuthPage = lazy(() => import('./containers/pages/AuthPage'));
const LoadingPage = lazy(() => import('./containers/pages/LoadingPage'));

// Define a route type for better type safety
type RouteType = {
  path: string;
  component: string;
  type: 'private' | 'public' | string;
}

function App() {
  const [routes, setRoutes] = useState<RouteType[]>([]);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  useEffect(() => {
    // Fetch routes from server
    setRoutes(fake_route);
    // axiosInstance.get('/api/routes')
      // .then(response => setRoutes(response.data.routes))
      // .catch(error => console.error('Error fetching routes:', error));
  }, []);
  useEffect(() => {
    console.log(fake_route);
  }, [routes]);
  const mapComponent = (componentName: string) => {
    switch(componentName) {
      case 'Home': return <HomePage />;
      case 'Auth': return <AuthPage />;
      default: return <AuthPage />;
    }
  };

  return (
    <div className='App'>
      {routes ? <Routes>
        {routes.map((route, index) => {
            const element = mapComponent(route.component);
            if (!element) return null;
            return route.type === 'private' ? (
              <Route
                key={index}
                path={route.path}
                element={<PrivateRoute isAuthenticated={isAuthenticated} />}
              >
                <Route path={route.path} element={element} />
              </Route>
            ) : (
              <Route
                key={index}
                path={route.path}
                element={<PublicRoute />}
              >
                <Route path={route.path} element={element} />
              </Route>
            );
          })}
      </Routes> : <LoadingPage />}
      </div>
  );
}

export default App;
