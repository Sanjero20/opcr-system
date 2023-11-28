/* eslint-disable react-hooks/exhaustive-deps */
'use client';

import { SetStateAction, useEffect, useState } from 'react';
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
import { getOfficesByCampusId } from '@/services/api/admin';
import { Office } from '@/types/data-types';

interface SelectSuperiorProps {
  selectedCampus: string;
  setSelectedOffice: React.Dispatch<SetStateAction<string>>;
}

function SelectOffice({
  selectedCampus,
  setSelectedOffice,
}: SelectSuperiorProps) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('');

  const [offices, setOffices] = useState<Office[]>([]);

  useEffect(() => {
    if (!selectedCampus) return;

    const fetchData = async () => {
      const data = await getOfficesByCampusId(selectedCampus);
      setOffices(data);
    };

    fetchData();
  }, [selectedCampus]);

  useEffect(() => {
    const officeId =
      offices.find((office) => office.name.toLowerCase() == value)?._id.$oid ||
      '';
    setSelectedOffice(officeId);
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
              ? offices.find((campus) => campus.name.toLowerCase() === value)
                  ?.name
              : 'Select office...'}
            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>

        <PopoverContent className="w-full p-0">
          <Command>
            <CommandInput placeholder="Search office..." />
            <CommandEmpty>No office found.</CommandEmpty>
            <CommandGroup>
              {/*  */}
              {offices.map((office) => (
                <CommandItem
                  key={office.name}
                  value={office.name}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? '' : currentValue);
                    setOpen(false);
                  }}
                >
                  {/*  */}
                  <Check
                    className={cn(
                      'mr-2 h-4 w-4',
                      value === office.name.toLowerCase()
                        ? 'opacity-100'
                        : 'opacity-0',
                    )}
                  />
                  {office.name}
                </CommandItem>
              ))}
            </CommandGroup>
          </Command>
        </PopoverContent>
      </Popover>
    </>
  );
}

export default SelectOffice;
