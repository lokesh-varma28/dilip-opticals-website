import { Link } from 'react-router-dom'
import {
  Sparkles,
  ShieldCheck,
  HeartHandshake,
  Award,
  Users,
  CheckCircle2,
  Glasses,
  Star,
  ArrowRight,
} from 'lucide-react'
import TrustStrip from '../components/TrustStrip'
import business from '../data/business'

export default function About() {
  const pillars = [
    {
      icon: Award,
      title: business.claims.yearsInBusiness != null
        ? `${business.claims.yearsInBusiness}+ Years of Dedication`
        : 'Optical Dedication & Quality',
      description: business.claims.establishedYear != null
        ? `Serving Rajahmundry since ${business.claims.establishedYear} with honest service, quality eyewear, and optical dedication.`
        : 'Serving Rajahmundry with honest service, quality eyewear, and optical dedication.',
    },
    {
      icon: ShieldCheck,
      title: 'Accurate Eye Testing',
      description: 'Every prescription is checked using computerized auto-refractometers and confirmed for optical accuracy.',
    },
    {
      icon: HeartHandshake,
      title: 'Personalized Ergonomics',
      description: 'Custom frame fitting, pupil distance calibration, and tailored progressive lens alignments for effortless all-day clarity.',
    },
  ]

  const values = [
    {
      title: 'Ethical Eye Care First',
      description: 'We prioritize ocular health and exact refractive accuracy over mere retail sales.',
    },
    {
      title: 'Quality Lenses',
      description: 'Prescription lenses fitted to your eye test results.',
    },
    ...(business.claims.lifetimeAdjustments ? [{
      title: business.claims.lifetimeAdjustments,
      description: 'Frame realignment, screw tightening and ultrasonic cleaning.',
    }] : []),
    {
      title: 'Transparent Pricing',
      description: 'Honest options for every budget, from student spectacles to quality titanium frames.',
    },
  ]

  return (
    <div className="space-y-0">
      {/* 1. Page Header & Hero Banner */}
      <section className="bg-gradient-to-b from-primary-50/70 to-white py-12 md:py-16 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Mobile-only dispensary image card with thin gold border above text */}
          <div className="md:hidden mb-6">
            <div className="relative rounded-2xl overflow-hidden border border-[#D4A017]/40 shadow-soft aspect-[4/3] bg-slate-100">
              <img
                src={business.images.dispensary}
                alt={`${business.name} optical dispensary`}
                className="w-full h-full object-cover"
                width="400"
                height="300"
                loading="eager"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Heading & 3 Key Items */}
            <div className="md:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary-50 border border-primary-100/80 text-primary text-xs font-semibold tracking-wider uppercase">
                <Sparkles className="w-3.5 h-3.5 text-accent" />
                Our Story
              </div>

              <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-primary tracking-tight leading-[1.15]">
                About Dilip Optics Grand
              </h1>

              <p className="font-body text-slate-600 text-[15px] sm:text-lg leading-relaxed">
                Serving Rajahmundry with honest care, computerized accuracy, and personalized eyewear fitting.
              </p>

              {/* Three Small Items */}
              <div className="pt-2 flex flex-wrap items-center gap-2.5 sm:gap-3 text-xs sm:text-sm text-slate-700">
                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-slate-200/80 shadow-2xs">
                  <CheckCircle2 className="w-3.5 h-3.5 text-accent shrink-0" />
                  <span className="font-medium text-primary">Eye Testing</span>
                </div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-slate-200/80 shadow-2xs">
                  <CheckCircle2 className="w-3.5 h-3.5 text-accent shrink-0" />
                  <span className="font-medium text-primary">Prescription Glasses</span>
                </div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-slate-200/80 shadow-2xs">
                  <CheckCircle2 className="w-3.5 h-3.5 text-accent shrink-0" />
                  <span className="font-medium text-primary">Contact Lenses</span>
                </div>
              </div>
            </div>

            {/* Desktop-only Right Column: Dispensary image card with thin gold border */}
            <div className="hidden md:block md:col-span-5">
              <div className="relative rounded-2xl overflow-hidden border border-[#D4A017]/40 shadow-soft aspect-[4/3] bg-slate-100 group">
                <img
                  src={business.images.dispensary}
                  alt={`${business.name} optical dispensary`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  width="400"
                  height="300"
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 1.1 Trust Metrics Strip */}
      <TrustStrip />

      {/* 2. Our Story & Storefront Visual Showcase */}
      <section className="py-12 md:py-16 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Story Text */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-4">
                <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-primary tracking-tight leading-snug">
                  Honest Eye Care in Rajahmundry
                </h2>
                <div className="w-16 h-1 bg-accent rounded-full" />
              </div>

              <p className="font-body text-slate-600 text-base sm:text-lg leading-relaxed">
                {business.claims.establishedYear != null ? `Founded in ${business.claims.establishedYear}, ` : ''}
                <strong className="text-primary font-semibold">{business.name}</strong> was created with a clear objective: to bring accurate eye testing and quality eyewear to Rajahmundry under one roof.
              </p>

              <p className="font-body text-slate-600 text-sm sm:text-base leading-relaxed">
                {business.claims.yearsInBusiness != null ? `Over the past ${business.claims.yearsInBusiness} years, we` : 'We'} have served students, working professionals, and seniors with tailored visual solutions, whether fitting progressive lenses or choosing a frame that suits their face.
              </p>

              <p className="font-body text-slate-600 text-sm sm:text-base leading-relaxed">
                Located conveniently on JN Road near Ravindra Bharathi School in Gandhipuram, our dispensary houses computerized auto-refractometers, an eye testing area, and a wide range of frames.
              </p>

              {/* Quick Trust Metrics */}
              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-200">
                {business.claims.yearsInBusiness != null && (
                  <div className="border-l-2 border-accent pl-3 sm:pl-4">
                    <div className="font-serif text-2xl sm:text-3xl font-bold text-primary">
                      {business.claims.yearsInBusiness}+
                    </div>
                    <div className="font-body text-xs text-slate-500 font-medium">Years in Rajahmundry</div>
                  </div>
                )}

                <div className="border-l-2 border-accent pl-3 sm:pl-4">
                  <div className="font-serif text-2xl sm:text-3xl font-bold text-primary flex items-center gap-1.5">
                    <Star className="w-5 h-5 fill-amber-400 text-amber-500 shrink-0" />
                    <span>{business.googleRating}</span>
                  </div>
                  <div className="font-body text-xs text-slate-500 font-medium">Google Rating ({business.reviewCount} reviews)</div>
                </div>
              </div>
            </div>

            {/* Storefront Visual Showcase */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-white p-3 rounded-2xl sm:rounded-3xl border-[1.5px] border-[#C9A227] shadow-[0_20px_40px_-12px_rgba(11,37,69,0.25)]">
                <div className="aspect-[4/3] rounded-xl sm:rounded-2xl overflow-hidden bg-slate-100">
                  <img
                    src={business.images.storefront}
                    alt={`${business.name} storefront on JN Road`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    width="400"
                    height="300"
                    loading="lazy"
                  />
                </div>
                <div className="pt-3 px-1 text-center">
                  <p className="font-medium text-xs sm:text-sm text-slate-800">
                    Dilip Optics Grand, JN Road
                  </p>
                  <p className="text-[11px] text-slate-500">
                    Near Ravindra Bharathi School, Gandhipuram
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Three Core Pillars */}
      <section className="py-12 sm:py-14 lg:py-16 bg-slate-50/70 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12 space-y-3">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-primary">
              What We Stand For
            </h2>
            <p className="font-body text-slate-600 text-sm sm:text-base leading-relaxed">
              Every pair of glasses that leaves our Rajahmundry store is guided by three non-negotiable standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {pillars.map((pillar) => {
              const Icon = pillar.icon
              return (
                <div
                  key={pillar.title}
                  className="bg-white rounded-2xl p-8 border border-slate-200/80 shadow-soft hover:shadow-card hover:-translate-y-1 transition-all duration-300 space-y-4"
                >
                  <div className="w-14 h-14 rounded-xl bg-primary-50 text-accent flex items-center justify-center border border-primary-100 shadow-xs">
                    <Icon className="w-7 h-7 text-accent" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-primary">
                    {pillar.title}
                  </h3>
                  <p className="font-body text-slate-600 text-sm leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* 4. Values & Patient Commitments */}
      <section className="py-12 sm:py-14 lg:py-16 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-5 space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary-50 border border-primary-100/80 text-primary text-xs font-semibold tracking-wider uppercase">
                <Users className="w-3.5 h-3.5 text-accent" />
                The Dilip Optics Promise
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-primary tracking-tight">
                Why Patients & Families Trust Us
              </h2>
              <p className="font-body text-slate-600 text-base leading-relaxed">
                We believe clear sight changes how you experience life. Our optometrists take the time to answer all questions, inspect prescriptions thoroughly, and make sure your frames fit comfortably without pressure points.
              </p>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
              {values.map((val) => (
                <div
                  key={val.title}
                  className="bg-slate-50/80 rounded-xl p-5 border border-slate-200/70 space-y-2 hover:bg-slate-50 transition-colors"
                >
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-accent shrink-0" />
                    <h3 className="font-serif text-base font-bold text-primary">
                      {val.title}
                    </h3>
                  </div>
                  <p className="font-body text-xs sm:text-sm text-slate-600 leading-relaxed pl-7">
                    {val.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. Navigation CTA to Services & Contact */}
      <section className="bg-primary text-white py-12 sm:py-14 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight">
            Experience the Dilip Optics Grand Difference
          </h2>
          <p className="font-body text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Stop by our showroom on JN Road in Rajahmundry or book your personalized eye checkup today.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3.5 pt-2 max-w-md sm:max-w-none mx-auto">
            <Link
              to="/contact"
              className="w-full sm:w-auto min-h-12 bg-accent hover:bg-accent-400 active:scale-[0.98] text-primary font-heading font-bold text-base py-3.5 px-7 rounded-xl shadow-soft hover:shadow-card transition-all duration-200 inline-flex items-center justify-center gap-2 cursor-pointer text-center"
            >
              <span>Book Appointment & Visit Us</span>
              <ArrowRight className="w-4 h-4 shrink-0" />
            </Link>

            <Link
              to="/products"
              className="w-full sm:w-auto min-h-12 border-2 border-white/30 text-white hover:bg-white/10 active:scale-[0.98] font-heading font-semibold text-base py-3 px-6 rounded-xl transition-all duration-200 inline-flex items-center justify-center gap-2 text-center"
            >
              <Glasses className="w-4 h-4 text-accent shrink-0" />
              <span>Explore Eyewear Collections</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
