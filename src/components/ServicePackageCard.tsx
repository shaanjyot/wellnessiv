'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { BookNowTrigger } from '@/components/BookNowTrigger';

type ServicePackageCardProps = {
  name: string;
  price: string;
  duration: string;
  description: string;
  includes: string[];
  specs: string[];
  defaultIncludesOpen?: boolean;
};

export function ServicePackageCard({
  name,
  price,
  duration,
  description,
  includes,
  specs,
  defaultIncludesOpen = false,
}: ServicePackageCardProps) {
  const [includesOpen, setIncludesOpen] = useState(defaultIncludesOpen);
  const [specsOpen, setSpecsOpen] = useState(false);

  return (
    <article className="flex h-full flex-col rounded-2xl border border-gray-200 bg-white p-6 shadow-lg shadow-gray-200/60 ring-1 ring-black/[0.03]">
      <div className="flex flex-wrap items-start justify-between gap-3 border-b border-gray-100 pb-4">
        <div className="min-w-0 flex-1">
          <h3 className="text-xl font-bold text-gray-900">{name}</h3>
          <p className="mt-2 text-sm leading-relaxed text-gray-600">{description}</p>
        </div>
        <div className="shrink-0 text-right">
          <p className="text-2xl font-bold text-teal-600">{price}</p>
          <p className="mt-1 text-xs font-medium text-gray-500">{duration}</p>
        </div>
      </div>

      <div className="mt-4 flex flex-1 flex-col gap-2">
        <button
          type="button"
          onClick={() => setIncludesOpen((o) => !o)}
          className="flex w-full items-center justify-between rounded-lg bg-gray-50 px-4 py-3 text-left text-sm font-semibold text-gray-800 transition hover:bg-gray-100"
        >
          INCLUDES
          <ChevronDown
            className={`h-5 w-5 shrink-0 text-teal-600 transition-transform ${includesOpen ? 'rotate-180' : ''}`}
            aria-hidden
          />
        </button>
        {includesOpen && (
          <ul className="space-y-2 border-b border-gray-100 pb-4 pl-1">
            {includes.map((item) => (
              <li key={item} className="flex gap-2 text-sm text-gray-700">
                <span className="mt-0.5 shrink-0 text-teal-500" aria-hidden>
                  ✓
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        )}

        <button
          type="button"
          onClick={() => setSpecsOpen((o) => !o)}
          className="flex w-full items-center justify-between rounded-lg bg-gray-50 px-4 py-3 text-left text-sm font-semibold text-gray-800 transition hover:bg-gray-100"
        >
          SPECS
          <ChevronDown
            className={`h-5 w-5 shrink-0 text-gray-500 transition-transform ${specsOpen ? 'rotate-180' : ''}`}
            aria-hidden
          />
        </button>
        {specsOpen && (
          <ul className="space-y-2 pb-2 pl-1">
            {specs.map((item) => (
              <li key={item} className="flex gap-2 text-sm text-gray-600">
                <span className="mt-0.5 shrink-0 text-teal-500" aria-hidden>
                  ✓
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        )}
      </div>

      <BookNowTrigger className="mt-6 inline-flex w-full items-center justify-center rounded-lg bg-gradient-to-r from-teal-500 to-amber-500 px-4 py-3.5 text-sm font-semibold text-white shadow-md transition hover:from-teal-600 hover:to-amber-600">
        Book this service
      </BookNowTrigger>
    </article>
  );
}
