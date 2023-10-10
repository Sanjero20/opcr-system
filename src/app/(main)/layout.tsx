import AuthWrapper from '@/components/auth-wrapper';
import Navbar from '@/components/nav/navbar';

type MainLayoutProps = {
  children: React.ReactNode;
};

function MainLayout({ children }: MainLayoutProps) {
  return (
    <AuthWrapper>
      <div className="flex h-full flex-col">
        <Navbar />
        <main className="flex-1 p-5">{children}</main>
      </div>
    </AuthWrapper>
  );
}

export default MainLayout;
