import { Outlet, useNavigate } from 'react-router-dom';
import Header from './header/header';
import { getCookie } from '@/lib/cookie';
import { useEffect } from 'react';
import { Permission } from '@/types';

function UserLayout() {
  const permission = getCookie('permission') as Permission;
  const navigate = useNavigate();

  useEffect(() => {
    if (!permission) {
      navigate('/login', { replace: true });
    }

    if (permission === 'admin') {
      navigate('/admin');
    }
  }, []);

  if (!permission) return;

  return (
    <div className="flex h-screen min-h-screen flex-col">
      <Header />
      <main className="container flex-1 py-2">
        <Outlet />
      </main>
    </div>
  );
}

export default UserLayout;
