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
    pathname === href ||
      (pathname.startsWith(href) && href !== '/' && href !== '/admin')
      ? 'bg-white text-primary hover:text-white hover:bg-white hover:text-primary'
      : 'bg-transparent hover:bg-transparent',
    'text-md w-32 rounded-xl py-0',
  );

  return (
    <Link to={href} tabIndex={-1}>
      <Button className={`${styles}`} aria-hidden>
        {children}
      </Button>
    </Link>
  );
}

export default NavLink;
