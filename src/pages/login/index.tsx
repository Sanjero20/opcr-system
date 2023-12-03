import styles from './login.module.scss';

import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '@/components/ui/card';

import LoginForm from './form';

import { loginAccount } from '@/services/authentication';
import { getCookie, setCookie } from '@/lib/cookie';
import { zodResolver } from '@hookform/resolvers/zod';
import { LoginFormType, loginFormSchema } from '@/types/form.schema';

function LoginPage() {
  const [error, setError] = useState<string | null>('');

  const navigate = useNavigate();

  const permission = getCookie('permission');
  const token = getCookie('token');

  const form = useForm<LoginFormType>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const changeRoute = (permission: string) => {
    if (permission === 'admin') {
      navigate('/admin', { replace: true });
    } else {
      navigate('/', { replace: true });
    }
  };

  const handleLogin = async () => {
    const values = form.getValues();
    const { email, password } = values;

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

  // Redirect user if they are already logged in
  useEffect(() => {
    if (permission && token) {
      changeRoute(permission);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [permission, token]);

  useEffect(() => {
    if (error) setError('');
  }, [form.formState.isValidating]);

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
          <LoginForm form={form} handleLogin={handleLogin} />
        </CardContent>

        <CardFooter className="flex flex-col justify-center gap-2">
          <Button type="submit" form="login-form" className="w-full">
            Sign In
          </Button>

          <span className="text-destructive">{error}</span>
        </CardFooter>
      </Card>
    </div>
  );
}

export default LoginPage;
