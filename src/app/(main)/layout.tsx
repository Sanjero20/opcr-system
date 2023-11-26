import AuthWrapper from '@/components/auth-wrapper';
import QueryWrapper from '@/components/query-wrapper';
import Navbar from '@/components/nav/navbar';

type MainLayoutProps = {
  children: React.ReactNode;
};

function MainLayout({ children }: MainLayoutProps) {
  return (
    <QueryWrapper>
      <AuthWrapper>
        <div className="flex h-full flex-col">
          <Navbar />
          <main className="flex-1 p-5">{children}</main>
        </div>
      </AuthWrapper>
    </QueryWrapper>
  );
}

export default MainLayout;
