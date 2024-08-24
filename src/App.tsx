import React, { useEffect, useState, lazy, useContext } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';
import axiosInstance from './config/axios/ConfigAxios';
import fake_route from './api/FAKE_DATA.json'
import { ThemeContext } from './context/ThemeContext';
const HomePage = lazy(() => import('./container/pages/HomePage'));
const LoginPage = lazy(() => import('./container/pages/LoginPage'));
const LoadingPage = lazy(() => import('./container/pages/LoadingPage'));
// Define a route type for better type safety
type RouteType = {
  path: string;
  component: string;
  type: string|'private' | 'public';
}

function App() {
  const [routes, setRoutes] = useState<RouteType[]>([]);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const theme = useContext(ThemeContext);
  // useContext(ThemeContext);
  useEffect(() => {
    // Fetch routes from server
    setRoutes(fake_route);
    console.log(theme.theme);
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
    <div className='App' >
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
      {/* <Routes>
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
      </Routes> */}
      </div>
  );
}

export default App;
