import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogFooter,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from '@/components/ui/dialog';
import { deleteMFO } from '@/services/head';
import { useState } from 'react';

interface DeleteAccountDialogProps {
  id: string;
}

function ButtonDeleteMFO({ id }: DeleteAccountDialogProps) {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleDelete = async () => {
    await deleteMFO(id);
    setModalIsOpen(false);
  };

  return (
    <Dialog open={modalIsOpen} onOpenChange={setModalIsOpen}>
      <DialogTrigger asChild>
        <Button
          className="w-24"
          variant={'destructive'}
          // onClick={() => deleteTarget(target._id.$oid)}
          disabled={status === 'calibrating' || status === 'calibrated'}
        >
          Delete
        </Button>
      </DialogTrigger>

      <DialogContent>
        <DialogTitle>Confirm Deletion</DialogTitle>

        <DialogDescription>
          Are you sure you want to delete this?
        </DialogDescription>

        <DialogFooter>
          <DialogClose asChild>
            <Button type="button" variant="outline" className="w-24">
              Close
            </Button>
          </DialogClose>

          <Button
            className={`text-md w-24 bg-red-500 hover:bg-red-700`}
            onClick={handleDelete}
          >
            Delete
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default ButtonDeleteMFO;
