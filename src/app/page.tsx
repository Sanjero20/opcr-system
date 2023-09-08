import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '@/components/ui/card';

function LoginPage() {
  return (
    <div className="flex h-screen items-center justify-center bg-background">
      <Card className="w-1/2 sm:w-1/3 xl:w-1/4">
        <CardHeader className="flex flex-col items-center">
          <Image src="/logo.png" width={100} height={100} alt="logo" />
          <h1 className="text-center text-xl font-bold">
            Office Performance Management System
          </h1>
        </CardHeader>

        <CardContent className="flex flex-col gap-2">
          <Input placeholder="Username" />
          <Input placeholder="Password" />
        </CardContent>

        <CardFooter className="flex justify-center">
          <Button className="w-full">Sign In</Button>
        </CardFooter>
      </Card>
    </div>
  );
}

export default LoginPage;
