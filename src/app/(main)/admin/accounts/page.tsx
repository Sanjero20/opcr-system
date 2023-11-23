import { getAccountsList } from '@/services/api/admin';
import AccountList from './account-list';

async function AccountsPage() {
  const accountList = await getAccountsList();

  return (
    <div>
      Admin page for handling accounts
      <AccountList list={accountList.data} />
    </div>
  );
}

export default AccountsPage;
