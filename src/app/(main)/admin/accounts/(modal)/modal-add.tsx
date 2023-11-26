import { Button } from '@/components/ui/button';
import { Dialog, DialogFooter, DialogHeader } from '@/components/ui/dialog';
import {
  DialogClose,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Plus } from 'lucide-react';
import AccountForm from './form';

function ModalAddAccount() {
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
              Close
            </Button>
          </DialogClose>

          <Button
            type="submit"
            className="w-1/2"
            variant="add"
            // onClick={() => handleSubmit.mutate()}
          >
            Save changes
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default ModalAddAccount;
