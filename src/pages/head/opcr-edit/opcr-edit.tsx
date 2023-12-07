import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

import { Button } from '@/components/ui/button';
import OPCRStatus from '@/components/form-opcr/opcr-status';
import OpcrEditHeader from '../components/opcr-info-header';
import TableHeader from './table-header';
import TableBody from './table-body';

import { getOPCR, saveOPCR } from '@/services/head';
import { useOpcr } from '@/stores/opcr-store';

function OpcrEditPage() {
  const { status, setStatus, targets, setTargets } = useOpcr();

  const navigate = useNavigate();

  const { data: opcr } = useQuery({
    queryKey: ['opcr-data'],
    queryFn: getOPCR,
    initialData: null,
  });

  useEffect(() => {
    if (opcr) {
      setStatus(opcr.status || 'in progress');
      setTargets(opcr.data || []);
    }
  }, [opcr]);

  return (
    <div className="flex h-full flex-col gap-2">
      <h1 className="title">OPCR FORM EDIT</h1>

      <OpcrEditHeader />

      {/* OPCR TARGETS DATA */}
      <section className="flex flex-1 flex-col ">
        <TableHeader />
        <TableBody />
      </section>

      <div className="flex items-center justify-between">
        <OPCRStatus />

        <section>
          <Button
            className="w-24"
            variant={'outline'}
            disabled={status === 'calibrating' || status === 'calibrated'}
            onClick={() => navigate('/opcr')}
          >
            Cancel
          </Button>

          <Button
            className="w-24"
            variant={'add'}
            disabled={status === 'calibrating' || status === 'calibrated'}
            onClick={() => {
              saveOPCR(targets);
              setStatus('calibrating');
              navigate('/opcr');
            }}
          >
            Save
          </Button>
        </section>
      </div>
    </div>
  );
}

export default OpcrEditPage;
