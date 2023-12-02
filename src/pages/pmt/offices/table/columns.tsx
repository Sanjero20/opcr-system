import { cn } from '@/lib/utils';
import { PMT_Office } from '@/types';
import { ColumnDef } from '@tanstack/react-table';
import { number } from 'zod';

export const officeColumns: ColumnDef<PMT_Office>[] = [
  { accessorKey: 'name', header: 'Office' },
  {
    accessorKey: 'status',
    header: 'OPCR Status',
    cell: ({ row }) => {
      const { status } = row.original;

      let styles = cn(
        status === 'calibrated' && 'text-green-400',
        status === 'in progress' && 'text-yellow-400',
        status === 'rejected' && 'text-red-400',
        'capitalize font-bold',
      );

      return <span className={styles}>{status}</span>;
    },
  },
  {
    accessorKey: 'progress',
    header: 'Progress',
    cell: ({ row }) => {
      // const { progress } = row.original;

      const progress = 100;

      let styles = '';
      switch (true) {
        case progress >= 0 && progress <= 25:
          styles = 'text-red-400';
          break;
        case progress >= 26 && progress <= 50:
          styles = 'text-orange-400';
          break;
        case progress >= 51 && progress <= 75:
          styles = 'text-yellow-400';
          break;
        case progress >= 76 && progress <= 99:
          styles = 'text-green-400';
          break;
        case progress == 100:
          styles = 'text-green-600';
          break;
        default:
          styles = '';
      }

      return <span className={`${styles} font-bold`}>{progress}%</span>;
    },
  },
];
