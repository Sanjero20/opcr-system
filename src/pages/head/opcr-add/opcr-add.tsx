import useOpcrForm from '@/hooks/use-opcr-form';
import OpcrEditForm from '../components/opcr-form/opr-form';
import { Button } from '@/components/ui/button';
import Buttons from './buttons';
import { addMFO } from '@/services/head';

function OpcrAddPage() {
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
    const response = await addMFO({
      name: targetName,
      success: targetIndicators,
    });

    console.log(response);
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
