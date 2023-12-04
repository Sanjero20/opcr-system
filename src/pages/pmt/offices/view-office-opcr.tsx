import FormOpcr from '@/components/form-opcr/form-opcr';
import { Button } from '@/components/ui/button';
import { getOPCRbyOfficeId } from '@/services/pmt';
import { useOpcr } from '@/stores/opcr-store';
import { useQuery } from '@tanstack/react-query';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

function ViewOfficeOPCR() {
  const params = useParams();
  const { setTargets } = useOpcr();

  const handleReject = () => {};

  const { data, error } = useQuery({
    queryKey: ['office-opcr'],
    queryFn: () => {
      if (!params.id) return;
      return getOPCRbyOfficeId(params.id);
    },
  });

  useEffect(() => {
    if (!data) return;
    setTargets(data.targets);
  }, [data]);

  return (
    <div className="flex flex-col gap-2">
      <h1 className="title">OPCR FORM PREVIEW</h1>

      <FormOpcr />

      <div className="flex justify-end gap-2">
        <Button
          className="w-24"
          variant={'add'}
          disabled={data?.status !== 'calibrating'}
        >
          Accept
        </Button>

        <Button
          className="w-24"
          variant={'destructive'}
          onClick={handleReject}
          disabled={data?.status !== 'calibrating'}
        >
          Reject
        </Button>
      </div>
    </div>
  );
}

export default ViewOfficeOPCR;
