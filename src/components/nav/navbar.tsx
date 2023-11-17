import HeaderLogo from './header-logo';
import BtnLogout from '../button/btn-logout';
import Links from './links';

function Navbar() {
  return (
    <header className="bg-nav p-4 text-white">
      <div className="flex items-center justify-between">
        <HeaderLogo />

        <nav>
          <ul className="flex gap-2">
            <Links />
            <BtnLogout className="text-md" />
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
