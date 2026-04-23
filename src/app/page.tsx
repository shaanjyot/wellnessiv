'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Play, CheckCircle } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { HomeIvGallery } from '@/components/HomeIvGallery';
import { BookNowTrigger } from '@/components/BookNowTrigger';
import { usePageContent } from '@/hooks/usePageContent';
import { getHomeAboutMainParagraphs, getIvLeagueBlock } from '@/lib/aboutHome';
import { stripHtml } from '@/lib/html';
import { SITE_PHONE_DISPLAY, SITE_PHONE_TEL_HREF } from '@/lib/siteContact';
import { resolveHomeIvGallerySlides } from '@/lib/homeIvGalleryData';

const SERVICE_SECTION_IMAGES = ['/miv.png', '/Intramuscular.png', '/14.jpg'] as const;

export default function HomePage() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const { content, loading } = usePageContent('home');

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(console.error);
    }
  }, [loading]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-teal-500"></div>
      </div>
    );
  }

  // Fallback defaults or use fetched content
  const hero = content?.sections?.['hero'] || {};
  const servicesIntro = content?.sections?.['services_intro'] || {};
  const aboutSummary = content?.sections?.['about_summary'] || {};
  const howItWorks = content?.sections?.['how_it_works'] || {};
  const aboutMainParagraphs = getHomeAboutMainParagraphs(aboutSummary);
  const ivLeague = getIvLeagueBlock(aboutSummary);
  const ivGallerySlides = resolveHomeIvGallerySlides(content?.sections?.iv_gallery);
  const heroPrimaryHref = hero.cta_primary?.link || '/booking';
  const heroPrimaryOpensModal =
    !hero.cta_primary?.link || hero.cta_primary?.link === '/booking';

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section with Video Background */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover z-0"
          loop
          muted
          playsInline
        >
          <source src={hero.video_src || "/bg-video.mp4"} type="video/mp4" />
        </video>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40 z-10"></div>

        {/* Content */}
        <div className="relative z-20 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            {hero.heading || 'Mobile IV Vitamin Therapy Service'}
          </h1>
          <h2 className="text-2xl md:text-3xl font-light mb-8 text-teal-200">
            {hero.subheading || 'Bespoke IV drips - Delivered in comfort'}
          </h2>
          <p className="text-xl mb-8 text-gray-200 max-w-2xl mx-auto">
            {hero.description || 'Welcome to Wellness IV Drip Canberra. Need to have a drip today? Book in for a free consultation with our nurses.'}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {heroPrimaryOpensModal ? (
              <BookNowTrigger className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-teal-500 to-amber-500 text-white font-semibold rounded-lg hover:from-teal-600 hover:to-amber-600 transition-all duration-200 transform hover:scale-105">
                {hero.cta_primary?.text || 'Book an appointment'}
                <ArrowRight className="ml-2 w-5 h-5" />
              </BookNowTrigger>
            ) : (
              <Link
                href={heroPrimaryHref}
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-teal-500 to-amber-500 text-white font-semibold rounded-lg hover:from-teal-600 hover:to-amber-600 transition-all duration-200 transform hover:scale-105"
              >
                {hero.cta_primary?.text || 'Book an appointment'}
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            )}
            <button className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-200">
              <Play className="mr-2 w-5 h-5" />
              {hero.cta_secondary?.text || 'Watch Video'}
            </button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {servicesIntro.title || 'Our Services'}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {servicesIntro.description || 'We offer a comprehensive range of mobile IV infusion services tailored to meet your unique wellness needs.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {(servicesIntro.services_list || []).map((service: any, index: number) => (
              <div
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                {SERVICE_SECTION_IMAGES[index] && (
                  <div className="relative aspect-[4/3] w-full bg-gray-100">
                    <Image
                      src={SERVICE_SECTION_IMAGES[index]}
                      alt={service.title ? `${service.title}` : 'Service'}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                )}
                <div className="p-8 pt-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <Link
                  href="/services"
                  className="inline-flex items-center text-teal-500 font-semibold hover:text-teal-600 transition-colors"
                >
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                {stripHtml(String(aboutSummary.title || 'About Us'))}
              </h2>
              {aboutMainParagraphs.map((paragraph, idx) => (
                <p key={idx} className="text-lg text-gray-600 mb-6 leading-relaxed">
                  {paragraph}
                </p>
              ))}
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                {ivLeague.lead}{' '}
                <a
                  href={ivLeague.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-teal-600 underline decoration-teal-600/30 underline-offset-2 hover:text-teal-700"
                >
                  {ivLeague.linkLabel}
                </a>
                .
              </p>

              {(aboutSummary.qualifications || []).map((qual: string, idx: number) => (
                <div key={idx} className="flex items-center space-x-4 mt-2">
                  <CheckCircle className="w-6 h-6 shrink-0 text-teal-500" />
                  <span className="text-gray-700 font-semibold">
                    {stripHtml(String(qual))}
                  </span>
                </div>
              ))}
            </div>
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-gray-100 shadow-lg">
              <Image
                src="/about1.jpg"
                alt="Four IV bags with fresh fruits, vegetables, and nutrient-rich liquids, representing tailored vitamin infusion therapy."
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority={false}
              />
            </div>
          </div>
        </div>

        <div className="mt-14 w-full bg-gradient-to-r from-teal-400 to-amber-400 px-4 py-12 text-center text-white sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h3 className="text-2xl font-bold md:text-3xl">
              {stripHtml(
                String(aboutSummary.contact_box?.title || 'Making an appointment')
              )}
            </h3>
            <p className="mt-4 text-base leading-relaxed text-white/95 md:text-lg">
              {stripHtml(
                String(
                  aboutSummary.contact_box?.description ||
                    'At Wellness IV Drip, we offer a range of mobile IV infusion services...'
                )
              )}
            </p>
            <div className="mt-8 flex flex-col items-center gap-4 text-lg">
              <div className="flex items-center justify-center gap-3">
                <span className="text-2xl" aria-hidden>☎️</span>
                <a href={SITE_PHONE_TEL_HREF} className="hover:underline">
                  {SITE_PHONE_DISPLAY}
                </a>
              </div>
              <div className="flex items-center justify-center gap-3">
                <span className="text-2xl" aria-hidden>📧</span>
                <span>{aboutSummary.contact_box?.email || 'admin@wellnessivdrip.com.au'}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {howItWorks.title || 'How our IV Drips work'}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {howItWorks.description || 'A simple, streamlined process designed for your comfort and convenience.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {(howItWorks.steps || []).map((step: any, index: number) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="text-4xl font-bold text-teal-500 mb-4">{step.number}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <HomeIvGallery slides={ivGallerySlides} />

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-teal-500 to-amber-500">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Experience Premium IV Therapy?
          </h2>
          <p className="text-xl text-teal-100 mb-8">
            Book your consultation today and take the first step towards optimal wellness.
          </p>
          <BookNowTrigger className="inline-flex items-center px-8 py-4 bg-white text-teal-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-200 transform hover:scale-105">
            Book Now
            <ArrowRight className="ml-2 w-5 h-5" />
          </BookNowTrigger>
        </div>
      </section>

      <Footer />
    </div>
  );
}
