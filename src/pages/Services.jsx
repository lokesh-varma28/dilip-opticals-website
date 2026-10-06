import { Link } from 'react-router-dom'
import {
  ScanEye,
  Glasses,
  Droplets,
  Wrench,
  CheckCircle2,
  Calendar,
  ArrowRight,
  ShieldCheck,
  Sparkles,
  MessageCircle,
} from 'lucide-react'
import { useReveal } from '../hooks/useReveal'
import business from '../data/business'

function ServiceCard({ service, index }) {
  const { ref, style } = useReveal(index)
  const Icon = service.icon

  return (
    <div
      ref={ref}
      style={style}
      className="bg-white rounded-2xl p-7 sm:p-8 border border-slate-200/90 shadow-soft hover:shadow-card hover:-translate-y-1.5 active:scale-[0.98] transition-all duration-300 flex flex-col justify-between group"
    >
      <div className="space-y-5">
        <div className="flex items-center justify-between">
          <div className="w-14 h-14 rounded-xl bg-primary-50 text-primary group-hover:bg-primary group-hover:text-accent transition-colors flex items-center justify-center border border-primary-100 shadow-xs">
            <Icon className="w-7 h-7 text-primary group-hover:text-accent transition-colors" />
          </div>
          <span className="font-heading text-[10px] font-bold text-amber-800 uppercase tracking-wider bg-amber-50 px-2.5 py-1 rounded-md border border-amber-200/80">
            {service.badge}
          </span>
        </div>

        <div>
          <h3 className="font-heading text-xl font-bold text-primary group-hover:text-primary transition-colors">
            {service.title}
          </h3>
          <p className="font-body text-slate-600 text-sm leading-relaxed mt-2">
            {service.description}
          </p>
        </div>

        {/* Service Checklist */}
        <div className="pt-3 border-t border-slate-100 space-y-2">
          {service.benefits.map((benefit, i) => (
            <div key={i} className="flex items-start gap-2 text-xs text-slate-600">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span>{benefit}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
        <Link
          to="/contact"
          className="font-heading font-semibold text-xs text-primary group-hover:text-accent inline-flex items-center gap-1.5 transition-colors"
        >
          <span>Book Service</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>

        {/* Inquire link: navy text with green icon only */}
        <a
          href={`${business.whatsapp}?text=${encodeURIComponent(
            `Hi ${business.name}, I would like to inquire about ${service.title}.`
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-primary hover:text-accent font-medium inline-flex items-center gap-1.5 transition-colors"
        >
          <MessageCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
          <span>Inquire</span>
        </a>
      </div>
    </div>
  )
}

function StepCard({ step, index }) {
  const { ref, style } = useReveal(index)

  return (
    <div
      ref={ref}
      style={style}
      className="bg-white rounded-2xl p-5 sm:p-7 border border-slate-200/80 shadow-soft hover:shadow-card active:scale-[0.98] transition-all duration-300 relative space-y-4"
    >
      <div className="font-serif font-bold text-3xl sm:text-4xl text-accent/90 tracking-tight">
        {step.step}
      </div>
      <h3 className="font-serif text-lg font-bold text-primary">
        {step.title}
      </h3>
      <p className="font-body text-slate-600 text-xs sm:text-sm leading-relaxed">
        {step.description}
      </p>
    </div>
  )
}

export default function Services() {
  const allServices = [
    {
      id: 'eye-testing',
      icon: ScanEye,
      title: 'Computerized Eye Testing',
      badge: 'Digital Refraction',
      description:
        'Computerized auto-refraction and visual acuity checks to find your prescription.',
      benefits: [
        'Computerized auto-refractometer',
        'Pupillary distance measurement',
      ],
    },
    {
      id: 'prescription-glasses',
      icon: Glasses,
      title: 'Prescription Glasses',
      badge: 'Single & Progressive',
      description:
        'Prescription lenses fitted into the frame you choose.',
      benefits: [
        'Single vision and progressive options',
        'Frame fitting and lens edging',
      ],
    },
    {
      id: 'contact-lenses',
      icon: Droplets,
      title: 'Contact Lenses',
      badge: 'Daily & Monthly',
      description:
        'Contact lens fitting and lens care products.',
      benefits: [
        'Daily and monthly lenses',
      ],
    },
    {
      id: 'frame-maintenance',
      icon: Wrench,
      title: 'Frame Adjustment and Cleaning',
      badge: 'In-Store Service',
      description:
        'Frame alignment, nose pad changes and cleaning at our showroom.',
      benefits: [
        'Nose pad replacement and tightening',
        'Temple curvature and frame alignment',
      ],
    },
  ]

  const processSteps = [
    {
      step: '01',
      title: 'Warm Welcome & Visual History',
      description: 'We listen to your daily visual routine, screen habits, and any specific discomfort you experience.',
    },
    {
      step: '02',
      title: 'Computerized Refraction',
      description: 'Our digital auto-refractometers deliver accurate baseline readings, refined with trial frames.',
    },
    {
      step: '03',
      title: 'Frame Ergonomics & Styling',
      description: business.claims.inStoreStyles != null
        ? `Choose from ${business.claims.inStoreStyles} curated frames with guidance on bridge fit, weight distribution, and face harmony.`
        : 'Choose from our curated frames with guidance on bridge fit, weight distribution, and face harmony.',
    },
    {
      step: '04',
      title: 'Precision Fitting & Verification',
      description: 'We check the fit and comfort before you leave.',
    },
  ]

  return (
    <div className="space-y-0">
      {/* 1. Services Header */}
      <section className="bg-gradient-to-b from-primary-50/70 to-white py-12 md:py-16 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Mobile-only dispensary image card with thin gold border above text */}
          <div className="md:hidden mb-6">
            <div className="relative rounded-2xl overflow-hidden border border-[#D4A017]/40 shadow-soft aspect-[4/3] bg-slate-100">
              <img
                src={business.images.dispensary}
                alt={`${business.name} dispensary`}
                className="w-full h-full object-cover"
                width="400"
                height="300"
                loading="eager"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Heading and CTAs */}
            <div className="md:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary-50 border border-primary-100/80 text-primary text-xs font-semibold tracking-wider uppercase">
                <Sparkles className="w-3.5 h-3.5 text-accent" />
                Eye Testing & Optical Services
              </div>

              <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-primary tracking-tight leading-[1.15]">
                Dedicated Eye Care & Optical Services
              </h1>

              <p className="font-body text-slate-600 text-[15px] sm:text-lg leading-relaxed">
                {business.claims.yearsInBusiness != null
                  ? `Over ${business.claims.yearsInBusiness} years of computerized eye testing, prescription glasses and contact lenses in Rajahmundry.`
                  : 'Computerized eye testing, prescription glasses and contact lenses in Rajahmundry.'}
              </p>

              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
                <Link
                  to="/contact"
                  className="w-full sm:w-auto min-h-12 bg-accent hover:bg-accent-400 active:scale-[0.98] text-primary font-heading font-bold text-sm sm:text-base px-6 rounded-xl shadow-soft hover:shadow-card transition-all duration-200 inline-flex items-center justify-center gap-2 cursor-pointer text-center"
                >
                  <Calendar className="w-4 h-4 text-primary shrink-0" />
                  <span>Book an Eye Test</span>
                </Link>

                <a
                  href={business.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto min-h-12 border-2 border-primary text-primary hover:bg-primary-50 active:scale-[0.98] font-heading font-semibold text-sm sm:text-base px-6 rounded-xl transition-all duration-200 inline-flex items-center justify-center gap-2 text-center"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>WhatsApp Consultation</span>
                </a>
              </div>
            </div>

            {/* Desktop-only Right Column: Dispensary image card with thin gold border */}
            <div className="hidden md:block md:col-span-5">
              <div className="relative rounded-2xl overflow-hidden border border-[#D4A017]/40 shadow-soft aspect-[4/3] bg-slate-100 group">
                <img
                  src={business.images.dispensary}
                  alt={`${business.name} dispensary`}
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

      {/* 2. Comprehensive Services Grid */}
      <section className="py-12 md:py-16 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16 space-y-3">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-primary">
              Our Full Range of Optical Services
            </h2>
            <p className="font-body text-slate-600 text-sm sm:text-base leading-relaxed">
              Services available at our Rajahmundry showroom.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {allServices.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* 3. Care Pathway / 4 Steps */}
      <section className="py-12 md:py-16 bg-slate-50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16 space-y-3">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-primary">
              Our 4-Step Optical Process
            </h2>
            <p className="font-body text-slate-600 text-sm sm:text-base leading-relaxed">
              From auto-refraction check to final personalized lens verification.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, index) => (
              <StepCard key={step.step} step={step} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* 4. Commitment / Booking CTA */}
      <section className="bg-primary text-white py-12 sm:py-14 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-accent text-xs font-semibold tracking-wider uppercase">
            <ShieldCheck className="w-3.5 h-3.5 text-accent" />
            Book an Appointment
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            Schedule Your Eye Examination Today
          </h2>

          <p className="font-body text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Booking ahead helps us prepare your eye test slot and ensure minimal wait times at our Rajahmundry showroom.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 pt-2 max-w-md sm:max-w-none mx-auto">
            <Link
              to="/contact"
              className="w-full sm:w-auto min-h-12 bg-accent hover:bg-accent-400 active:scale-95 text-primary font-heading font-bold text-base px-8 rounded-xl shadow-soft hover:shadow-card transition-all duration-200 inline-flex items-center justify-center gap-2 cursor-pointer text-center"
            >
              <Calendar className="w-5 h-5 text-primary shrink-0" />
              <span>Book Appointment on JN Road</span>
            </Link>

            <Link
              to="/products"
              className="w-full sm:w-auto min-h-12 border-2 border-white/30 text-white hover:bg-white/10 font-heading font-semibold text-base px-6 rounded-xl transition-all duration-200 inline-flex items-center justify-center gap-2 text-center"
            >
              <span>Browse Eyewear Collections</span>
              <ArrowRight className="w-4 h-4 shrink-0" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
