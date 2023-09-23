import Navbar from '@/components/nav/navbar';

type MainLayoutProps = {
  children: React.ReactNode;
};

function MainLayout({ children }: MainLayoutProps) {
  // GetAuth

  // Redirect to login page when not authenticated

  return (
    <div>
      <Navbar />
      <main className="px-4 py-2">{children}</main>
    </div>
  );
}

export default MainLayout;
