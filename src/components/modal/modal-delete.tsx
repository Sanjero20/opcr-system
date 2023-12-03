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

interface DeleteAccountDialogProps {
  modalIsOpen: boolean;
  modalHandler: React.Dispatch<React.SetStateAction<boolean>>;
  deleteHandler: () => void;
}

function DeleteAccountDialog({
  modalIsOpen,
  modalHandler,
  deleteHandler,
}: DeleteAccountDialogProps) {
  return (
    <Dialog open={modalIsOpen} onOpenChange={modalHandler}>
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
            onClick={deleteHandler}
          >
            Delete
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default DeleteAccountDialog;
