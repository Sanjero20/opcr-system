import { useEffect } from 'react';

import { Card } from '@/components/ui/card';
import FormOpcr from '@/components/form-opcr/form-opcr';

import ButtonControl from './button-control';

import { getOPCR } from '@/services/head';
import { useOpcr } from '@/stores/opcr-store';
import { useQuery } from '@tanstack/react-query';

function OpcrPreviewPage() {
  const { setTargets } = useOpcr();

  const { data: opcr, error } = useQuery({
    queryKey: ['opcr-data'],
    queryFn: getOPCR,
    initialData: null,
  });

  useEffect(() => {
    if (opcr) {
      setTargets(opcr);
    }
  }, [opcr]);

  return (
    <Card className="flex flex-col gap-2 p-4">
      <FormOpcr />
      <ButtonControl />
    </Card>
  );
}

export default OpcrPreviewPage;
