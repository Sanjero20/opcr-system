import { useState } from 'react';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import { AccountType } from '@/types/data-types';

const values = ['admin', 'pmt', 'head', 'individual'];

function SelectAccountType() {
  const [accountType, setAccountType] = useState('admin');

  return (
    <div className="flex items-center gap-2">
      <ToggleGroup
        type="single"
        variant="outline"
        className="dark grid grid-cols-4"
        value={accountType}
      >
        {values.map((value) => (
          <ToggleGroupItem
            key={value}
            value={value}
            className="capitalize"
            onClick={() => setAccountType(value)}
          >
            {value}
          </ToggleGroupItem>
        ))}
      </ToggleGroup>
    </div>
  );
}

export default SelectAccountType;
