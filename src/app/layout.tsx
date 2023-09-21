import '@/styles/globals.css';
import '@/styles/utils.scss';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'OPCR',
  description: 'Group project for Advance Software Engineering',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="h-screen min-h-screen">{children}</body>
    </html>
  );
}
