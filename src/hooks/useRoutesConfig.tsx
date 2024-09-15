import { Fragment, useMemo } from 'react';

// Giả sử rằng bạn đã có một bản đồ các component từ tên component
import Home from '../containers/pages/Home';
import Auth from '../containers/pages/Auth';
import Dashboard from '../containers/pages/Dashboard';
import Profile from '../containers/pages/Profile';
import Chat from '../containers/pages/Chat';
import NotFound from '../containers/pages/NotFound';
import HomePage from '../containers/pages/Home';
import { AuthLayout, DefaultLayout } from '../containers/layouts';
import { RouteType } from '../App';


// Định nghĩa kiểu cho dữ liệu route
type RouteConfig = {
  path: string;
  component: React.ComponentType<{}>;
  type: 'private' | 'public' | string;
  layout?: React.ComponentType<{children: React.ReactNode }>;
};

// Tạo hook để ánh xạ dữ liệu từ server
const useRoutesConfig = (data: RouteType[]): RouteConfig[] => {
  // Bản đồ từ tên component đến component thực tế
  const componentMap: { [key: string]: React.ComponentType } = {
    Home,
    Auth,
    Dashboard,
    Profile,
    Chat,
    NotFound,
  };
// Bản đồ từ tên layout đến layout component thực tế
  const layoutMap: { [key: string ]: React.ComponentType<{ children: React.ReactNode }> } = {
    default: DefaultLayout,
    auth: AuthLayout,
  };

  return useMemo(() => {
    return data.map((route) => ({
      path: route.path,
      component: componentMap[route.component] || NotFound,
      type: route.type,
      layout: route.layout ? layoutMap[route.layout.toLowerCase()] : Fragment,
    }));
  }, [data]);
};

export default useRoutesConfig;
