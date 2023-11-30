import AdminDashboard from '@/pages/admin/dashboard';
import CampusesPage from '@/pages/admin/campuses';
import AccountsPage from '@/pages/admin/accounts';

export const adminRoutes = [
  {
    index: true,
    element: <AdminDashboard />,
  },
  {
    path: 'campus',
    element: <CampusesPage />,
  },
  {
    path: 'accounts',
    element: <AccountsPage />,
  },
];
