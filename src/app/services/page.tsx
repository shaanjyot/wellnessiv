'use client';

import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { BookNowTrigger } from '@/components/BookNowTrigger';

const bookBtnClass =
  'inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-teal-500 to-amber-500 px-8 py-3.5 text-base font-semibold text-white shadow-md transition-all hover:from-teal-600 hover:to-amber-600 hover:shadow-lg';

const SHOT_ROWS = [
  { name: 'VITAMIN D3 50,000 U', label: 'SHOT', price: '$150' },
  { name: 'COQ10', label: 'SHOT', price: '$120' },
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

      {/* Printed menus — signature packages + customised builder */}
      <section className="border-b border-gray-100 bg-white py-14 md:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
              Vitamin drip menus
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-lg text-gray-600">
              Signature IV packages with inclusions and add-ons, plus our customised drip builder
              and ingredient list — the same menus we use in clinic.
            </p>
          </div>
          <div className="mt-10 space-y-12 md:mt-14 md:space-y-14">
            <figure className="mx-auto max-w-5xl">
              <div className="overflow-hidden rounded-2xl border border-gray-200 bg-gray-50 shadow-2xl ring-1 ring-black/5">
                <Image
                  src="/menu-vitamin-drip-packages.png"
                  alt="Wellness IV Drip menu: Focus, Metaboliser, Super Charge, Tranquillity, Cure Me Elixir, Glamour, Limitless Elite packages, add-ons, and pricing"
                  width={1024}
                  height={716}
                  className="h-auto w-full"
                  sizes="(max-width: 1024px) 100vw, 1024px"
                  priority
                />
              </div>
              <figcaption className="mt-3 text-center text-sm font-medium text-gray-500">
                Signature packages &amp; add-ons
              </figcaption>
            </figure>
            <figure className="mx-auto max-w-5xl">
              <div className="overflow-hidden rounded-2xl border border-gray-200 bg-gray-50 shadow-2xl ring-1 ring-black/5">
                <Image
                  src="/menu-vitamin-drip-customised.png"
                  alt="Customised IV drip pricing by number of vitamins, choose-your-ingredients list, contact details, and The Wellness IV Drip ACT vitamin drip menu cover"
                  width={1024}
                  height={713}
                  className="h-auto w-full"
                  sizes="(max-width: 1024px) 100vw, 1024px"
                />
              </div>
              <figcaption className="mt-3 text-center text-sm font-medium text-gray-500">
                Customised drips &amp; ingredient options
              </figcaption>
            </figure>
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

      {/* Corporation — Corporation.jpg */}
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
                src="/Corporation.jpg"
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
