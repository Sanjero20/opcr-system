import HeaderLogo from './header-logo';
import NavLink from './nav-link';
import BtnLogout from '../button/btn-logout';
import Links from './links';

function Navbar() {
  return (
    <header className="bg-nav p-4 text-white">
      <div className="flex items-center justify-between">
        <HeaderLogo />

        <nav>
          <ul>
            <Links />
            <NavLink href="/account">Account</NavLink>
            <BtnLogout />
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
