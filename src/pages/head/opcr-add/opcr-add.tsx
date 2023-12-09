import { queryClient } from '@/App';
import { useNavigate } from 'react-router-dom';

import OpcrEditForm from '../components/opcr-form/opr-form';
import Buttons from './buttons';

import { addMFO } from '@/services/head';
import useOpcrForm from '@/hooks/use-opcr-form';

function OpcrAddPage() {
  const navigate = useNavigate();

  const {
    targetName,
    handleTargetName,
    targetIndicators,
    addTargetIndicator,
    deleteTargetIndicator,
    handleTargetIndicator,
    handleTargetIndicatorRating,
  } = useOpcrForm({ name: '' });

  const handleSave = async () => {
    await addMFO({
      name: targetName,
      success: targetIndicators,
    });

    queryClient.invalidateQueries({ queryKey: ['opcr-data'] });
    navigate('/opcr');
  };

  return (
    <div className="flex h-full flex-col gap-2">
      <h1 className="title">OPCR ADD NEW MFO</h1>

      <OpcrEditForm
        targetName={targetName}
        targetIndicators={targetIndicators}
        handleTargetName={handleTargetName}
        handleIndicator={handleTargetIndicator}
        handleAddIndicator={addTargetIndicator}
        handleDeleteIndicator={deleteTargetIndicator}
        handleIndicatorRatings={handleTargetIndicatorRating}
      />

      <Buttons handleSave={handleSave} />
    </div>
  );
}

export default OpcrAddPage;
