/* eslint-disable react-hooks/exhaustive-deps */
import { SetStateAction, useEffect } from 'react';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';

interface SelectAccountTypeProps {
  form: any;
  accountType: string;
  setAccountType: React.Dispatch<SetStateAction<string>>;
}

const values = ['pmt', 'head', 'individual'];

function SelectAccountType({
  form,
  accountType,
  setAccountType,
}: SelectAccountTypeProps) {
  useEffect(() => {
    form.setValue('permission', accountType);

    if (accountType !== 'individual') {
      form.setValue('superior', '');
    }
  }, [accountType]);

  return (
    <div className="flex items-center gap-2">
      <ToggleGroup
        type="single"
        variant="outline"
        className="dark grid w-full grid-cols-3"
        value={accountType}
      >
        {values.map((value) => (
          <ToggleGroupItem
            key={value}
            value={value}
            className="w-full capitalize"
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
