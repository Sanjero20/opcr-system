import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@radix-ui/react-dropdown-menu';
import SelectAccountType from './toggle-account-type';

interface AccountFormProps {}

function AccountForm() {
  return (
    <div className="flex flex-col gap-2">
      <Label>Name</Label>
      <Input placeholder="Name" />
      <Label>Email</Label>
      <Input placeholder="Email" />
      <Label>Password</Label>
      <Input placeholder="Password" />
      <Separator />
      <SelectAccountType />
    </div>
  );
}

export default AccountForm;
