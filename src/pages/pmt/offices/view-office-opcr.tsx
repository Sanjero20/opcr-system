import FormOpcr from '@/components/form-opcr/form-opcr';
import OPCRStatus from '@/components/form-opcr/opcr-status';
import { Button } from '@/components/ui/button';
import { getOPCRbyOfficeId, getRemarksTemplate } from '@/services/pmt';
import { useOpcr } from '@/stores/opcr-store';
import { useQuery } from '@tanstack/react-query';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

function ViewOfficeOPCR() {
  const params = useParams();
  const { setStatus, setTargets } = useOpcr();

  // Get OPCR Data
  const { data, error } = useQuery({
    queryKey: ['office-opcr'],
    queryFn: () => {
      if (!params.id) return;
      return getOPCRbyOfficeId(params.id);
    },
  });

  // Get Remarks template by the opcr id
  useEffect(() => {
    const fetchTemplate = async () => {
      if (data) {
        const { template } = await getRemarksTemplate(data._id.$oid);
      }
    };

    fetchTemplate();
  }, [data]);

  // Set opcr targets locally
  useEffect(() => {
    if (!data) return;
    setTargets(data.targets);
    setStatus(data.status);
  }, [data]);

  // Functions
  const handleReject = () => {};

  const handleAccept = () => {};

  return (
    <div className="flex flex-col gap-2">
      <h1 className="title">OPCR FORM PREVIEW</h1>

      <FormOpcr />

      <div className="flex items-center justify-between gap-2">
        <OPCRStatus />

        <section className="flex items-center gap-2">
          <Button
            className="w-24"
            variant={'add'}
            onClick={handleAccept}
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
        </section>
      </div>
    </div>
  );
}

export default ViewOfficeOPCR;
