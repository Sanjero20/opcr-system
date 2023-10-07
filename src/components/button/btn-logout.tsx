'use client';

import { Button } from '../ui/button';
import { useRouter } from 'next/navigation';
import useAuth from '@/stores/auth';
import { deleteCookie } from '@/services/cookie';

type BtnLogoutProps = {
  className?: string;
};

function BtnLogout({ className }: BtnLogoutProps) {
  const router = useRouter();
  const { removeAuth } = useAuth();

  const handleLogout = () => {
    removeAuth();
    deleteCookie('permission');
    router.replace('/login');
  };

  return (
    <Button
      className={`bg-transparent hover:bg-transparent ${className}`}
      onClick={handleLogout}
    >
      Logout
    </Button>
  );
}

export default BtnLogout;
