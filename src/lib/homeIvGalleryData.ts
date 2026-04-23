export type IvGallerySlide = {
  src: string;
  alt: string;
};

/** Default carousel when CMS `iv_gallery` is missing or has no slides. */
export const DEFAULT_IV_GALLERY_SLIDES: IvGallerySlide[] = [
  { src: '/slide1.jpg', alt: 'IV therapy in a comfortable home setting' },
  { src: '/slide2.jpg', alt: 'Relaxing IV vitamin treatment in clinic' },
  { src: '/slide3.jpg', alt: 'IV drip session in a modern wellness space' },
  { src: '/slide4.jpg', alt: 'Personalised IV therapy while at work' },
  { src: '/slide5.jpg', alt: 'At-home IV drip on the sofa' },
  { src: '/slide6.jpg', alt: 'Wellness IV Drip at-home treatment' },
  { src: '/slide7.jpg', alt: 'Qualified nurse providing mobile IV care' },
  { src: '/slide8.jpg', alt: 'IV therapy at home with family' },
  {
    src: '/11.jpg',
    alt: 'IV vitamin infusion setup with client in a bright treatment room, reflected in an arched mirror',
  },
  {
    src: '/13.jpg',
    alt: 'Client relaxing in a chair during a Lactated Ringer’s IV infusion with natural light and indoor plants',
  },
  {
    src: '/14.jpg',
    alt: 'Clinician in gloves preparing a syringe for vitamin therapy',
  },
  {
    src: '/16.jpg',
    alt: '250mL IV bag with vitamin infusion against a warm neutral background',
  },
];

/**
 * CMS section content shape: `{ slides: [{ src, alt? }] }`.
 * Remote URLs (Supabase Storage) are allowed. Empty or invalid CMS → defaults.
 */
export function resolveHomeIvGallerySlides(cmsSection: unknown): IvGallerySlide[] {
  if (!cmsSection || typeof cmsSection !== 'object') {
    return DEFAULT_IV_GALLERY_SLIDES;
  }
  const raw = (cmsSection as { slides?: unknown }).slides;
  if (!Array.isArray(raw) || raw.length === 0) {
    return DEFAULT_IV_GALLERY_SLIDES;
  }
  const out: IvGallerySlide[] = [];
  for (const item of raw) {
    if (!item || typeof item !== 'object') continue;
    const src = String((item as { src?: unknown }).src ?? '').trim();
    if (!src) continue;
    const altRaw = String((item as { alt?: unknown }).alt ?? '').trim();
    const alt = altRaw || 'IV vitamin therapy — Wellness IV Drip Canberra';
    out.push({ src, alt });
  }
  return out.length > 0 ? out : DEFAULT_IV_GALLERY_SLIDES;
}
