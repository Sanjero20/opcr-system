import CardContainer from '@/components/containers/card-container';

type LayoutProps = {
  children: React.ReactNode;
};

function Layout({ children }: LayoutProps) {
  return <CardContainer>{children}</CardContainer>;
}

export default Layout;
