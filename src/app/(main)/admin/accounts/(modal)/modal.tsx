import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogHeader,
  DialogContent,
  DialogFooter,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from '@/components/ui/dialog';

import AccountForm from './form-account';
import { Plus } from 'lucide-react';

import { useMutation } from '@tanstack/react-query';
import { queryClient } from '@/components/query-wrapper';
import { Account } from '@/types/data-types';

export type FormAccountType = Omit<Account, '_id'>;

export const initialAccountData: FormAccountType = {
  name: '',
  username: '',
  email: '',
  password: '',
  permission: '',
  superior: '',
};

function ModalAddAccount() {
  const [formData, setFormData] = useState(initialAccountData);

  const handleSubmit = useMutation({
    // mutationFn: () =>
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['accounts'] });
    },
  });

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="add">
          Add Account
          <Plus />
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Create Account</DialogTitle>
        </DialogHeader>

        <AccountForm />

        <DialogFooter>
          <DialogClose asChild>
            <Button type="button" className="w-1/2" variant="outline">
              Cancel
            </Button>
          </DialogClose>

          <Button
            type="submit"
            form="account-form"
            className="w-1/2"
            variant="add"
            // onClick={() => handleSubmit.mutate()}
          >
            Create
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default ModalAddAccount;
