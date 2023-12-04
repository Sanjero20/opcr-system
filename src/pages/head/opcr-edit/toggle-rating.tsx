import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import { useOpcr } from '@/stores/opcr-store';

const values = ['q', 'e', 't', 'a'];

interface ToggleRatingProps {
  successIndex: number;
  rating: number[];
  handleSuccessRating: (rating: number[], index: number) => void;
}

function ToggleRating({
  rating,
  successIndex,
  handleSuccessRating,
}: ToggleRatingProps) {
  const handleRating = (index: number) => {
    const newRating = [...rating];
    newRating[index] = newRating[index] === 0 ? 1 : 0;
    handleSuccessRating(newRating, successIndex);
  };

  return (
    <ToggleGroup
      type="multiple"
      className="dark col-span-2 flex justify-start gap-2"
    >
      {values.map((value, index) => (
        <ToggleGroupItem
          key={value}
          value={value}
          className="bg-white px-4 capitalize"
          data-state={rating[index] === 0 ? 'off' : 'on'}
          onClick={() => handleRating(index)}
        >
          {value}
        </ToggleGroupItem>
      ))}
    </ToggleGroup>
  );
}

export default ToggleRating;
