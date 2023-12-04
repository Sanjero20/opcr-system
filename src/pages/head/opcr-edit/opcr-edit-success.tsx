import { useNavigate, useParams } from 'react-router-dom';

import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import InputFields from './opcr-fields';

import useSelectedTarget from '@/hooks/use-selected-target';
import { useOpcr } from '@/stores/opcr-store';
import { updateMFODetails } from '@/services/head';

function OpcrEditSuccessIndicator() {
  const params = useParams();
  const navigate = useNavigate();

  const {
    target,
    handleTargetName,
    handleSuccessIndicator,
    addSuccessIndicator,
    deleteSuccessIndicator,
    handleSuccessRating,
  } = useSelectedTarget(params.id);

  const { updateTargetDetails } = useOpcr();

  if (!target) return <>This MFO does not exist</>;

  return (
    <div className="flex h-full flex-col gap-2">
      <h1 className="title">OPCR FORM EDIT</h1>

      <section className="bg-tableBody flex flex-1 flex-col gap-2 p-4">
        <div className="flex justify-between rounded-t font-bold text-black/70">
          <p>Major Final Output/ Projects / Programs List</p>
          <p>MFO no. {}</p>
        </div>

        <Input
          placeholder=""
          value={target.name}
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
            sucessIndicators={target.success}
            handleIndicator={handleSuccessIndicator}
            handleDeleteIndicator={deleteSuccessIndicator}
            handleSuccessRating={handleSuccessRating}
          />
        </div>

        <Button
          className="w-24 self-center"
          variant={'add'}
          onClick={addSuccessIndicator}
        >
          Add
        </Button>
      </section>

      {/* Button Navigation */}
      <section className="flex justify-end gap-2">
        <Button
          className="w-24"
          variant={'outline'}
          onClick={() => navigate('/opcr/edit')}
        >
          Cancel
        </Button>

        <Button
          className="w-24"
          variant={'edit'}
          onClick={() => {
            updateMFODetails(target);
            updateTargetDetails(target);
            navigate('/opcr/edit');
          }}
        >
          Update
        </Button>
      </section>
    </div>
  );
}

export default OpcrEditSuccessIndicator;
