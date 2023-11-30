import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import Header from './header/header';
import { getCookie } from '@/lib/cookie';
import { Permission } from '@/types';

function AdminLayout() {
  const permission = getCookie('permission') as Permission;

  const navigate = useNavigate();

  useEffect(() => {
    if (!permission) {
      navigate('/login');
    }

    if (permission !== 'admin') {
      navigate('/');
    }
  }, []);

  if (!permission) return;

  return (
    <div>
      <Header />
      <main className="container py-2">
        <Outlet />
      </main>
    </div>
  );
}

export default AdminLayout;
