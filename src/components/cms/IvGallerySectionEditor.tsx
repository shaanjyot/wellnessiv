'use client';

import { useCallback, useState } from 'react';
import Image from 'next/image';
import { ImagePlus, Trash2, Loader2 } from 'lucide-react';
import type { IvGallerySlide } from '@/lib/homeIvGalleryData';

type Section = {
  id: string;
  section_key: string;
  title: string;
  content: unknown;
};

function slidesFromContent(content: unknown): IvGallerySlide[] {
  if (!content || typeof content !== 'object') return [];
  const slides = (content as { slides?: unknown }).slides;
  if (!Array.isArray(slides)) return [];
  const out: IvGallerySlide[] = [];
  for (const item of slides) {
    if (!item || typeof item !== 'object') continue;
    const src = String((item as { src?: unknown }).src ?? '').trim();
    if (!src) continue;
    const alt = String((item as { alt?: unknown }).alt ?? '').trim() || 'Gallery image';
    out.push({ src, alt });
  }
  return out;
}

type Props = {
  section: Section;
  onSlidesChange: (sectionId: string, slides: IvGallerySlide[]) => void;
};

export function IvGallerySectionEditor({ section, onSlidesChange }: Props) {
  const [uploading, setUploading] = useState(false);
  const [uploadError, setUploadError] = useState<string | null>(null);

  const slides = slidesFromContent(section.content);

  const setSlides = useCallback(
    (next: IvGallerySlide[]) => {
      onSlidesChange(section.id, next);
    },
    [onSlidesChange, section.id]
  );

  const updateAlt = (index: number, alt: string) => {
    const next = slides.map((s, i) => (i === index ? { ...s, alt } : s));
    setSlides(next);
  };

  const removeAt = (index: number) => {
    setSlides(slides.filter((_, i) => i !== index));
  };

  const onFile = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    e.target.value = '';
    if (!file) return;
    setUploadError(null);
    setUploading(true);
    try {
      const fd = new FormData();
      fd.append('file', file);
      fd.append('prefix', 'gallery-images');
      const res = await fetch('/api/upload', { method: 'POST', body: fd });
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || data.details || 'Upload failed');
      }
      const url = data.url as string;
      setSlides([...slides, { src: url, alt: 'IV vitamin therapy — gallery image' }]);
    } catch (err: unknown) {
      setUploadError(err instanceof Error ? err.message : 'Upload failed');
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="space-y-4">
      <p className="text-sm text-gray-600">
        Upload images to Supabase Storage (<code className="rounded bg-gray-100 px-1">wellness</code>{' '}
        bucket, <code className="rounded bg-gray-100 px-1">gallery-images/</code>). They appear on
        the home page carousel. Save this section when finished. Leave empty to use the built-in
        default gallery on the site.
      </p>

      <div className="flex flex-wrap items-center gap-3">
        <label className="inline-flex cursor-pointer items-center gap-2 rounded-lg bg-teal-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-teal-700 disabled:opacity-50">
          {uploading ? (
            <Loader2 className="h-4 w-4 animate-spin" aria-hidden />
          ) : (
            <ImagePlus className="h-4 w-4" aria-hidden />
          )}
          {uploading ? 'Uploading…' : 'Upload image'}
          <input type="file" accept="image/jpeg,image/png,image/webp" className="hidden" onChange={onFile} disabled={uploading} />
        </label>
        {uploadError ? <span className="text-sm text-red-600">{uploadError}</span> : null}
      </div>

      {slides.length === 0 ? (
        <p className="rounded-lg border border-dashed border-gray-300 bg-gray-50 p-4 text-sm text-gray-500">
          No slides in CMS — the live site will show the default gallery until you add images here
          and save.
        </p>
      ) : (
        <ul className="space-y-4">
          {slides.map((slide, index) => (
            <li
              key={`${slide.src}-${index}`}
              className="flex flex-col gap-3 rounded-lg border border-gray-200 bg-gray-50 p-4 sm:flex-row sm:items-start"
            >
              <div className="relative h-28 w-40 shrink-0 overflow-hidden rounded-md bg-gray-200">
                <Image
                  src={slide.src}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="160px"
                  unoptimized={slide.src.startsWith('http')}
                />
              </div>
              <div className="min-w-0 flex-1 space-y-2">
                <p className="truncate text-xs text-gray-500" title={slide.src}>
                  {slide.src}
                </p>
                <label className="block text-xs font-medium text-gray-600">Alt text</label>
                <input
                  type="text"
                  value={slide.alt}
                  onChange={(e) => updateAlt(index, e.target.value)}
                  className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal-500"
                />
              </div>
              <button
                type="button"
                onClick={() => removeAt(index)}
                className="inline-flex items-center gap-1 self-start rounded-md border border-red-200 bg-white px-3 py-2 text-sm text-red-600 hover:bg-red-50"
              >
                <Trash2 className="h-4 w-4" aria-hidden />
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}

      <details className="rounded-lg border border-gray-200 bg-white p-3 text-sm">
        <summary className="cursor-pointer font-medium text-gray-700">Raw JSON (advanced)</summary>
        <pre className="mt-2 max-h-48 overflow-auto rounded bg-gray-50 p-2 text-xs">
          {JSON.stringify({ slides }, null, 2)}
        </pre>
      </details>
    </div>
  );
}
