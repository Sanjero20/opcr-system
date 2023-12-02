import { useEffect } from 'react';

import { Card } from '@/components/ui/card';
import FormOpcr from '@/components/form-opcr/form-opcr';

import ButtonControl from './button-control';

import { retrieveOpcr } from '@/services/head';
import { useOpcr } from '@/stores/opcr-store';

function OpcrPreviewPage() {
  const { targets, setTargets } = useOpcr();

  useEffect(() => {
    if (targets.length != 0) return;

    const fetchData = async () => {
      const opcrList = await retrieveOpcr();

      // Display the latest opcr
      const index = opcrList.length - 1;
      setTargets(opcrList[index].targets);
    };

    fetchData();
  }, []);

  return (
    <Card className="flex flex-col gap-2 p-4">
      <FormOpcr />
      <ButtonControl />
    </Card>
  );
}

export default OpcrPreviewPage;
