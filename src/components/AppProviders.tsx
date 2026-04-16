'use client';

import type { ReactNode } from 'react';
import { BookingModalProvider } from '@/components/BookingModalProvider';

export function AppProviders({ children }: { children: ReactNode }) {
  return <BookingModalProvider>{children}</BookingModalProvider>;
}
