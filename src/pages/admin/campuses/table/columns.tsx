import { Button } from '@/components/ui/button';
import { Campus } from '@/types';
import { ColumnDef } from '@tanstack/react-table';
import DeleteAccountDialog from '@/components/modal/modal-delete';
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
      // const rowValue = row.original;
      // use row value to get row id
      const handleDelete = () => {
        console.log('clicked');
      };
      return (
        <div className="flex flex-col justify-center">
          <div className="flex gap-2">
            <Button variant="edit">update</Button>
            <DeleteAccountDialog onDelete={handleDelete} />
          </div>
        </div>
      );
    },
  },
];
