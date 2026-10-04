import { Link } from 'react-router-dom'
import {
  Glasses,
  ScanEye,
  ShieldCheck,
  Sparkles,
  ArrowRight,
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

const productImages = import.meta.glob('../assets/products/*.webp', { eager: true })

function getProductPhotoUrl(filename, aliases = []) {
  if (!filename) return null
  const candidates = [filename, ...aliases].filter(Boolean)

  for (const candidate of candidates) {
    const targetName = candidate.split('/').pop().toLowerCase()
    const targetBase = targetName.replace(/\.(webp|jpe?g|png|avif)$/i, '')

    for (const [filePath, module] of Object.entries(productImages)) {
      const entryFile = filePath.split('/').pop().toLowerCase()
      const entryBase = entryFile.replace(/\.webp$/i, '')

      if (entryFile === targetName || entryBase === targetBase) {
        return module.default || module
      }
    }
  }

  return null
}

export default function Home() {
  const rawFeaturedCollections = [
    {
      category: 'frames',
      title: 'Spectacles & Frames',
      desc: 'Titanium and acetate frames for everyday wear.',
      photo: 'st-marks-titanium.webp',
      bgColor: '#F2F3F5',
      alt: "Titanium spectacle frame",
    },
    {
      category: 'blue-cut',
      title: 'Blue-Cut Computer Glasses',
      desc: 'Blue-cut lenses for screen use.',
      photo: 'crizal-shield.webp',
      aliases: ['crizal-bluecut.webp', 'crizal-blue-cut.webp'],
      bgColor: '#F2F3F5',
      alt: 'Blue-cut computer protection glasses',
    },
    {
      category: 'sunglasses',
      title: 'Polarized Sunglasses',
      desc: 'Polarized sunglasses for sunny days and driving.',
      photo: 'fastrack-aviator.webp',
      bgColor: '#F2F3F5',
      alt: 'Polarized sunglasses',
    },
    {
      category: 'contacts',
      title: 'Contact Lenses & Care',
      desc: 'Daily and monthly contact lenses and lens care.',
      photo: 'bausch-lomb-purevision.webp',
      aliases: ['bausch-lomb.webp', 'bausch-lomb-contacts.webp'],
      bgColor: '#F2F3F5',
      alt: 'Bausch + Lomb PureVision contact lenses',
    },
  ]

  const featuredCollections = rawFeaturedCollections.map((item) => ({
    ...item,
    photoUrl: getProductPhotoUrl(item.photo, item.aliases),
  }))

  const featuredServices = [
    {
      title: 'Computerized Eye Testing',
      desc: 'Digital auto-refraction and visual acuity assessments for accurate prescription power.',
      icon: ScanEye,
    },
    {
      title: 'Progressive Lens Fitting',
      desc: 'Pupil distance and optical center alignment for comfortable distance and reading vision.',
      icon: ShieldCheck,
    },
    {
      title: 'In-Store Frame Servicing',
      desc: 'Deep ultrasonic frame cleaning, nose pad replacement, and temple adjustments at no cost.',
      icon: CheckCircle2,
    },
  ]

  return (
    <div className="space-y-0">
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Trusted Brands Strip */}
      <TrustedBrands />

      {/* 3. Featured Eyewear Collections */}
      <section className="py-12 sm:py-14 lg:py-16 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-12 gap-6">
            <div className="space-y-3 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary-50 border border-primary-100/80 text-primary text-xs font-semibold tracking-wider uppercase">
                <Glasses className="w-3.5 h-3.5 text-accent" />
                Featured Eyewear
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-primary">
                Curated Collections for Every Lifestyle
              </h2>
              <p className="font-body text-slate-600 text-base sm:text-lg leading-relaxed">
                Explore spectacle frames, blue-cut computer lenses, and sunglasses at Dilip Optics Grand.
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

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 items-stretch">
            {featuredCollections.map((item) => (
              <div
                key={item.category}
                className="bg-white rounded-2xl border border-slate-200/90 shadow-soft hover:shadow-card hover:-translate-y-1 transition-all duration-300 flex flex-col h-full overflow-hidden group"
              >
                {/* 1. Large aspect-[4/3] product image container with #F2F3F5 background, p-4, and object-contain */}
                <Link
                  to={`/products?category=${item.category}`}
                  className="relative w-full aspect-[4/3] p-4 bg-[#F2F3F5] overflow-hidden flex items-center justify-center border-b border-slate-100 block"
                  style={{ backgroundColor: '#F2F3F5' }}
                  aria-label={`View ${item.title}`}
                >
                  <img
                    src={item.photoUrl}
                    alt={item.alt || item.title}
                    className="w-full h-full object-contain transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                    loading="lazy"
                  />
                </Link>

                {/* Card Body: title -> description -> View link */}
                <div className="p-5 sm:p-6 flex flex-col flex-1 justify-between">
                  <div className="space-y-2">
                    {/* 2. Title */}
                    <h3 className="font-serif text-lg sm:text-xl font-semibold text-primary leading-snug group-hover:text-accent-700 transition-colors">
                      <Link to={`/products?category=${item.category}`}>
                        {item.title}
                      </Link>
                    </h3>

                    {/* 3. One-line description (max 15 words, no text truncation) */}
                    <p className="font-body text-slate-600 text-xs sm:text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                  {/* 4. "View" link */}
                  <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between">
                    <Link
                      to={`/products?category=${item.category}`}
                      className="font-heading font-semibold text-xs sm:text-sm text-primary group-hover:text-accent inline-flex items-center gap-1.5 transition-colors"
                    >
                      <span>View</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center sm:hidden">
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
      <section className="py-12 sm:py-14 lg:py-16 bg-slate-50/70 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-12 gap-6">
            <div className="space-y-3 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary-50 border border-primary-100/80 text-primary text-xs font-semibold tracking-wider uppercase">
                <ScanEye className="w-3.5 h-3.5 text-accent" />
                Optical Excellence
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-primary">
                Advanced Eye Care & Testing
              </h2>
              <p className="font-body text-slate-600 text-base sm:text-lg leading-relaxed">
                From computerized eye checkups to custom progressive alignment, we ensure clear and comfortable vision.
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 items-stretch">
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

                    <h3 className="font-serif text-xl font-bold text-primary">
                      {svc.title}
                    </h3>

                    <p className="font-body text-slate-600 text-sm leading-relaxed">
                      {svc.desc}
                    </p>
                  </div>

                  <div className="pt-5 mt-5 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-xs text-slate-400 font-medium">In-Store Service</span>
                    <Link
                      to="/services"
                      className="font-heading font-semibold text-xs sm:text-sm text-primary group-hover:text-accent inline-flex items-center gap-1 transition-colors"
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

      {/* 5. Heritage & Eye Care Teaser (About Preview) */}
      <section className="py-12 sm:py-14 lg:py-16 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-primary-50/70 via-white to-amber-50/40 rounded-3xl p-8 sm:p-12 lg:p-14 border border-slate-200/90 shadow-soft">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
              {/* Left Content */}
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-primary-100 text-primary text-xs font-semibold tracking-wider uppercase shadow-2xs">
                  <Sparkles className="w-3.5 h-3.5 text-accent" />
                  Our Heritage in Rajahmundry
                </div>

                <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-primary leading-[1.18]">
                  Trusted Eye Care & Eyewear in Rajahmundry{business.claims.establishedYear ? ` Since ${business.claims.establishedYear}` : ''}
                </h2>

                <p className="font-body text-slate-600 text-base sm:text-lg leading-relaxed">
                  Located on JN Road in Gandhipuram, {business.name} offers computerized eye testing, prescription glasses and a wide range of eyewear. Visit our showroom to try frames and get your eyes tested.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
                  <div className="bg-white rounded-xl p-4 border border-slate-200/80 shadow-xs">
                    <div className="font-serif text-2xl sm:text-3xl font-bold text-primary flex items-center gap-1.5">
                      <Star className="w-5 h-5 fill-amber-400 text-amber-500 shrink-0" />
                      <span>{business.googleRating}</span>
                    </div>
                    <div className="font-body text-xs text-slate-500 font-medium mt-1">
                      Google Rating ({business.reviewCount} verified reviews)
                    </div>
                  </div>

                  {business.claims.yearsInBusiness != null && (
                    <div className="bg-white rounded-xl p-4 border border-slate-200/80 shadow-xs">
                      <div className="font-serif text-2xl sm:text-3xl font-bold text-primary">
                        {business.claims.yearsInBusiness}+
                      </div>
                      <div className="font-body text-xs text-slate-500 font-medium mt-1">
                        Years of Service
                      </div>
                    </div>
                  )}

                  {business.claims.happyEyes != null && (
                    <div className="bg-white rounded-xl p-4 border border-slate-200/80 shadow-xs">
                      <div className="font-serif text-2xl sm:text-3xl font-bold text-primary">
                        {business.claims.happyEyes}
                      </div>
                      <div className="font-body text-xs text-slate-500 font-medium mt-1">
                        Happy Eyes Fitted
                      </div>
                    </div>
                  )}
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
                    <span className="font-medium text-slate-800">
                      JN Road Dispensary & Showroom
                    </span>
                    {business.claims.establishedYear != null && (
                      <span className="text-amber-700 font-medium">Est. {business.claims.establishedYear}</span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Primary Action Banner: Visit Us & Book Consultation */}
      <section className="bg-primary text-white py-12 sm:py-14 lg:py-16 relative overflow-hidden">
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

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
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
