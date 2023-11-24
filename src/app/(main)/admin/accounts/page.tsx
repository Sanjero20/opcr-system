import { getAccountsList } from '@/services/api/admin';
import { DataTable } from './(table)/data-table';
import { columns } from './(table)/columns';

async function AccountsPage() {
  const accountList = await getAccountsList();

  return (
    <div className="container">
      <DataTable columns={columns} data={accountList.data} />
    </div>
  );
}

export default AccountsPage;
