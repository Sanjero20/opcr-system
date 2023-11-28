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
import SelectSuperior from './(parameters)/select-superior';
import SelectCampus from './(parameters)/select-campus';
import SelectOffice from './(parameters)/select-office';

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
  const [accountType, setAccountType] = useState(initialAccountData.permission);

  // Optional variables for pmt & head
  const [selectedCampus, setSelectedCampus] = useState('');
  const [selectedOffice, setSelectedOffice] = useState('');

  const form = useForm<AccountFormType>({
    resolver: zodResolver(accountFormSchema),
    defaultValues: initialAccountData,
  });

  const handleSubmit = useMutation({
    mutationFn: () => createAccount(form.getValues()),
    onSuccess: async (response) => {
      const { id, permission } = response;

      if (permission === 'pmt') {
        //
      } else if (permission === 'head') {
        //
      }

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
        onSubmit={form.handleSubmit(() => {
          handleSubmit.mutate();
        })}
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
                  <Input
                    placeholder={inputField}
                    {...field}
                    autoComplete="off"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        ))}

        <Separator />

        <SelectAccountType
          form={form}
          accountType={accountType}
          setAccountType={setAccountType}
        />

        {/* Will show if account type is pmt */}
        {accountType == 'pmt' && (
          <>
            <SelectCampus setSelectedCampus={setSelectedCampus} />
          </>
        )}

        {/* Will show if account type is head */}
        {accountType == 'head' && (
          <>
            <SelectCampus setSelectedCampus={setSelectedCampus} />
            <SelectOffice
              selectedCampus={selectedCampus}
              setSelectedOffice={setSelectedOffice}
            />
          </>
        )}

        {/* Will show if account type is individual */}
        {accountType == 'individual' && (
          <>
            <SelectSuperior form={form} />

            {form.watch('superior') === '' && (
              <FormMessage>
                {form.getFieldState('superior').invalid &&
                  'Individual must have a superior.'}
              </FormMessage>
            )}
          </>
        )}
      </form>

      {errorMsg && <FormMessage>{errorMsg} </FormMessage>}
    </Form>
  );
}

export default AccountForm;
