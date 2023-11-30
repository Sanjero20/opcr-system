import { useMemo } from 'react';

import {
  ADMIN_ROUTES,
  IPCR_ROUTES,
  OPCR_ROUTES,
  PMT_ROUTES,
  NavRoute,
} from '@/constants/navbar-routes';
import NavLink from './navlink';
import { getCookie } from '@/lib/cookie';
function Links() {
  const permission = getCookie('permission');

  const routes = useMemo(() => {
    if (permission === 'head') {
      return OPCR_ROUTES;
    } else if (permission === 'individual') {
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
      {routes.map((route: NavRoute, index) => (
        <NavLink key={index} href={route.href}>
          {route.name}
        </NavLink>
      ))}
    </>
  );
}

export default Links;
