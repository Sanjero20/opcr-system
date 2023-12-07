import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

import { Button } from '@/components/ui/button';
import OPCRStatus from '@/components/form-opcr/opcr-status';
import OpcrEditHeader from '../components/opcr-info-header';
import TableHeader from './table-header';
import TableBody from './table-body';

import { getOPCR } from '@/services/head';
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

  // Button handlers
  const cancelChanges = () => {};

  const saveChanges = () => {};

  return (
    <div className="flex h-full flex-col gap-2">
      <h1 className="title">OPCR FORM EDIT</h1>

      <OpcrEditHeader />

      {/* OPCR TARGETS DATA */}
      <section className="flex flex-1 flex-col ">
        <TableHeader />
        <TableBody />
      </section>

      {/* Footer */}
      <section className="flex items-center justify-between">
        <OPCRStatus />

        <div>
          <Button
            className="w-24"
            variant={'add'}
            onClick={() => navigate('/opcr')}
          >
            View Form
          </Button>
        </div>
      </section>
    </div>
  );
}

export default OpcrEditPage;
