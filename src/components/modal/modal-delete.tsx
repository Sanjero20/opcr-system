import { useState } from 'react';

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

import { useMutation } from '@tanstack/react-query';
import { deleteAccount } from '@/services/admin';
import { queryClient } from '@/App';

interface DeleteAccountDialogProps {
  id: string;
}

function DeleteAccountDialog({ id }: DeleteAccountDialogProps) {
  const [open, setOpen] = useState(false);

  const handleDelete = useMutation({
    mutationFn: () => deleteAccount(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['accounts'] });
      setOpen(false);
    },
  });

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="destructive">Delete</Button>
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
            onClick={() => handleDelete.mutate()}
          >
            Delete
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default DeleteAccountDialog;
