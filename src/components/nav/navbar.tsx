import HeaderLogo from './header-logo';
import NavLink from './nav-link';
import BtnLogout from '../button/btn-logout';

function Navbar() {
  return (
    <header className="bg-nav p-4 text-white">
      <div className="flex items-center justify-between">
        <HeaderLogo />

        <nav>
          <ul>
            <NavLink href="/">Home</NavLink>
            <NavLink href="/form">OPCR</NavLink>
            <NavLink href="/account">Account</NavLink>
            <BtnLogout />
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
