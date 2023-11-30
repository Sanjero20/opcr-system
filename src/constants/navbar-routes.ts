export type NavRoute = {
  href: string;
  name: string;
};

export const ADMIN_ROUTES = [
  { href: '/admin', name: 'Home' },
  { href: '/admin/campus', name: 'Campus' },
  { href: '/admin/accounts', name: 'Accounts' },
];

export const OPCR_ROUTES = [
  { href: '/', name: 'Home ' },
  { href: '/opcr', name: 'OPCR' },
  { href: '/account', name: 'Account' },
];

export const IPCR_ROUTES = [
  { href: '/', name: 'IPCR' },
  { href: '/table', name: 'Table' },
  { href: '/account', name: 'Account' },
];

export const PMT_ROUTES = [
  { href: '/', name: 'Home' },
  { href: '/offices', name: 'Offices' },
  { href: '/account', name: 'Account' },
];
