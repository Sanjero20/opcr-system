'use client';
/* eslint-disable react-hooks/exhaustive-deps */

import { FormEvent, useEffect, useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { CardContent, CardFooter } from '@/components/ui/card';

import { useRouter } from 'next/navigation';
import { setCookie } from '@/services/cookie';
import { login } from '@/services/authentication';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>('');

  // libraries
  const router = useRouter();

  useEffect(() => {
    if (error) setError('');
  }, [email, password]);

  const handleLogin = async (e: FormEvent) => {
    e.preventDefault();

    const data = await login(email, password);

    if (data.error || !data.permission) {
      setError(data.error);
      return;
    }

    const { token, permission } = data;
    setCookie('permission', permission);
    setCookie('token', token);

    if (data.permission !== 'admin') {
      router.replace('/');
    } else {
      router.replace('/admin');
    }
  };

  return (
    <>
      <CardContent>
        <form
          onSubmit={(e) => handleLogin(e)}
          id="login-form"
          className="flex flex-col gap-2"
        >
          <Input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />

          <Input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
        </form>
      </CardContent>

      <CardFooter className="flex flex-col justify-center gap-2">
        <Button type="submit" form="login-form" className="w-full">
          Sign In
        </Button>

        {error && <p className="text-destructive">*{error}*</p>}
      </CardFooter>
    </>
  );
}

export default LoginForm;
