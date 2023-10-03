'use client';

import { useEffect } from 'react';
import { redirect } from 'next/navigation';
import { deleteCookie, getCookie, setCookie } from '@/services/cookie';
import useAuth from '@/stores/auth';
import { Account } from '@/types/account';

type AuthWrapperProps = {
  children: React.ReactNode;
};

function AuthWrapper({ children }: AuthWrapperProps) {
  const { permission, setPermission } = useAuth();

  useEffect(() => {
    const permission = getCookie('permission') as Account;

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
