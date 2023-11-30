import FormOpcr from '@/components/form-opcr/form-opcr';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

function OpcrPreviewPage() {
  return (
    <Card className="flex flex-col gap-2 p-4">
      <FormOpcr />

      <div className="flex justify-end gap-2">
        <Button className="w-24" variant={'add'}>
          Submit
        </Button>
        <Button className="w-24" variant={'edit'}>
          Edit
        </Button>
        <Button className="w-24" disabled>
          Assign
        </Button>
      </div>
    </Card>
  );
}

export default OpcrPreviewPage;
