'use client';

import { Campus } from '@/types/data-types';
import { ColumnDef } from '@tanstack/react-table';

export const columns: ColumnDef<Campus>[] = [
  { accessorKey: 'name', header: 'Campus' },
  {
    accessorKey: 'offices',
    header: 'Office & Departments',
    cell: ({ row }) => {
      const rowValue = row.original;

      return (
        <div>
          {rowValue.offices.map((office) => (
            <div key={office.name}>{office.name}</div>
          ))}
        </div>
      );
    },
  },
];
