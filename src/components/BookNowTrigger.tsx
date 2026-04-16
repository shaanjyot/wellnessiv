'use client';

import type { ButtonHTMLAttributes } from 'react';
import { useBookingModal } from '@/components/BookingModalProvider';

type BookNowTriggerProps = ButtonHTMLAttributes<HTMLButtonElement>;

export function BookNowTrigger({ onClick, type = 'button', ...rest }: BookNowTriggerProps) {
  const { openBooking } = useBookingModal();
  return (
    <button
      type={type}
      {...rest}
      onClick={(e) => {
        onClick?.(e);
        if (!e.defaultPrevented) openBooking();
      }}
    />
  );
}
