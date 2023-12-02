import { useState } from 'react';
import { Plus } from 'lucide-react';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import FormAccount from '../form/form-account';
import DeleteModal from '@/components/modal/modal-delete';

function ButtonAccountAdd() {
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

        <FormAccount closeModal={closeModal} />

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
          >
            Create
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default ButtonAccountAdd;
