import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import OpcrEditHeader from './opcr-edit-header';
import ButtonControl from './button-control';
import { Plus } from 'lucide-react';

function OpcrEditPage() {
  return (
    <div className="flex h-full flex-col gap-2">
      <h1 className="title">OPCR EDIT</h1>

      <OpcrEditHeader />

      {/* OPCR MAIN DATA */}
      <section className="flex flex-1 flex-col ">
        <div className="relative flex items-center justify-center rounded bg-tableHead py-4 text-center text-white">
          Major Final Output / Projects / Programs List
          <div className="absolute right-4 cursor-pointer rounded-sm p-1 font-bold hover:bg-muted/30">
            <Plus />
          </div>
        </div>

        <div className="h-full flex-1 bg-slate-200 p-4">
          {/* Template */}
          <div className="flex gap-4">
            <Input placeholder="" />

            <div className="flex gap-2">
              <Button className="w-24" variant={'edit'}>
                Edit
              </Button>
              <Button className="w-24" variant={'destructive'}>
                Delete
              </Button>
            </div>
          </div>
        </div>
      </section>

      <ButtonControl />
    </div>
  );
}

export default OpcrEditPage;
