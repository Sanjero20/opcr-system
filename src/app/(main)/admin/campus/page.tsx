'use client';

import { getCampusList } from '@/services/api/admin';
import { DataTable } from './(table)/data-table';
import { columns } from './(table)/columns';
import { useEffect, useState } from 'react';
import { Campus } from '@/types/data-types';

function CampusPage() {
  const [campuses, setCampuses] = useState<Campus[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await getCampusList();
      if (data) {
        setCampuses(data);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container">
      <DataTable columns={columns} data={campuses} />
    </div>
  );
}

export default CampusPage;
