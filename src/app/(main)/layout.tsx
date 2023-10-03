import AuthWrapper from '@/components/auth-wrapper';
import Navbar from '@/components/nav/navbar';

type MainLayoutProps = {
  children: React.ReactNode;
};

function MainLayout({ children }: MainLayoutProps) {
  return (
    <AuthWrapper>
      <div>
        <Navbar />
        <main className="px-4 py-2">{children}</main>
      </div>
    </AuthWrapper>
  );
}

export default MainLayout;
