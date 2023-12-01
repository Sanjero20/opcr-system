import React from 'react';

import ToggleRating from '@/components/toggle-rating';
import { Input } from '@/components/ui/input';
import { useOpcr } from '@/stores/opcr-store';
import { SuccessIndicator } from '@/types/opcr.types';
import { Button } from '@/components/ui/button';

interface InputFieldsProps {
  targetIndex: number;
  data: SuccessIndicator[];
}

function InputFields({ targetIndex, data }: InputFieldsProps) {
  const { handleSuccessIndicator, deleteSuccessIndicator } = useOpcr();

  return (
    <>
      {data.map((success, index) => (
        <React.Fragment key={index}>
          <Input
            name="indicator"
            className="col-span-4 font-normal"
            value={data[index].indicator}
            onChange={(e) => handleSuccessIndicator(e, targetIndex, index)}
          />

          <Input
            name="budget"
            className="col-span-2 font-normal"
            value={data[index].budget}
            onChange={(e) => handleSuccessIndicator(e, targetIndex, index)}
          />

          <Input
            name="division"
            className="col-span-3 font-normal"
            value={data[index].division}
            onChange={(e) => handleSuccessIndicator(e, targetIndex, index)}
          />

          <ToggleRating />

          <Button
            className="w-full"
            variant={'destructive'}
            onClick={() => deleteSuccessIndicator(targetIndex, index)}
          >
            Delete
          </Button>
        </React.Fragment>
      ))}
    </>
  );
}

export default InputFields;
