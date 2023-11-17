'use client';

import { useMemo } from 'react';
import NavLink from './nav-link';
import useAuth from '@/stores/auth';

import {
  PMT_ROUTES,
  OPCR_ROUTES,
  IPCR_ROUTES,
  ADMIN_ROUTES,
} from '@/constants/navbar-routes';

function Links() {
  const { permission } = useAuth();

  const routes = useMemo(() => {
    if (permission === 'opcr') {
      return OPCR_ROUTES;
    } else if (permission === 'ipcr') {
      return IPCR_ROUTES;
    } else if (permission === 'pmt') {
      return PMT_ROUTES;
    } else if (permission === 'admin') {
      return ADMIN_ROUTES;
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
