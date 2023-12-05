import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { submitOPCR } from '@/services/head';
import { useOpcr } from '@/stores/opcr-store';

function ButtonControl() {
  const navigate = useNavigate();

  const { status } = useOpcr();

  const handleSubmit = async () => {
    const res = await submitOPCR();
  };

  return (
    <div className="flex gap-2">
      <Button
        className="w-24"
        variant={'add'}
        onClick={handleSubmit}
        disabled={status === 'calibrating'}
      >
        Submit
      </Button>

      <Button
        className="w-24"
        variant={'edit'}
        onClick={() => navigate('/opcr/edit')}
        disabled={status === 'calibrating'}
      >
        Edit
      </Button>

      <Button className="w-24" disabled={status !== 'calibrated'}>
        Assign
      </Button>
    </div>
  );
}

export default ButtonControl;
