import { useState, useEffect } from 'react'
import { MapPin, Sparkles, CheckCircle2, ShieldCheck, MessageCircle, Glasses } from 'lucide-react'
import heroStorefrontPhoto from '../assets/dilip-opticals-real-storefront.jpg'

export default function Hero({ onFindBranch }) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    // Trigger animation immediately after mounting
    const timer = setTimeout(() => setMounted(true), 50)
    return () => clearTimeout(timer)
  }, [])

  const handleFindBranchClick = (e) => {
    if (onFindBranch) {
      e.preventDefault()
      onFindBranch()
    } else {
      const el = document.getElementById('branches')
      if (el) {
        e.preventDefault()
        el.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  const whatsappAppointmentUrl = `https://wa.me/919676955558?text=${encodeURIComponent(
    'Hello Dilip Opticals, I would like to message you for an appointment / eye testing.'
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
            {/* Heritage / Trust Pill */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-primary-50 border border-primary-100/80 text-primary shadow-xs">
              <span className="w-2.5 h-2.5 rounded-full bg-accent animate-pulse" />
              <span className="font-heading text-xs sm:text-sm font-semibold tracking-wide uppercase">
                Rajahmundry’s Pioneer in Optical Care
              </span>
            </div>

            {/* Main Hero Heading */}
            <div className="space-y-2">
              <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl text-primary tracking-tight leading-[1.12]">
                Clear Vision Since 1967
              </h1>
              <div className="w-20 h-1.5 bg-accent rounded-full mt-3" />
            </div>

            {/* Subheading */}
            <p className="font-body text-slate-600 text-lg sm:text-xl lg:text-xl leading-relaxed max-w-2xl font-normal">
              Trusted eye care & eyewear across Rajahmundry — computerized eye testing, prescription glasses, contact lenses, and branded frames.
            </p>

            {/* Action CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              {/* Primary CTA: Find a Branch (Filled gold) */}
              <a
                href="#branches"
                onClick={handleFindBranchClick}
                className="bg-accent hover:bg-accent-400 active:scale-95 text-primary font-heading font-bold text-base sm:text-lg px-7 py-4 rounded-xl shadow-soft hover:shadow-card transition-all duration-200 inline-flex items-center justify-center gap-2.5 cursor-pointer group"
              >
                <MapPin className="w-5 h-5 text-primary transition-transform group-hover:scale-110" />
                <span>Find a Branch</span>
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

          {/* Right Column: Real Storefront Photo Container */}
          <div
            className={`lg:col-span-5 transition-all duration-700 delay-150 ease-out ${
              mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Decorative background framing */}
              <div className="absolute -inset-2 sm:-inset-3 bg-gradient-to-tr from-accent/20 via-primary-100/30 to-accent-100/40 rounded-3xl blur-lg opacity-70 transform -rotate-1 pointer-events-none" />

              {/* Real Storefront Photo Container */}
              <div className="relative group bg-white p-2.5 sm:p-3 rounded-2xl sm:rounded-3xl border border-slate-200/80 shadow-card hover:shadow-hover transition-all duration-300">
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl sm:rounded-2xl bg-slate-100">
                  <img
                    src={heroStorefrontPhoto}
                    alt="Dilip Opticals — Est. 1967, Rajahmundry"
                    width="800"
                    height="600"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    loading="eager"
                  />
                  {/* Subtle Gradient Overlay for text contrast */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/10 to-transparent pointer-events-none" />

                  {/* Caption Overlay */}
                  <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 flex items-center justify-between text-white pointer-events-none">
                    <div className="flex items-center gap-2 bg-primary/85 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/15 text-xs sm:text-sm font-medium shadow-sm">
                      <MapPin className="w-3.5 h-3.5 text-accent shrink-0" />
                      <span className="truncate">Dilip Opticals — Est. 1967, Rajahmundry</span>
                    </div>
                  </div>
                </div>
              </div>

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
                        58+ Years of Optical Trust
                      </p>
                      <p className="font-body text-[11px] text-primary-200 truncate mt-0.5">
                        Generations of Families • Rajahmundry
                      </p>
                    </div>
                  </div>
                  <span className="shrink-0 inline-flex items-center text-[10px] sm:text-[11px] font-heading font-bold uppercase tracking-wider text-accent bg-accent/15 px-2.5 py-1 rounded-md border border-accent/25">
                    Est. 1967
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
