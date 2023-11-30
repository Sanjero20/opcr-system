import { getCookie } from '@/lib/cookie';
import { Permission } from '@/types';
import DashboardHead from './head/dashboard';
import DashboardIndividual from './individual/dashboard';
import DashboardPMT from './pmt/dashboard';

function DashboardPage() {
  const permission = getCookie('permission') as Permission;

  if (permission === 'head') return <DashboardHead />;
  if (permission === 'individual') return <DashboardIndividual />;
  if (permission === 'pmt') return <DashboardPMT />;

  return <></>;
}

export default DashboardPage;
