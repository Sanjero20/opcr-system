import React, { ChangeEvent } from 'react';

import ToggleRating from '@/pages/head/opcr-edit/toggle-rating';

import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

import { SuccessIndicator } from '@/types/opcr.types';

interface InputFieldsProps {
  sucessIndicators: SuccessIndicator[];
  handleIndicator: (e: ChangeEvent<HTMLInputElement>, index: number) => void;
  handleDeleteIndicator: (index: number) => void;
  handleSuccessRating: (ratings: number[], index: number) => void;
}

function InputFields({
  sucessIndicators,
  handleIndicator,
  handleDeleteIndicator,
  handleSuccessRating,
}: InputFieldsProps) {
  return (
    <>
      {sucessIndicators.map((success, index) => (
        <React.Fragment key={index}>
          <Input
            name="indicator"
            className="col-span-4 font-normal"
            value={sucessIndicators[index].indicator}
            onChange={(e) => handleIndicator(e, index)}
            autoComplete="off"
          />

          <Input
            name="budget"
            className="col-span-2 font-normal"
            value={success.budget}
            onChange={(e) => handleIndicator(e, index)}
            autoComplete="off"
          />

          <Input
            name="division"
            className="col-span-3 font-normal"
            value={success.division}
            onChange={(e) => handleIndicator(e, index)}
            autoComplete="off"
          />

          <ToggleRating
            rating={success.rating}
            successIndex={index}
            handleSuccessRating={handleSuccessRating}
          />

          <Button
            className="w-full"
            variant={'destructive'}
            onClick={() => handleDeleteIndicator(index)}
          >
            Delete
          </Button>
        </React.Fragment>
      ))}
    </>
  );
}

export default InputFields;
