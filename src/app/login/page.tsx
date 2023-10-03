'use client';

import { useEffect, useState } from 'react';
import { redirect } from 'next/navigation';
import Image from 'next/image';
import LoginForm from './form';
import { Card, CardHeader } from '@/components/ui/card';
import useAuth from '@/stores/auth';
import { getCookie } from '@/services/cookie';
import { Account } from '@/types/account';

function LoginPage() {
  const [isLoading, setIsLoading] = useState(true);
  const { permission, setPermission } = useAuth();

  useEffect(() => {
    const permission = getCookie('permission') as Account;

    if (permission) {
      setPermission(permission);
      redirect('/');
    }

    setIsLoading(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (permission || isLoading) return;

  return (
    <div className="background-photo flex h-screen items-center justify-center">
      <Card className="w-1/2 sm:w-1/3 xl:w-1/4">
        <CardHeader className="flex flex-col items-center">
          <Image src="/logo.png" width={100} height={100} alt="logo" />
          <h1 className="text-center text-xl font-bold">
            Office Performance Management System
          </h1>
        </CardHeader>

        <LoginForm />
      </Card>
    </div>
  );
}

export default LoginPage;
