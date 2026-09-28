import { Sparkles, Award, ShieldCheck, HeartHandshake, Star } from 'lucide-react'
import business from '../data/business'

export default function AboutSection() {
  const yearsSinceEst = new Date().getFullYear() - business.establishedYear

  const pillars = [
    {
      icon: Award,
      title: `${yearsSinceEst}+ Years of Dedication`,
      description: `Serving Rajahmundry since ${business.establishedYear} with clinical integrity, high-precision eyewear, and optical dedication.`,
    },
    {
      icon: ShieldCheck,
      title: 'Clinical Precision',
      description: 'Every prescription is checked using computerized auto-refractometers and verified by certified senior optometrists.',
    },
    {
      icon: HeartHandshake,
      title: 'Personalized Ergonomics',
      description: 'Custom frame fitting, pupil distance calibration, and tailored progressive lens alignments for effortless all-day clarity.',
    },
  ]

  return (
    <section id="about" className="relative overflow-hidden bg-slate-50/70 border-b border-slate-100 py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Two-Column Responsive Heritage Header: Text on One Side, Real Shop Photo on the Other */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-16 sm:mb-20">
          {/* Column 1: Heading + Description Text */}
          <div className="lg:col-span-7 space-y-5 text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary-50 border border-primary-100/80 text-primary text-xs font-semibold tracking-wider uppercase">
              <Sparkles className="w-3.5 h-3.5 text-accent" />
              Our Story & Heritage
            </div>

            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-primary leading-[1.15]">
              A Legacy of Vision Care Since {business.establishedYear}
            </h2>

            <p className="font-body text-slate-600 text-base sm:text-lg leading-relaxed">
              {business.name} is a premier optical destination in Rajahmundry, trusted across the Godavari region for genuine optics, clinical accuracy, and ethical patient care.
            </p>

            <p className="font-body text-slate-600 text-sm sm:text-base leading-relaxed">
              For over {yearsSinceEst} years, we have provided computerized refraction testing, personalized frame styling, and authentic branded ophthalmic lenses for discerning individuals and families.
            </p>

            {/* Quick Heritage Trust Metrics */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-3 border-t border-slate-200/80">
              <div className="border-l-2 border-accent pl-3 sm:pl-4">
                <div className="font-heading text-2xl sm:text-3xl font-bold text-primary">{yearsSinceEst}+</div>
                <div className="font-body text-xs text-slate-500 font-medium">Years of Excellence</div>
              </div>
              <div className="border-l-2 border-accent pl-3 sm:pl-4">
                <div className="font-heading text-2xl sm:text-3xl font-bold text-primary flex items-center gap-1.5">
                  <Star className="w-5 h-5 fill-amber-400 text-amber-500 shrink-0" />
                  <span>{business.googleRating}</span>
                </div>
                <div className="font-body text-xs text-slate-500 font-medium">Google Rating</div>
              </div>
              <div className="border-l-2 border-accent pl-3 sm:pl-4 col-span-2 sm:col-span-1">
                <div className="font-heading text-2xl sm:text-3xl font-bold text-primary">{business.reviewCount}+</div>
                <div className="font-body text-xs text-slate-500 font-medium">Google Reviews</div>
              </div>
            </div>
          </div>

          {/* Column 2: Optical Dispensary Photo (Clean Presentation with Neutral Alt, No Overlay Badges) */}
          <div className="lg:col-span-5 w-full relative">
            {/* Decorative blurred gold circle behind the image */}
            <div
              className="absolute -top-6 -right-6 sm:-top-8 sm:-right-8 w-44 h-44 sm:w-56 sm:h-56 rounded-full bg-[#C9A227]/20 blur-3xl pointer-events-none -z-0"
              aria-hidden="true"
            />

            <div className="relative z-10 bg-white p-2.5 sm:p-3 rounded-2xl sm:rounded-3xl border-[1.5px] border-[#C9A227] shadow-[0_24px_50px_-12px_rgba(11,37,69,0.35),0_12px_24px_-8px_rgba(11,37,69,0.2)] hover:shadow-[0_32px_64px_-12px_rgba(11,37,69,0.45)] transition-all duration-300">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl sm:rounded-2xl bg-slate-100">
                <img
                  src={business.images.dispensary}
                  alt="Optical dispensary and prescription eyewear showroom in Rajahmundry"
                  width="800"
                  height="600"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out hover:scale-105"
                  style={{ filter: 'contrast(1.05) saturate(1.08)' }}
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>

        {/* 3 Core Pillars (Without Verified Standard labels) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {pillars.map((pillar) => {
            const Icon = pillar.icon
            return (
              <div
                key={pillar.title}
                className="bg-white rounded-xl p-7 border border-slate-200/80 shadow-soft hover:shadow-card hover:-translate-y-1 transition-all duration-300 space-y-4 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-primary-50 text-accent flex items-center justify-center border border-primary-100">
                    <Icon className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="font-heading text-lg font-bold text-primary">
                    {pillar.title}
                  </h3>
                  <p className="font-body text-slate-600 text-sm leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
