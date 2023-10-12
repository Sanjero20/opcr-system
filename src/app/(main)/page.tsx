'use client';

import useAuth from '@/stores/auth';

function HomePage() {
  const { permission } = useAuth();

  return <div></div>;
}

export default HomePage;
