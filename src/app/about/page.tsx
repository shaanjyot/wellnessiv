import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { BookNowTrigger } from '@/components/BookNowTrigger';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero — image under transparent header, same pattern as home video */}
      <section className="relative flex h-screen items-center justify-center overflow-hidden">
        <Image
          src="/about_main.jpg"
          alt="IV therapy concept — nutrient-rich infusion with fresh fruit in a clinical bag over water"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 z-10 bg-black/40" aria-hidden />
        <div className="relative z-20 mx-auto max-w-7xl px-4 pb-8 pt-28 text-center sm:px-6 sm:pt-32 md:pt-36 lg:px-8">
          <h1 className="text-4xl font-bold leading-tight text-white drop-shadow-md sm:text-5xl md:text-6xl lg:text-7xl">
            About Us
          </h1>
          <p className="mt-4 text-xl font-light text-teal-100 drop-shadow sm:text-2xl md:text-3xl">
            Welcome to Canberra mobile IV Drip service
          </p>
          <p className="mx-auto mt-6 max-w-4xl text-lg leading-relaxed text-gray-100 drop-shadow md:text-xl">
            Wellness IV Drip — mobile IV therapy, wellness, and rejuvenation delivered with care.
          </p>
        </div>
      </section>

      <article className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="space-y-6 text-lg leading-relaxed text-gray-600 md:text-xl md:leading-relaxed">
          <p>
            Wellness IV Drip offers mobile IV therapy services in Canberra, ACT, with a vision
            to deliver wellness and rejuvenation directly to the comfort of your home, providing
            you with ultimate convenience and flexibility.
          </p>
          <p>
            Our mission is to offer customised IV nutrient therapy treatments and intramuscular
            boosters, tailored to each individual&apos;s unique health needs. We believe that true
            well-being is achieved by addressing the root causes of health challenges, and our
            dedicated team is here to empower you to take control of your wellness and live your
            best life.
          </p>
        </div>

        <section className="mt-16 border-t border-gray-100 pt-16">
          <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
            Meet Vivian
          </h2>

          <div className="mt-10 grid gap-10 lg:grid-cols-2 lg:items-start lg:gap-12">
            <div className="relative mx-auto aspect-[3/4] w-full max-w-md overflow-hidden rounded-2xl bg-gray-100 shadow-lg lg:mx-0 lg:max-w-none">
              <Image
                src="/DSC_2161.jpg"
                alt="Vivian Vu, founder of Wellness IV Drip and Registered Nurse"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="space-y-6 text-lg leading-relaxed text-gray-600 md:text-xl md:leading-relaxed">
              <p>
                Our founder, Vivian, is a Registered Nurse with a deep passion for educating
                others on maintaining optimal health through nutritious vitamin IV therapy and
                illness prevention. After receiving training from leading IV drip experts in
                Sydney, Vivian set out to establish Wellness IV in Canberra, drawing on years of
                experience as a dedicated nurse.
              </p>
              <p>
                Inspired by the growing recognition and success of IV vitamin therapies both
                nationally and internationally, Vivian was determined to bring this
                transformative wellness solution to the people of Canberra, helping them on their
                journey to better health.
              </p>
              <p className="rounded-2xl border border-teal-100 bg-gradient-to-br from-teal-50/90 to-white p-6 text-gray-700 shadow-sm">
                Canberra Daily spoke with Vivian about her move from hospital and aged-care nursing
                into vitamin IV therapy, why she focuses on prevention and education, and how
                Wellness IV Drip supports Canberra clients at home, at work, or in clinic.{' '}
                <a
                  href="https://canberradaily.com.au/vivian-vu-founder-wellness-iv-drip/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-teal-700 underline decoration-teal-300 underline-offset-2 transition hover:text-teal-800"
                >
                  Read the profile: Vivian Vu — Founder, Wellness IV Drip
                </a>{' '}
                (Canberra Daily, Women in Business).
              </p>
            </div>
          </div>
        </section>
      </article>

      <section className="border-t border-gray-100 bg-gradient-to-r from-teal-500 to-amber-500 py-14">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-lg text-teal-100">
            Ready to book? Choose a time online or get in touch with our team.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
            <BookNowTrigger className="inline-flex items-center justify-center rounded-lg bg-white px-8 py-3.5 text-base font-semibold text-teal-700 shadow-md transition hover:bg-gray-100">
              Book now
            </BookNowTrigger>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-lg border-2 border-white px-8 py-3.5 text-base font-semibold text-white transition hover:bg-white/10"
            >
              Contact us
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
