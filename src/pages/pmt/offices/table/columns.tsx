import { PMT_Office } from '@/types';
import { ColumnDef } from '@tanstack/react-table';

export const officeColumns: ColumnDef<PMT_Office>[] = [
  { accessorKey: 'name', header: 'Office' },
  { accessorKey: 'status', header: 'OPCR Status' },
  {
    accessorKey: 'progress',
    header: 'Progress',
    cell: ({ row }) => {
      const value = row.original;
      return <>{value.progress}%</>;
    },
  },
];
