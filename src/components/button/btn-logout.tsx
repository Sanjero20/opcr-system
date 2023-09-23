'use client';

import { Button } from '../ui/button';
import { useRouter } from 'next/navigation';

function BtnLogout() {
  const router = useRouter();

  const handleLogout = () => {
    router.replace('/login');
  };

  return (
    <Button
      className="bg-transparent hover:bg-transparent"
      onClick={handleLogout}
    >
      Logout
    </Button>
  );
}

export default BtnLogout;
