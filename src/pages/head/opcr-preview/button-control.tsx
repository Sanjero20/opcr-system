import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { submitOPCR } from '@/services/head';
import { useOpcr } from '@/stores/opcr-store';
import OPCRStatus from '@/components/form-opcr/opcr-status';

function ButtonControl() {
  const navigate = useNavigate();

  const { status } = useOpcr();

  const handleSubmit = async () => {
    const res = await submitOPCR();
    console.log(res);
  };

  return (
    <div className="flex items-center justify-between gap-2">
      <OPCRStatus />

      <section className="flex gap-2">
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
      </section>
    </div>
  );
}

export default ButtonControl;
