'use client';

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from 'react';
import { BookingModal } from '@/components/BookingModal';

type BookingModalContextValue = {
  openBooking: () => void;
};

const BookingModalContext = createContext<BookingModalContextValue | null>(
  null
);

export function useBookingModal(): BookingModalContextValue {
  const ctx = useContext(BookingModalContext);
  if (!ctx) {
    throw new Error(
      'useBookingModal must be used within BookingModalProvider (see AppProviders in layout).'
    );
  }
  return ctx;
}

export function BookingModalProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const openBooking = useCallback(() => setOpen(true), []);
  const closeBooking = useCallback(() => setOpen(false), []);

  const value = useMemo(() => ({ openBooking }), [openBooking]);

  return (
    <BookingModalContext.Provider value={value}>
      {children}
      <BookingModal open={open} onClose={closeBooking} />
    </BookingModalContext.Provider>
  );
}
