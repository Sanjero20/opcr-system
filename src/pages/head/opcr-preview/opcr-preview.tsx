import { useEffect } from 'react';

import FormOpcr from '@/components/form-opcr/form-opcr';

import ButtonControl from './button-control';

import { getOPCR } from '@/services/head';
import { useOpcr } from '@/stores/opcr-store';
import { useQuery } from '@tanstack/react-query';

function OpcrPreviewPage() {
  const { status, setStatus, setTargets } = useOpcr();

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
    <div className="flex flex-col gap-2">
      <FormOpcr />

      <ButtonControl />
    </div>
  );
}

export default OpcrPreviewPage;
