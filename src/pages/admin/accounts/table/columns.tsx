import { ColumnDef } from '@tanstack/react-table';
import { Button } from '@/components/ui/button';

import { Account } from '@/types';
import DeleteAccountDialog from '@/components/modal/modal-delete';
import { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { queryClient } from '@/App';
import { deleteAccount } from '@/services/admin';
import { useToast } from '@/components/ui/use-toast';

export const columnsAccount: ColumnDef<Account>[] = [
  { accessorKey: 'name', header: 'Name' },
  { accessorKey: 'email', header: 'Email' },
  { accessorKey: 'permission', header: 'Permission' },
  {
    id: 'actions',
    cell: ({ row }) => {
      const { _id } = row.original;

      const [isOpen, setModalIsOpen] = useState(false);
      const { toast } = useToast();

      const handleDelete = useMutation({
        mutationFn: () => deleteAccount(_id.$oid),
        onSuccess: () => {
          queryClient.invalidateQueries({ queryKey: ['accounts'] });
          setModalIsOpen(false);

          toast({
            title: 'Account Successfully Deleted',
          });
        },
      });

      return (
        <div className="flex flex-col justify-center">
          <div className="flex gap-2">
            <Button variant="edit">update</Button>
            <DeleteAccountDialog
              modalIsOpen={isOpen}
              modalHandler={setModalIsOpen}
              deleteHandler={() => handleDelete.mutate()}
            />
          </div>
        </div>
      );
    },
  },
];
