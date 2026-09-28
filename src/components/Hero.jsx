import { useState, useEffect } from 'react'
import { Sparkles, CheckCircle2, ShieldCheck, MessageCircle, Glasses, Navigation, Star, ExternalLink } from 'lucide-react'
import ShowroomIllustration from './ShowroomIllustration'
import business from '../data/business'

export default function Hero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    // Trigger animation immediately after mounting
    const timer = setTimeout(() => setMounted(true), 50)
    return () => clearTimeout(timer)
  }, [])

  const whatsappAppointmentUrl = `${business.whatsapp}?text=${encodeURIComponent(
    `Hello ${business.name}, I would like to message you for an appointment / eye testing.`
  )}`

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-24 transition-opacity duration-700"
    >
      {/* Subtle background ambient gradients for depth */}
      <div
        className="pointer-events-none absolute -top-40 -right-40 w-96 h-96 rounded-full bg-accent-50/70 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute top-1/2 -left-40 w-96 h-96 rounded-full bg-primary-50/80 blur-3xl"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Heading, Subheading, CTAs */}
          <div
            className={`lg:col-span-7 space-y-6 sm:space-y-8 transition-all duration-700 ease-out ${
              mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            {/* Heritage / Trust Pill & Google Trust Badge */}
            <div className="flex flex-wrap items-center gap-3">
              <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-primary-50 border border-primary-100/80 text-primary shadow-xs">
                <span className="w-2.5 h-2.5 rounded-full bg-accent animate-pulse" />
                <span className="font-heading text-xs sm:text-sm font-semibold tracking-wide uppercase">
                  Trusted Eye Care in Rajahmundry
                </span>
              </div>

              {/* Google Reviews Trust Badge */}
              <a
                href={business.googleListingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 hover:bg-amber-100/90 border border-amber-200/80 text-slate-800 text-xs sm:text-sm font-medium transition-colors shadow-xs group"
                title="View Dilip Optics Grand on Google Maps"
              >
                <div className="flex items-center text-amber-500">
                  <Star className="w-4 h-4 fill-amber-400 text-amber-500" />
                </div>
                <span className="font-semibold text-slate-900">{business.googleRating}</span>
                <span className="text-slate-400">·</span>
                <span>{business.reviewCount} Google reviews</span>
                <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-primary transition-colors ml-0.5" />
              </a>
            </div>

            {/* Main Hero Heading */}
            <div className="space-y-2">
              <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl text-primary tracking-tight leading-[1.12]">
                Clear Vision Since {business.establishedYear}
              </h1>
              <div className="w-20 h-1.5 bg-accent rounded-full mt-3" />
            </div>

            {/* Subheading */}
            <p className="font-body text-slate-600 text-lg sm:text-xl lg:text-xl leading-relaxed max-w-2xl font-normal">
              Trusted eye care & eyewear in Rajahmundry — computerized eye testing, prescription glasses, contact lenses, and branded frames.
            </p>

            {/* Action CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              {/* Primary CTA: Get Directions linking to Google Maps */}
              <a
                href={business.googleListingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-accent hover:bg-accent-400 active:scale-95 text-primary font-heading font-bold text-base sm:text-lg px-7 py-4 rounded-xl shadow-soft hover:shadow-card transition-all duration-200 inline-flex items-center justify-center gap-2.5 cursor-pointer group"
              >
                <Navigation className="w-5 h-5 text-primary transition-transform group-hover:scale-110" />
                <span>Get Directions</span>
              </a>

              {/* Secondary CTA: Message us for appointment (Outlined navy) */}
              <a
                href={whatsappAppointmentUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-primary text-primary hover:bg-primary hover:text-white active:scale-95 font-heading font-semibold text-base sm:text-lg px-7 py-4 rounded-xl transition-all duration-200 inline-flex items-center justify-center gap-2.5 cursor-pointer group"
              >
                <MessageCircle className="w-5 h-5 text-primary group-hover:text-accent transition-colors" />
                <span>Message us for appointment</span>
              </a>
            </div>

            {/* Trust Badges */}
            <div className="pt-4 border-t border-slate-100 grid grid-cols-3 gap-3 sm:gap-6 text-slate-600">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-accent shrink-0" />
                <span className="font-body text-xs sm:text-sm font-medium">Free Eye Checkup</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-accent shrink-0" />
                <span className="font-body text-xs sm:text-sm font-medium">Genuine Branded Lenses</span>
              </div>
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-accent shrink-0" />
                <span className="font-body text-xs sm:text-sm font-medium">30-Min Fast Fitting</span>
              </div>
            </div>
          </div>

          {/* Right Column: Line-Art Eyewear Illustration */}
          <div
            className={`lg:col-span-5 transition-all duration-700 delay-150 ease-out ${
              mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Decorative background framing */}
              <div className="absolute -inset-2 sm:-inset-3 bg-gradient-to-tr from-accent/20 via-primary-100/30 to-accent-100/40 rounded-3xl blur-lg opacity-70 transform -rotate-1 pointer-events-none" />

              {/* Brand-neutral Line-art Showroom Illustration */}
              <ShowroomIllustration />

              {/* Stacked Badge Cards with Proper Vertical Spacing & Zero Overlap */}
              <div className="mt-4 sm:mt-5 space-y-3">
                {/* Card 1: Curated Eyewear Collections (White Card with Soft Shadow) */}
                <div className="w-full bg-white rounded-xl p-3 sm:p-3.5 border border-slate-200/90 shadow-soft hover:shadow-card transition-all duration-200 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
                    <div className="w-9 h-9 rounded-lg bg-primary-50 text-primary border border-primary-100 flex items-center justify-center shrink-0">
                      <Glasses className="w-5 h-5 text-primary" />
                    </div>
                    <div className="min-w-0">
                      <p className="font-heading text-xs sm:text-sm font-bold text-primary truncate leading-tight">
                        Curated Eyewear Collections
                      </p>
                      <p className="font-body text-[11px] text-slate-500 truncate mt-0.5">
                        Titanium • Acetate • Digital Progressives
                      </p>
                    </div>
                  </div>
                  <span className="shrink-0 inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-100/60">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                    <span className="hidden xs:inline">Precision Fitted</span>
                  </span>
                </div>

                {/* Card 2: Generations of Trust (Dark Navy Card with Elevated Shadow) */}
                <div className="w-full bg-primary text-white rounded-xl p-3 sm:p-3.5 border border-primary-800 shadow-soft hover:shadow-card transition-all duration-200 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
                    <div className="w-9 h-9 rounded-lg bg-accent/20 border border-accent/30 text-accent flex items-center justify-center shrink-0">
                      <Sparkles className="w-4 h-4 text-accent" />
                    </div>
                    <div className="min-w-0">
                      <p className="font-heading text-xs sm:text-sm font-bold text-white truncate leading-tight">
                        {business.yearsInBusiness}+ Years of Optical Trust
                      </p>
                      <p className="font-body text-[11px] text-primary-200 truncate mt-0.5">
                        Trusted Eyewear & Care • Rajahmundry
                      </p>
                    </div>
                  </div>
                  <span className="shrink-0 inline-flex items-center text-[10px] sm:text-[11px] font-heading font-bold uppercase tracking-wider text-accent bg-accent/15 px-2.5 py-1 rounded-md border border-accent/25">
                    Est. {business.establishedYear}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
