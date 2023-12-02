import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { removeCookie } from '@/lib/cookie';
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogFooter,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from '@/components/ui/dialog';

function ButtonLogout() {
  const navigate = useNavigate();

  const handleLogout = () => {
    removeCookie('permission');
    removeCookie('token');

    // Perform logout actions here
    navigate('/login');
  };

  return (
    <Dialog>
      <DialogTrigger>
        <Button className={`text-md bg-transparent hover:bg-transparent`}>
          Logout
        </Button>
      </DialogTrigger>

      <DialogContent>
        <DialogTitle>Confirm Logout</DialogTitle>
        <DialogDescription>Are you sure you want to logout?</DialogDescription>
        <DialogFooter>
          <Button
            className={`text-md bg-red-500 hover:bg-red-700`}
            onClick={() => {
              handleLogout();
            }}
          >
            Logout
          </Button>
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              Close
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default ButtonLogout;
