import useOpcrForm from '@/hooks/use-opcr-form';
import OpcrEditForm from '../components/opcr-form/opr-form';
import { Button } from '@/components/ui/button';

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

      {/* FOOTER - contains button controls and status */}
      <Button
        onClick={() => console.log(targetName, targetIndicators)}
        className="w-fit"
      >
        CLICK
      </Button>
    </div>
  );
}

export default OpcrAddPage;
