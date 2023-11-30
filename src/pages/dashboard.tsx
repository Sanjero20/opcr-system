import { getCookie } from '@/lib/cookie';
import { Permission } from '@/types';

function DashboardPage() {
  const permission = getCookie('permission') as Permission;

  if (permission === 'head') return;

  if (permission === 'individual') return;

  if (permission === 'pmt') return;

  return <></>;
}

export default DashboardPage;
