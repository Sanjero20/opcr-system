import { useEffect, useState } from 'react';

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Eye, EyeOff } from 'lucide-react';

interface LoginFormProps {
  form: any;
  handleLogin: () => void;
}

function LoginForm({ form, handleLogin }: LoginFormProps) {
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    form.reset();
  }, [form.formState.isValidating]);

  const toggleShow = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Form {...form}>
      <form
        id="login-form"
        className="flex flex-col gap-2"
        onSubmit={form.handleSubmit(() => handleLogin())}
      >
        <FormField
          name="email"
          control={form.control}
          render={({ field }) => (
            <FormItem className="flex flex-col gap-0">
              <FormControl>
                <Input
                  placeholder="Email"
                  {...field}
                  // autoComplete="off"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          name="password"
          control={form.control}
          render={({ field }) => (
            <FormItem className="flex flex-col gap-0">
              <FormControl>
                <div className="relative flex w-full items-center justify-end">
                  <Input
                    type={!showPassword ? 'password' : 'text'}
                    placeholder="Password"
                    {...field}
                    // autoComplete="off"
                  />

                  <Button
                    type="button"
                    className="absolute bg-transparent text-zinc-500 hover:bg-transparent"
                    onClick={toggleShow}
                    tabIndex={-1}
                  >
                    {!showPassword ? <Eye size={18} /> : <EyeOff size={18} />}
                  </Button>
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
}

export default LoginForm;
