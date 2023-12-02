import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useOpcr } from '@/stores/opcr-store';
import { createOpcr } from '@/services/head';

function ButtonControl() {
  const { targets } = useOpcr();

  const navigate = useNavigate();

  return (
    <div className="flex justify-end gap-2">
      <Button
        className="w-24"
        variant={'add'}
        onClick={() => createOpcr(targets)}
      >
        Submit
      </Button>

      <Button
        className="w-24"
        variant={'edit'}
        onClick={() => navigate('/opcr/edit')}
      >
        Edit
      </Button>

      <Button className="w-24" disabled>
        Assign
      </Button>
    </div>
  );
}

export default ButtonControl;
