import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { SuccessIndicator } from '@/types/opcr.types';
import InputFields from './opcr-fields';

interface OpcrEditFormProps {
  targetName: string;
  targetIndicators: SuccessIndicator[];
  handleTargetName: (e: any) => void;
  handleIndicator: (e: any, index: number) => void;
  handleAddIndicator: () => void;
  handleDeleteIndicator: (index: number) => void;
  handleIndicatorRatings: (value: number[], index: number) => void;
}

function OpcrEditForm({
  targetName,
  handleTargetName,
  targetIndicators,
  handleIndicator,
  handleAddIndicator,
  handleDeleteIndicator,
  handleIndicatorRatings,
}: OpcrEditFormProps) {
  return (
    <section className="bg-tableBody flex flex-1 flex-col gap-2 p-4">
      <div className="flex justify-between rounded-t font-bold text-black/70">
        <p>Major Final Output/ Projects / Programs List</p>
        <p>MFO no. {}</p>
      </div>

      <Input
        placeholder=""
        value={targetName}
        onChange={(e) => handleTargetName(e)}
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
          sucessIndicators={targetIndicators}
          handleIndicator={handleIndicator}
          handleDeleteIndicator={handleDeleteIndicator}
          handleSuccessRating={handleIndicatorRatings}
        />
      </div>

      <Button
        className="w-24 self-center"
        variant={'add'}
        onClick={handleAddIndicator}
      >
        Add
      </Button>
    </section>
  );
}

export default OpcrEditForm;
