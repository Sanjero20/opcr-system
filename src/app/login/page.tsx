import Image from 'next/image';

import LoginForm from './form';
import { Card, CardHeader } from '@/components/ui/card';

function LoginPage() {
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
