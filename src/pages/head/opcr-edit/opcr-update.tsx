import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { Button } from '@/components/ui/button';
import OPCRStatus from '@/components/form-opcr/opcr-status';
import OpcrEditForm from '../components/opcr-form/opr-form';

import { useOpcr } from '@/stores/opcr-store';
import useOpcrForm from '@/hooks/use-opcr-form';
import { updateMFODetails } from '@/services/head';
import { Target } from '@/types/opcr.types';
import { queryClient } from '@/App';

function OpcrEditExistingTarget() {
  const [error, setError] = useState('');

  const params = useParams();
  const navigate = useNavigate();

  const { targets } = useOpcr();
  const {
    setTargetIndicators,
    setTargetName,
    targetName,
    handleTargetName,
    targetIndicators,
    addTargetIndicator,
    deleteTargetIndicator,
    handleTargetIndicator,
    handleTargetIndicatorRating,
  } = useOpcrForm({ name: '' });

  useEffect(() => {
    if (!params.id) return;
    const target = targets.filter((data) => data._id.$oid === params.id)[0];

    if (!target) {
      setError('Something went wrong');
      return;
    }

    setTargetName(target.name);
    setTargetIndicators(target.success);
  }, []);

  if (!params) return <>This MFO does not exist</>;
  if (error) return <>{error}</>;

  const handleUpdateMFO = async () => {
    if (!params.id) return;

    const formattedData: Target = {
      _id: { $oid: params.id },
      name: targetName,
      success: targetIndicators,
    };

    const response = await updateMFODetails(formattedData);
    queryClient.invalidateQueries({ queryKey: ['opcr-data'] });
  };

  return (
    <div className="flex h-full flex-col gap-2">
      <h1 className="title">OPCR FORM EDIT</h1>

      <OpcrEditForm
        targetName={targetName}
        targetIndicators={targetIndicators}
        handleTargetName={handleTargetName}
        handleAddIndicator={addTargetIndicator}
        handleDeleteIndicator={deleteTargetIndicator}
        handleIndicator={handleTargetIndicator}
        handleIndicatorRatings={handleTargetIndicatorRating}
      />

      {/* Button Navigation */}
      <section className="flex items-center justify-between">
        <OPCRStatus />

        <div className="flex gap-2">
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
              handleUpdateMFO();
              navigate('/opcr');
            }}
          >
            Update
          </Button>
        </div>
      </section>
    </div>
  );
}

export default OpcrEditExistingTarget;
