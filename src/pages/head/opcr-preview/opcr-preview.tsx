import { Card } from '@/components/ui/card';
import FormOpcr from '@/components/form-opcr/form-opcr';
import ButtonControl from './button-control';

function OpcrPreviewPage() {
  return (
    <Card className="flex flex-col gap-2 p-4">
      <FormOpcr />
      <ButtonControl />
    </Card>
  );
}

export default OpcrPreviewPage;
