'use client';

import { getAccountsList } from '@/services/api/admin';
import { DataTable } from './(table)/data-table';
import { columns } from './(table)/columns';
import { useEffect, useState } from 'react';
import { Account } from '@/types/data-types';

function AccountsPage() {
  const [accounts, setAccounts] = useState<Account[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await getAccountsList();

      if (data) {
        setAccounts(data);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container">
      <DataTable columns={columns} data={accounts} />
    </div>
  );
}

export default AccountsPage;
