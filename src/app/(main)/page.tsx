'use client';

import useAuth from '@/stores/auth';

import OPCRDashboard from './(opcr)/@dashboard/page';
import IPCRDashboard from './(ipcr)/@dashboard/page';
import PMTDashboard from './(pmt)/@dashboard/page';
import { useEffect, useState } from 'react';

function HomePage() {
  const [dashboard, setDashboard] = useState<React.ReactNode | null>();
  const { permission } = useAuth();

  useEffect(() => {
    if (permission === 'opcr') {
      setDashboard(<OPCRDashboard />);
    } else if (permission === 'ipcr') {
      setDashboard(<IPCRDashboard />);
    } else if (permission === 'pmt') {
      setDashboard(<PMTDashboard />);
    } else {
      setDashboard(null);
    }
  }, [permission]);

  return <>{dashboard}</>;
}

export default HomePage;
