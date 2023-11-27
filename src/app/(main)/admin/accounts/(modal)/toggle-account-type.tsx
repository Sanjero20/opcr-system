import { useEffect, useState } from 'react';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';

interface SelectAccountTypeProps {
  form: any;
}

const values = ['admin', 'pmt', 'head', 'individual'];

function SelectAccountType({ form }: SelectAccountTypeProps) {
  const [accountType, setAccountType] = useState('admin');

  useEffect(() => {
    form.setValue('permission', accountType);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [accountType]);

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
