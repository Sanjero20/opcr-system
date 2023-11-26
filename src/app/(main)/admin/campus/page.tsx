'use client';

import { DataTable } from './(table)/data-table';
import { columns } from './(table)/columns';

import { useQuery } from '@tanstack/react-query';
import { getCampusList } from '@/services/api/admin';

function CampusPage() {
  const { data, error, isLoading } = useQuery({
    queryKey: ['campuses'],
    queryFn: getCampusList,
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

export default CampusPage;
