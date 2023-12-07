import { useNavigate } from 'react-router-dom';
import { Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';

function TableHeader() {
  const navigate = useNavigate();

  return (
    <header className="relative flex items-center justify-center rounded-t bg-tableHead py-4 text-center text-white">
      Major Final Output / Projects / Programs List
      <Button
        className="absolute right-4 cursor-pointer rounded-sm bg-transparent px-2 font-bold hover:bg-muted/30"
        onClick={() => navigate('/opcr/add')}
        disabled={status === 'calibrating' || status === 'calibrated'}
      >
        <Plus />
      </Button>
    </header>
  );
}

export default TableHeader;
