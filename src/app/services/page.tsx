'use client';

import Image from 'next/image';
import { Star } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { BookNowTrigger } from '@/components/BookNowTrigger';
import { ServicePackageCard } from '@/components/ServicePackageCard';
import {
  ADDITIONAL_SERVICES,
  IV_DRIP_ADD_ONS,
  IV_DRIP_PACKAGES,
} from '@/data/ivDripPackages';

const bookBtnClass =
  'inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-teal-500 to-amber-500 px-8 py-3.5 text-base font-semibold text-white shadow-md transition-all hover:from-teal-600 hover:to-amber-600 hover:shadow-lg';

const SHOT_ROWS = [
  { name: 'VITAMIN D3 50,000 U', label: 'SHOT', price: '$150' },
  { name: 'COQ10', label: 'SHOT', price: '$129' },
  { name: 'BIOTIN', label: 'SHOT', price: '$49' },
  { name: 'B12', label: 'SHOT', price: '$39' },
] as const;

/** 2×2 grid below the main Intramuscular hero image (left column) */
const PRICING_SHOT_IMAGES = [
  { src: '/supercharge.jpg', alt: 'Supercharge — premium vitamin IV therapy' },
  { src: '/b12.jpg', alt: 'B12 intramuscular shot' },
  { src: '/biotin.jpg', alt: 'Biotin shot' },
  { src: '/coq.jpg', alt: 'CoQ10 shot' },
] as const;

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero — aligned with wellnessivdrip.com.au/services */}
      <section className="bg-gradient-to-r from-teal-500 to-amber-500 pb-16 pt-24">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-white md:text-5xl lg:text-6xl">
            Customised IV Therapy Services
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg text-teal-100 md:text-xl">
            Personalised IV vitamin therapy in Canberra — at home, in the office, or in
            clinic.
          </p>
        </div>
      </section>

      {/* IV packages — data from clinic vitamin drip menus */}
      <section className="border-b border-gray-100 bg-white py-14 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
              Professional vitamin therapy delivered by qualified nurses
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Signature IV drips and a fully customised builder — pricing and inclusions match our
              current clinic menus. Expand each card for full inclusions and delivery specs.
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {IV_DRIP_PACKAGES.map((pkg) => (
              <div key={pkg.id} className={pkg.id === 'customised' ? 'md:col-span-2' : undefined}>
                <ServicePackageCard
                  name={pkg.name}
                  price={pkg.price}
                  duration={pkg.duration}
                  description={pkg.description}
                  includes={pkg.includes}
                  specs={pkg.specs}
                  defaultIncludesOpen={pkg.defaultIncludesOpen}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons from menu */}
      <section className="border-b border-gray-100 bg-gray-50 py-14 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">Add-ons</h2>
            <p className="mt-3 text-lg text-gray-600">
              Optional extras you can discuss at booking or during your consult.
            </p>
          </div>
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {IV_DRIP_ADD_ONS.map((addon) => (
              <li
                key={addon.name}
                className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm"
              >
                <p className="font-semibold text-gray-900">{addon.name}</p>
                <p className="mt-2 text-lg font-bold text-teal-600">{addon.price}</p>
                {addon.note ? (
                  <p className="mt-2 text-sm text-gray-500">{addon.note}</p>
                ) : null}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Additional services — quick formats */}
      <section className="border-b border-gray-100 bg-white py-14 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">Additional services</h2>
            <p className="mt-3 text-lg text-gray-600">More ways to support your wellness journey</p>
          </div>
          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {ADDITIONAL_SERVICES.map((svc) => (
              <div
                key={svc.title}
                className="flex flex-col items-center rounded-2xl border border-gray-100 bg-gray-50/80 p-8 text-center shadow-sm"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-teal-400 to-amber-400 shadow-md">
                  <Star className="h-7 w-7 text-white" strokeWidth={1.5} aria-hidden />
                </div>
                <h3 className="mt-5 text-lg font-bold text-gray-900">{svc.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">{svc.description}</p>
                <p className="mt-4 text-lg font-bold text-teal-600">{svc.priceLabel}</p>
                <p className="mt-1 text-xs font-medium text-gray-500">{svc.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* List of Services — intro */}
      <section className="border-b border-gray-100 bg-gray-50 py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-bold text-gray-900 md:text-4xl">
            List of Services
          </h2>
          <p className="mt-5 text-center text-xl font-medium text-gray-800 md:text-2xl">
            Personalised IV Vitamin Therapy in Canberra — At Home or In Clinic
          </p>
          <div className="mx-auto mt-10 max-w-3xl space-y-5 text-lg leading-relaxed text-gray-600">
            <p>
              No matter your health goals or current wellness needs, our team is here to
              support you with premium IV vitamin infusion therapy. Whether you prefer
              treatment at home, in the office, or at our clinic, we deliver care that&apos;s
              both exceptional and comfortable.
            </p>
            <p>
              We offer customised IV drips packed with essential vitamins, minerals, and amino
              acids — all administered by our experienced medical nurses. We uphold the
              highest standards in safety, hygiene, and professionalism.
            </p>
            <p>
              Every treatment begins with a detailed health assessment, so we can create a
              personalised infusion plan tailored to your body&apos;s unique needs.
            </p>
            <p>
              Whether you&apos;re looking to support your energy, improve wellness, or explore
              your nutritional needs, our team is here to guide you every step of the way.
              With a commitment to care, safety, and exceptional service, we&apos;re proud to be
              Canberra&apos;s trusted choice for at-home IV therapy.
            </p>
          </div>
        </div>
      </section>

      {/* Mobile IV Drips — miv.png */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
                Mobile IV Drips
              </h2>
              <p className="mt-2 text-xl font-semibold text-teal-600">
                We Bring the Drips to You, Canberra!
              </p>
              <div className="mt-6 space-y-5 text-lg leading-relaxed text-gray-600">
                <p>
                  Step into the future of wellness with our advanced IV vitamin therapy —
                  designed to revitalise your body with a powerful blend of essential vitamins,
                  minerals, and amino acids.
                </p>
                <p>
                  Our at-home IV hydration services are ideal for those with nutrient absorption
                  challenges or busy lifestyles that make it hard to stay on top of their
                  nutritional needs. From high-dose Vitamin C infusions to energising B vitamin
                  injections, we offer a wide range of popular treatments.
                </p>
                <p>
                  Enjoy the flexibility of our mobile service or visit us in-clinic — whichever
                  suits you best.
                </p>
                <p>
                  Book your complimentary consultation today to personalise your IV therapy and
                  ensure it&apos;s the right fit for your health goals.
                </p>
              </div>
              <BookNowTrigger className={`${bookBtnClass} mt-8`}>Book now</BookNowTrigger>
            </div>
            <div className="relative order-1 aspect-[4/3] w-full overflow-hidden rounded-2xl bg-gray-100 shadow-xl lg:order-2">
              <Image
                src="/miv.png"
                alt="Mobile IV vitamin therapy — IV bag with fresh fruit representing nutrient-rich infusions"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Intramuscular — Intramuscular.png */}
      <section className="border-y border-gray-100 bg-gray-50 py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-start gap-12 lg:grid-cols-2">
            <div className="flex flex-col gap-6 sm:gap-8">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-gray-100 shadow-xl">
                <Image
                  src="/Intramuscular.png"
                  alt="Intramuscular injection administered by a qualified clinician"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                {PRICING_SHOT_IMAGES.map((item) => (
                  <div
                    key={item.src}
                    className="relative aspect-square overflow-hidden rounded-xl bg-gray-100 shadow-md ring-1 ring-gray-200/80"
                  >
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 50vw, 25vw"
                    />
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
                Intramuscular and Subcutaneous Shots
              </h2>

              <h3 className="mt-8 text-xl font-bold text-gray-900">About Us</h3>
              <p className="mt-3 text-lg leading-relaxed text-gray-600">
                Experience the convenience and benefits of our innovative intramuscular shots,
                which take just 15 minutes or less to administer — offering the same powerful
                results as traditional drip therapy, but in half the time. Whether you prefer the
                comfort of our in-home service or wish to visit our Canberra clinic, we are
                dedicated to personalising each treatment to suit your unique health and wellness
                needs.
              </p>

              <h3 className="mt-8 text-xl font-bold text-gray-900">Booking Your IV Drips</h3>
              <p className="mt-3 text-lg leading-relaxed text-gray-600">
                We offer customised intramuscular and subcutaneous shots, tailored to your
                specific needs in Canberra. Book a consultation today with one of our qualified
                medical nurses, who will guide you through our comprehensive IV infusion services
                and help you select the treatment that best aligns with your health goals.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-gray-600">
                For any questions about our IV drip services, our friendly team is available online
                to provide expert advice, discuss our procedures, and recommend the most suitable
                vitamin IV options for you.
              </p>

              <h3 className="mt-10 text-xl font-bold text-gray-900 lg:mt-12">Pricing</h3>
              <p className="mt-3 text-lg leading-relaxed text-gray-600">
                For pricing details on Intramuscular and Subcutaneous Shots, please contact us
                directly for a personalised quote.
              </p>

              <div className="mt-6 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm sm:mt-8">
                <table className="w-full text-left text-sm md:text-base">
                  <thead className="bg-teal-50 text-teal-900">
                    <tr>
                      <th className="px-4 py-3 font-semibold md:px-6">Treatment</th>
                      <th className="px-4 py-3 font-semibold md:px-6">Type</th>
                      <th className="px-4 py-3 text-right font-semibold md:px-6">Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    {SHOT_ROWS.map((row) => (
                      <tr
                        key={row.name}
                        className="border-t border-gray-100 odd:bg-white even:bg-gray-50/80"
                      >
                        <td className="px-4 py-3 font-medium text-gray-900 md:px-6">
                          {row.name}
                        </td>
                        <td className="px-4 py-3 text-gray-600 md:px-6">{row.label}</td>
                        <td className="px-4 py-3 text-right font-semibold text-teal-700 md:px-6">
                          {row.price}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <BookNowTrigger className={`${bookBtnClass} mt-8`}>Book now</BookNowTrigger>
            </div>
          </div>
        </div>
      </section>

      {/* Corporation — 14.jpg */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
                Corporation Well-being package
              </h2>
              <div className="mt-6 space-y-5 text-lg leading-relaxed text-gray-600">
                <p>
                  At Wellness IV Drip, we understand that employee well-being plays a vital role
                  in creating a positive and productive workplace. Our Corporate Well-being
                  Package in Canberra, ACT, is designed to support overall health and workplace
                  satisfaction.
                </p>
                <p>
                  A focus on well-being can help foster a healthier, more engaged workforce.
                  Contact us today to learn more about how our Corporate Well-being Package can
                  support your team.
                </p>
              </div>
              <BookNowTrigger className={`${bookBtnClass} mt-8`}>Book now</BookNowTrigger>
            </div>
            <div className="relative order-1 aspect-[4/3] w-full overflow-hidden rounded-2xl bg-gray-100 shadow-xl lg:order-2">
              <Image
                src="/14.jpg"
                alt="Corporate wellness and team well-being"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="bg-gradient-to-r from-teal-500 to-amber-500 py-16">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <h2 className="text-3xl font-bold text-white md:text-4xl">
            Ready to book?
          </h2>
          <p className="mt-4 text-lg text-teal-100">
            Choose a time that works for you — our online booking opens in the window below.
          </p>
          <BookNowTrigger className="mt-8 inline-flex items-center justify-center rounded-lg bg-white px-8 py-3.5 text-base font-semibold text-teal-700 shadow-md transition-all hover:bg-gray-100">
            Book now
          </BookNowTrigger>
        </div>
      </section>

      <Footer />
    </div>
  );
}
