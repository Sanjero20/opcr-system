import { useMemo } from 'react';
import { useParams } from 'react-router-dom';

import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import InputFields from './opcr-fields';
import ButtonControl from './button-control';

import { useOpcr } from '@/stores/opcr-store';

function OpcrEditSuccessIndicator() {
  const { targets, handleTarget } = useOpcr();
  const { addSuccessIndicator } = useOpcr();

  const params = useParams();

  const targetIndex = useMemo(() => Number(params.id), [params]);

  if (
    (!targetIndex && targetIndex !== 0) ||
    targetIndex < 0 ||
    targetIndex > targets.length - 1
  )
    return <>Invalid target ID</>;

  return (
    <div className="flex h-full flex-col gap-2">
      <h1 className="title">OPCR FORM EDIT</h1>

      <section className="bg-tableBody flex flex-1 flex-col gap-2 p-4">
        <div className="flex justify-between rounded-t font-bold text-black/70">
          <p>Major Final Output/ Projects / Programs List</p>
          <p>MFO no. {Number(params.id) + 1}</p>
        </div>

        <Input
          placeholder=""
          value={targets[Number(params.id)].name}
          onChange={(e) => handleTarget(e, Number(params.id))}
        />

        <div className="grid grid-cols-12 gap-2 font-bold text-black/70">
          {/* Columns Start */}
          <p className="col-span-4">Target/Success Indicator</p>
          <p className="col-span-2">Alloted Budget</p>
          <p className="col-span-3">Divisions / Individuals Accountable</p>
          <p className="col-span-2">Rating</p>
          <p />
          {/* Columns End */}

          <InputFields
            targetIndex={targetIndex}
            data={targets[targetIndex].success}
          />
        </div>

        <Button
          className="w-24 self-center"
          variant={'add'}
          onClick={() => addSuccessIndicator(Number(params.id))}
        >
          Add
        </Button>
      </section>

      <ButtonControl route="/opcr/edit" />
    </div>
  );
}

export default OpcrEditSuccessIndicator;
