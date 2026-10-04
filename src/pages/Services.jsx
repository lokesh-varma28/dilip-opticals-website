import { Link } from 'react-router-dom'
import {
  ScanEye,
  Glasses,
  Droplets,
  Wrench,
  Laptop,
  Heart,
  CheckCircle2,
  Calendar,
  ArrowRight,
  ShieldCheck,
  Clock,
  Sparkles,
  MessageCircle,
} from 'lucide-react'
import business from '../data/business'

export default function Services() {
  const allServices = [
    {
      id: 'eye-testing',
      icon: ScanEye,
      title: 'Computerized Eye Testing',
      badge: 'Digital Refraction',
      description:
        'Accurate digital auto-refraction and comprehensive visual acuity analysis to pinpoint sphere, cylinder, and axis powers with dependable accuracy.',
      benefits: [
        'Advanced Japanese Auto-Refractometer',
        'Subjective refinement with trial lenses',
        'Pupillary distance (PD) calibration',
        'Double-checked for prescription accuracy',
      ],
    },
    {
      id: 'prescription-glasses',
      icon: Glasses,
      title: 'Prescription Glasses & Custom Fitting',
      badge: 'Single & Progressive',
      description:
        'Crafted ophthalmic lenses paired with hand-selected designer frames, matched specifically to your facial anatomy and daily visual demands.',
      benefits: [
        'Single vision, bifocal & digital progressive options',
        'High-index ultra-thin lenses for high powers',
        'Scratch-resistant & anti-reflective coatings',
        'Custom beveling & laser edge finishing',
      ],
    },
    {
      id: 'blue-cut',
      icon: Laptop,
      title: 'Blue-Cut & Anti-Glare Digital Lenses',
      badge: 'Screen Protection',
      description:
        'Engineered to filter high-energy blue-violet light emitted by laptops, mobile phones, and artificial LED lighting, relieving digital eye strain.',
      benefits: [
        'Reduces eye fatigue & dry eye discomfort',
        'Anti-reflective coating for crisp night driving',
        'UV400 full ultraviolet spectrum protection',
        'Easy-to-clean hydrophobic & oleophobic surface',
      ],
    },
    {
      id: 'contact-lenses',
      icon: Droplets,
      title: 'Contact Lenses & Care Solutions',
      badge: 'Daily & Monthly',
      description:
        'Expert contact lens fitting for spherical, astigmatic (toric), and cosmetic needs using breathable, high-oxygen hydrogel lenses.',
      benefits: [
        'Daily disposable and monthly replacement modalities',
        'Trial lenses & hygiene guidance for first-time wearers',
        'Leading brands including Bausch + Lomb',
        'Sterile multi-purpose contact lens solutions in stock',
      ],
    },
    {
      id: 'frame-maintenance',
      icon: Wrench,
      title: 'Frame Realignment & Ultrasonic Cleaning',
      badge: 'Complimentary In-Store',
      description:
        'Keep your favorite glasses feeling brand new. Bring your frames into our Rajahmundry store anytime for complimentary precision maintenance.',
      benefits: [
        'Ultrasonic deep sanitizing & grime removal',
        'Nose pad replacements & screw tightening',
        'Temple curvature alignment & ear-contour balancing',
        'Always free for our customers',
      ],
    },
    {
      id: 'senior-pediatric',
      icon: Heart,
      title: 'Senior & Pediatric Vision Consultations',
      badge: 'Family Focused',
      description:
        'Specialized optical dispensing tailored for growing children needing flexible, shatter-resistant eyewear and seniors transitioning to progressives.',
      benefits: [
        'Shatterproof TR90 flexible frames for kids',
        'Comfort-focused progressive corridor calibration',
        'Patient, unhurried trial sessions for elderly clients',
        'Clear guidance on adapting to new prescriptions',
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
      description: 'Lenses are laser-fitted on-site. We inspect optical centers and ensure a snug, comfortable fit before you leave.',
    },
  ]

  return (
    <div className="space-y-0">
      {/* 1. Services Header */}
      <section className="bg-gradient-to-b from-primary-50/70 to-white py-12 sm:py-14 lg:py-16 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary-50 border border-primary-100/80 text-primary text-xs font-semibold tracking-wider uppercase">
              <Sparkles className="w-3.5 h-3.5 text-accent" />
              Eye Testing & Optical Services
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-extrabold text-primary tracking-tight leading-[1.12]">
              Dedicated Eye Care & Optical Services
            </h1>

            <p className="font-body text-slate-600 text-lg sm:text-xl leading-relaxed">
              {business.claims.yearsInBusiness != null
                ? `Over ${business.claims.yearsInBusiness} years of computerized eye testing, prescription glasses and contact lenses in Rajahmundry.`
                : 'Computerized eye testing, prescription glasses and contact lenses in Rajahmundry.'}
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Link
                to="/contact"
                className="bg-accent hover:bg-accent-400 active:scale-95 text-primary font-heading font-bold text-sm sm:text-base py-3 px-6 rounded-xl shadow-soft hover:shadow-card transition-all duration-200 inline-flex items-center gap-2 cursor-pointer"
              >
                <Calendar className="w-4 h-4 text-primary" />
                <span>Book an Eye Test</span>
              </Link>

              <a
                href={business.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-primary text-primary hover:bg-primary-50 font-heading font-semibold text-sm sm:text-base py-2.5 px-6 rounded-xl transition-all duration-200 inline-flex items-center gap-2"
              >
                <MessageCircle className="w-4 h-4 text-emerald-600" />
                <span>WhatsApp Consultation</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Comprehensive Services Grid */}
      <section className="py-12 sm:py-14 lg:py-16 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16 space-y-3">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-primary">
              Our Full Range of Optical Services
            </h2>
            <p className="font-body text-slate-600 text-sm sm:text-base leading-relaxed">
              Each service is performed in-house at our Rajahmundry showroom using certified equipment and experienced optical technicians.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allServices.map((service) => {
              const Icon = service.icon
              return (
                <div
                  key={service.id}
                  className="bg-white rounded-2xl p-7 sm:p-8 border border-slate-200/90 shadow-soft hover:shadow-card hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group"
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

                    <a
                      href={`${business.whatsapp}?text=${encodeURIComponent(
                        `Hi ${business.name}, I would like to inquire about ${service.title}.`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-emerald-700 hover:underline font-medium inline-flex items-center gap-1"
                    >
                      <MessageCircle className="w-3 h-3 text-emerald-600" />
                      Inquire
                    </a>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* 3. The 4-Step Optical Examination Process */}
      <section className="py-12 sm:py-14 lg:py-16 bg-slate-50/70 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16 space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary-50 border border-primary-100/80 text-primary text-xs font-semibold tracking-wider uppercase">
              <Clock className="w-3.5 h-3.5 text-accent" />
              Patient Experience
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-primary">
              Your Eye Examination Journey
            </h2>
            <p className="font-body text-slate-600 text-sm sm:text-base leading-relaxed">
              We take the guesswork out of eye care with a structured, transparent 4-step workflow.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {processSteps.map((step) => (
              <div
                key={step.step}
                className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/80 shadow-soft hover:shadow-card transition-all duration-300 relative space-y-4"
              >
                <div className="font-heading font-black text-3xl text-accent/80 tracking-tighter">
                  {step.step}
                </div>
                <h3 className="font-serif text-lg font-bold text-primary">
                  {step.title}
                </h3>
                <p className="font-body text-slate-600 text-xs sm:text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Commitment / Booking CTA */}
      <section className="bg-primary text-white py-12 sm:py-14 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-accent text-xs font-semibold tracking-wider uppercase">
            <ShieldCheck className="w-3.5 h-3.5 text-accent" />
            Walk-ins & Appointments Welcome
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            Schedule Your Eye Examination Today
          </h2>

          <p className="font-body text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Booking ahead helps us prepare your eye test slot and ensure minimal wait times at our Rajahmundry showroom.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Link
              to="/contact"
              className="bg-accent hover:bg-accent-400 active:scale-95 text-primary font-heading font-bold text-base py-3.5 px-8 rounded-xl shadow-soft hover:shadow-card transition-all duration-200 inline-flex items-center gap-2 cursor-pointer"
            >
              <Calendar className="w-5 h-5 text-primary" />
              <span>Book Appointment on JN Road</span>
            </Link>

            <Link
              to="/products"
              className="border-2 border-white/30 text-white hover:bg-white/10 font-heading font-semibold text-base py-3 px-6 rounded-xl transition-all duration-200 inline-flex items-center gap-2"
            >
              <span>Browse Eyewear Collections</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
