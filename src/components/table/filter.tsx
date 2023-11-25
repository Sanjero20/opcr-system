import { Input } from '@/components/ui/input';
import { Table } from '@tanstack/react-table';

interface TableFilterProps<TData> {
  table: Table<TData>;
  filter: string;
  placeholder?: string;
}

function TableFilter<TData>({
  table,
  filter,
  placeholder,
}: TableFilterProps<TData>) {
  return (
    <div className="flex items-center py-4">
      <Input
        placeholder={`Filter ${placeholder || filter}...`}
        value={(table.getColumn(filter)?.getFilterValue() as string) ?? ''}
        onChange={(event) =>
          table.getColumn(filter)?.setFilterValue(event.target.value)
        }
        className="max-w-sm"
      />
    </div>
  );
}

export default TableFilter;
