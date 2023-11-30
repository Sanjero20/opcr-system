import { createBrowserRouter } from 'react-router-dom';

// layouts
import AdminLayout from '@/layouts/admin-layout';
import UserLayout from '@/layouts/user-layout';

// pages
import LoginPage from '@/pages/login';
import DashboardPage from '@/pages/dashboard';
import AccountPage from '@/pages/account';

// user-routes
import { adminRoutes } from './admin.routes';
import { headRoutes } from './head.routes';
import { individualRoutes } from './individual.routes';
import { pmtRoutes } from './pmt.routes';

const routes = createBrowserRouter([
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/admin',
    element: <AdminLayout />,
    children: [...adminRoutes],
  },
  {
    path: '/',
    element: <UserLayout />,
    children: [
      {
        index: true,
        element: <DashboardPage />,
      },
      {
        path: '/account',
        element: <AccountPage />,
      },
      ...headRoutes,
      ...individualRoutes,
      ...pmtRoutes,
    ],
  },
]);

export default routes;
