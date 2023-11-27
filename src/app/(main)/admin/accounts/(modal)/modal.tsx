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

function ModalAddAccount() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <Dialog open={modalIsOpen} onOpenChange={setModalIsOpen}>
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

        <AccountForm closeModal={closeModal} />

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
