import React, { useEffect, useState, lazy } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';
import axiosInstance from './config/axios/ConfigAxios';
import fake_route from './api/FAKE_DATA.json'
const HomePage = lazy(() => import('./container/pages/HomePage'));
const LoginPage = lazy(() => import('./container/pages/LoginPage'));

// Define a route type for better type safety
type RouteType = {
  path: string;
  component: string;
  type: string|'private' | 'public';
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
      case 'Login': return <LoginPage />;
      // case 'Dashboard': return <Dashboard />;
      // case 'Profile': return <Profile />;
      default: return <LoginPage />;
    }
  };

  return (
      <Routes>
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
      </Routes>
  );
}

export default App;
