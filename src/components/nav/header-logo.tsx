import Image from 'next/image';

function HeaderLogo() {
  return (
    <section className="flex items-center gap-2">
      <Image src="/logo.png" alt="" width={48} height={48} unoptimized />
      <p>Office Performance Management System</p>
    </section>
  );
}

export default HeaderLogo;
