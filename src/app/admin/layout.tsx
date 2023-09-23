import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'OPCR | Admin ',
};

type AdminLayoutProps = {
  children: React.ReactNode;
};

function AdminLayout({ children }: AdminLayoutProps) {
  return (
    <div className="flex flex-col">
      <div className="flex-1">{children}</div>
    </div>
  );
}

export default AdminLayout;
