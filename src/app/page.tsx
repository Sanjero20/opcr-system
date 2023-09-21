'use client';

import { redirect } from 'next/navigation';
import useAuth from '@/stores/auth';

function HomePage() {
  const { isLoggedIn, accountRole } = useAuth();

  if (!isLoggedIn) {
    redirect('/login');
  }

  return <div className="">Office Performance and Commitment Review</div>;
}

export default HomePage;
