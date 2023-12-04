import { useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useOpcr } from '@/stores/opcr-store';
import { Plus } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

import OpcrEditHeader from './opcr-edit-header';

import { useNavigate } from 'react-router-dom';
import { getOPCR } from '@/services/head';

function OpcrEditPage() {
  const { targets, setTargets, addTarget, deleteTarget, handleTarget } =
    useOpcr();

  const navigate = useNavigate();

  const { data: opcr, error } = useQuery({
    queryKey: ['opcr-data'],
    queryFn: getOPCR,
    initialData: null,
  });

  useEffect(() => {
    if (!opcr) return;
    setTargets(opcr.targets);
  }, [opcr]);

  console.clear();
  console.log(opcr);
  console.log(targets);

  return (
    <div className="flex h-full flex-col gap-2">
      <h1 className="title">OPCR FORM EDIT</h1>

      <OpcrEditHeader />

      {/* OPCR TARGETS DATA */}
      <section className="flex flex-1 flex-col ">
        <div className="relative flex items-center justify-center rounded-t bg-tableHead py-4 text-center text-white">
          Major Final Output / Projects / Programs List
          <Button
            className="absolute right-4 cursor-pointer rounded-sm bg-transparent px-2 font-bold hover:bg-muted/30"
            onClick={addTarget}
          >
            <Plus />
          </Button>
        </div>

        <div className="bg-tableBody flex h-full flex-1 flex-col gap-2 p-4">
          {targets &&
            targets.map((target, index) => (
              <div key={index} className="flex gap-4">
                <Input
                  placeholder=""
                  value={target.name}
                  onChange={(e) => handleTarget(e, target.id.$oid)}
                />

                <div className="flex gap-2">
                  <Button
                    className="w-24"
                    variant={'edit'}
                    onClick={() => navigate(`./${target.id.$oid}`)}
                  >
                    Edit
                  </Button>

                  <Button
                    className="w-24"
                    variant={'destructive'}
                    onClick={() => deleteTarget(target.id.$oid)}
                  >
                    Delete
                  </Button>
                </div>
              </div>
            ))}
        </div>
      </section>

      <section className="flex justify-end gap-2">
        <Button
          className="w-24"
          variant={'outline'}
          onClick={() => navigate('/opcr')}
        >
          Cancel
        </Button>

        <Button
          className="w-24"
          variant={'add'}
          onClick={() => {
            navigate('/opcr');
          }}
        >
          Save
        </Button>
      </section>
    </div>
  );
}

export default OpcrEditPage;
