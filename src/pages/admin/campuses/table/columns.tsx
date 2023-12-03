import { Button } from '@/components/ui/button';
import { Campus } from '@/types';
import { ColumnDef } from '@tanstack/react-table';
import DeleteAccountDialog from '@/components/modal/modal-delete';
import { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { queryClient } from '@/App';
import { deleteCampus } from '@/services/admin';
export const campusColumns: ColumnDef<Campus>[] = [
  { accessorKey: 'name', header: 'Campus' },
  {
    accessorKey: 'offices',
    header: () => <div>Office & Departments</div>,
    cell: ({ row }) => {
      const offices = row.original.offices;

      return (
        <div className="flex w-full flex-col gap-2">
          {offices &&
            offices.map((office) => <div key={office.name}>{office.name}</div>)}
        </div>
      );
    },
  },
  {
    id: 'actions',
    cell: ({ row }) => {
      const { _id } = row.original;

      const [isOpen, setModalIsOpen] = useState(false);

      const handleDelete = useMutation({
        mutationFn: () => deleteCampus(_id.$oid),
        onSuccess: () => {
          queryClient.invalidateQueries({ queryKey: ['accounts'] });
          setModalIsOpen(false);
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
