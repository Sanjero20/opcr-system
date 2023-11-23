'use client';

import { Card } from '@/components/ui/card';
import { AccountInfo } from '@/types/response/admin';

interface AccountListProps {
  list: AccountInfo[];
}

function AccountList({ list }: AccountListProps) {
  return (
    <div className="flex flex-col gap-2">
      {list.map((account) => (
        <div key={account._id}>
          <Card>
            <p>{account.email}</p>
            <p>{account.password}</p>
          </Card>
        </div>
      ))}
    </div>
  );
}

export default AccountList;
