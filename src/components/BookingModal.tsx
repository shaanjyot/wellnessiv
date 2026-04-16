'use client';

import { useEffect } from 'react';
import { X } from 'lucide-react';

export const SETMORE_BOOKING_URL =
  'https://wellnessivdrip.setmore.com/wellnessivdrip';

type BookingModalProps = {
  open: boolean;
  onClose: () => void;
};

export function BookingModal({ open, onClose }: BookingModalProps) {
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex flex-col bg-black/70 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="booking-modal-title"
    >
      <div className="flex h-[100dvh] flex-col bg-white">
        <div className="flex shrink-0 items-center justify-between border-b border-gray-200 px-4 py-3 sm:px-6">
          <h2
            id="booking-modal-title"
            className="text-base font-semibold text-gray-900 sm:text-lg"
          >
            Book with Wellness IV Drip
          </h2>
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg p-2 text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-900"
            aria-label="Close booking"
          >
            <X className="h-6 w-6" />
          </button>
        </div>
        <div className="relative min-h-0 flex-1 basis-0">
          <iframe
            src={SETMORE_BOOKING_URL}
            title="Book an appointment — Setmore"
            className="absolute inset-0 h-full w-full border-0"
            allow="payment *; fullscreen"
          />
        </div>
        <p className="shrink-0 border-t border-gray-100 bg-gray-50 px-4 py-2 text-center text-sm text-gray-600">
          If the calendar does not load here,{' '}
          <a
            href={SETMORE_BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-teal-600 underline underline-offset-2 hover:text-teal-700"
          >
            open booking in a new tab
          </a>
          .
        </p>
      </div>
    </div>
  );
}
