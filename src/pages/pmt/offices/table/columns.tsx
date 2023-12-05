import { getNumberColor, getStatusColor } from '@/lib/status-color';
import { cn } from '@/lib/utils';
import { PMT_Office } from '@/types';
import { ColumnDef } from '@tanstack/react-table';

export const officeColumns: ColumnDef<PMT_Office>[] = [
  { accessorKey: 'name', header: 'Office' },
  {
    accessorKey: 'status',
    header: 'OPCR Status',
    cell: ({ row }) => {
      const { status } = row.original;
      const styles = getStatusColor(status);
      return <span className={styles}>{status}</span>;
    },
  },
  {
    accessorKey: 'progress',
    header: 'Progress',
    cell: ({ row }) => {
      const { progress } = row.original;
      const styles = getNumberColor(progress);
      return <span className={`${styles} font-bold`}>{progress}%</span>;
    },
  },
];
