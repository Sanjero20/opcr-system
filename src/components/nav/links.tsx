'use client';

import { useMemo } from 'react';
import NavLink from './nav-link';
import useAuth from '@/stores/auth';

const OPCR_ROUTES = [
  { route: '/', name: 'Home ' },
  { route: '/opcr', name: 'OPCR' },
];

const IPCR_ROUTES = [
  { route: '/', name: 'IPCR' },
  { route: '/table', name: 'Table' },
];

const PMT_ROUTES = [
  { route: '/', name: 'Home' },
  { route: '/offices', name: 'Offices' },
];

type Routes = {
  route: string;
  name: string;
};

function Links() {
  const { permission } = useAuth();

  const routes = useMemo(() => {
    if (permission === 'opcr') {
      return OPCR_ROUTES;
    } else if (permission === 'ipcr') {
      return IPCR_ROUTES;
    } else if (permission === 'pmt') {
      return PMT_ROUTES;
    }

    return [];
  }, [permission]);

  return (
    <>
      {routes.map((value, index) => (
        <NavLink key={index} href={value.route}>
          {value.name}
        </NavLink>
      ))}
    </>
  );
}

export default Links;
