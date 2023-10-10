import MainContainer from '@/components/containers/main-container';

type LayoutProps = {
  children: React.ReactNode;
};

function Layout({ children }: LayoutProps) {
  return <MainContainer>{children}</MainContainer>;
}

export default Layout;
