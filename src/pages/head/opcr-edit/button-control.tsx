import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

function ButtonControl() {
  const navigate = useNavigate();

  const cancelChanges = () => {
    navigate('/opcr');
  };

  const saveChanges = () => {
    navigate('/opcr');
  };

  return (
    <section className="flex justify-end gap-2">
      <Button className="w-24" variant={'outline'} onClick={cancelChanges}>
        Cancel
      </Button>

      <Button className="w-24" variant={'add'} onClick={saveChanges}>
        Save
      </Button>
    </section>
  );
}

export default ButtonControl;
