'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '../ui/button';
import { twMerge } from 'tailwind-merge';

type NavLinkProps = {
  href: string;
  children: React.ReactNode;
};

function NavLink({ href, children }: NavLinkProps) {
  const path = usePathname();

  const styles = twMerge(
    path === href
      ? 'bg-white text-primary hover:text-white hover:bg-white hover:text-primary'
      : 'bg-transparent hover:bg-transparent',
    'text-md w-32 rounded-xl py-0',
  );

  return (
    <Link href={href}>
      <Button className={`${styles} `}>{children}</Button>
    </Link>
  );
}

export default NavLink;
