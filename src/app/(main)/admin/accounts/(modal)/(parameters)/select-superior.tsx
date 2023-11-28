/* eslint-disable react-hooks/exhaustive-deps */
'use client';

import { useEffect, useState } from 'react';
import { Check, ChevronsUpDown } from 'lucide-react';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from '@/components/ui/command';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { useQuery } from '@tanstack/react-query';
import { getHeadAccounts } from '@/services/api/admin';

interface SelectSuperiorProps {
  form: any;
}

function SelectSuperior({ form }: SelectSuperiorProps) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('');

  const { data: accounts, error } = useQuery({
    queryKey: ['head-accounts'],
    queryFn: getHeadAccounts,
    initialData: [],
  });

  useEffect(() => {
    const accountId =
      accounts.find((account) => account.name.toLowerCase() == value)?._id
        .$oid || '';
    form.setValue('superior', accountId);
  }, [value]);

  return (
    <>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="w-full justify-between"
          >
            {value
              ? accounts.find((account) => account.name.toLowerCase() === value)
                  ?.name
              : 'Select superior...'}
            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>

        <PopoverContent className="w-full p-0">
          <Command>
            <CommandInput placeholder="Search account..." />
            <CommandEmpty>No account found.</CommandEmpty>
            <CommandGroup>
              {/*  */}
              {accounts.map((account) => (
                <CommandItem
                  key={account.name}
                  value={account.name}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? '' : currentValue);
                    setOpen(false);
                  }}
                >
                  {/*  */}
                  <Check
                    className={cn(
                      'mr-2 h-4 w-4',
                      value === account.name.toLowerCase()
                        ? 'opacity-100'
                        : 'opacity-0',
                    )}
                  />
                  {account.name}
                </CommandItem>
              ))}
            </CommandGroup>
          </Command>
        </PopoverContent>
      </Popover>
    </>
  );
}

export default SelectSuperior;
