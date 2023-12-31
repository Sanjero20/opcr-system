import { useState } from 'react';

import {
  ColumnDef,
  ColumnFiltersState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  useReactTable,
} from '@tanstack/react-table';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

import TablePagination from '@/components/table/table-pagination';
import { useNavigate } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  table: any;
  rowClickable?: boolean;
}

export function TableData<TData, TValue>({
  columns,
  table,
  rowClickable = false,
}: DataTableProps<TData, TValue>) {
  const navigate = useNavigate();

  const changeRoute = (id: string) => {
    navigate('./' + id);
  };

  return (
    <>
      {/* Table */}
      <div className="rounded-md border text-center">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup: any) => (
              <TableRow key={headerGroup.id} className="hover:bg-tableHead">
                {headerGroup.headers.map((header: any) => {
                  return (
                    <TableHead key={header.id} className="text-center">
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext(),
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>

          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row: any) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && 'selected'}
                >
                  {row.getVisibleCells().map((cell: any) => (
                    <TableCell
                      key={cell.id}
                      className={cn(
                        rowClickable && 'cursor-pointer',
                        '[&:first-child]:w-1/5 [&:last-child]:w-1/6',
                      )}
                      onClick={() =>
                        rowClickable && changeRoute(row.original._id.$oid)
                      }
                    >
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext(),
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      {/* Pagination */}
      <TablePagination table={table} />
    </>
  );
}
