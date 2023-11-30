import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { removeCookie } from '@/lib/cookie';

function ButtonLogout() {
  const navigate = useNavigate();

  const handleLogout = () => {
    removeCookie('permission');
    removeCookie('token');

    navigate('/login');
  };

  return (
    <Button
      className={`text-md bg-transparent hover:bg-transparent`}
      onClick={handleLogout}
    >
      Logout
    </Button>
  );
}

export default ButtonLogout;
