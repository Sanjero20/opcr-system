'use client';

import { DataTable } from './(table)/data-table';
import { columns } from './(table)/columns';

import { useQuery } from '@tanstack/react-query';
import { getAccountsList } from '@/services/api/admin';

function AccountsPage() {
  const { data, error, isLoading } = useQuery({
    queryKey: ['accounts'],
    queryFn: getAccountsList,
    initialData: [],
  });

  if (error) {
    return <div>Something went wrong...</div>;
  }

  return (
    <div className="container">
      <DataTable columns={columns} data={data} />
    </div>
  );
}

export default AccountsPage;
