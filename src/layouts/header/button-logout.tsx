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

    navigate('/login');
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className={`text-md bg-transparent hover:bg-transparent`}>
          Logout
        </Button>
      </DialogTrigger>

      <DialogContent>
        <DialogTitle>Confirm Logout</DialogTitle>
        <DialogDescription>Are you sure you want to logout?</DialogDescription>
        <DialogFooter>
          <DialogClose asChild>
            <Button type="button" className="w-24" variant="outline">
              Cancel
            </Button>
          </DialogClose>

          <Button
            variant={'destructive'}
            className={'w-24'}
            onClick={handleLogout}
          >
            Logout
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default ButtonLogout;
