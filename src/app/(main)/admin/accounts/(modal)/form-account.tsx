import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { accountFormSchema } from '@/types/form-schema';
import { Account } from '@/types/data-types';

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import SelectAccountType from './toggle-account-type';
import { useEffect } from 'react';

type AccountData = Omit<Account, '_id'>;

const initialAccountData: AccountData = {
  name: '',
  username: '',
  email: '',
  password: '',
  permission: 'admin',
  superior: '',
};

const inputFields = ['Name', 'Username', 'Email', 'Password'];

function AccountForm() {
  const form = useForm<z.infer<typeof accountFormSchema>>({
    resolver: zodResolver(accountFormSchema),
    defaultValues: initialAccountData,
  });

  const onSubmit = (values: z.infer<typeof accountFormSchema>) => {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.

    console.table(values);
  };

  return (
    <Form {...form}>
      <form
        id="account-form"
        className="flex flex-col gap-2"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        {inputFields.map((inputField) => (
          <FormField
            key={inputField}
            name={inputField.toLowerCase() as any}
            control={form.control}
            render={({ field }) => (
              <FormItem className="flex flex-col gap-0">
                <FormLabel className="font-bold">{inputField}</FormLabel>
                <FormControl>
                  <Input placeholder={inputField} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        ))}

        <Separator />

        <SelectAccountType form={form} />

        {form.watch('permission') === 'individual' && (
          <FormField
            name="superior"
            control={form.control}
            render={({ field }) => (
              <FormItem className="flex flex-col gap-0">
                <FormLabel className="font-bold">Superior</FormLabel>
                <FormControl>
                  <Input placeholder="Superior" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        )}
      </form>
    </Form>
  );
}

export default AccountForm;
