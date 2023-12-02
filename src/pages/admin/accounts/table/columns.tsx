// Import necessary components and modules
import { MoreHorizontal } from 'lucide-react';
import { ColumnDef } from '@tanstack/react-table';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Account } from '@/types';
import DeleteAccountDialog from '@/components/modal/modal-delete'; // Adjust the path based on your project structure

export const columnsAccount: ColumnDef<Account>[] = [
  { accessorKey: 'name', header: 'Name' },
  { accessorKey: 'email', header: 'Email' },
  { accessorKey: 'permission', header: 'Permission' },
  {
    id: 'actions',
    cell: ({ row }) => {
      const { _id } = row.original;

      return (
        <div className="flex flex-col justify-center">
          <div className="flex gap-2">
            <Button variant="edit">update</Button>
            <DeleteAccountDialog id={_id.$oid} />
          </div>
        </div>
      );
    },
  },
];
