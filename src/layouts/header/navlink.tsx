'use client';

import { useLocation, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { twMerge } from 'tailwind-merge';

type NavLinkProps = {
  href: string;
  children: React.ReactNode;
};

function NavLink({ href, children }: NavLinkProps) {
  const { pathname } = useLocation();

  const styles = twMerge(
    pathname === href
      ? 'bg-white text-primary hover:text-white hover:bg-white hover:text-primary'
      : 'bg-transparent hover:bg-transparent',
    'text-md w-32 rounded-xl py-0',
  );

  return (
    <Link to={href}>
      <Button className={`${styles} `}>{children}</Button>
    </Link>
  );
}

export default NavLink;