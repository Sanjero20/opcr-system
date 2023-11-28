/* eslint-disable react-hooks/exhaustive-deps */
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

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

import { useMutation } from '@tanstack/react-query';
import { queryClient } from '@/components/query-wrapper';

import { createAccount } from '@/services/api/admin';
import { AccountFormType, accountFormSchema } from '@/types/form-schema';
import { useEffect, useState } from 'react';

const initialAccountData: AccountFormType = {
  name: '',
  username: '',
  email: '',
  password: '',
  permission: 'admin',
  superior: '',
};

const inputFields = ['Name', 'Username', 'Email', 'Password'];

interface AccountFormProps {
  closeModal: () => void;
}

function AccountForm({ closeModal }: AccountFormProps) {
  const [errorMsg, setErrorMsg] = useState('');

  const form = useForm<AccountFormType>({
    resolver: zodResolver(accountFormSchema),
    defaultValues: initialAccountData,
  });

  const handleSubmit = useMutation({
    mutationFn: () => createAccount(form.getValues()),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['accounts'] });
      closeModal();
      form.reset();
    },
    onError: (error: any) => {
      setErrorMsg(error.message);
    },
  });

  useEffect(() => {
    if (errorMsg) setErrorMsg('');
  }, [form.formState.isValidating]);

  return (
    <Form {...form}>
      <form
        id="account-form"
        className="flex flex-col gap-2"
        onSubmit={form.handleSubmit(() => handleSubmit.mutate())}
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

      {errorMsg && <FormMessage>{errorMsg} </FormMessage>}
    </Form>
  );
}

export default AccountForm;
