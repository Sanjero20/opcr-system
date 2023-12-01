import { useParams } from 'react-router-dom';

import { Input } from '@/components/ui/input';
import ButtonControl from './button-control';
import { useOpcr } from '@/stores/opcr-store';
import { useState } from 'react';
import ToggleRating from '@/components/toggle-rating';

function OpcrEditSuccessIndicator() {
  const params = useParams();

  const { targets, handleTarget } = useOpcr();

  if (!params) return;

  console.clear();
  console.log(targets[Number(params.id)].success);

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

        <div className="grid grid-cols-6 gap-2 font-bold text-black/70">
          <p className="col-span-2">Target/Success Indicator</p>
          <p className="col-span-1">Alloted Budget</p>
          <p className="col-span-2">Divisions / Individuals Accountable</p>
          <p className="col-span-1">Rating</p>

          {/* Template */}
          <>
            <Input className="col-span-2" />
            <Input className="col-span-1" />
            <Input className="col-span-2" />
            <ToggleRating />
          </>
        </div>
      </section>

      <ButtonControl route="/opcr/edit" />
    </div>
  );
}

export default OpcrEditSuccessIndicator;
