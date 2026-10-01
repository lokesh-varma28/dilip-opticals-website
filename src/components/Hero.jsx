import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Calendar, Navigation, Star, MapPin, Clock } from 'lucide-react'
import business from '../data/business'

export default function Hero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 50)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="relative overflow-hidden bg-white pt-8 sm:pt-10 lg:pt-12 pb-12 sm:pb-14 lg:pb-16 transition-opacity duration-700">
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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* Left Column: Heading, Subheading, CTAs, Verified Chips */}
          <div
            className={`lg:col-span-7 space-y-5 sm:space-y-6 transition-all duration-700 ease-out ${
              mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            {/* Showroom Status Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary-50 border border-primary-100/80 text-primary text-xs font-semibold tracking-wider uppercase">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span>Optical Showroom & Eye Clinic</span>
            </div>

            {/* Main Hero Heading */}
            <div className="space-y-2">
              <h1 className="font-serif font-bold text-4xl sm:text-5xl lg:text-6xl text-primary tracking-tight leading-[1.12]">
                Eye Care & Eyewear in Rajahmundry
              </h1>
              <div className="w-20 h-1 bg-accent rounded-full mt-3" />
            </div>

            {/* Subtext (one line) */}
            <p className="font-body text-slate-600 text-base sm:text-lg lg:text-xl leading-relaxed max-w-2xl font-normal">
              Computerized eye testing, branded spectacle frames, and precision prescription lenses on JN Road.
            </p>

            {/* Action CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-1">
              {/* Primary CTA: Book Appointment */}
              <Link
                to="/contact"
                className="bg-accent hover:bg-accent-400 active:scale-95 text-primary font-heading font-bold text-base px-7 py-3.5 rounded-xl shadow-soft hover:shadow-card transition-all duration-200 inline-flex items-center justify-center gap-2.5 cursor-pointer group"
              >
                <Calendar className="w-5 h-5 text-primary transition-transform group-hover:scale-110" />
                <span>Book Appointment</span>
              </Link>

              {/* Secondary CTA: Get Directions */}
              <a
                href={business.googleListingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-primary text-primary hover:bg-primary hover:text-white active:scale-95 font-heading font-semibold text-base px-7 py-3.5 rounded-xl transition-all duration-200 inline-flex items-center justify-center gap-2.5 cursor-pointer group"
              >
                <Navigation className="w-5 h-5 text-primary group-hover:text-accent transition-colors" />
                <span>Get Directions</span>
              </a>
            </div>

            {/* Verified Facts Chips */}
            <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center gap-2.5 sm:gap-3 text-xs sm:text-sm">
              <a
                href={business.googleListingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-amber-50 hover:bg-amber-100 border border-amber-200/80 text-slate-800 transition-colors shadow-2xs group"
                title="View Dilip Optics Grand on Google Maps"
              >
                <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-500 shrink-0" />
                <span className="font-bold text-slate-900">{business.googleRating}</span>
                <span className="text-slate-500">({business.reviewCount} reviews)</span>
              </a>

              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-50 border border-slate-200/80 text-slate-700 shadow-2xs">
                <MapPin className="w-3.5 h-3.5 text-accent shrink-0" />
                <span className="font-medium">JN Road, Gandhipuram</span>
              </div>

              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-50 border border-slate-200/80 text-slate-700 shadow-2xs">
                <Clock className="w-3.5 h-3.5 text-accent shrink-0" />
                <span className="font-medium">{business.hours}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Real Storefront Card with Thin Gold Border & Small Caption */}
          <div
            className={`lg:col-span-5 transition-all duration-700 delay-150 ease-out ${
              mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="relative rounded-2xl overflow-hidden border border-accent/40 shadow-soft bg-white p-2 sm:p-2.5">
                <div className="aspect-[4/3] w-full overflow-hidden rounded-xl bg-slate-100">
                  <img
                    src={business.images.storefront}
                    alt="Dilip Optics Grand, JN Road"
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-[1.03]"
                    loading="eager"
                    fetchpriority="high"
                  />
                </div>
                <p className="pt-2 pb-0.5 text-center text-xs text-slate-600 font-medium">
                  Dilip Optics Grand, JN Road
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
