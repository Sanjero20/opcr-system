import { useState } from 'react';
import { ToggleGroup, ToggleGroupItem } from './ui/toggle-group';

const values = ['q', 'e', 't', 'a'];

function ToggleRating() {
  const [rating, setRating] = useState([0, 0, 0, 0]);

  const handleRating = (index: number) => {
    const newRating = [...rating];
    newRating[index] = newRating[index] === 0 ? 1 : 0;
    setRating(newRating);
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