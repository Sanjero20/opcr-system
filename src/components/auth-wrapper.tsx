'use client';

import { useEffect } from 'react';
import { redirect, usePathname } from 'next/navigation';
import { getCookie } from '@/services/cookie';
import { Account } from '@/types/account';
import useAuth from '@/stores/auth';

type AuthWrapperProps = {
  children: React.ReactNode;
};

function AuthWrapper({ children }: AuthWrapperProps) {
  const { permission, setPermission } = useAuth();
  const currentRoute = usePathname();

  useEffect(() => {
    const permission = getCookie('permission') as Account;

    if (permission === 'admin' && currentRoute === '/') {
      redirect('/admin');
    }

    if (permission) {
      setPermission(permission);
    } else {
      setPermission(null);
      redirect('/login');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!permission) return null;

  return <>{children}</>;
}

export default AuthWrapper;
