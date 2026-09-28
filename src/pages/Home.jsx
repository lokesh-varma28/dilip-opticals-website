import { Link } from 'react-router-dom'
import {
  Glasses,
  ScanEye,
  ShieldCheck,
  Sparkles,
  ArrowRight,
  Sun,
  Laptop,
  CheckCircle2,
  Calendar,
  MessageCircle,
  MapPin,
  Clock,
  Star,
} from 'lucide-react'
import Hero from '../components/Hero'
import TrustedBrands from '../components/TrustedBrands'
import business from '../data/business'

export default function Home() {
  const featuredCollections = [
    {
      title: 'Titanium & Premium Frames',
      desc: 'Featherlight, corrosion-resistant frames engineered for all-day comfort and long-lasting durability.',
      icon: Glasses,
      badge: 'Lightweight & Strong',
      tag: 'Best Seller',
    },
    {
      title: 'Digital Blue-Cut Glasses',
      desc: 'Advanced blue light filtration lenses designed to prevent eye fatigue from computer and mobile screens.',
      icon: Laptop,
      badge: 'Screen Protection',
      tag: 'Digital Life',
    },
    {
      title: 'Polarized Sunglasses',
      desc: 'High-contrast 100% UV400 polarized shades for sun protection, driving clarity, and elevated style.',
      icon: Sun,
      badge: 'UV400 Glare Shield',
      tag: 'Outdoor & Style',
    },
    {
      title: 'Contact Lenses & Solutions',
      desc: 'Breathable daily and monthly disposable lenses with premium sterile hydration solutions.',
      icon: Sparkles,
      badge: 'Daily & Monthly',
      tag: 'Comfort Vision',
    },
  ]

  const featuredServices = [
    {
      title: 'Computerized Eye Testing',
      desc: 'Digital auto-refraction and visual acuity assessments performed by certified senior optometrists.',
      icon: ScanEye,
      metric: 'Clinical Precision',
    },
    {
      title: 'Precision Progressive Fitting',
      desc: 'Laser-calibrated pupil distance and progressive optical center alignment for distortion-free reading.',
      icon: ShieldCheck,
      metric: 'Zero Distortion',
    },
    {
      title: 'Complimentary In-Store Servicing',
      desc: 'Ultrasonic deep ultrasonic frame cleaning, nose pad replacement, and temple adjustments at no cost.',
      icon: CheckCircle2,
      metric: 'Free Lifetime Support',
    },
  ]

  return (
    <div className="space-y-0">
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Trusted Brands Strip */}
      <TrustedBrands />

      {/* 3. Featured Eyewear Collections */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
            <div className="space-y-3 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary-50 border border-primary-100/80 text-primary text-xs font-semibold tracking-wider uppercase">
                <Glasses className="w-3.5 h-3.5 text-accent" />
                Featured Eyewear
              </div>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold tracking-tight text-primary">
                Curated Collections for Every Lifestyle
              </h2>
              <p className="font-body text-slate-600 text-base sm:text-lg leading-relaxed">
                Explore hand-selected spectacle frames, blue-cut computer lenses, and designer sunglasses at Dilip Optics Grand.
              </p>
            </div>

            <Link
              to="/products"
              className="inline-flex items-center gap-2 text-primary font-heading font-bold text-sm hover:text-accent group shrink-0 transition-colors"
            >
              <span>Explore All Eyewear</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {featuredCollections.map((item) => {
              const Icon = item.icon
              return (
                <div
                  key={item.title}
                  className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/90 shadow-soft hover:shadow-card hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-xl bg-primary-50 text-primary group-hover:bg-primary group-hover:text-accent transition-colors flex items-center justify-center border border-primary-100/80 shadow-xs">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="font-heading text-[10px] uppercase font-bold tracking-wider text-amber-800 bg-amber-50 px-2.5 py-1 rounded-md border border-amber-200/70">
                        {item.tag}
                      </span>
                    </div>

                    <h3 className="font-heading text-lg font-bold text-primary group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>

                    <p className="font-body text-slate-600 text-xs sm:text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                  <div className="pt-5 mt-5 border-t border-slate-100 flex items-center justify-between text-xs">
                    <span className="font-medium text-slate-500">{item.badge}</span>
                    <Link
                      to="/products"
                      className="font-heading font-semibold text-primary group-hover:text-accent inline-flex items-center gap-1 transition-colors"
                    >
                      <span>View</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              )
            })}
          </div>

          <div className="mt-10 text-center sm:hidden">
            <Link
              to="/products"
              className="w-full inline-flex items-center justify-center gap-2 bg-slate-50 hover:bg-slate-100 text-primary font-heading font-bold text-sm py-3 px-6 rounded-xl border border-slate-200 transition-colors"
            >
              <span>Explore All Eyewear Collections</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 4. Featured Services Preview */}
      <section className="py-16 sm:py-20 lg:py-24 bg-slate-50/70 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
            <div className="space-y-3 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary-50 border border-primary-100/80 text-primary text-xs font-semibold tracking-wider uppercase">
                <ScanEye className="w-3.5 h-3.5 text-accent" />
                Optical Excellence
              </div>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold tracking-tight text-primary">
                Advanced Eye Care & Testing
              </h2>
              <p className="font-body text-slate-600 text-base sm:text-lg leading-relaxed">
                From precision digital eye checkups to custom progressive alignment, our optometrists ensure clear and comfortable vision.
              </p>
            </div>

            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-primary font-heading font-bold text-sm hover:text-accent group shrink-0 transition-colors"
            >
              <span>Explore All Services</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {featuredServices.map((svc) => {
              const Icon = svc.icon
              return (
                <div
                  key={svc.title}
                  className="bg-white rounded-2xl p-7 sm:p-8 border border-slate-200/80 shadow-soft hover:shadow-card hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-xl bg-primary-50 text-primary group-hover:bg-primary group-hover:text-accent transition-colors flex items-center justify-center border border-primary-100 shadow-xs">
                      <Icon className="w-6 h-6" />
                    </div>

                    <h3 className="font-heading text-xl font-bold text-primary">
                      {svc.title}
                    </h3>

                    <p className="font-body text-slate-600 text-sm leading-relaxed">
                      {svc.desc}
                    </p>
                  </div>

                  <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
                    <span className="font-heading text-xs font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-100">
                      {svc.metric}
                    </span>
                    <Link
                      to="/services"
                      className="font-heading font-semibold text-xs text-primary group-hover:text-accent inline-flex items-center gap-1 transition-colors"
                    >
                      <span>Details</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* 5. Heritage & Clinical Trust Teaser (About Preview) */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-primary-50/70 via-white to-amber-50/40 rounded-3xl p-8 sm:p-12 lg:p-16 border border-slate-200/90 shadow-soft">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
              {/* Left Content */}
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-primary-100 text-primary text-xs font-semibold tracking-wider uppercase shadow-2xs">
                  <Sparkles className="w-3.5 h-3.5 text-accent" />
                  Our Legacy in Rajahmundry
                </div>

                <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-primary leading-[1.18]">
                  Trusted by Generations of Rajahmundry Families Since {business.establishedYear}
                </h2>

                <p className="font-body text-slate-600 text-base sm:text-lg leading-relaxed">
                  Located on JN Road in Gandhipuram, {business.name} is dedicated to honest eye care, clinical accuracy, and curated authentic eyewear. Every frame and lens is inspected to rigorous optical standards.
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-2">
                  <div className="bg-white rounded-xl p-4 border border-slate-200/80 shadow-xs">
                    <div className="font-heading text-2xl sm:text-3xl font-bold text-primary">
                      {business.yearsInBusiness}+
                    </div>
                    <div className="font-body text-xs text-slate-500 font-medium mt-0.5">
                      Years of Service
                    </div>
                  </div>

                  <div className="bg-white rounded-xl p-4 border border-slate-200/80 shadow-xs">
                    <div className="font-heading text-2xl sm:text-3xl font-bold text-primary flex items-center gap-1">
                      <Star className="w-5 h-5 fill-amber-400 text-amber-500 shrink-0" />
                      <span>{business.googleRating}</span>
                    </div>
                    <div className="font-body text-xs text-slate-500 font-medium mt-0.5">
                      Google Rating ({business.reviewCount}+)
                    </div>
                  </div>

                  <div className="bg-white rounded-xl p-4 border border-slate-200/80 shadow-xs col-span-2 sm:col-span-1">
                    <div className="font-heading text-2xl sm:text-3xl font-bold text-primary">
                      10,000+
                    </div>
                    <div className="font-body text-xs text-slate-500 font-medium mt-0.5">
                      Happy Eyes Fitted
                    </div>
                  </div>
                </div>

                <div className="pt-2 flex flex-wrap items-center gap-4">
                  <Link
                    to="/about"
                    className="bg-primary hover:bg-primary-800 text-white font-heading font-semibold text-sm sm:text-base py-3.5 px-6 rounded-xl shadow-soft hover:shadow-card active:scale-95 transition-all duration-200 inline-flex items-center gap-2 cursor-pointer"
                  >
                    <span>Read Our Heritage Story</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>

                  <Link
                    to="/contact"
                    className="border-2 border-primary text-primary hover:bg-primary-50 font-heading font-semibold text-sm sm:text-base py-3 px-6 rounded-xl transition-all duration-200 inline-flex items-center gap-2"
                  >
                    <span>Visit Our Store</span>
                  </Link>
                </div>
              </div>

              {/* Right Image Display */}
              <div className="lg:col-span-5 relative">
                <div className="bg-white p-3 rounded-2xl border-[1.5px] border-[#C9A227] shadow-card">
                  <div className="aspect-[4/3] rounded-xl overflow-hidden bg-slate-100">
                    <img
                      src={business.images.dispensary}
                      alt={`${business.name} optical dispensary in Rajahmundry`}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                      loading="lazy"
                    />
                  </div>
                  <div className="pt-3 px-1 flex items-center justify-between text-xs text-slate-600">
                    <span className="font-heading font-semibold text-primary">
                      JN Road Dispensary & Clinic
                    </span>
                    <span className="text-amber-700 font-medium">Est. {business.establishedYear}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Primary Action Banner: Visit Us & Book Consultation */}
      <section className="bg-primary text-white py-16 sm:py-20 relative overflow-hidden">
        {/* Background ambient accents */}
        <div
          className="pointer-events-none absolute -top-24 -right-24 w-80 h-80 rounded-full bg-accent/15 blur-3xl"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -bottom-24 -left-24 w-80 h-80 rounded-full bg-white/5 blur-3xl"
          aria-hidden="true"
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-accent text-xs font-semibold tracking-wider uppercase">
              <Calendar className="w-3.5 h-3.5 text-accent" />
              Easy Consultation & Walk-ins Welcome
            </div>

            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Ready for Crystal Clear Vision?
            </h2>

            <p className="font-body text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
              Schedule your computerized eye checkup or visit our showroom on JN Road in Rajahmundry for custom frame styling.
            </p>

            {/* Quick Details Bar */}
            <div className="py-4 flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm text-slate-300">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-accent shrink-0" />
                <span>JN Road, Gandhipuram, Rajahmundry</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-accent shrink-0" />
                <span>{business.hours}</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
              <Link
                to="/contact"
                className="w-full sm:w-auto bg-accent hover:bg-accent-400 active:scale-95 text-primary font-heading font-bold text-base py-4 px-8 rounded-xl shadow-soft hover:shadow-card transition-all duration-200 inline-flex items-center justify-center gap-2 cursor-pointer"
              >
                <Calendar className="w-5 h-5 text-primary" />
                <span>Book Appointment & Visit Us</span>
              </Link>

              <a
                href={business.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-500 active:scale-95 text-white font-heading font-semibold text-base py-4 px-8 rounded-xl shadow-soft transition-all duration-200 inline-flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-5 h-5 text-white" />
                <span>WhatsApp: {business.phoneDisplay}</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
