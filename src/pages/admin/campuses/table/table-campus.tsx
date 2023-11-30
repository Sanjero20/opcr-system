// import TableFilter from '@/components/table/table-filter';
import { useState } from 'react';
import {
  ColumnDef,
  useReactTable,
  getCoreRowModel,
  getPaginationRowModel,
  getFilteredRowModel,
  ColumnFiltersState,
} from '@tanstack/react-table';
import TableFilter from '@/components/table/table-filter';
import { TableData } from '@/components/table/table-data';
import ButtonCampusAdd from './button-campus-add';

interface TableCampusProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}

function TableCampus<TData, TValue>({
  columns,
  data,
}: TableCampusProps<TData, TValue>) {
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      columnFilters,
    },
  });

  return (
    <div>
      <div className="flex items-center justify-between">
        <TableFilter table={table} filter="name" placeholder="campus" />
        <ButtonCampusAdd />
      </div>

      <TableData table={table} columns={columns} />
    </div>
  );
}

export default TableCampus;
