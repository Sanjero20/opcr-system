import FormOpcr from '@/components/form-opcr/form-opcr';
import { Button } from '@/components/ui/button';
import { getOPCRbyOfficeId } from '@/services/pmt';
import { useOpcr } from '@/stores/opcr-store';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

function ViewOfficeOPCR() {
  const params = useParams();

  const { setTargets } = useOpcr();

  useEffect(() => {
    const fetchData = async () => {
      if (!params.id) return;
      const data = await getOPCRbyOfficeId(params.id);
      setTargets(data.targets);
    };

    fetchData();
  }, []);

  return (
    <div className="flex flex-col gap-2">
      <h1 className="title">OPCR FORM PREVIEW</h1>

      <FormOpcr />

      <div className="flex justify-end gap-2">
        <Button className="w-24" variant={'add'}>
          Accept
        </Button>

        <Button className="w-24" variant={'destructive'}>
          Reject
        </Button>
      </div>
    </div>
  );
}

export default ViewOfficeOPCR;
