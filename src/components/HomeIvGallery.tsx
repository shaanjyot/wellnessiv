'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

const SLIDES = [
  { src: '/slide1.jpg', alt: 'IV therapy in a comfortable home setting' },
  { src: '/slide2.jpg', alt: 'Relaxing IV vitamin treatment in clinic' },
  { src: '/slide3.jpg', alt: 'IV drip session in a modern wellness space' },
  { src: '/slide4.jpg', alt: 'Personalised IV therapy while at work' },
  { src: '/slide5.jpg', alt: 'At-home IV drip on the sofa' },
  { src: '/slide6.jpg', alt: 'Wellness IV Drip at-home treatment' },
  { src: '/slide7.jpg', alt: 'Qualified nurse providing mobile IV care' },
  { src: '/slide8.jpg', alt: 'IV therapy at home with family' },
] as const;

export function HomeIvGallery() {
  const [active, setActive] = useState(0);
  const [lightbox, setLightbox] = useState<number | null>(null);
  const touchStartX = useRef<number | null>(null);

  const count = SLIDES.length;
  const go = useCallback(
    (dir: -1 | 1) => {
      setActive((i) => (i + dir + count) % count);
    },
    [count]
  );

  const openLightbox = useCallback((index: number) => setLightbox(index), []);
  const closeLightbox = useCallback(() => setLightbox(null), []);

  const lightboxGo = useCallback(
    (dir: -1 | 1) => {
      setLightbox((i) => {
        if (i === null) return null;
        return (i + dir + count) % count;
      });
    },
    [count]
  );

  useEffect(() => {
    if (lightbox === null) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') {
        setLightbox((i) => (i === null ? null : (i - 1 + count) % count));
      }
      if (e.key === 'ArrowRight') {
        setLightbox((i) => (i === null ? null : (i + 1) % count));
      }
    };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener('keydown', onKey);
    };
  }, [lightbox, closeLightbox, count]);

  return (
    <>
      <section className="border-t border-gray-100 bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center md:mb-14">
            <p className="text-sm font-semibold uppercase tracking-widest text-teal-600">
              See the experience
            </p>
            <h2 className="mt-2 text-3xl font-bold text-gray-900 md:text-4xl">
              Comfort, care, and results
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-lg text-gray-600">
              Real moments from in-clinic and at-home IV vitamin therapy — tap an image to view
              full size.
            </p>
          </div>

          <div className="relative mx-auto max-w-4xl">
            <div
              className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-100 to-gray-50 shadow-xl ring-1 ring-gray-200/80"
              onTouchStart={(e) => {
                touchStartX.current = e.touches[0].clientX;
              }}
              onTouchEnd={(e) => {
                if (touchStartX.current === null) return;
                const dx = e.changedTouches[0].clientX - touchStartX.current;
                touchStartX.current = null;
                if (dx > 56) go(-1);
                else if (dx < -56) go(1);
              }}
            >
              <button
                type="button"
                onClick={() => go(-1)}
                className="absolute left-2 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/95 text-teal-700 shadow-md backdrop-blur transition hover:bg-white hover:text-teal-900 md:left-4 md:h-12 md:w-12"
                aria-label="Previous image"
              >
                <ChevronLeft className="h-6 w-6 md:h-7 md:w-7" />
              </button>
              <button
                type="button"
                onClick={() => go(1)}
                className="absolute right-2 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/95 text-teal-700 shadow-md backdrop-blur transition hover:bg-white hover:text-teal-900 md:right-4 md:h-12 md:w-12"
                aria-label="Next image"
              >
                <ChevronRight className="h-6 w-6 md:h-7 md:w-7" />
              </button>

              <button
                type="button"
                onClick={() => openLightbox(active)}
                className="relative block h-[min(42vh,400px)] w-full cursor-zoom-in outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2 sm:h-[min(44vh,420px)] md:h-[min(40vh,440px)]"
                aria-label={`Open image ${active + 1} of ${count} in lightbox`}
              >
                {SLIDES.map((slide, i) => (
                  <div
                    key={slide.src}
                    className={`absolute inset-0 transition-opacity duration-500 ease-out ${
                      i === active ? 'opacity-100' : 'pointer-events-none opacity-0'
                    }`}
                    aria-hidden={i !== active}
                  >
                    <Image
                      src={slide.src}
                      alt={slide.alt}
                      fill
                      className="object-contain object-center"
                      sizes="(max-width: 896px) 100vw, 896px"
                      priority={i === 0}
                    />
                  </div>
                ))}
              </button>
            </div>

            <div className="mt-6 flex justify-center gap-2 md:mt-8">
              {SLIDES.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setActive(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === active
                      ? 'w-8 bg-gradient-to-r from-teal-500 to-amber-500'
                      : 'w-2 bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                  aria-current={i === active}
                />
              ))}
            </div>

            <div className="mt-6 flex gap-3 overflow-x-auto pb-2 md:mt-8 md:justify-center md:overflow-visible">
              {SLIDES.map((slide, i) => (
                <button
                  key={slide.src}
                  type="button"
                  onClick={() => {
                    setActive(i);
                    openLightbox(i);
                  }}
                  className={`relative h-20 w-14 shrink-0 overflow-hidden rounded-xl ring-2 transition-all md:h-24 md:w-16 ${
                    i === active
                      ? 'ring-teal-500 ring-offset-2'
                      : 'ring-transparent opacity-80 hover:opacity-100'
                  }`}
                  aria-label={`View slide ${i + 1}`}
                >
                  <Image
                    src={slide.src}
                    alt=""
                    fill
                    className="object-cover"
                    sizes="64px"
                    aria-hidden
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {lightbox !== null && (
        <div
          className="fixed inset-0 z-[100] flex flex-col bg-black/92 backdrop-blur-md"
          role="dialog"
          aria-modal="true"
          aria-label="Image gallery lightbox"
        >
          <div
            className="flex shrink-0 items-center justify-between px-4 py-3 text-white md:px-6"
            onClick={(e) => e.stopPropagation()}
          >
            <span className="text-sm font-medium text-white/90">
              {lightbox + 1} / {count}
            </span>
            <button
              type="button"
              onClick={closeLightbox}
              className="rounded-full p-2 text-white/90 transition hover:bg-white/10 hover:text-white"
              aria-label="Close gallery"
            >
              <X className="h-7 w-7" />
            </button>
          </div>

          <div
            className="relative flex min-h-0 flex-1 items-center justify-center px-4 pb-8 pt-2 md:px-12"
            onClick={closeLightbox}
          >
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                lightboxGo(-1);
              }}
              className="absolute left-2 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur transition hover:bg-white/20 md:left-6 md:h-14 md:w-14"
              aria-label="Previous image"
            >
              <ChevronLeft className="h-8 w-8" />
            </button>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                lightboxGo(1);
              }}
              className="absolute right-2 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur transition hover:bg-white/20 md:right-6 md:h-14 md:w-14"
              aria-label="Next image"
            >
              <ChevronRight className="h-8 w-8" />
            </button>

            <div
              className="relative z-10 mx-auto h-[min(85dvh,920px)] w-full max-w-5xl"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={SLIDES[lightbox].src}
                alt={SLIDES[lightbox].alt}
                fill
                className="object-contain"
                sizes="100vw"
                priority
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
