import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useOpcr } from '@/stores/opcr-store';
import ButtonDeleteMFO from './button-delete';

function TableBody() {
  const { status, targets } = useOpcr();

  const navigate = useNavigate();

  return (
    <div className="bg-tableBody flex h-full flex-1 flex-col gap-2 p-4">
      {targets &&
        targets.map((target, index) => (
          <div key={index} className="flex gap-4">
            <p className="flex w-full items-center rounded bg-white px-2">
              {target.name}
            </p>

            <div className="flex gap-2">
              <Button
                className="w-24"
                variant={'edit'}
                onClick={() => navigate(`./${target._id.$oid}`)}
                disabled={status === 'calibrating' || status === 'calibrated'}
              >
                Edit
              </Button>

              <ButtonDeleteMFO id={target._id.$oid} />
            </div>
          </div>
        ))}
    </div>
  );
}

export default TableBody;
