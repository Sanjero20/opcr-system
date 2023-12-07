import NavLink from './navlink';
import { useMemo } from 'react';
import { getCookie } from '@/lib/cookie';
import {
  ADMIN_ROUTES,
  IPCR_ROUTES,
  OPCR_ROUTES,
  PMT_ROUTES,
  NavRoute,
} from '@/constants/navbar-routes';

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
