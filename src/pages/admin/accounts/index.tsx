import { useQuery } from '@tanstack/react-query';

import { columnsAccount } from './table/columns';
import TableAccounts from './table/table-accounts';

import { getAccountsList } from '@/services/admin';

function AccountsPage() {
  const { data: accounts, error } = useQuery({
    queryKey: ['accounts'],
    queryFn: getAccountsList,
    initialData: [],
  });

  return (
    <div>
      <TableAccounts columns={columnsAccount} data={accounts} />
    </div>
  );
}

export default AccountsPage;
