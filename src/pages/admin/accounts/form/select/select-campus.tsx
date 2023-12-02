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

import { getCampusList } from '@/services/admin';

interface SelectSuperiorProps {
  setSelectedCampus: React.Dispatch<SetStateAction<string>>;
}

function SelectCampus({ setSelectedCampus }: SelectSuperiorProps) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('');

  const { data: campuses, error } = useQuery({
    queryKey: ['campuses'],
    queryFn: getCampusList,
    initialData: [],
  });

  useEffect(() => {
    const campusId =
      campuses.find((campus) => campus.name.toLowerCase() == value)?._id.$oid ||
      '';
    setSelectedCampus(campusId);
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
              ? campuses.find((campus) => campus.name.toLowerCase() === value)
                  ?.name
              : 'Select campus...'}
            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>

        <PopoverContent className="w-full p-0">
          <Command>
            <CommandInput placeholder="Search campus..." />
            <CommandEmpty>No campus found.</CommandEmpty>
            <CommandGroup>
              {/*  */}
              {campuses.map((campus) => (
                <CommandItem
                  key={campus.name}
                  value={campus.name}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? '' : currentValue);
                    setOpen(false);
                  }}
                >
                  {/*  */}
                  <Check
                    className={cn(
                      'mr-2 h-4 w-4',
                      value === campus.name.toLowerCase()
                        ? 'opacity-100'
                        : 'opacity-0',
                    )}
                  />
                  {campus.name}
                </CommandItem>
              ))}
            </CommandGroup>
          </Command>
        </PopoverContent>
      </Popover>
    </>
  );
}

export default SelectCampus;
