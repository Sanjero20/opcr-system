import { Plus } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

import OpcrEditHeader from './opcr-edit-header';
import ButtonControl from './button-control';

import { useNavigate } from 'react-router-dom';
import { useOpcr } from '@/stores/opcr-store';

function OpcrEditPage() {
  const { targets, addTarget, deleteTarget, handleTarget } = useOpcr();

  const navigate = useNavigate();

  console.clear();
  console.table(targets);

  return (
    <div className="flex h-full flex-col gap-2">
      <h1 className="title">OPCR FORM EDIT</h1>

      <OpcrEditHeader />

      {/* OPCR MAIN DATA */}
      <section className="flex flex-1 flex-col ">
        <div className="relative flex items-center justify-center rounded-t bg-tableHead py-4 text-center text-white">
          Major Final Output / Projects / Programs List
          <div className="absolute right-4 cursor-pointer rounded-sm p-1 font-bold hover:bg-muted/30">
            <Plus onClick={addTarget} />
          </div>
        </div>

        <div className="bg-tableBody flex h-full flex-1 flex-col gap-2 p-4">
          {/* Template */}
          {targets &&
            targets.map((target, index) => (
              <div key={index} className="flex gap-4">
                <Input
                  placeholder=""
                  value={target.name}
                  onChange={(e) => handleTarget(e, index)}
                />

                <div className="flex gap-2">
                  <Button
                    className="w-24"
                    variant={'edit'}
                    onClick={() => navigate(`./${index}`)}
                  >
                    Edit
                  </Button>

                  <Button
                    className="w-24"
                    variant={'destructive'}
                    onClick={() => deleteTarget(index)}
                  >
                    Delete
                  </Button>
                </div>
              </div>
            ))}
        </div>
      </section>

      <ButtonControl route="/opcr" />
    </div>
  );
}

export default OpcrEditPage;
