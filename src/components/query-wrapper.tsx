'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

interface QueryWraperProps {
  children: React.ReactNode;
}

export const queryClient = new QueryClient();

function QueryWrapper({ children }: QueryWraperProps) {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}

export default QueryWrapper;
