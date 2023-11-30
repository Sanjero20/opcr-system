import styles from './login.module.scss';

import { FormEvent, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '@/components/ui/card';

import { Input } from '@/components/ui/input';

import { loginAccount } from '@/services/authentication';
import { getCookie, setCookie } from '@/lib/cookie';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>('');

  const navigate = useNavigate();

  const permission = getCookie('permission');
  const token = getCookie('token');

  const changeRoute = (permission: string) => {
    if (permission === 'admin') {
      navigate('/admin', { replace: true });
    } else {
      navigate('/', { replace: true });
    }
  };

  const handleLogin = async (e: FormEvent) => {
    e.preventDefault();

    const data = await loginAccount(email, password);

    if (data.error || !data.permission) {
      setError(data.error);
      return;
    }

    const { permission, token } = data;
    setCookie('permission', permission);
    setCookie('token', token);

    changeRoute(permission);
  };

  useEffect(() => {
    if (error) setError('');
  }, [email, password]);

  useEffect(() => {
    if (permission && token) {
      changeRoute(permission);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [permission, token]);

  if (permission && token) {
    return;
  }

  return (
    <div
      className={`${styles.background} flex h-screen items-center justify-center`}
    >
      <Card className="w-1/2 sm:w-1/3 xl:w-1/4">
        <CardHeader className="flex flex-col items-center">
          <img src="/logo.png" width={100} height={100} alt="logo" />
          <h1 className="text-center text-xl font-bold">
            Office Performance Management System
          </h1>
        </CardHeader>

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
      </Card>
    </div>
  );
}

export default LoginPage;
