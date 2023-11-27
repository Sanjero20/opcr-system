import { DialogClose } from '@radix-ui/react-dialog';
import { Button } from '../ui/button';
import { DialogFooter } from '../ui/dialog';

interface ModalFooterProps {
  handleSubmit: () => void;
}

function ModalFooter({ handleSubmit }: ModalFooterProps) {
  return (
    <DialogFooter>
      <DialogClose asChild>
        <Button type="button" className="w-1/2" variant="outline">
          Cancel
        </Button>
      </DialogClose>

      <Button
        type="submit"
        className="w-1/2"
        variant="add"
        onClick={handleSubmit}
      >
        Create
      </Button>
    </DialogFooter>
  );
}

export default ModalFooter;
