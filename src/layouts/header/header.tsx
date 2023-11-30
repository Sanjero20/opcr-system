import ButtonLogout from './button-logout';
import Links from './links';

function Header() {
  return (
    <header className="flex bg-primaryColor py-4 text-white">
      {/* Logo */}
      <div className="container flex w-full items-center justify-between">
        <section className="flex items-center gap-2">
          <img src="/logo.png" alt="" width={48} height={48} />
          <p>Office Performance Management System</p>
        </section>

        {/* Navbar */}
        <nav>
          <ul className="flex gap-2">
            <Links />
            <ButtonLogout />
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
