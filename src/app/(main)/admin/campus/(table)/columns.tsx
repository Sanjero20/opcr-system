'use client';

import { Button } from '@/components/ui/button';
import { Campus } from '@/types/data-types';
import { ColumnDef } from '@tanstack/react-table';

export const columns: ColumnDef<Campus>[] = [
  { accessorKey: 'name', header: 'Campus' },
  {
    accessorKey: 'offices',
    header: () => <div>Office & Departments</div>,
    cell: ({ row }) => {
      const offices = row.original.offices;

      return (
        <div className="flex w-full flex-col gap-2">
          {offices.map((office) => (
            <div key={office.name}>{office.name}</div>
          ))}
        </div>
      );
    },
  },
  {
    id: 'actions',
    cell: ({ row }) => {
      const rowValue = row.original;
      return (
        <div className="flex flex-col justify-center">
          <div className="flex gap-2">
            <Button variant={'outline'}>update</Button>
            <Button variant={'destructive'}>delete</Button>
          </div>
        </div>
      );
    },
  },
];
