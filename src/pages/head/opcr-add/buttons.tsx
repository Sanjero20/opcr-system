import { queryClient } from '@/App';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

interface ButtonProps {
  handleSave: () => void;
}

function Buttons({ handleSave }: ButtonProps) {
  const navigate = useNavigate();

  const handleSaveMFO = () => {
    handleSave();
    queryClient.invalidateQueries({ queryKey: ['opcr-data'] });
    navigate('/opcr/edit');
  };

  return (
    <div className="flex justify-end gap-2">
      <Button
        className="w-24"
        onClick={() => navigate('/opcr/edit')}
        variant={'outline'}
      >
        Cancel
      </Button>

      <Button className="w-24" onClick={handleSaveMFO} variant={'add'}>
        Save
      </Button>
    </div>
  );
}

export default Buttons;
