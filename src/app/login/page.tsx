'use client';

import { FormEvent, useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '@/components/ui/card';
import { redirect, useRouter } from 'next/navigation';
import useAuth from '@/stores/auth';

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const { updateAuth } = useAuth();
  const router = useRouter();

  const handleLogin = (e: FormEvent) => {
    e.preventDefault();

    // ! Replacing soon with real logic
    switch (username) {
      case 'opcr':
      case 'ipcr':
        updateAuth(username);
        router.replace('/');
        break;
      case 'admin':
        updateAuth(username);
        router.replace('/admin');
        break;
      default:
        setError('Incorrect credentials');
    }
  };

  return (
    <div className="background-photo flex h-screen items-center justify-center">
      {/* Image by <a href="https://www.freepik.com/free-vector/flat-design-abstract-illustration_22900052.htm#query=shapes%20background&position=4&from_view=keyword&track=ais">Freepik</a> */}
      <Card className="w-1/2 sm:w-1/3 xl:w-1/4">
        <CardHeader className="flex flex-col items-center">
          <Image src="/logo.png" width={100} height={100} alt="logo" />
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
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Username"
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
