'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '../ui/button';

type NavLinkProps = {
  href: string;
  children: React.ReactNode;
};

function NavLink({ href, children }: NavLinkProps) {
  const path = usePathname();

  const styles =
    href === path
      ? 'bg-white text-primary hover:text-white hover:bg-white hover:text-primary'
      : 'bg-transparent hover:bg-transparent';

  return (
    <Link href={href}>
      <Button className={`${styles} py-0`}>{children}</Button>
    </Link>
  );
}

export default NavLink;
